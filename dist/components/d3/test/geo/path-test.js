require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.geo.path");suite.addBatch({path:{topic:d3.geo.path,Polygon:function(e){assert.equal(e({type:"Feature",geometry:{type:"Polygon",coordinates:[[[-63.03,18.02],[-63.14,18.06],[-63.01,18.07],[-63.03,18.02]]]}}),"M984.5652086349427,468.99159422596244L981.8396467935554,467.9114977057422L985.0785139575695,467.688661596079Z")},"bogus type name":function(e){assert.isNull(e({type:"Feature",geometry:{type:"__proto__",coordinates:[[[-63.03,18.02],[-63.14,18.06],[-63.01,18.07],[-63.03,18.02]]]}}))}}}),suite.export(module)