require("../env");var assert=require("assert");module.exports={topic:function(){return d3.select("body").append("div").transition().delay(100).duration(150).ease("bounce")},"inherits the delay":function(e){var t=e.transition();assert.equal(t[0][0].delay,100)},"inherits the duration":function(e){var t=e.transition();assert.equal(t[0][0].duration,150)},"inherits easing":function(e){},"inherits the transition id":function(e){var t=e.transition();assert.equal(t.id,e.id)},"while transitioning":{topic:function(e){var t=e.transition(),n=this.callback;t.each("start",function(){d3.timer(function(){return n(null,t),!0})})},"increments the lock's reference count":function(e){assert.isTrue(e[0][0].node.__transition__.count>1)}},"after transitioning":{topic:function(e){var t=this.callback;e.each("end",function(){d3.timer(function(){return t(null,e),!0},50)})},"decrements the lock's reference count":function(e){assert.isFalse("__transition__"in e[0][0].node)}}}