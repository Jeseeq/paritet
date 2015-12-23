'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var relationship = require('mongoose-relationship');
var path = require('path'),
  mongoose = require('mongoose'),
  lawDocument = mongoose.model('Document'),
  DocumentCategory = mongoose.model('DocumentCategory'),
  Company = mongoose.model('Company'),
  User = mongoose.model('User'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  htmlString = require(path.resolve('./modules/createdoc/server/controllers/convert.to.html'));


/**
 * Create a document
 */
exports.create = function (req, res) {
 
  var saveDocumentObject = new lawDocument(req.body);
    //saveDocumentObject.category = req.body.category;

  saveDocumentObject.save(function (err, savedDoc) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      }); 
    } else 
        DocumentCategory.findOne({ _id : req.body.category }).exec(function (err, category){
          category.documents.push(savedDoc._id);
          category.save();
          res.json(saveDocumentObject);
        });
  });


};

/**
 * Show the current article
 */
exports.read = function (req, res) {
  res.json(req.NewDocument);
};

/**
 * Update a article
 */
exports.update = function (req, res) {
  var NewDocument = req.lawDocument;

  NewDocument.title = req.body.title;
  NewDocument.questions = req.body.questions;

  NewDocument.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(NewDocument);
    }
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  lawDocument.find({}, 'title').sort('-created').exec(function (err, documents) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(documents);
    }
  });
};


/**
 * Document middleware
 */
exports.NewDocumentByID = function (req, res, next, id) {

  lawDocument.findById(id).populate('category', 'category').exec(function (err, document) {
    if (err) {
      return next(err);
    } else if (!document) {
      return res.status(404).send({
        message: 'No document with that identifier has been found'
      });
    }
    req.NewDocument = document;
    next();
  });
};

/*
Create category
*/


exports.createDocumentCategory = function(req, res){
  var category = new DocumentCategory(req.body);
  category.save(function(err){
    if (err){
      return res.status(400).send({
        message: err.errorHandler.getErrorMessage(err)
      });
    }else
      return res.json(category);
  });
};

/**
 * Show the current category
 */
exports.readCategory = function (req, res) {
  res.json(req.category);
};

/**
 * Update category
 */
exports.updateCategory = function (req, res) {
  var Newcategory = req.DocumentCategory;

  Newcategory.category = req.body.category;

  Newcategory.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(Newcategory);
    }
  });
};

exports.listDocumentCategory = function (req, res) {
  var categoryRes = new DocumentCategory();
  DocumentCategory.find({}, 'category documents')
  .sort('-created')
  .deepPopulate('documents')
  .exec(function (err, category) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      
      res.json(category);
    }
  });
};


/**
 * Delete category
 */
exports.deleteCategory = function (req, res) {
  var category = req.DocumentCategory;

  category.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(category);
    }
  });
};


exports.categoryByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Document is invalid'
    });
  }

  lawDocument.where('category').in(id).select('_id title').exec(function (err, catgory) {
    if (err) {
      return next(err);
    } else if (!catgory) {
      return res.status(404).send({
        message: 'No document with that identifier has been found'
      });
    }
    req.category = catgory;
    next();
  });
};

// search company



exports.listCompany = function (req, res){
  htmlString.htmlstring ();
  User.findById(req.user._doc._id, 'companies').deepPopulate('companies').exec(function(err, user){
    res.json(user.companies);
  });
  //Company.find({ 'name': { $regex: new RegExp(query.toLowerCase(), "i") } }).exec(function(err, company){
  //  var result = {};
  //  result.results = company;
  //  res.json(result);
  //});
};

exports.createCompany = function (req, res){
  console.log('try save');
  var company = new Company(req.body);
  company.save(function(err, company){
    console.log(err);
    var user = new User(req.body.user);
    User.findById(req.user.id, function(err, resp){
      resp.companies.push(company._id);
      resp.save(function(err){
      });
    });
    res.json(company);
  });
};
