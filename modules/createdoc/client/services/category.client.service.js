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

angular.module('createdoc').factory('Document', ['$resource',
  function ($resource) {
    return $resource('api/document/:documentId', {
      documentId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  },
]);


angular.module('createdoc').factory('Company', ['$resource',
  function ($resource) {
    return $resource('api/company', {
      update: {
        method: 'PUT'
      }
    });
  },
]);




