'use strict';

// Create the 'createdoc' controller
angular.module('createdoc', ['ngAnimate', 'ui.bootstrap']);
angular.module('createdoc').controller('CreatedocController', ['$scope',
  function ($scope) {
    $scope.hello = 'Jony';

  }
  ]);
