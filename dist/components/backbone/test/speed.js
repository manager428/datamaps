(function(){var e={};_.extend(e,Backbone.Events);var t=function(){};JSLitmus.test("Events: bind + unbind",function(){e.bind("event",t),e.unbind("event",t)}),e.bind("test:trigger",t),JSLitmus.test("Events: trigger",function(){e.trigger("test:trigger")}),e.bind("test:trigger2",t),e.bind("test:trigger2",t),JSLitmus.test("Events: trigger 2, passing 5 args",function(){e.trigger("test:trigger2",1,2,3,4,5)});var n=new Backbone.Model;JSLitmus.test("Model: set Math.random()",function(){n.set({number:Math.random()})});var r=new Backbone.Model;r.bind("change",t),JSLitmus.test("Model: set rand() with an event",function(){r.set({number:Math.random()})});var i=new Backbone.Model;i.bind("change:number",t),JSLitmus.test("Model: set rand() with an attribute observer",function(){i.set({number:Math.random()})})})()