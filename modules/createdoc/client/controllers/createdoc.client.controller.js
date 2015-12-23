'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope','$stateParams', '$http','$location','Authentication','documentData', '$log', '$uibModal',
  function ($scope, $stateParams, $http, $location, Authentication, documentData, $log, $uibModal) {

    $scope.documentId = $stateParams.documentId;
    $scope.place = {};
    $scope.data = documentData;
    $scope.authentication = Authentication;
    $scope.person = {
      first_name: Authentication.user.firstName || '',
      last_name: Authentication.user.lastName || ''
    };

    $scope.$watchCollection(function(){return $scope.person;}, function() {
      var promise;
      var endpoint = '/api/documentpreview/' + $scope.documentId;
      promise = $http.post(endpoint, $scope.person);
      promise.then(function(response) {
        $scope.documentPreview = response.data;
      });
    });


    //Accordion open on heading
    $scope.isOpen = true;

    //Modal open function
    $scope.openModal = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: function ($http, $scope, $uibModalInstance, data, person, Company, Authentication) {


          //Header title select
          $scope.personType = function(){
            if (data.questions[0].selected === '1') return 'юридичну особу';
            else if (data.questions[0].selected === '2') return 'фізичну особу - підприємця';
            else if (data.questions[0].selected === '3') return 'фізичну особу';
          };

          //create company on save(modal)
          $scope.create = function () {


            var company = new Company({
              user: Authentication.user,
              name: person.name,
              city: person.city,
              department: person.department,
              region: person.region,
              street: person.street,
              house: person.house,
              block: person.block,
              apartment: person.apartment,
              zip: person.zip,
              phone: person.phone,
              email: person.email,
              code_edrp : person.code_edrp
            });

            // Redirect after save
            company.$save(function (response) {

            }, function (errorResponse) {
              $scope.error = errorResponse.data.message;
            });
          };


          //Modal window close functions
          $scope.close = function () {
            $scope.create();
            $uibModalInstance.dismiss('cancel');
          };
          $scope.cancelAndReset = function(){
            vm.options.resetModel();
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
              type: 'horizontalTypeaheadInputIcon',
              templateOptions: {
                label: 'Найменування відповідача',
                placeholder: 'Найменування відповідача',
                required: true,
                options: [],
                PopOverTemplate: '\'modules/createdoc/client/views/popoverTemplate.html\''
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              },
              controller: /* @ngInject */ function($scope) {

                $scope.close = function(){
                  $scope.popoverflag = false;
                };
                $scope.onSelect = function($item, $model, $label){
                  $scope.model.apartment = $item.apartment;
                  $scope.model.block = $item.block;
                  $scope.model.city = $item.city;
                  $scope.model.department = $item.department;
                  $scope.model.street = $item.street;
                  $scope.model.email = $item.email;
                  $scope.model.house = $item.house;
                  $scope.model.name = $item.name;
                  $scope.model.phone = $item.phone;
                  $scope.model.region = $item.region;
                  $scope.model.zip = $item.zip;
                  $scope.model.code_edrp = $item.code_edrp;
                };

                var promise;
                var endpoint = '/api/company';
                promise = $http.get(endpoint);
                return promise.then(function(response) {
                  $scope.to.options = response.data;
                  //$scope.model =
                });
              }
            },
            {
              key: 'code_edrp',
              type: 'horizontalMaskedInput',
              templateOptions: {
                label: 'Код ЄДРПОУ',
                placeholder: 'Введіть код ЄДРПОУ Відповідача (8 цифр)',
                required: true,
                mask: '99999999'
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              "className": "section-label",
              "template": "<hr class='devider devider-db'/>"
            },
            {
              "className": "section-label2",
              "template": "<div class='heading'>Адреса Відповідача</div>"
            },
            {
              "className": "row padding-1px",
              "fieldGroup": [
                {
                  "className": "input col col-4",
                  "type": "input",
                  "key": "city",
                  "templateOptions": {
                    label: "Місто",
                    "placeholder": "Місто",
                    required: true
                  }
                },
                {
                  "className": "select col col-4",
                  "type": "select",
                  "key": "department",
                  "templateOptions": {
                    label: "Область",
                    "valueProp": "value",
                    "labelProp": "name",
                    "placeholder": "Область",
                    options: [
                      { name: 'Вінницька', value: 'Вінницька' },
                      { name: 'Волинська', value: 'Волинська' },
                      { name: 'Дніпропетровська', value: 'Дніпропетровська' },
                      { name: 'Донецька', value: 'Донецька' },
                      { name: 'Житомирська', value: 'Житомирська' },
                      { name: 'Закарпатська', value: 'Закарпатська' },
                      { name: 'Запорізька', value: 'Запорізька' },
                      { name: 'Івано-Франківська', value: 'Івано-Франківська' },
                      { name: 'Київська', value: 'Київська' },
                      { name: 'Кіровоградська', value: 'Кіровоградська' },
                      { name: 'Луганська', value: 'Луганська' },
                      { name: 'Львівська', value: 'Львівська' },
                      { name: 'Миколаївська', value: 'Миколаївська' },
                      { name: 'Одеська', value: 'Одеська' },
                      { name: 'Полтавська', value: 'Полтавська' },
                      { name: 'Рівненська', value: 'Рівненська' },
                      { name: 'Сумська', value: 'Сумська' },
                      { name: 'Тернопільська', value: 'Тернопільська' },
                      { name: 'Харківська', value: 'Харківська' },
                      { name: 'Херсонська', value: 'Херсонська' },
                      { name: 'Хмельницька', value: 'Хмельницька' },
                      { name: 'Черкаська', value: 'Черкаська' },
                      { name: 'Чернівецька', value: 'Чернівецька' },
                      { name: 'Чернігівська', value: 'Чернігівська' }
                    ]

                  },
                  "expressionProperties": {
                    "templateOptions.disabled": "vm.person.city == 'Київ'"
                  }
                },
                {
                  "className": "input col col-4",
                  "type": "input",
                  "key": "region",
                  "templateOptions": {
                    label: "Район",
                    placeholder: "Район"
                  }
                },

                {
                  "className": "input col col-6",
                  "type": "input",
                  "key": "street",
                  "templateOptions": {
                    "placeholder": "Вулиця",
                    required: true
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "house",
                  "templateOptions": {
                    "placeholder": "№ буд"
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "block",
                  "templateOptions": {
                    "placeholder": "Корпус"
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "apartment",
                  "templateOptions": {
                    "placeholder": "Квартира"
                  }
                },


                {
                  "className": "input col col-2 col-xs-offset-10",
                  "type": "ZipInput",
                  "key": "zip",
                  "templateOptions": {
                    label : "Індекс",
                    mask: '99999'
                  }
                }
              ]
            },
            {
              "template": "<hr class='devider devider-db' />"
            },
            {
              key: 'IPN',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'ІПН відповідача',
                placeholder: 'ІПН відповідача',   //10 числовых символов
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '1');
              }
            },
            {
              key: 'phone',
              type: 'horizontalMaskedInput',
              templateOptions: {
                label: 'Телефон',
                mask: '(999) 999-99-99'
              }
            },

            {
              "type": "horizontalInput",
              "key": "email",
              "templateOptions": {
                label: 'Email',
                "placeholder": "example@gmail.com",
                "type": "email",
                "maxlength": 20,
                "minlength": 6
              }
            }
          ];
        },
        controllerAs: 'vm',
        size: 'md',
        backdrop : "static",
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

