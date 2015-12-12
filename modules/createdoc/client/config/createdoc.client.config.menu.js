'use strict';
angular.module('createdoc').run(['Menus',
    function (Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', {
            title: 'Создать документ',
            state: 'createdoc',
            type: 'item',
            position : '0',
            roles: ['*']
        });
    }
]);
