'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs');
var _ = require('lodash');
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
var html_path = path.resolve('./modules/createdoc/server/templates/');

exports.htmlstring = function(){
  fs.readFile(html_path + '/10.html', 'utf8', function(err, html){

    if (err){
      throw err;
    }else{
      html = html.replace(/"/g, "\\\"").replace(/\n/g, "");
      fs.writeFile(path.resolve('./modules/createdoc/server/templates/10_enc.html'),html);

    }

  });
};



