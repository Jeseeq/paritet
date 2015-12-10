'use strict';

// Configure the 'createdoc' module routes
angular.module('createdoc').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('createdoc', {
        url: '/createdoc',
        templateUrl: 'modules/createdoc/client/views/createdoc.client.view.html',
        data: {
          roles: ['user', 'admin']
        },
        controller: 'CategoryController',
        resolve: {
          categoryData: function (Category) { // Inject a resource named 'Document'

            return Category.query();

          }
        }
      });


    $stateProvider
    .state('document', {
      url: '/document/{documentId}',
      templateUrl: function($stateParams){return 'modules/createdoc/client/views/createdoc.' + $stateParams.documentId+ '.client.view.html';},
     //'modules/createdoc/client/views/createdoc.document.client.view.html',
      data: {
        roles: ['user', 'admin']
      },
      controller: 'CreatedocController',
      resolve: {
        documentData: function($stateParams, Document) { // Inject a resource named 'Document'

          return Document.get({ documentId: $stateParams.documentId });

                // Return the original promise inside the returned $resource object
                // Since this is a true promise, the resolve will wait
                //return Data.$promise;
        }
      }
    });
  }
]);
