'use strict';

// Configuring the Chat module
angular.module('support').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Поддержка',
      state: 'support',
      type: 'item'
    });
  }
]);

