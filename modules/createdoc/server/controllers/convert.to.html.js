'use strict';

/**
 * Module dependencies.
 */
var handlebars = require('handlebars');
var fs = require('fs');
var _ = require('lodash');
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
var html_path = path.resolve('./modules/createdoc/server/templates/');

exports.documentPreview = function(req, res, next, id){
  var htmlString;
  fs.readFile(html_path + '/' + id + '.html', 'utf8', function(err, html){

    if (err){
      throw err;
    }else{
      var template = handlebars.compile(html);
      var result = template(req.body);
      //html = html.replace(/"/g, "\\\"").replace(/\n/g, "");
      //fs.writeFile(path.resolve('./modules/createdoc/server/templates/10_enc.html'),html);
      htmlString = result;

    }
    res.json(htmlString);
  });
};



