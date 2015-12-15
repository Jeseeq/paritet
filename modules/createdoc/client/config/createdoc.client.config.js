'use strict';

angular.module('createdoc').run(['formlyConfig',
  function (formlyConfig) {


    formlyConfig.setType({
      name: 'maskedInput',
      template: [
        '<label for="{{::id}}" class="col col-4 control-label">',
        '{{to.label}} {{to.required ? "*" : ""}}',
        '</label>',
        '<div class=" col col-8 input">',
        '<input class="input" ng-model="model[options.key]" />',
        '</div>'
      ].join(' '),
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
      '<label for="{{::id}}" class="col col-4 control-label">',
      '{{to.label}} {{to.required ? "*" : ""}}',
      '</label>',
      '<div class=" col col-8 input">',
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
    name: 'horizontalInputIcon',
    wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
    template: [
      '<div class = "row">',
      '<div class="col col-10 input">',
      '<input  class="input form-control" ng-model="model[options.key]">',
      '</div>',
      '<div class="col col-1">',
      '<i class=" icon-custom icon-sm-tabs icon-bg-blue fa fa-info" popover-placement="right" uib-popover="Пояснення до іконки">',
      '</i>',
      '</div>',
      '</div>'
    ].join(' ')
  });


  //formlyConfigProvider.setType({
  //  name:'placeAutoComplete',
  //  template:"<label class='control-label' ng-if='to.label'>{{to.label}}</label>" +
  //  "<input g-places-autocomplete class='form-control' ng-model='model[options.key]'" +
  //  "ng-attr-options='to.autocompleteOptions'" +
  //  "ng-attr-force-selection='to.forceSelection'/>",
  //  link: function(scope, el, attrs) {},
  //});

  //
  //formlyConfigProvider.setType({
  //  name: 'horizontalGoogleInput',
  //  extends: 'input',
  //  wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError'],
  //  defaultOptions: {
  //    ngModelAttrs: {
  //      googleAutocomplete: {
  //        attribute: 'g-places-autocomplete'
  //      }
  //    }
  //  }
  //});

  formlyConfigProvider.setType({
    name: 'horizontalMaskedInput',
    extends: 'input',
    template: '<input class="form-control" ng-model="model[options.key]"/>',
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
