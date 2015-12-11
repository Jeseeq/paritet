'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','documentData', '$log', '$uibModal',
  function ($scope, $stateParams, $location, Authentication, documentData, $log, $uibModal) {

    $scope.data = documentData;
    $scope.authentication = Authentication;
    $scope.person = {
      first_name: Authentication.user.firstName || '',
      last_name: Authentication.user.lastName || ''
    };

    $scope.isOpen = true;
    $scope.openModal = function () {

      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'myModalContent.html',
        controller: function ($scope, $uibModalInstance, data, person) {
          var vm = this;
          vm.person = person;
          vm.data = data;
          vm.YurPersonFields = [
            {
              key: 'first_name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Ім`я',
                placeholder: 'Введіть ім`я',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'last_name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Прізвище',
                placeholder: 'Введіть прізвище',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'second_name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'По-батькові',
                placeholder: '',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'address',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Адреса',
                placeholder: '',
                required: true
              }
            },
            {
              key: 'name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Назва',
                placeholder: 'Назва',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              key: 'code_edrp',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Код ЄДРПОУ',
                placeholder: 'ЄДРПОУ',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              key: 'phone',
              type: 'horizontalMaskedInput',
              templateOptions: {
                label: 'Телефон',
                mask: '(999) 999-9999'
              }
            },

          ];
        },
        controllerAs: 'vm',
        size: 'md',
        resolve: {
          data: function () {
            return $scope.data;
          },
          person :function(){
            return $scope.person;
          }
        }
      });

      modalInstance.result.then(function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };




  }
  ]);

