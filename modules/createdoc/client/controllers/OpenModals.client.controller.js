'use strict';

angular.module('createdoc').controller('ModalQuestionThree', ['$scope', '$stateParams','$location','Authentication','documentData', '$log', '$uibModal',
    function ($scope, $stateParams, $location, Authentication, documentData, $log, $uibModal, $q, $http) {
      $scope.data = documentData;
      $scope.authentication = Authentication;
      $scope.person = {
        first_name: Authentication.user.firstName || '',
        last_name: Authentication.user.lastName || ''
      };
    }]);
