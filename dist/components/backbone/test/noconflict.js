$(document).ready(function(){module("Backbone.noConflict"),test("Backbone.noConflict",function(){var e=Backbone.noConflict();equal(window.Backbone,undefined,"Returned window.Backbone"),window.Backbone=e,equal(window.Backbone,e,"Backbone is still pointing to the original Backbone")})})