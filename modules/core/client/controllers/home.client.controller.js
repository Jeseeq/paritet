'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.myInterval = 8000;
    $scope.noWrapSlides = false;

    $scope.slides = [{
      image:'unify/img/kitten/1.jpg',
      text: 'test'
    },
    {
      image:'unify/img/kitten/2.jpg',
      text: 'test'

    },
    {
      image:'unify/img/kitten/3.jpg',
      text: 'test'
    }
    ];


  }
]);
