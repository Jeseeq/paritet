'use strict';
angular.module('createdoc').controller('CategoryController', ['$scope', '$stateParams','Authentication','categoryData',
    function ($scope, $stateParams, Authentication, categoryData) {

        $scope.categories = categoryData;
    }]);
