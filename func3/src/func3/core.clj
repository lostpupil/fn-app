(ns func3.core
  (:gen-class))

; name = "World";
; fs = require('fs');
; try {
;   input = fs.readFileSync('/dev/stdin').toString();
;   if (input) {
;     name = input;
;   }
; } catch(e) {}
; console.log("Hello", name, "from Node!");

;; Read user input from stdin
(defn -main []
  "I don't do a whole lot."
  (println "Hello, World!"))
