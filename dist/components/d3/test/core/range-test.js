require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.range");suite.addBatch({range:{topic:function(){return d3.range},"start is an inclusive lower bound":function(e){assert.equal(e(5)[0],0),assert.equal(e(1,5)[0],1),assert.equal(e(5,1,-1)[0],5)},"stop is an exclusive upper bound":function(e){assert.equal(e(5)[4],4),assert.equal(e(1,5)[3],4),assert.equal(e(5,1,-1)[3],2)},"with one argument, returns integers [0 … stop)":function(e){assert.deepEqual(e(0),[]),assert.deepEqual(e(1),[0]),assert.deepEqual(e(5),[0,1,2,3,4])},"with two arguments, returns integers [start … stop)":function(e){assert.deepEqual(e(0,5),[0,1,2,3,4]),assert.deepEqual(e(5,9),[5,6,7,8])},"with three arguments, returns start + k * step":function(e){assert.deepEqual(e(0,5,1),[0,1,2,3,4]),assert.deepEqual(e(5,9,.5),[5,5.5,6,6.5,7,7.5,8,8.5]),assert.deepEqual(e(5,8.5,.5),[5,5.5,6,6.5,7,7.5,8]),assert.deepEqual(e(2,0,-0.5),[2,1.5,1,.5])},"handles fractional steps without rounding errors":function(e){assert.deepEqual(e(0,.5,.1),[0,.1,.2,.3,.4]),assert.deepEqual(e(-2,-1.2,.1),[-2,-1.9,-1.8,-1.7,-1.6,-1.5,-1.4,-1.3])},"handles extremely small steps without rounding errors":function(e){assert.deepEqual(e(2.1e-31,5e-31,1.1e-31),[2.1e-31,3.2e-31,4.3e-31])},"handles extremely large steps without rounding errors":function(e){assert.deepEqual(e(1e300,2e300,3e299),[1e300,1.3e300,1.6e300,1.9e300])},"returns an ascending range if step is positive":function(e){assert.deepEqual(e(0,5,1),[0,1,2,3,4])},"returns a descending range if step is negative":function(e){assert.deepEqual(e(5,0,-1),[5,4,3,2,1])},"returns an empty range if start, stop or step are NaN":function(e){assert.isEmpty(e(0,NaN)),assert.isEmpty(e(1,NaN)),assert.isEmpty(e(-1,NaN)),assert.isEmpty(e(0,undefined)),assert.isEmpty(e(1,undefined)),assert.isEmpty(e(-1,undefined)),assert.isEmpty(e(NaN,0)),assert.isEmpty(e(NaN,1)),assert.isEmpty(e(NaN,-1)),assert.isEmpty(e(undefined,0)),assert.isEmpty(e(undefined,1)),assert.isEmpty(e(undefined,-1)),assert.isEmpty(e(NaN,NaN)),assert.isEmpty(e(undefined,undefined)),assert.isEmpty(e(NaN,NaN,NaN)),assert.isEmpty(e(undefined,undefined,undefined)),assert.isEmpty(e(0,10,NaN)),assert.isEmpty(e(10,0,NaN)),assert.isEmpty(e(0,10,undefined)),assert.isEmpty(e(10,0,undefined))},"returns an empty range if start equals stop":function(e){assert.isEmpty(e(10,10)),assert.isEmpty(e(10,10,1)),assert.isEmpty(e(10,10,-1)),assert.isEmpty(e(10,10,-0.5)),assert.isEmpty(e(10,10,.5)),assert.isEmpty(e(0,0)),assert.isEmpty(e(0,0,1)),assert.isEmpty(e(0,0,-1)),assert.isEmpty(e(0,0,-0.5)),assert.isEmpty(e(0,0,.5))},"returns an empty range if stop is less than start and step is positive":function(e){assert.isEmpty(e(20,10)),assert.isEmpty(e(20,10,2)),assert.isEmpty(e(20,10,1)),assert.isEmpty(e(20,10,.5))},"returns an empty range if stop is greater than start and step is negative":function(e){assert.isEmpty(e(10,20,-2)),assert.isEmpty(e(10,20,-1)),assert.isEmpty(e(10,20,-0.5))}}}),suite.export(module)