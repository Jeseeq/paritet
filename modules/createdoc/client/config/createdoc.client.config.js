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



angular.module('createdoc', ['formly', 'formlyBootstrap'], function config(formlyConfigProvider) {
  // set templates here
  formlyConfigProvider.setWrapper({
    name: 'horizontalBootstrapLabel',
    template: [
      '<label for="{{::id}}" class="col-sm-4 control-label">',
      '{{to.label}} {{to.required ? "*" : ""}}',
      '</label>',
      '<div class="col-sm-6">',
      '<formly-transclude></formly-transclude>',
      '</div>'
    ].join(' ')
  });

  formlyConfigProvider.setWrapper({
    name: 'horizontalBootstrapCheckbox',
    template: [
      '<div class="col-sm-offset-2 col-sm-8">',
      '<formly-transclude></formly-transclude>',
      '</div>'
    ].join(' ')
  });

  formlyConfigProvider.setType({
    name: 'horizontalInput',
    extends: 'input',
    wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
  });

  formlyConfigProvider.setType({
    name: 'horizontalMaskedInput',
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
    },
    wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
  });

  formlyConfigProvider.setType({
    name: 'horizontalCheckbox',
    extends: 'checkbox',
    wrapper: ['horizontalBootstrapCheckbox', 'bootstrapHasError']
  });
});
