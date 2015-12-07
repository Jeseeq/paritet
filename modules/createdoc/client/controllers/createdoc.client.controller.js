'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','Category',
  function ($scope, $stateParams, $location, Authentication, Category) {
    $scope.authentication = Authentication;


    // Find a list of Categories
    $scope.find = function () {
      $scope.categories = Category.query();
    };
  
    $scope.findOne = function (_id) {
      $scope.documentTitle = Category.get({
        categoryId: _id
      });
    };
  
  }
  ]);

