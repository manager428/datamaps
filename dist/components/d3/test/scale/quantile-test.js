require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.scale.quantile");suite.addBatch({quantile:{topic:function(){return d3.scale.quantile},"has the empty domain by default":function(e){assert.isEmpty(e().domain())},"has the empty range by default":function(e){assert.isEmpty(e().range())},"uses the R-7 algorithm to compute quantiles":function(e){var t=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual([3,6,6.9,7,7.1].map(t),[0,0,0,0,0]),assert.deepEqual([8,8.9].map(t),[1,1]),assert.deepEqual([9,9.1,10,13].map(t),[2,2,2,2]),assert.deepEqual([14.9,15,15.1,16,20].map(t),[3,3,3,3,3]);var t=d3.scale.quantile().domain([3,6,7,8,8,9,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual([3,6,6.9,7,7.1].map(t),[0,0,0,0,0]),assert.deepEqual([8,8.9].map(t),[1,1]),assert.deepEqual([9,9.1,10,13].map(t),[2,2,2,2]),assert.deepEqual([14.9,15,15.1,16,20].map(t),[3,3,3,3,3])},"domain values are sorted in ascending order":function(e){var t=d3.scale.quantile().domain([6,3,7,8,8,13,20,15,16,10]);assert.deepEqual(t.domain(),[3,6,7,8,8,10,13,15,16,20])},"non-numeric domain values are ignored":function(e){var t=d3.scale.quantile().domain([6,3,NaN,undefined,7,8,8,13,20,15,16,10,NaN]);assert.deepEqual(t.domain(),[3,6,7,8,8,10,13,15,16,20])},"quantiles returns the inner thresholds":function(e){var t=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual(t.quantiles(),[7.25,9,14.5]);var t=d3.scale.quantile().domain([3,6,7,8,8,9,10,13,15,16,20]).range([0,1,2,3]);assert.deepEqual(t.quantiles(),[7.5,9,14])},"range cardinality determines the number of quantiles":function(e){var t=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]);assert.deepEqual(t.range([0,1,2,3]).quantiles(),[7.25,9,14.5]),assert.deepEqual(t.range([0,1]).quantiles(),[9]),assert.deepEqual(t.range([,,,,,]).quantiles(),[6.8,8,11.2,15.2]),assert.deepEqual(t.range([,,,,,,]).quantiles(),[6.5,8,9,13,15.5])},"range values are arbitrary":function(e){var t=new Object,n=new Object,r=new Object,i=d3.scale.quantile().domain([3,6,7,8,8,10,13,15,16,20]).range([t,n,r,t]);assert.deepEqual([3,6,6.9,7,7.1].map(i),[t,t,t,t,t]),assert.deepEqual([8,8.9].map(i),[n,n]),assert.deepEqual([9,9.1,10,13].map(i),[r,r,r,r]),assert.deepEqual([14.9,15,15.1,16,20].map(i),[t,t,t,t,t])}}}),suite.export(module)