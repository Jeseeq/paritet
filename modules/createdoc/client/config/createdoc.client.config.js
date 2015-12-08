'use strict';

angular.module('createdoc').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Создать документ',
      state: 'createdoc',
      position: '1',
      type: 'item'
    });
  }
]);

