'use strict';

// Configure the 'support' module routes
angular.module('support').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('support', {
        url: '/support',
        templateUrl: 'modules/support/client/views/support.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
