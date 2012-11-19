require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.svg.axis");suite.addBatch({axis:{topic:function(){return d3.svg.axis},scale:{"defaults to a linear scale":function(e){var t=e(),n=t.scale();assert.deepEqual(n.domain(),[0,1]),assert.deepEqual(n.range(),[0,1]),assert.equal(n(.5),.5)},"can be defined as a scale object":function(e){var t=d3.scale.linear(),n=e().scale(t);assert.equal(n.scale(),t)},"can be a polylinear scale":function(e){var t=e().scale(d3.scale.linear().domain([0,1,10]).range([2,20,200])),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("path");assert.equal(r.attr("d"),"M2,6V0H200V6")},"can be an ordinal scale":function(e){var t=e().scale(d3.scale.ordinal().domain(["A","B","C"]).rangeBands([10,90])),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("path");assert.equal(r.attr("d"),"M10,6V0H90V6")},"can be an ordinal scale with explicit range":function(e){var t=e().scale(d3.scale.ordinal().domain(["A","B","C"]).range([10,50,90])),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("path");assert.equal(r.attr("d"),"M10,6V0H90V6")}},orient:{"defaults to bottom":function(e){var t=e();assert.equal(t.orient(),"bottom")},"supports top orientation":function(e){var t=e().orient("top"),n=d3.select("body").html("").append("svg:g").call(t),r=n.select("g:nth-child(3)"),i=r.select("text"),s=r.select("line"),o=n.select("path.domain");assert.equal(r.attr("transform"),"translate(0.2,0)"),assert.equal(i.attr("y"),-9),assert.equal(i.attr("dy"),"0em"),assert.equal(i.attr("text-anchor"),"middle"),assert.equal(i.text(),"0.2"),assert.equal(s.attr("y2"),-6),assert.equal(o.attr("d"),"M0,-6V0H1V-6")},"supports right orientation":function(e){var t=e().orient("right"),n=d3.select("body").html("").append("svg:g").call(t),r=n.select("g:nth-child(3)"),i=r.select("text"),s=r.select("line"),o=n.select("path.domain");assert.equal(r.attr("transform"),"translate(0,0.2)"),assert.equal(i.attr("x"),9),assert.equal(i.attr("dy"),".32em"),assert.equal(i.attr("text-anchor"),"start"),assert.equal(i.text(),"0.2"),assert.equal(s.attr("x2"),6),assert.equal(o.attr("d"),"M6,0H0V1H6")},"supports bottom orientation":function(e){var t=e().orient("bottom"),n=d3.select("body").html("").append("svg:g").call(t),r=n.select("g:nth-child(3)"),i=r.select("text"),s=r.select("line"),o=n.select("path.domain");assert.equal(r.attr("transform"),"translate(0.2,0)"),assert.equal(i.attr("y"),9),assert.equal(i.attr("dy"),".71em"),assert.equal(i.attr("text-anchor"),"middle"),assert.equal(i.text(),"0.2"),assert.equal(s.attr("y2"),6),assert.equal(o.attr("d"),"M0,6V0H1V6")},"supports left orientation":function(e){var t=e().orient("left"),n=d3.select("body").html("").append("svg:g").call(t),r=n.select("g:nth-child(3)"),i=r.select("text"),s=r.select("line"),o=n.select("path.domain");assert.equal(r.attr("transform"),"translate(0,0.2)"),assert.equal(i.attr("x"),-9),assert.equal(i.attr("dy"),".32em"),assert.equal(i.attr("text-anchor"),"end"),assert.equal(i.text(),"0.2"),assert.equal(s.attr("x2"),-6),assert.equal(o.attr("d"),"M-6,0H0V1H-6")}},tickSize:{"defaults to six pixels":function(e){var t=e();assert.equal(t.tickSize(),6)},"can be defined as a number":function(e){var t=e().tickSize(3);assert.equal(t.tickSize(),3)},"coerces input value to a number":function(e){var t=e().tickSize("3");assert.strictEqual(t.tickSize(),3)},"affects the generated domain path":function(e){var t=e().tickSize(3),n=d3.select("body").html("").append("svg:g").call(t),r=n.select("path.domain");assert.equal(r.attr("d"),"M0,3V0H1V3")},"affects the generated tick lines":function(e){var t=e().tickSize(3),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g line");r.each(function(){assert.equal(d3.select(this).attr("y2"),3)})},"if negative, labels are placed on the opposite end":function(e){var t=e().tickSize(-80),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g line"),i=n.selectAll("g text");r.each(function(){assert.equal(d3.select(this).attr("y2"),-80)}),i.each(function(){assert.equal(d3.select(this).attr("y"),3)})},"with two arguments, specifies end tick size":function(e){var t=e().tickSize(6,3),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("path");assert.equal(r.attr("d"),"M0,3V0H1V3")},"with three arguments, specifies end and minor tick sizes":function(e){var t=e().tickSubdivide(3).tickSize(6,3,9),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("path"),i=n.select(".minor");assert.equal(r.attr("d"),"M0,9V0H1V9"),assert.equal(i.attr("y2"),"3")}},tickPadding:{"defaults to three pixels":function(e){var t=e();assert.equal(t.tickPadding(),3)},"can be defined as a number":function(e){var t=e().tickPadding(6);assert.equal(t.tickPadding(),6)},"coerces input value to a number":function(e){var t=e().tickPadding("6");assert.strictEqual(t.tickPadding(),6)},"affects the generated tick labels":function(e){var t=e().tickSize(2).tickPadding(7),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g text");r.each(function(){assert.equal(d3.select(this).attr("y"),9)})}},ticks:{"defaults to [10]":function(e){var t=e();assert.deepEqual(t.ticks(),[10])},"can be defined as any arguments":function(e){var t={},n=e().ticks(t,42),r=n.ticks();assert.equal(r[0],t),assert.equal(r[1],42),assert.equal(r.length,2)},"passes any arguments to the scale's ticks function":function(e){var t=d3.scale.linear(),n={},r=e().ticks(n,42).scale(t),i=[],s=d3.select("body").html("").append("svg:g");t.ticks=function(){return i.push(arguments),[42]},s.call(r),assert.equal(i.length,1),assert.equal(i[0].length,2),assert.equal(i[0][0],n),assert.equal(i[0][1],42)},"passes any arguments to the scale's tickFormat function":function(e){var t={},n=d3.scale.linear(),r=e().scale(n).ticks(t,42),i=d3.select("body").html("").append("svg:g"),s=[];n.tickFormat=function(){return s.push(arguments),String},i.call(r),assert.equal(s.length,1),assert.equal(s[0].length,2),assert.equal(s[0][0],t),assert.equal(s[0][1],42)},"affects the generated ticks":function(e){var t=e().ticks(20),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g");assert.equal(r[0].length,21)}},tickValues:{"defaults to null":function(e){var t=e().tickValues();assert.isNull(t)},"can be given as array of positions":function(e){var t=[1,2.5,3],n=e().tickValues(t),r=n.tickValues();assert.equal(r,t),assert.equal(r.length,3)},"does not change the tick arguments":function(e){var t={},n=e().ticks(t,42).tickValues([10]),r=n.ticks();assert.equal(r[0],t),assert.equal(r[1],42),assert.equal(r.length,2)},"does not change the arguments passed to the scale's tickFormat function":function(e){var t=d3.scale.linear(),n=e().scale(t).ticks(10).tickValues([1,2,3]),r=d3.select("body").html("").append("svg:g"),i=[];t.tickFormat=function(){return i.push(arguments),String},r.call(n),assert.equal(i.length,1),assert.equal(i[0].length,1),assert.equal(i[0][0],10)},"affects the generated ticks":function(e){var t=e().ticks(20),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g");assert.equal(r[0].length,21)}},tickSubdivide:{"defaults to zero":function(e){var t=e();assert.equal(t.tickSubdivide(),0)},"coerces input value to a number":function(e){var t=e().tickSubdivide(!0);assert.strictEqual(t.tickSubdivide(),1)},"does not generate minor ticks when zero":function(e){var t=d3.select("body").html("").append("svg:g").call(e());assert.isTrue(t.selectAll(".minor").empty())},"affects the generated minor ticks":function(e){var t=e().tickSubdivide(3),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("line.tick.minor");assert.equal(r[0].length,30),assert.equal(r[0][1].getAttribute("transform"),"translate(0.05,0)")}},tickFormat:{"defaults to null":function(e){var t=e();assert.isTrue(t.tickFormat()==null)},"when null, uses the scale's tick format":function(e){var t=d3.scale.linear(),n=e().scale(t),r=d3.select("body").html("").append("svg:g");t.tickFormat=function(){return function(e){return"foo-"+e}},r.call(n);var i=r.selectAll("g text");assert.equal(i.text(),"foo-0")},"affects the generated tick labels":function(e){var t=e().tickFormat(d3.format("+.2%")),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g text");assert.equal(r.text(),"+0.00%")},"can be set to a constant":function(e){var t=e().tickFormat("I'm a tick!"),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g text");assert.equal(r.text(),"I'm a tick!")},"can be set to a falsey constant":function(e){var t=e().tickFormat(""),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("g text");assert.equal(r.text(),"")}},enter:{"generates a new domain path":function(e){var t=e(),n=d3.select("body").html("").append("svg:g").call(t),r=n.selectAll("path.domain");assert.equal(r[0].length,1),assert.equal(r.attr("d"),"M0,6V0H1V6"),assert.isNull(r.node().nextSibling)},"generates new tick marks with labels":function(e){var t=e(),n=d3.select("body").html("").append("svg:g").call(t),r=d3.scale.linear(),i=n.selectAll("g"),s=r.ticks(10),o=r.tickFormat(10);assert.equal(i[0].length,s.length),i.each(function(e,t){var n=d3.select(this);assert.isFalse(n.select("line").empty()),assert.isFalse(n.select("text").empty()),assert.equal(n.select("text").text(),o(s[t]))})}},update:{"updates the domain path":function(e){var t=e(),n=d3.select("body").html("").append("svg:g").call(t);t.scale().domain([0,2]).range([1,2]),t.tickSize(3),n.call(t);var r=n.selectAll("path.domain");assert.equal(r[0].length,1),assert.equal(r.attr("d"),"M1,3V0H2V3"),assert.domEqual(r.node().nextSibling,null)},"enters, exits and updates tick marks":function(e){var t=e(),n=d3.select("body").html("").append("svg:g").call(t),r=d3.scale.linear().domain([1,1.5]);t.scale().domain(r.domain()),t.tickSize(3).tickPadding(9),n.call(t);var i=n.selectAll("g"),s=r.ticks(10),o=r.tickFormat(10);assert.equal(i[0].length,s.length),i.each(function(e,t){var n=d3.select(this);assert.isFalse(n.select("line").empty()),assert.isFalse(n.select("text").empty()),assert.equal(n.select("text").text(),o(s[t]))})}}}}),suite.export(module)