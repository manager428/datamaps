define(["require","exports","module","test","bogus"],function(e,t,n){var r=e("test");try{e("bogus"),r.print("FAIL require throws error when module missing","fail")}catch(i){r.print("PASS require throws error when module missing","pass")}r.print("DONE","info")})