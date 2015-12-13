'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','documentData', '$log', '$uibModal',
  function ($scope, $stateParams, $location, Authentication, documentData, $log, $uibModal, $q, $http) {

    $scope.place = {};
    $scope.data = documentData;
    $scope.authentication = Authentication;
    $scope.person = {
      first_name: Authentication.user.firstName || '',
      last_name: Authentication.user.lastName || ''
    };

    //Accordion open on heading
    $scope.isOpen = true;

    //Modal open function
    $scope.openModal = function () {

      var modalInstance = $uibModal.open({
        animation: false,
        templateUrl: 'myModalContent.html',
        controller: function ($q, $http, $scope, $uibModalInstance, data, person) {

          //Modal window close functions
          $scope.close = function () {
            angular.element(document.querySelector(".radio")).blur();
            $uibModalInstance.dismiss('cancel');
          };
          $scope.cancelAndReset = function(){
            vm.options.resetModel();
            var radio = angular.element(document.querySelector(".radio"));
            var radio_input = radio.find('input').blur();
            $uibModalInstance.dismiss('cancel');
          };

          var vm = this;
          //pass injected data
          vm.person = person;
          vm.data = data;

          // Formly fields
          vm.YurPersonFields = [
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
              key: 'name',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Найменування відповідача',
                placeholder: 'Найменування відповідача',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              key: 'address',
              type: 'horizontalGoogleInput',
              templateOptions: {
                type: 'text',
                label: 'Адреса',
                placeholder: '',
                required: true,
                googleAutocomplete: ''
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

            {
              key: 'awesomeAddress',
              type: 'async-ui-select',
              templateOptions: {
                label: 'Назва(або шо угодно)',
                placeholder: 'тут може бути вибор суду асинхронно',
                valueProp: 'name',
                labelProp: 'name',
                options: [],
                refresh: refreshAddresses,
                refreshDelay: 0
              }
            }



          ];


          function refreshAddresses(address, field) {
            var promise;
            if (!address) {
              promise = $q.when({ data: { results: [] } });
            } else {
              var params = { name: address };
              var endpoint = '/api/company';
              promise = $http.get(endpoint, { params: params });
            }
            return promise.then(function(response) {
              field.templateOptions.options = response.data.results;
            });
          }



        },
        controllerAs: 'vm',
        size: 'lg',
        //resolve data inject
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

