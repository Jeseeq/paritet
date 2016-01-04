'use strict';

var path = require('path'),
  mongoose = require('mongoose'),
  Postindex = mongoose.model('postindex');


exports.listPostal = function (req, res) {
  var query = req.query.city;
  Postindex.find({ 'city': { $regex: new RegExp(query, "i") } }).limit(1000).exec(function (err, cities) {
    var result = {};
    result.results = cities;
    res.json(result);
  });
};
