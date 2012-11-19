function local(e,t,n,r,i,s,o){var u=new Date;return u.setFullYear(e,t,n),u.setHours(r||0,i||0,s||0,o||0),u}function utc(e,t,n,r,i,s,o){var u=new Date;return u.setUTCFullYear(e,t,n),u.setUTCHours(r||0,i||0,s||0,o||0),u}require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.time.years");suite.addBatch({years:{topic:function(){return d3.time.years},"returns years":function(e){assert.deepEqual(e(local(2010,0,1),local(2013,0,1)),[local(2010,0,1),local(2011,0,1),local(2012,0,1)])},"has an inclusive lower bound":function(e){assert.deepEqual(e(local(2010,0,1),local(2013,0,1))[0],local(2010,0,1))},"has an exclusive upper bound":function(e){assert.deepEqual(e(local(2010,0,1),local(2013,0,1))[2],local(2012,0,1))},"can skip years":function(e){assert.deepEqual(e(local(2009,0,1),local(2029,0,1),5),[local(2010,0,1),local(2015,0,1),local(2020,0,1),local(2025,0,1)])},UTC:{topic:function(e){return e.utc},"returns years":function(e){assert.deepEqual(e(utc(2010,0,1),utc(2013,0,1)),[utc(2010,0,1),utc(2011,0,1),utc(2012,0,1)])},"has an inclusive lower bound":function(e){assert.deepEqual(e(utc(2010,0,1),utc(2013,0,1))[0],utc(2010,0,1))},"has an exclusive upper bound":function(e){assert.deepEqual(e(utc(2010,0,1),utc(2013,0,1))[2],utc(2012,0,1))},"can skip years":function(e){assert.deepEqual(e(utc(2009,0,1),utc(2029,0,1),5),[utc(2010,0,1),utc(2015,0,1),utc(2020,0,1),utc(2025,0,1)])}}}}),suite.export(module)