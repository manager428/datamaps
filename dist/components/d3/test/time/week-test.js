require("../env");var vows=require("vows"),assert=require("assert"),time=require("./time"),local=time.local,utc=time.utc,suite=vows.describe("d3.time.week");suite.addBatch({week:{topic:function(){return d3.time.week},"defaults to floor":function(e){assert.strictEqual(e,e.floor)},floor:{topic:function(e){return e.floor},"returns sundays":function(e){assert.deepEqual(e(local(2010,11,31,23,59,59)),local(2010,11,26)),assert.deepEqual(e(local(2011,0,1,0,0,0)),local(2010,11,26)),assert.deepEqual(e(local(2011,0,1,0,0,1)),local(2010,11,26)),assert.deepEqual(e(local(2011,0,1,23,59,59)),local(2010,11,26)),assert.deepEqual(e(local(2011,0,2,0,0,0)),local(2011,0,2)),assert.deepEqual(e(local(2011,0,2,0,0,1)),local(2011,0,2))},"observes the start of daylight savings time":function(e){assert.deepEqual(e(local(2011,2,13,1)),local(2011,2,13))},"observes the end of the daylight savings time":function(e){assert.deepEqual(e(local(2011,10,6,1)),local(2011,10,6))},"correctly handles years in the first century":function(e){assert.deepEqual(e(local(9,10,6,7)),local(9,10,1))}},ceil:{topic:function(e){return e.ceil},"returns sundays":function(e){assert.deepEqual(e(local(2010,11,31,23,59,59)),local(2011,0,2)),assert.deepEqual(e(local(2011,0,1,0,0,0)),local(2011,0,2)),assert.deepEqual(e(local(2011,0,1,0,0,1)),local(2011,0,2)),assert.deepEqual(e(local(2011,0,1,23,59,59)),local(2011,0,2)),assert.deepEqual(e(local(2011,0,2,0,0,0)),local(2011,0,2)),assert.deepEqual(e(local(2011,0,2,0,0,1)),local(2011,0,9))},"observes the start of daylight savings time":function(e){assert.deepEqual(e(local(2011,2,13,1)),local(2011,2,20))},"observes the end of the daylight savings time":function(e){assert.deepEqual(e(local(2011,10,6,1)),local(2011,10,13))}},offset:{topic:function(e){return e.offset},"does not modify the passed-in date":function(e){var t=local(2010,11,31,23,59,59,999);e(t,1),assert.deepEqual(t,local(2010,11,31,23,59,59,999))},"does not round the passed-in-date":function(e){assert.deepEqual(e(local(2010,11,31,23,59,59,999),1),local(2011,0,7,23,59,59,999)),assert.deepEqual(e(local(2010,11,31,23,59,59,456),-2),local(2010,11,17,23,59,59,456))},"allows negative offsets":function(e){assert.deepEqual(e(local(2010,11,1),-1),local(2010,10,24)),assert.deepEqual(e(local(2011,0,1),-2),local(2010,11,18)),assert.deepEqual(e(local(2011,0,1),-1),local(2010,11,25))},"allows positive offsets":function(e){assert.deepEqual(e(local(2010,10,24),1),local(2010,11,1)),assert.deepEqual(e(local(2010,11,18),2),local(2011,0,1)),assert.deepEqual(e(local(2010,11,25),1),local(2011,0,1))},"allows zero offset":function(e){assert.deepEqual(e(local(2010,11,31,23,59,59,999),0),local(2010,11,31,23,59,59,999)),assert.deepEqual(e(local(2010,11,31,23,59,58,0),0),local(2010,11,31,23,59,58,0))}},UTC:{topic:function(e){return e.utc},"defaults to floor":function(e){assert.strictEqual(e,e.floor)},floor:{topic:function(e){return e.floor},"returns sundays":function(e){assert.deepEqual(e(utc(2010,11,31,23,59,59)),utc(2010,11,26)),assert.deepEqual(e(utc(2011,0,1,0,0,0)),utc(2010,11,26)),assert.deepEqual(e(utc(2011,0,1,0,0,1)),utc(2010,11,26)),assert.deepEqual(e(utc(2011,0,1,23,59,59)),utc(2010,11,26)),assert.deepEqual(e(utc(2011,0,2,0,0,0)),utc(2011,0,2)),assert.deepEqual(e(utc(2011,0,2,0,0,1)),utc(2011,0,2))},"does not observe the start of daylight savings time":function(e){assert.deepEqual(e(utc(2011,2,13,1)),utc(2011,2,13))},"does not observe the end of the daylight savings time":function(e){assert.deepEqual(e(utc(2011,10,6,1)),utc(2011,10,6))}},ceil:{topic:function(e){return e.ceil},"returns sundays":function(e){assert.deepEqual(e(utc(2010,11,31,23,59,59)),utc(2011,0,2)),assert.deepEqual(e(utc(2011,0,1,0,0,0)),utc(2011,0,2)),assert.deepEqual(e(utc(2011,0,1,0,0,1)),utc(2011,0,2)),assert.deepEqual(e(utc(2011,0,1,23,59,59)),utc(2011,0,2)),assert.deepEqual(e(utc(2011,0,2,0,0,0)),utc(2011,0,2)),assert.deepEqual(e(utc(2011,0,2,0,0,1)),utc(2011,0,9))},"does not observe the start of daylight savings time":function(e){assert.deepEqual(e(utc(2011,2,13,1)),utc(2011,2,20))},"does not observe the end of the daylight savings time":function(e){assert.deepEqual(e(utc(2011,10,6,1)),utc(2011,10,13))}}},offset:{topic:function(e){return e.offset},"does not modify the passed-in date":function(e){var t=utc(2010,11,31,23,59,59,999);e(t,1),assert.deepEqual(t,utc(2010,11,31,23,59,59,999))},"does not round the passed-in-date":function(e){assert.deepEqual(e(utc(2010,11,31,23,59,59,999),1),utc(2011,0,7,23,59,59,999)),assert.deepEqual(e(utc(2010,11,31,23,59,59,456),-2),utc(2010,11,17,23,59,59,456))},"allows negative offsets":function(e){assert.deepEqual(e(utc(2010,11,1),-1),utc(2010,10,24)),assert.deepEqual(e(utc(2011,0,1),-2),utc(2010,11,18)),assert.deepEqual(e(utc(2011,0,1),-1),utc(2010,11,25))},"allows positive offsets":function(e){assert.deepEqual(e(utc(2010,10,24),1),utc(2010,11,1)),assert.deepEqual(e(utc(2010,11,18),2),utc(2011,0,1)),assert.deepEqual(e(utc(2010,11,25),1),utc(2011,0,1))},"allows zero offset":function(e){assert.deepEqual(e(utc(2010,11,31,23,59,59,999),0),utc(2010,11,31,23,59,59,999)),assert.deepEqual(e(utc(2010,11,31,23,59,58,0),0),utc(2010,11,31,23,59,58,0))}}}}),suite.export(module)