require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.functor");suite.addBatch({functor:{topic:function(){return d3.functor},"when passed a function, returns the function":function(e){function t(){}assert.strictEqual(e(t),t)},"when passed a non-function, returns a wrapper function":function(e){var t={};assert.isNull(e(null)()),assert.isUndefined(e(undefined)()),assert.strictEqual(e(t)(),t),assert.strictEqual(e(1)(),1),assert.deepEqual(e([1])(),[1])}}}),suite.export(module)