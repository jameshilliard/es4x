(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{406:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"graalvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graalvm"}},[a._v("#")]),a._v(" GraalVM")]),a._v(" "),s("p",[a._v("Το ES4X χρησιμοποιεί GraalVM, ωστόσο, ο ίδιος κωδικός θα τρέξει είτε σε "),s("strong",[a._v("interpreted")]),a._v(" mode σε Java 8, 9, 10 ή OpenJ9.")]),a._v(" "),s("p",[a._v("Για JDK >= 11 (με υποστήριξη για JVMCI) ή GraalVM ES4X τρέχει σε "),s("strong",[a._v("compiled")]),a._v(" mode.")]),a._v(" "),s("p",[a._v("::: υπόδειξη\nΧρησιμοποιήστε Java >= 11 ή GraalVM.\n:::")]),a._v(" "),s("p",[a._v("Υπάρχουν οφέλη από τη χρήση του GraalJS, δηλαδή την ενημερωμένη υποστήριξη γλώσσας >= ES6 και την υποστήριξη για generators,\npromises, etc....")]),a._v(" "),s("h2",{attrs:{id:"διαφορες-με-nashorn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#διαφορες-με-nashorn"}},[a._v("#")]),a._v(" Διαφορές με Nashorn")]),a._v(" "),s("p",[a._v("Σε αντίθεση με το "),s("code",[a._v("Nashorn")]),a._v(", το "),s("code",[a._v("GraalJS")]),a._v(" "),s("em",[a._v("java")]),a._v(" ενδιάμεσο ακολουθεί το "),s("strong",[a._v("ακριβές")]),a._v(" class/method όνομα από την Java. Για παράδειγμα, η χρήση των\nονομάτων των ιδιοτήτων για να αναφερθούν σε getters  και setters, πρέπει να χρησιμοποιούν τους "),s("em",[a._v("getter")]),a._v(" και "),s("em",[a._v("setter")]),a._v(". Για παράδειγμα:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Όταν χρησιμοποιείτε αυτό το αντικείμενο Java από το Graal, αυτό δεν θα λειτουργήσει:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// get the name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// FAIL")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// set the name")]),a._v("\nhello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Paulo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// FAIL")]),a._v("\n")])])]),s("p",[a._v("Αυτό δεν ισχύει σε Graal και πρέπει να είναι:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// πάρτε το όνομα")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ορίστε το όνομα")]),a._v("\nhello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Paulo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"threading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threading"}},[a._v("#")]),a._v(" Threading")]),a._v(" "),s("p",[a._v("ο GraalJS είναι πολύ αυστηρό με μόνο ένα thread στο πλαίσιο JS κάθε φορά. Όταν εργάζεστε μόνο με ασύγχρονα API Vert.x, αυτό δεν θα είναι πρόβλημα. Ωστόσο, άλλες βιβλιοθήκες μπορεί να προκαλέσουν προβλήματα. Για να αποφύγετε αυτόν τον περιορισμό, συνιστάται να χρησιμοποιήσετε το API "),s("code",[a._v("Worker")]),a._v(" ή το "),s("code",[a._v("EventBus")]),a._v(".")]),a._v(" "),s("p",[a._v("::: προειδοποίηση\nΤο GraalJS δεν επιτρέπει την πρόσβαση πολλαπλών threads στο ίδιο περιβάλλον σεναρίου. Εάν υπάρχει ανάγκη να δουλέψετε με πολλά thread, τότε σκεφτείτε να κοιτάξετε το "),s("a",{attrs:{href:"./worker"}},[a._v("Worker API")]),a._v(".\n:::")]),a._v(" "),s("h2",{attrs:{id:"εγγενεις-εικονες"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#εγγενεις-εικονες"}},[a._v("#")]),a._v(" Εγγενείς εικόνες")]),a._v(" "),s("p",[a._v("Προς το παρόν δεν μπορείτε να δημιουργήσετε εγγενείς εικόνες με ES4X, ο περιορισμός είναι επειδή η στατική ανάλυση του μεταγλωττιστή AOT δεν θα λάβει υπόψη τον κώδικα java που επικαλέστηκε από το σενάριο (οπότε οι classes δεν θα είναι διαθέσιμες), καθώς και το γεγονός ότι ο compiler δεν έχει υποστήριξη για jvm interop στο χρόνο εκτέλεσης.")]),a._v(" "),s("p",[a._v("Υπάρχουν εργασίες σε εξέλιξη σε αυτόν τον τομέα, οπότε μπορεί να είναι δυνατή στο μέλλον.")])])}),[],!1,null,null,null);t.default=e.exports}}]);