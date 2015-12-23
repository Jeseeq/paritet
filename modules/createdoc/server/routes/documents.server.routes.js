'use strict';

/**
 * Module dependencies.
 */
var documentsPolicy = require('../policies/documents.server.policy'),
  documents = require('../controllers/documents.server.controller'),
  convert = require('../controllers/convert.to.html');


module.exports = function (app) {
  // Document collection routes
  app.route('/api/document').all(documentsPolicy.isAllowed)
    .get(documents.list)
    .post(documents.create);

  // Single article routes
  app.route('/api/document/:documentId').all(documentsPolicy.isAllowed)
    .get(documents.read)
    .put(documents.update);


  app.route('/api/category').all(documentsPolicy.isAllowed)
    .post(documents.createDocumentCategory)
    .get(documents.listDocumentCategory);
  
  app.route('/api/category/:categoryId').all(documentsPolicy.isAllowed)
    .get(documents.readCategory)
    .put(documents.updateCategory)
    .delete(documents.deleteCategory);


  app.route('/api/company').all(documentsPolicy.isAllowed)
      .get(documents.listCompany)
      .post(documents.createCompany);

  app.route('/api/documentpreview/:documentpreviewId').all(documentsPolicy.isAllowed)
      .post(convert.documentPreview);

  // Finish by binding the article middleware
  app.param('documentId', documents.NewDocumentByID);
  app.param('categoryId', documents.categoryByID);
  app.param('documentpreviewId', convert.documentPreview);


};
