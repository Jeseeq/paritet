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
        }
      });


    $stateProvider
    .state('document', {
      url: '/document/{documentId}',
      templateUrl: function($stateParams){return 'modules/createdoc/client/views/createdoc.' + $stateParams.documentId+ '.client.view.html';},
     //'modules/createdoc/client/views/createdoc.document.client.view.html',
      data: {
        roles: ['user', 'admin']
      }
    });
  }
]);
