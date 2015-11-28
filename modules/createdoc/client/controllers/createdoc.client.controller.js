'use strict';

// Create the 'createdoc' controller
angular.module('createdoc', ['ngAnimate', 'ui.bootstrap']);
angular.module('createdoc').controller('CreatedocController', ['$scope',
  function ($scope) {

    // Create a messages array
    
    $scope.oneAtATime = false;
    $scope.disable = true;

    $scope.disable = function(){
      scope.status.isDisabled = scope.disable;
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false,
      isDisabled: false
    };
};
]);
