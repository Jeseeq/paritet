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
  }
]);
