'use strict';

angular.module('createdoc').run(['Menus','formlyConfig',
  function (Menus, formlyConfig) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Создать документ',
      state: 'createdoc',
      position: '1',
      type: 'item'
    });
  

    formlyConfig.setType({
      name: 'maskedInput',
      extends: 'input',
      template: '<input class="form-control" ng-model="model[options.key]" />',
      defaultOptions: {
        ngModelAttrs: {
          mask: {
            attribute: 'ui-mask'
          },
          maskPlaceholder: {
            attribute: 'ui-mask-placeholder'
          }
        },
        templateOptions: {
          maskPlaceholder: ''
        }
      }
    });


  }
]);

