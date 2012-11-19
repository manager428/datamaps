require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.max");suite.addBatch({max:{topic:function(){return d3.max},"returns the greatest numeric value for numbers":function(e){assert.equal(e([1]),1),assert.equal(e([5,1,2,3,4]),5),assert.equal(e([20,3]),20),assert.equal(e([3,20]),20)},"returns the greatest lexicographic value for strings":function(e){assert.equal(e(["c","a","b"]),"c"),assert.equal(e(["20","3"]),"3"),assert.equal(e(["3","20"]),"3")},"ignores null, undefined and NaN":function(e){assert.equal(e([NaN,1,2,3,4,5]),5),assert.equal(e([1,2,3,4,5,NaN]),5),assert.equal(e([10,null,3,undefined,5,NaN]),10),assert.equal(e([-1,null,-3,undefined,-5,NaN]),-1)},"compares heterogenous types as numbers":function(e){assert.strictEqual(e([20,"3"]),20),assert.strictEqual(e(["20",3]),"20"),assert.strictEqual(e([3,"20"]),"20"),assert.strictEqual(e(["3",20]),20)},"returns undefined for empty array":function(e){assert.isUndefined(e([])),assert.isUndefined(e([null])),assert.isUndefined(e([undefined])),assert.isUndefined(e([NaN])),assert.isUndefined(e([NaN,NaN]))},"applies the optional accessor function":function(e){assert.equal(d3.max([[1,2,3,4,5],[2,4,6,8,10]],function(e){return d3.min(e)}),2),assert.equal(d3.max([1,2,3,4,5],function(e,t){return t}),4)}}}),suite.export(module)