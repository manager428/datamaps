require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.rebind");suite.addBatch({rebind:{topic:function(){return d3.rebind},"bound function uses source as context":function(e){var t={},n={foo:function(){r=this}},r;e(t,n,"foo"),assert.strictEqual((t.foo(),r),n),assert.strictEqual((t.foo.call({}),r),n)},"bound function receives any arguments":function(e){var t={},n={foo:function(){r=Array.prototype.slice.call(arguments)}},r;e(t,n,"foo"),assert.deepEqual((t.foo(),r),[]),assert.deepEqual((t.foo(1),r),[1]),assert.deepEqual((t.foo(null),r),[null]),assert.deepEqual((t.foo(n,n,1),r),[n,n,1])},"bound function returns object if arguments":function(e){var t={},n={foo:function(){}};e(t,n,"foo"),assert.strictEqual(t.foo(1),t),assert.strictEqual(t.foo(1,2,3),t)},"bound function returns return value if no arguments":function(e){var t={},n={foo:function(){return r}},r={};e(t,n,"foo"),assert.strictEqual(t.foo(),r)},"can bind multiple methods":function(e){var t={},n={foo:function(){return 1},bar:function(){return 2}};e(t,n,"foo","bar"),assert.strictEqual(t.foo(),1),assert.strictEqual(t.bar(),2)},"returns the target object":function(e){var t={},n={foo:function(){return r}},r={};assert.strictEqual(e(t,n,"foo"),t)}}}),suite.export(module)