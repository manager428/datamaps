require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.geo.albers");suite.addBatch({albers:{topic:function(){return d3.geo.albers()},Arctic:function(e){var t=e([0,85]);assert.inDelta(t[0],1031.393796,1e-6),assert.inDelta(t[1],-714.160436,1e-6);var n=e.invert(t);assert.inDelta(n[0],0,1e-6),assert.inDelta(n[1],85,1e-6)},Antarctic:function(e){var t=e([0,-85]);assert.inDelta(t[0],2753.458335,1e-6),assert.inDelta(t[1],317.371122,1e-6);var n=e.invert(t);assert.inDelta(n[0],0,1e-6),assert.inDelta(n[1],-85,1e-6)},Hawaii:function(e){var t=e([-180,0]);assert.inDelta(t[0],-984.779405,1e-6),assert.inDelta(t[1],209.571197,1e-6);var n=e.invert(t);assert.inDelta(n[0],-180,1e-6),assert.inDelta(n[1],0,1e-6)},Phillipines:function(e){var t=e([180,0]);assert.inDelta(t[0],894.435228,1e-6),assert.inDelta(t[1],-2927.63663,1e-6);var n=e.invert(t);assert.inDelta(n[0],180,1e-6),assert.inDelta(n[1],0,1e-6)},"Inversion works for non-zero translation":function(){var e=d3.geo.albers().translate([123,99]).scale(100),t=e([0,85]),n=e.invert(t);assert.inDelta(n[0],0,1e-6),assert.inDelta(n[1],85,1e-6)}}}),suite.export(module)