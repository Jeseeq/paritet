'use strict';

// Configure the 'createdoc' module routes
angular.module('support').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('support', {
        url: '/support',
        templateUrl: 'modules/createdoc/client/views/support.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
