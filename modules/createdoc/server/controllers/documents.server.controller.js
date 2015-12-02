'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  lawDocument = mongoose.model('Document'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a document
 */
exports.create = function (req, res) {
  var NewDocument = new lawDocument(req.body);
  
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
 * Delete an article
 */
exports.delete = function (req, res) {
  var NewDocument = req.lawDocument;

  NewDocument.remove(function (err) {
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
      console.log("eroor");
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(documents);
    }
  });
};

/**
 * Article middleware
 */
exports.NewDocumentByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Document is invalid'
    });
  }

  lawDocument.findById(id).populate('questions', 'content').exec(function (err, document) {
    if (err) {
      return next(err);
    } else if (!document) {
      return res.status(404).send({
        message: 'No document with that identifier has been found'
      });
    }
    req.document = document;
    next();
  });
};
