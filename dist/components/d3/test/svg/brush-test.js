require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.svg.brush");suite.addBatch({brush:{topic:function(){return d3.svg.brush},x:{"defaults to null":function(e){assert.isNull(e().x())}},y:{"defaults to null":function(e){assert.isNull(e().y())}},extent:{"returns null when no scales are attached":function(e){assert.isNull(e().extent())},"returns a one-dimensional array if only x is defined":function(e){var t=e().x(d3.scale.linear());assert.deepEqual(t.extent(),[0,0])},"takes a one-dimensional array if only x is defined":function(e){var t=e().x(d3.scale.linear()).extent([.1,.4]);assert.deepEqual(t.extent(),[.1,.4])},"returns a one-dimensional array if only y is defined":function(e){var t=e().y(d3.scale.linear());assert.deepEqual(t.extent(),[0,0])},"takes a one-dimensional array if only y is defined":function(e){var t=e().y(d3.scale.linear()).extent([.1,.4]);assert.deepEqual(t.extent(),[.1,.4])},"returns a two-dimensional array if x and y are defined":function(e){var t=e().x(d3.scale.linear()).y(d3.scale.linear());assert.deepEqual(t.extent(),[[0,0],[0,0]])},"takes a two-dimensional array if x and y are defined":function(e){var t=e().x(d3.scale.linear()).y(d3.scale.linear()).extent([[.1,.2],[.3,.4]]);assert.deepEqual(t.extent(),[[.1,.2],[.3,.4]])},"preserves the set extent exactly":function(e){var t=new Number(.1),n=new Number(.3),r=e().x(d3.scale.linear()).extent([t,n]),i=r.extent();assert.strictEqual(i[0],t),assert.strictEqual(i[1],n)}}}}),suite.export(module)