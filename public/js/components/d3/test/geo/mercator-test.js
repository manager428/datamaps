require("../env");

var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("d3.geo.mercator");

suite.addBatch({
  "mercator": {
    topic: function() {
      return d3.geo.mercator().translate([0, 0]).scale(100);
    },
    "Arctic": function(projection) {
      var coords = projection([0, 85]);
      assert.inDelta(coords[0], 0, 1e-6);
      assert.inDelta(coords[1], -49.8362085, 1e-6);
      var lonlat = projection.invert(coords);
      assert.inDelta(lonlat[0], 0, 1e-6);
      assert.inDelta(lonlat[1], 85, 1e-6);
    },
    "Antarctic": function(projection) {
      var coords = projection([0, -85]);
      assert.inDelta(coords[0], 0, 1e-6);
      assert.inDelta(coords[1], 49.8362085, 1e-6);
      var lonlat = projection.invert(coords);
      assert.inDelta(lonlat[0], 0, 1e-6);
      assert.inDelta(lonlat[1], -85, 1e-6);
    },
    "Hawaii": function(projection) {
      var coords = projection([-180, 0]);
      assert.inDelta(coords[0], -50, 1e-6);
      assert.inDelta(coords[1], 0, 1e-6);
      var lonlat = projection.invert(coords);
      assert.inDelta(lonlat[0], -180, 1e-6);
      assert.inDelta(lonlat[1], 0, 1e-6);
    },
    "Phillipines": function(projection) {
      var coords = projection([180, 0]);
      assert.inDelta(coords[0], 50, 1e-6);
      assert.inDelta(coords[1], 0, 1e-6);
      var lonlat = projection.invert(coords);
      assert.inDelta(lonlat[0], 180, 1e-6);
      assert.inDelta(lonlat[1], 0, 1e-6);
    },
    "Inversion works for non-zero translation": function() {
      var projection = d3.geo.mercator().translate([123, 99]).scale(100),
          coords = projection([0, 85]),
          lonlat = projection.invert(coords);
      assert.inDelta(lonlat[0], 0, 1e-6);
      assert.inDelta(lonlat[1], 85, 1e-6);
    }
  }
});

suite.export(module);
