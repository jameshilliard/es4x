/*
 * Copyright 2018 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */
package io.reactiverse.es4x.impl.graal;

import io.reactiverse.es4x.Loader;
import io.vertx.core.Vertx;
import io.vertx.core.file.FileSystem;
import io.vertx.core.json.JsonObject;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.Value;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;

public class GraalLoader implements Loader<Value> {

  private static final String EVENTBUS_JSOBJECT_AOT_CLASS;

  static {
    // if this code is used in a native image avoid the reflection guess game
    // and hard code the expected class to be a PolyglotMap
    if (System.getProperty("org.graalvm.nativeimage.imagecode") != null) {
      EVENTBUS_JSOBJECT_AOT_CLASS = "com.oracle.truffle.polyglot.PolyglotMap";
    } else {
      EVENTBUS_JSOBJECT_AOT_CLASS = null;
    }
  }

  private final Context context;
  private final Value bindings;
  private final FileSystem fs;


  public GraalLoader(final Vertx vertx) {
    this(
      vertx,
      // create the default context
      Context
        .newBuilder("js")
        .allowHostAccess(true)
        .allowCreateThread(true)
        .build()
    );
  }

  public GraalLoader(final Vertx vertx, Context context) {

    this.context = context;
    this.bindings = this.context.getBindings("js");
    this.fs = vertx.fileSystem();

    // remove the exit and quit functions
    bindings.removeMember("exit");
    bindings.removeMember("quit");
    // add vertx as a global
    bindings.putMember("vertx", vertx);

    final AtomicReference<Class<?>> holder = new AtomicReference<>();

    // This is not used until graal native images / ES4X support passing object from Java to JS
    if (EVENTBUS_JSOBJECT_AOT_CLASS == null) {
      final Consumer callback = value -> holder.set(value.getClass());
      try {
        context.eval(
          Source.newBuilder("js", "(function (fn) { fn({}); })", "<class-lookup>").internal(true).build()
        ).execute(callback);
      } catch (IOException e) {
        throw new RuntimeException(e);
      }
    } else {
      try {
        holder.set(Class.forName(EVENTBUS_JSOBJECT_AOT_CLASS));
      } catch (ClassNotFoundException e) {
        throw new RuntimeException(e);
      }
    }

    // register a default codec to allow JSON messages directly from GraalVM to the JVM world
    vertx.eventBus()
      .unregisterDefaultCodec(holder.get())
      .registerDefaultCodec(holder.get(), new JSObjectMessageCodec<>(bindings.getMember("JSON")));

    // add polyfills
    try {
      load("io/reactiverse/es4x/polyfill/json.js");
      load("io/reactiverse/es4x/polyfill/global.js");
      load("io/reactiverse/es4x/polyfill/date.js");
      load("io/reactiverse/es4x/polyfill/console.js");
      load("io/reactiverse/es4x/polyfill/promise.js");
      load("io/reactiverse/es4x/polyfill/worker.js");
      // install the commonjs loader
      load("io/reactiverse/es4x/jvm-npm.js");
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  @Override
  public String name() {
    return "GraalVM";
  }

  @Override
  public void config(final JsonObject config) {
    if (config != null) {
      // add config as a global
      bindings.putMember("config", config.getMap());
    }
  }

  @Override
  public Value require(String main) {
    return bindings.getMember("require").execute(main);
  }

  @Override
  public Value main(String main) {
    // patch the main path to be a relative path
    if (!main.startsWith("./") && !main.startsWith("/")) {
      main = "./" + main;
    }
    // invoke the main script
    return require(main);
  }

  @Override
  public Value eval(String script) {
    return context.eval("js", script);
  }

  @Override
  public boolean hasMember(Value object, String key) {
    if (object != null) {
      return object.hasMember(key);
    }
    return false;
  }

  @Override
  public Value invokeMethod(Value thiz, String method, Object... args) {
    Value fn = thiz.getMember(method);
    if (fn != null && !fn.isNull()) {
      return fn.execute(args);
    }
    return null;
  }

  @Override
  public Value invokeFunction(String function, Object... args) {
    return context.eval("js", function).execute(args);
  }

  @Override
  public void put(String name, Object value) {
    bindings.putMember(name, value);
  }

  @Override
  public void close() {
    context.close();
  }

  @Override
  public void enter() {
    context.enter();
  }

  @Override
  public void leave() {
    context.leave();
  }

  public Engine getEngine() {
    return context.getEngine();
  }

  public Value eval(Source source) {
    return context.eval(source);
  }

  private void load(String filename) throws IOException {
    context.eval(Source.newBuilder("js", fs.readFileBlocking(filename).toString(), filename).build());
  }
}
