'use strict';

/**
 * Module dependencies.
 */
var documentsPolicy = require('../policies/documents.server.policy'),
  documents = require('../controllers/documents.server.controller');

module.exports = function (app) {
  // Document collection routes
  app.route('/api/documents').all(documentsPolicy.isAllowed)
    .get(documents.list)
    .post(documents.create);

  // Single article routes
  app.route('/api/documents/:documentId').all(documentsPolicy.isAllowed)
    .get(documents.read)
    .put(documents.update);


  app.route('/api/category').all(documentsPolicy.isAllowed)
    .post(documents.createDocumentCategory)
    .get(documents.listDocumentCategory);
  
  app.route('/api/category/:categoryId').all(documentsPolicy.isAllowed)
    .get(documents.readCategory)
    .put(documents.updateCategory)
    .delete(documents.deleteCategory);
 
  // Finish by binding the article middleware
  app.param('documentId', documents.NewDocumentByID);
  app.param('categoryId', documents.categoryByID);
};
