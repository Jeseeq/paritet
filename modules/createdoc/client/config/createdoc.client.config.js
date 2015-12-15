'use strict';

angular.module('createdoc').run(['formlyConfig',
  function (formlyConfig) {


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

    formlyConfig.extras.removeChromeAutoComplete = true;
    formlyConfig.setType({
      name: 'async-ui-select',
      extends: 'select',
      templateUrl: 'async-ui-select-type.html'
    });



  }
]);



angular.module('createdoc', ['formly', 'formlyBootstrap'], function config(formlyConfigProvider) {
  // set templates here
  formlyConfigProvider.setWrapper({
    name: 'horizontalBootstrapLabel',
    template: [
      '<label for="{{::id}}" class="col-sm-4">',
      '{{to.label}} {{to.required ? "*" : ""}}',
      '</label>',
      '<div class="col-sm-8 input">',
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
    name:'placeAutoComplete',
    template:"<label class='control-label' ng-if='to.label'>{{to.label}}</label>" +
    "<input g-places-autocomplete class='form-control' ng-model='model[options.key]'" +
    "ng-attr-options='to.autocompleteOptions'" +
    "ng-attr-force-selection='to.forceSelection'/>",
    link: function(scope, el, attrs) {},
  });


  formlyConfigProvider.setType({
    name: 'horizontalGoogleInput',
    extends: 'input',
    wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      ngModelAttrs: {
        googleAutocomplete: {
          attribute: 'g-places-autocomplete'
        }
      }
    }
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
  formlyConfigProvider.extras.removeChromeAutoComplete = true;
  formlyConfigProvider.setType({
    name: 'async-ui-select',
    extends: 'select',
    templateUrl: 'async-ui-select-type.html',
    wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
  });




});
