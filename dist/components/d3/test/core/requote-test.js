require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.requote");suite.addBatch({requote:{topic:function(){return d3.requote},"quotes backslashes":function(e){assert.equal(e("\\"),"\\\\")},"quotes carets":function(e){assert.equal(e("^"),"\\^")},"quotes dollar signs":function(e){assert.equal(e("$"),"\\$")},"quotes stars":function(e){assert.equal(e("*"),"\\*")},"quotes plusses":function(e){assert.equal(e("+"),"\\+")},"quotes question marks":function(e){assert.equal(e("?"),"\\?")},"quotes periods":function(e){assert.equal(e("."),"\\.")},"quotes parentheses":function(e){assert.equal(e("("),"\\("),assert.equal(e(")"),"\\)")},"quotes pipes":function(e){assert.equal(e("|"),"\\|")},"quotes curly braces":function(e){assert.equal(e("{"),"\\{"),assert.equal(e("}"),"\\}")},"quotes square brackets":function(e){assert.equal(e("["),"\\["),assert.equal(e("]"),"\\]")}}}),suite.export(module)