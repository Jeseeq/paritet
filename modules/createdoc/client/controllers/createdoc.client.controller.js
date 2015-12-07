'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','Category', 'Document',
  function ($scope, $stateParams, $location, Authentication, Category, Document) {
    $scope.authentication = Authentication;


    // Find a list of Categories
    $scope.find = function () {
      $scope.categories = Category.query();
    };
  
    $scope.findOne = function () {
      $scope.Onedocument = Document.get({
        documentId: $stateParams.documentId
      });
    };
  
  }
  ]);

