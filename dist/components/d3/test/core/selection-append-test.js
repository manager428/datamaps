require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.append");suite.addBatch({"select(body)":{topic:function(){return d3.select("body").html("")},"appends an HTML element":function(e){var t=e.append("div");assert.equal(t[0][0].tagName,"DIV"),assert.isNull(t[0][0].namespaceURI),assert.isTrue(t[0][0].parentNode===document.body),assert.isTrue(t[0][0]===document.body.lastChild)},"appends an SVG element":function(e){var t=e.append("svg:svg");assert.equal(t[0][0].tagName,"SVG"),assert.equal(t[0][0].namespaceURI,"http://www.w3.org/2000/svg"),assert.isTrue(t[0][0].parentNode===document.body),assert.isTrue(t[0][0]===document.body.lastChild)},"propagates data to new element":function(e){var t=new Object,n=e.data([t]).append("div");assert.strictEqual(n[0][0].__data__,t)},"returns a new selection":function(e){assert.isFalse(e.append("div")===e)},"inherits namespace from parent node":function(e){var t=e.append("svg:svg").append("g");assert.equal(t[0][0].namespaceURI,"http://www.w3.org/2000/svg")}}}),suite.addBatch({"selectAll(div)":{topic:function(){return d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().append("div")},"appends an HTML element":function(e){var t=e.append("span");assert.equal(t[0].length,2),assert.equal(t[0][0].tagName,"SPAN"),assert.equal(t[0][1].tagName,"SPAN"),assert.isNull(t[0][0].namespaceURI),assert.isNull(t[0][1].namespaceURI),assert.isTrue(t[0][0].parentNode===e[0][0]),assert.isTrue(t[0][1].parentNode===e[0][1]),assert.isTrue(e[0][0].lastChild===t[0][0]),assert.isTrue(e[0][1].lastChild===t[0][1])},"appends an SVG element":function(e){var t=e.append("svg:svg");assert.equal(t[0].length,2),assert.equal(t[0][0].tagName,"SVG"),assert.equal(t[0][1].tagName,"SVG"),assert.equal(t[0][0].namespaceURI,"http://www.w3.org/2000/svg"),assert.equal(t[0][1].namespaceURI,"http://www.w3.org/2000/svg"),assert.isTrue(t[0][0].parentNode===e[0][0]),assert.isTrue(t[0][1].parentNode===e[0][1]),assert.isTrue(e[0][0].lastChild===t[0][0]),assert.isTrue(e[0][1].lastChild===t[0][1])},"ignores null nodes":function(e){e.html("");var t=d3.selectAll("div");t[0][1]=null;var n=t.append("span");assert.equal(n[0].length,2),assert.equal(n[0][0].tagName,"SPAN"),assert.isNull(n[0][1]),assert.isTrue(n[0][0].parentNode===e[0][0]),assert.isTrue(e[0][0].lastChild===n[0][0]),assert.isNull(e[0][1].lastChild)},"propagates data to new elements":function(e){var t=new Object,n=new Object,r=e.data([t,n]).append("span");assert.strictEqual(r[0][0].__data__,t),assert.strictEqual(r[0][1].__data__,n)},"returns a new selection":function(e){assert.isFalse(e.append("div")===e)}}}),suite.addBatch({"selectAll(div).data(…).enter()":{topic:function(){return d3.select("body")},"appends to the parent node":function(e){var t=e.html("").selectAll("div").data(d3.range(2)).enter().append("div");assert.equal(t.length,1),assert.equal(t[0].length,2),assert.domEqual(t[0][0].parentNode,document.body),assert.domEqual(t[0][1].parentNode,document.body)},"propagates data to new elements":function(e){var t=new Object,n=new Object,r=e.html("").selectAll("div").data([t,n]).enter().append("div");assert.strictEqual(r[0][0].__data__,t),assert.strictEqual(r[0][1].__data__,n)},"ignores null nodes":function(e){e.html("").append("div");var t=e.selectAll("div").data(d3.range(3)).enter().append("div");assert.equal(t.length,1),assert.equal(t[0].length,3),assert.domNull(t[0][0]),assert.domEqual(t[0][1].parentNode,document.body),assert.domEqual(t[0][2].parentNode,document.body)}}}),suite.export(module)