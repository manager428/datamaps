define("a",[],{}),define("text!template.html",[],function(){return"TEXT"}),define("b",["text!template.html"],function(e){return"b "+e}),define("c",["text!template.html"],function(e){return"c "+e}),require(["a"],function(e){require({paths:{text:"../../../text/text"}},["b","c"],function(e,t){doh.register("issue379",[function(r){r.is("b TEXT",e),r.is("c TEXT",t)}]),doh.run()})})