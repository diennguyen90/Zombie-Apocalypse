/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
  {
  name : "Billy's ole` Shack",
  info : "Made of straws, but it's all about hiding in plain sight..where no one expects it, but then again...zombies can see?"
  }, {
  name : "Dien's house",
  info : 'You get the warm and loving hospitality of Dien, along with his amazing close quarter combat, and archery skills. Also, his backyard grows unlimited amount of fruits and vegetable. Obvious choice.'
  }, {
  name : "Mikey's Mountain Top Tree House",
  info : "Probably the safest place on Urff, but resources are slim. Unless you have Dien in your party to hunt for you, because he has exceptional archery skills."
  },  {
  name : "Chuck's private island",
  info : "Could be the safes...but the road there is treacherous. How does one get there without Dien's BOAT?! I only ask this, because the ocean is no safezone. No man-made boat can survive the deadly sea."
  },  {
  name : 'Heaven',
  info : 'Just have to kill yourself.'
  },{
  name : 'Your own home',
  info : "Filled with zombies. Only safezone is your rooftop, which is painted with the cry of 'HELP'. Save yourself. Create a Todo list below to somehow arrive at Dien's haven. "
  }
  ]);
};