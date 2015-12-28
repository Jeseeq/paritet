'use strict';

/**
 * Module dependencies.
 */
var request =require('request');
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
      htmlString = result;
    }
    res.json(htmlString);
  });
};

exports.convertFileDoc = function(req, res){
  var documentsPath = path.resolve('./modules/createdoc/server/uploads/' + req.user._doc.username);
  var file = documentsPath + '/' + req.body[2].title + '.html';
  fs.writeFileSync(file, req.body[0], 'utf8');

  var formData = {
    file : fs.createReadStream(file, 'utf8')
  };
  request.post({ url:'http://178.62.203.212:3000/unoconv/docx', formData: formData, encoding: null }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    var docxPath = documentsPath + '/' + req.body[2].title + '.docx';
    fs.writeFileSync(docxPath, body);
    res.download(path.resolve(docxPath));
  });


  //res.json(resPath);

};

exports.convertFilePdf = function(req, res){
  var documentsPath = path.resolve('./modules/createdoc/server/uploads/' + req.user._doc.username);
  var file = documentsPath + '/' + req.body[2].title + '.html';

  fs.writeFileSync(file, req.body[0], 'utf8');

  var formData = {
    file : fs.createReadStream(file, 'utf8')
  };

  request.post({ url:'http://178.62.203.212:3000/unoconv/pdf', formData: formData, encoding: null }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    var pdfPath = documentsPath + '/' + req.body[2].title + '.pdf';
    fs.writeFileSync(pdfPath, body);
    res.download(path.resolve(pdfPath));
  });
};







