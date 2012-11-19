require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.each");suite.addBatch({"select(body)":{topic:function(){return d3.select("body").html("")},"calls the function once per element":function(e){var t=0;e.each(function(){++t}),assert.equal(t,1)},"passes the data and index to the function":function(e){var t=new Object,n,r;e.data([t]).each(function(e,t){n=e,r=t}),assert.isTrue(n===t),assert.isTrue(r===0)},"uses the node as the context":function(e){var t;e.each(function(){t=this}),assert.isTrue(t===document.body)},"returns the same selection":function(e){assert.isTrue(e.each(function(){})===e)},"ignores null nodes":function(){var e=0,t=d3.select("body");t[0][0]=null,t.each(function(){++e}),assert.equal(e,0)},"returns the current selection":function(e){assert.isTrue(e.each(function(){})===e)}}}),suite.addBatch({"selectAll(div)":{topic:function(){return d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().append("div")},"calls the function once per element":function(e){var t=0;e.each(function(){++t}),assert.equal(t,2)},"passes the data and index to the function":function(e){var t=[new Object,new Object],n=[],r=[];e.data(t).each(function(e,t){n.push(e),r.push(t)}),assert.deepEqual(n,t),assert.deepEqual(r,[0,1])},"uses the node as the context":function(e){var t=[];e.each(function(){t.push(this)}),assert.equal(t.length,2),assert.isTrue(e[0][0]==t[0]),assert.isTrue(e[0][1]==t[1])},"returns the same selection":function(e){assert.isTrue(e.each(function(){})===e)},"ignores null nodes":function(e){var t=0,n=d3.selectAll("div");n[0][0]=null,n.each(function(){++t}),assert.equal(t,1)},"returns the current selection":function(e){assert.isTrue(e.each(function(){})===e)}}}),suite.export(module)