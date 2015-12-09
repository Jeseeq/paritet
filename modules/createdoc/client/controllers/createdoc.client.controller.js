'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','documentData', '$log', '$uibModal',
  function ($scope, $stateParams, $location, Authentication, documentData, $log, $uibModal) {

    $scope.data = documentData;
    $scope.authentication = Authentication;
    $scope.person = {
      first_name: Authentication.user.firstName || '',
      last_name: Authentication.user.lastName || ''
    };




    //$scope.person = {};
    //$scope.FizPersonFields = [
    //  {
    //    key: 'first_name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Ім`я',
    //      placeholder: 'Введіть ім`я',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'last_name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Прізвище',
    //      placeholder: 'Введіть прізвище',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'second_name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'По-батькові',
    //      placeholder: '',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'address',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Адреса',
    //      placeholder: '',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'phone',
    //    type: 'maskedInput',
    //    templateOptions: {
    //      label: 'Телефон',
    //      mask: '(999) 999-9999'
    //    }
    //  }
    //
    //];
    //
    //$scope.YurPersonFields = [
    //  {
    //    key: 'name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Назва',
    //      placeholder: 'Назва',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'code_edrp',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Код ЄДРПОУ',
    //      placeholder: 'ЄДРПОУ',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'address',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Адреса',
    //      placeholder: '',
    //      required: true
    //    }
    //  },
    //];
    //
    //$scope.PrivPersonFields = [
    //  {
    //    key: 'first_name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Ім`я',
    //      placeholder: 'Введіть ім`я',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'last_name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'Прізвище',
    //      placeholder: 'Введіть прізвище',
    //      required: true
    //    }
    //  },
    //  {
    //    key: 'second_name',
    //    type: 'input',
    //    templateOptions: {
    //      type: 'text',
    //      label: 'По-батькові',
    //      placeholder: '',
    //      required: true
    //    }
    //  },
    //];





    $scope.openModal = function (size) {

      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'myModalContent.html',
        controller: function ($scope, $uibModalInstance) {
          var vm = this;
          vm.person = {};
          vm.YurPersonFields = [
            {
              key: 'name',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Назва',
                placeholder: 'Назва',
                required: true
              }
            },
            {
              key: 'code_edrp',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Код ЄДРПОУ',
                placeholder: 'ЄДРПОУ',
                required: true
              }
            },
            {
              key: 'address',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Адреса',
                placeholder: '',
                required: true
              }
            }
          ];
        },
        controllerAs: 'vm',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };




  }
  ]);

