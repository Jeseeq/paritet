'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('createdoc').factory('Category', ['$resource',
  function ($resource) {
    return $resource('api/category/:categoryId', {
      categoryId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  },
]);



