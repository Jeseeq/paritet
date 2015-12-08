'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','Category', 'Document',
  function ($scope, $stateParams, $location, Authentication, Category, Document) {
   

    // Find a list of Categories
    $scope.find = function () {
      $scope.categories = Category.query();
    };
  
    $scope.findOne = function () {
      $scope.Onedocument = Document.get({
        documentId: $stateParams.documentId
      });
    };

    $scope.show = function (question){
      return (question.selected === 1);

    };

 
 	var vm = this;
 	vm.person = {};

      vm.FizPersonFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Ім`я',
                placeholder: 'Введіть ім`я',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Прізвище',
                placeholder: 'Введіть прізвище',
                required: true
            }
        },
      {
            key: 'second_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'По-батькові',
                placeholder: '',
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
        },
    ];

     vm.PrivPersonFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Ім`я',
                placeholder: 'Введіть ім`я',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Прізвище',
                placeholder: 'Введіть прізвище',
                required: true
            }
        },
      {
            key: 'second_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'По-батькові',
                placeholder: '',
                required: true
            }
        },
    ];


	vm.person = {
		first_name: Authentication.user.firstName || "",
		last_name: Authentication.user.lastName || ""
	};

	$scope.authentication = Authentication;
  }
  ]);

