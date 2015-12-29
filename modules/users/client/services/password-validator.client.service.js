'use strict';

// PasswordValidator service used for testing the password strength
angular.module('users').factory('PasswordValidator', ['$window',
  function ($window) {
    var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;

    return {
      getResult: function (password) {
        var result = owaspPasswordStrengthTest.test(password);
        return result;
      },
      getPopoverMsg: function () {
        var popoverMsg = 'Пожалуйста введите пароль состоящий минимум из 6 символов и хотя бы 1 цифры';
        return popoverMsg;
      },
      configPassword: function(config){
        owaspPasswordStrengthTest.config(config);
        return true;
      }
    };
  }
]);
