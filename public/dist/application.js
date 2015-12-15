'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {
  // Init module configuration options
  var applicationModuleName = 'mean';
  var applicationModuleVendorDependencies = ['ngResource', 'ngAnimate', 'ngMessages', 'ui.router',
                                             'ui.bootstrap', 'ui.utils', 'angularFileUpload', 'ui.bootstrap.tpls',
                                             'formly', 'formlyBootstrap', 'ui.mask', 'ui.select', 'ngSanitize', 'google.places'];

  // Add a new vertical module
  var registerModule = function (moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };
})();

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', '$httpProvider',
  function ($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $httpProvider.interceptors.push('authInterceptor');
  }
]);

angular.module(ApplicationConfiguration.applicationModuleName).run(["$rootScope", "$state", "Authentication", function ($rootScope, $state, Authentication) {

  // Check authentication before changing state
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
      var allowed = false;
      toState.data.roles.forEach(function (role) {
        if (Authentication.user.roles !== undefined && Authentication.user.roles.indexOf(role) !== -1) {
          allowed = true;
          return true;
        }
      });

      if (!allowed) {
        event.preventDefault();
        if (Authentication.user !== undefined && typeof Authentication.user === 'object') {
          $state.go('forbidden');
        } else {
          $state.go('authentication.signin').then(function () {
            storePreviousState(toState, toParams);
          });
        }
      }
    }
  });

  // Record previous state
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    storePreviousState(fromState, fromParams);
  });

  // Store previous state
  function storePreviousState(state, params) {
    // only store this state if it shouldn't be ignored 
    if (!state.data || !state.data.ignoreState) {
      $state.previous = {
        state: state,
        params: params,
        href: $state.href(state, params)
      };
    }
  }
}]);

//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash && window.location.hash === '#_=_') {
    if (window.history && history.pushState) {
      window.history.pushState('', document.title, window.location.pathname);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      var scroll = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      window.location.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scroll.top;
      document.body.scrollLeft = scroll.left;
    }
  }

  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);



  
});

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('chat');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
ApplicationConfiguration.registerModule('core.admin', ['core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('createdoc');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('support');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users', ['core']);
ApplicationConfiguration.registerModule('users.admin', ['core.admin']);
ApplicationConfiguration.registerModule('users.admin.routes', ['core.admin.routes']);

'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Articles',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'List Articles',
      state: 'articles.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Create Articles',
      state: 'articles.create',
      roles: ['user']
    });
  }
]);

'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('articles.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-articles.client.view.html'
      })
      .state('articles.create', {
        url: '/create',
        templateUrl: 'modules/articles/client/views/create-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/client/views/view-article.client.view.html'
      })
      .state('articles.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/client/views/edit-article.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);

'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
  function ($scope, $stateParams, $location, Authentication, Articles) {
    $scope.authentication = Authentication;

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      // Create new Article object
      var article = new Articles({
        title: this.title,
        content: this.content
      });

      // Redirect after save
      article.$save(function (response) {
        $location.path('articles/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (article) {
      if (article) {
        article.$remove();

        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function () {
          $location.path('articles');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var article = $scope.article;

      article.$update(function () {
        $location.path('articles/' + article._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.articles = Articles.query();
      
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.article = Articles.get({
        articleId: $stateParams.articleId
      });
    };
  }
]);

'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
  function ($resource) {
    return $resource('api/articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

'use strict';

// Configuring the Chat module
angular.module('chat').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Chat',
      state: 'chat'
    });
  }
]);

'use strict';

// Configure the 'chat' module routes
angular.module('chat').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/chat',
        templateUrl: 'modules/chat/client/views/chat.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);

'use strict';

// Create the 'chat' controller
angular.module('chat').controller('ChatController', ['$scope', '$location', 'Authentication', 'Socket',
  function ($scope, $location, Authentication, Socket) {
    // Create a messages array
    $scope.messages = [];

    // If user is not signed in then redirect back home
    if (!Authentication.user) {
      $location.path('/');
    }

    // Make sure the Socket is connected
    if (!Socket.socket) {
      Socket.connect();
    }

    // Add an event listener to the 'chatMessage' event
    Socket.on('chatMessage', function (message) {
      $scope.messages.unshift(message);
    });

    // Create a controller method for sending messages
    $scope.sendMessage = function () {
      // Create a new message object
      var message = {
        text: this.messageText
      };

      // Emit a 'chatMessage' message event
      Socket.emit('chatMessage', message);

      // Clear the message text
      this.messageText = '';
    };

    // Remove the event listener when the controller instance is destroyed
    $scope.$on('$destroy', function () {
      Socket.removeListener('chatMessage');
    });
  }
]);

'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Admin',
      state: 'admin',
      type: 'dropdown',
      roles: ['admin']
    });
  }
]);

'use strict';

// Setting up route
angular.module('core.admin.routes').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view/>',
        data: {
          roles: ['admin']
        }
      });
  }
]);

'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html'
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);

'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);

'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.myInterval = 8000;
    $scope.noWrapSlides = false;

    $scope.slides = [{
      image:'unify/img/kitten/1.jpg',
      text: 'test'
    },
    {
      image:'unify/img/kitten/2.jpg',
      text: 'test'

    },
    {
      image:'unify/img/kitten/3.jpg',
      text: 'test'
    }
    ];





  }
]);


// -------------------------------------------------- //
// -------------------------------------------------- //
// This CSS class-based directive controls the pre-bootstrap loading screen. By
// default, it is visible on the screen; but, once the application loads, we'll
// fade it out and remove it from the DOM.
// --
// NOTE: Normally, I would probably just jQuery to fade-out the container; but,
// I thought this would be a nice moment to learn a bit more about AngularJS
// animation. As such, I'm using the ng-leave workflow to learn more about the
// ngAnimate module.
angular.module('core').directive(
    'mAppLoading',
    ["$animate", function($animate) {
      // Return the directive configuration.
      return({
        link: link,
        restrict: 'C'
      });
      // I bind the JavaScript events to the scope.
      function link(scope, element, attributes) {
        // Due to the way AngularJS prevents animation during the bootstrap
        // of the application, we can't animate the top-level container; but,
        // since we added "ngAnimateChildren", we can animated the inner
        // container during this phase.
        // --
        // NOTE: Am using .eq(1) so that we don't animate the Style block.
        $animate.leave(element.children().eq(1)).then(
            function cleanupAfterAnimation() {
              // Remove the root directive element.
              element.remove();
              // Clear the closed-over variable references.
              scope = element = attributes = null;
            }
        );
      }
    }]
);

'use strict';

/**
 * Edits by Ryan Hutchison
 * Credit: https://github.com/paulyoder/angular-bootstrap-show-errors */

angular.module('core')
  .directive('showErrors', ['$timeout', '$interpolate', function ($timeout, $interpolate) {
    var linkFn = function (scope, el, attrs, formCtrl) {
      var inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses,
        initCheck = false,
        showValidationMessages = false,
        blurred = false;

      options = scope.$eval(attrs.showErrors) || {};
      showSuccess = options.showSuccess || false;
      inputEl = el[0].querySelector('.form-control[name]') || el[0].querySelector('[name]');
      inputNgEl = angular.element(inputEl);
      inputName = $interpolate(inputNgEl.attr('name') || '')(scope);

      if (!inputName) {
        throw 'show-errors element has no child input elements with a \'name\' attribute class';
      }

      var reset = function () {
        return $timeout(function () {
          el.removeClass('has-error');
          el.removeClass('has-success');
          showValidationMessages = false;
        }, 0, false);
      };

      scope.$watch(function () {
        return formCtrl[inputName] && formCtrl[inputName].$invalid;
      }, function (invalid) {
        return toggleClasses(invalid);
      });

      scope.$on('show-errors-check-validity', function (event, name) {
        if (angular.isUndefined(name) || formCtrl.$name === name) {
          initCheck = true;
          showValidationMessages = true;

          return toggleClasses(formCtrl[inputName].$invalid);
        }
      });

      scope.$on('show-errors-reset', function (event, name) {
        if (angular.isUndefined(name) || formCtrl.$name === name) {
          return reset();
        }
      });

      toggleClasses = function (invalid) {
        el.toggleClass('has-error', showValidationMessages && invalid);
        if (showSuccess) {
          return el.toggleClass('has-success', showValidationMessages && !invalid);
        }
      };
    };

    return {
      restrict: 'A',
      require: '^form',
      compile: function (elem, attrs) {
        if (attrs.showErrors.indexOf('skipFormGroupCheck') === -1) {
          if (!(elem.hasClass('form-group') || elem.hasClass('input-group'))) {
            throw 'show-errors element does not have the \'form-group\' or \'input-group\' class';
          }
        }
        return linkFn;
      }
    };
  }]);

'use strict';

angular.module('core').factory('authInterceptor', ['$q', '$injector',
  function ($q, $injector) {
    return {
      responseError: function(rejection) {
        if (!rejection.config.ignoreAuthModule) {
          switch (rejection.status) {
            case 401:
              $injector.get('$state').transitionTo('authentication.signin');
              break;
            case 403:
              $injector.get('$state').transitionTo('forbidden');
              break;
          }
        }
        // otherwise, default behaviour
        return $q.reject(rejection);
      }
    };
  }
]);

'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [
  function () {
    // Define a set of default roles
    this.defaultRoles = ['user', 'admin'];

    // Define the menus object
    this.menus = {};

    // A private function for rendering decision
    var shouldRender = function (user) {
      if (!!~this.roles.indexOf('*')) {
        return true;
      } else {
        if(!user) {
          return false;
        }
        for (var userRoleIndex in user.roles) {
          for (var roleIndex in this.roles) {
            if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
              return true;
            }
          }
        }
      }

      return false;
    };

    // Validate menu existance
    this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId]) {
          return true;
        } else {
          throw new Error('Menu does not exist');
        }
      } else {
        throw new Error('MenuId was not provided');
      }

      return false;
    };

    // Get the menu object by menu id
    this.getMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Return the menu object
      return this.menus[menuId];
    };

    // Add new menu object by menu id
    this.addMenu = function (menuId, options) {
      options = options || {};

      // Create the new menu
      this.menus[menuId] = {
        roles: options.roles || this.defaultRoles,
        items: options.items || [],
        shouldRender: shouldRender
      };

      // Return the menu object
      return this.menus[menuId];
    };

    // Remove existing menu object by menu id
    this.removeMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Return the menu object
      delete this.menus[menuId];
    };

    // Add menu item object
    this.addMenuItem = function (menuId, options) {
      options = options || {};

      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Push new menu item
      this.menus[menuId].items.push({
        title: options.title || '',
        state: options.state || '',
        type: options.type || 'item',
        class: options.class,
        roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles),
        position: options.position || 0,
        items: [],
        shouldRender: shouldRender
      });

      // Add submenu items
      if (options.items) {
        for (var i in options.items) {
          this.addSubMenuItem(menuId, options.state, options.items[i]);
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    // Add submenu item object
    this.addSubMenuItem = function (menuId, parentItemState, options) {
      options = options || {};

      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Search for menu item
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].state === parentItemState) {
          // Push new submenu item
          this.menus[menuId].items[itemIndex].items.push({
            title: options.title || '',
            state: options.state || '',
            roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : options.roles),
            position: options.position || 0,
            shouldRender: shouldRender
          });
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    // Remove existing menu object by menu id
    this.removeMenuItem = function (menuId, menuItemState) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].state === menuItemState) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    // Remove existing menu object by menu id
    this.removeSubMenuItem = function (menuId, submenuItemState) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
          if (this.menus[menuId].items[itemIndex].items[subitemIndex].state === submenuItemState) {
            this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    //Adding the topbar menu
    this.addMenu('topbar', {
      roles: ['*']
    });
  }
]);

'use strict';

// Create the Socket.io wrapper service
angular.module('core').service('Socket', ['Authentication', '$state', '$timeout',
  function (Authentication, $state, $timeout) {
    // Connect to Socket.io server
    this.connect = function () {
      // Connect only when authenticated
      if (Authentication.user) {
        this.socket = io();
      }
    };
    this.connect();

    // Wrap the Socket.io 'on' method
    this.on = function (eventName, callback) {
      if (this.socket) {
        this.socket.on(eventName, function (data) {
          $timeout(function () {
            callback(data);
          });
        });
      }
    };

    // Wrap the Socket.io 'emit' method
    this.emit = function (eventName, data) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

    // Wrap the Socket.io 'removeListener' method
    this.removeListener = function (eventName) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };
  }
]);

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



angular.module('createdoc', ['formly', 'formlyBootstrap'], ["formlyConfigProvider", function config(formlyConfigProvider) {
  // set templates here
  formlyConfigProvider.setWrapper({
    name: 'horizontalBootstrapLabel',
    template: [
      '<label for="{{::id}}" class="col-sm-4 control-label">',
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




}]);

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

'use strict';

// Configure the 'createdoc' module routes
angular.module('createdoc').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('createdoc', {
        url: '/createdoc',
        templateUrl: 'modules/createdoc/client/views/createdoc.client.view.html',
        data: {
          roles: ['user', 'admin']
        },
        controller: 'CategoryController',
        resolve: {
          categoryData: ["Category", function (Category) { // Inject a resource named 'Document'

            return Category.query();

          }]
        }
      });




    $stateProvider
    .state('document', {
      url: '/document/{documentId}',
      templateUrl: function($stateParams){return 'modules/createdoc/client/views/createdoc.' + $stateParams.documentId+ '.client.view.html';},
     //'modules/createdoc/client/views/createdoc.document.client.view.html',
      data: {
        roles: ['user', 'admin']
      },
      controller: 'CreatedocController',
      resolve: {
        documentData: ["$stateParams", "Document", function($stateParams, Document) { // Inject a resource named 'Document'

          return Document.get({ documentId: $stateParams.documentId });

                // Return the original promise inside the returned $resource object
                // Since this is a true promise, the resolve will wait
                //return Data.$promise;
        }]
      }
    });
  }
]);

'use strict';

angular.module('createdoc').controller('ModalQuestionThree', ['$scope', '$stateParams','$location','Authentication','documentData', '$log', '$uibModal',
    function ($scope, $stateParams, $location, Authentication, documentData, $log, $uibModal, $q, $http) {
      $scope.data = documentData;
      $scope.authentication = Authentication;
      $scope.person = {
        first_name: Authentication.user.firstName || '',
        last_name: Authentication.user.lastName || ''
      };
    }]);

'use strict';
angular.module('createdoc').controller('CategoryController', ['$scope', '$stateParams','Authentication','categoryData',
    function ($scope, $stateParams, Authentication, categoryData) {

      $scope.categories = categoryData;
    }]);

'use strict';
angular.module('createdoc').controller('CreatedocController', ['$scope', '$stateParams','$location','Authentication','documentData', '$log', '$uibModal',
  function ($scope, $stateParams, $location, Authentication, documentData, $log, $uibModal, $q, $http) {



    $scope.documentPreview = '\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 border=\u00220\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 class=\u0022ckeditor_table_no_border\u0022 style=\u0022width: 100%;\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0414\u043e\u0433\u043e\u0432\u043e\u0440\u0026nbsp;\u003C\/strong\u003E\u003Cstrong\u003E\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433\u0026nbsp;\u003C\/strong\u003E\u003Cstrong\u003E\u2116\u0026nbsp;[\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440\u003C\/i\u003E]\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u003Cem\u003E[\u003Ci\u003E\u043c\u0435\u0441\u0442\u043e \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: right;\u0022\u003E\n\t\t\t\t\u003Cem\u003E[\u003Ci\u003E\u0434\u0430\u0442\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/em\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0026nbsp;\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003Cstrong\u003E,\u003C\/strong\u003E \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u044b\u0439(-\u0430\u044f) \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a, \u0441 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0438\u0026nbsp;[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0438\u043c\u0435\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u0026nbsp;\u0432 \u043b\u0438\u0446\u0435 [\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E], \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 [\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043b\u0438\u0446\u043e (\u0443\u0441\u0442\u0430\u0432, \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u044c,\u0026hellip;)\u003C\/i\u003E], \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u043e\u0435(-\u044b\u0439) \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c, \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0432\u043c\u0435\u0441\u0442\u0435 \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u044b\u0435 \u0421\u0442\u043e\u0440\u043e\u043d\u044b, \u0430 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 - \u0421\u0442\u043e\u0440\u043e\u043d\u0430, \u0437\u0430\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u043e \u043d\u0438\u0436\u0435\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c.\u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E1. \u041f\u0440\u0435\u0434\u043c\u0435\u0442 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/h4\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E1.1\u0026#8194;\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u043e\u0431\u044f\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438 (\u0434\u0430\u043b\u0435\u0435 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443 \u0026ndash; \u0443\u0441\u043b\u0443\u0433\u0438), \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u2116 1, \u0430 \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u043e\u0431\u044f\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u0438 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0438\u0445.\u003C\/p\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E1.2\u0026#8194;\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u21161 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443 \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f \u0443\u0441\u043b\u0443\u0433, \u0441\u0440\u043e\u043a \u0438 \u043c\u0435\u0441\u0442\u043e \u0438\u0445 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0421\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u2116 1 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u043e\u0442\u044a\u0435\u043c\u043b\u0435\u043c\u043e\u0439 \u0447\u0430\u0441\u0442\u044c\u044e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430. \u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E2. \u041f\u043b\u0430\u0442\u0430 \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443\u003C\/h4\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E2.1\u0026#8194;\u0426\u0435\u043d\u0430 \u0437\u0430\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0446\u0435\u043d\u043e\u0439 \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u2116 1.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E2.2\u0026#8194;\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0432\u043d\u043e\u0441\u0438\u0442 (\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u044f\u0435\u0442) \u0437\u0430\u0434\u0430\u0442\u043e\u043a \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 [\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u043c\u0438\u003C\/i\u003E] % \u043e\u0442 \u0446\u0435\u043d\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 [\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u043c\u0438\u003C\/i\u003E] [\u003Ci\u003E\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445, \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u0445, \u0440\u0430\u0431\u043e\u0447\u0438\u0445\u003C\/i\u003E] \u0434\u043d\u0435\u0439 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430. \u041e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u044b \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 [\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u043c\u0438\u003C\/i\u003E] [\u003Ci\u003E\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445, \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u0445, \u0440\u0430\u0431\u043e\u0447\u0438\u0445\u003C\/i\u003E] \u0434\u043d\u0435\u0439 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0421\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0410\u043a\u0442\u0430 \u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433. \u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E2.3\u0026#8194;\u0420\u0430\u0441\u0447\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u0421\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438.\u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E3. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0421\u0442\u043e\u0440\u043e\u043d\u003C\/h4\u003E \u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E3.1\u0026#8194;\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0438\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u043f\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443 \u0421\u0442\u043e\u0440\u043e\u043d\u044b \u043d\u0435\u0441\u0443\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043e\u043c \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0423\u043a\u0440\u0430\u0438\u043d\u044b. \u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u0435\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0435\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E3.2\u0026#8194;\u0417\u0430 \u043d\u0435\u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u0445 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u0445 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0443\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044e \u043f\u0435\u043d\u044e \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 [\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u003C\/i\u003E] % \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u043a\u0438, \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0430\u0432\u043a\u0438 \u041d\u0411\u0423.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E3.3\u0026#8194;\u0417\u0430 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u0441\u0440\u043e\u043a\u043e\u0432 \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433 \u043d\u0430 \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f \u0432\u043e\u0437\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0448\u0442\u0440\u0430\u0444 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 [\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u003C\/i\u003E] % \u043e\u0442 \u0441\u0443\u043c\u043c\u044b \u043d\u0435\u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430.\u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E4. \u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0441\u043f\u043e\u0440\u043e\u0432\u003C\/h4\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E4.1\u0026#8194;\u0412\u0441\u0435 \u0440\u0430\u0437\u043d\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0438 \u0441\u043f\u043e\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0421\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430, \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u044e\u0442\u0441\u044f \u043f\u0443\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043e\u0432.\u003C\/p\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E4.2\u0026#8194;\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u0421\u0442\u043e\u0440\u043e\u043d\u044b \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043e\u0432 \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u044c \u0432\u0437\u0430\u0438\u043c\u043d\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043f\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0438\u043c \u0440\u0430\u0437\u043d\u043e\u0433\u043b\u0430\u0441\u0438\u044f\u043c, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u0430 \u0438\u0437 \u0421\u0442\u043e\u0440\u043e\u043d \u0443\u043a\u043b\u043e\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043e\u0432, \u0442\u043e \u0441\u043f\u043e\u0440 \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0443\u0434\u0435\u0431\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0423\u043a\u0440\u0430\u0438\u043d\u044b.\u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E5. \u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438 \u0440\u0430\u0441\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/h4\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E5.1\u0026#8194;\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u0432\u0437\u0430\u0438\u043c\u043d\u043e\u043c\u0443 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044e \u0421\u0442\u043e\u0440\u043e\u043d.\u003C\/p\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E5.2\u0026#8194;\u042d\u0442\u043e\u0442 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0435\u043d (\u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043f\u0443\u0442\u0435\u043c \u0440\u0430\u0441\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u044f) \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f\u0445, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043e\u043c \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0423\u043a\u0440\u0430\u0438\u043d\u044b.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E5.3\u0026#8194;\u0421\u0434\u0435\u043b\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u043d\u043e\u0441\u0438\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u044d\u0442\u043e\u0442 \u0434\u043e\u0433\u043e\u0432\u043e\u0440, \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0421\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e.\u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E6. \u0417\u0430\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u003C\/h4\u003E \u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E6.1\u0026#8194;\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0435\u0433\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 [\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0440\u043e\u043a\u003C\/i\u003E], \u043d\u043e \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0421\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u0432\u0437\u044f\u0442\u044b\u0445 \u043d\u0430 \u0441\u0435\u0431\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E6.2\u0026#8194;\u0421\u0442\u043e\u0440\u043e\u043d\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0442, \u0447\u0442\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u043e\u0432 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0430, \u0438 \u043d\u0438 \u043e\u0434\u043d\u0430 \u0438\u0437 \u0421\u0442\u043e\u0440\u043e\u043d \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0441\u044b\u043b\u0430\u0442\u044c\u0441\u044f \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u043d\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043f\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u043a\u0430\u043a \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0435\u0433\u043e \u043d\u0435\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c \u0438\u043b\u0438 \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c.\u003C\/p\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E6.3\u0026#8194;\u0421\u0442\u043e\u0440\u043e\u043d\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0442, \u0447\u0442\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u043a\u0430\u043a\u043e\u0435-\u043b\u0438\u0431\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0441\u0442\u0430\u043d\u0435\u0442 \u043b\u0438\u0431\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u043e \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435\u043c \u0437\u0430\u043a\u043e\u043d\u0443, \u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0432\u043e \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0436\u0435 \u0421\u0442\u043e\u0440\u043e\u043d\u044b \u043f\u0440\u0438\u043c\u0443\u0442 \u043c\u0435\u0440\u044b \u043f\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0432 \u0442\u043e\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043c\u0435 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0421\u0442\u043e\u0440\u043e\u043d.\u003C\/p\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E6.4\u0026#8194;\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0432\u0441\u0435 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u044b \u043f\u043e \u043d\u0435\u043c\u0443, \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0430, \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u044b \u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b \u043e \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044f\u0445 \u043f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0430\u043a \u0438\u043b\u0438 \u0438\u043d\u0430\u0447\u0435 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043a \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443, \u0443\u0442\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0438\u043b\u0443.\u003C\/p\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E6.5\u0026#8194;\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f, \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0435 \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0438 \u043d\u0435 \u0443\u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u043c, \u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043d\u043e\u0440\u043c\u0430\u043c\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0423\u043a\u0440\u0430\u0438\u043d\u044b.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E6.6\u0026#8194;\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0432\u0443\u0445 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\u0445, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u0443\u044e \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0438\u043b\u0443, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0421\u0442\u043e\u0440\u043e\u043d\u044b.\u003C\/p\u003E\u003Ch4 style=\u0022text-align: center; \u0022\u003E \u0420\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0421\u0442\u043e\u0440\u043e\u043d\u003C\/h4\u003E \u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 align=\u0022center\u0022 border=\u00220\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 class=\u0022ckeditor_table_no_border\u0022 height=\u0022460\u0022 style=\u0022width: 100%;\u0022 width=\u0022546\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0438\u043c\u0435\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 (\u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 (\u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u0441\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E] \u2116 [\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t\u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 (\u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t\u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u043e\u0440\u0433\u0430\u043d, \u0432\u044b\u0434\u0430\u0432\u0448\u0438\u0439 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u003C\/i\u003E] [\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u0434\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u043a\u043e\u0434 \u0415\u0413\u0420\u041f\u041e\u0423:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0415\u0413\u0420\u041f\u041e\u0423 (\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u0434)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430\u003C\/i\u003E] \u0432 [\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430\u003C\/i\u003E] \u0432 [\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u041c\u0424\u041e:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041c\u0424\u041e (\u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u041c\u0424\u041e:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041c\u0424\u041e (\u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043b\u0435\u0444\u043e\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043b\u0435\u0444\u043e\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0438\u0434 \u043d\u0430\u043b\u043e\u0433\u043e\u043e\u0431\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd colspan=\u00222\u0022 rowspan=\u00221\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t____________\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t____________\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cem\u003E(\u041f\u043e\u0434\u043f\u0438\u0441\u044c)\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cem\u003E(\u041f\u043e\u0434\u043f\u0438\u0441\u044c)\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0026nbsp;\u003C\/p\u003E\u003Cdiv style=\u0022page-break-after: always;\u0022\u003E\u003Cspan style=\u0022display: none;\u0022\u003E\u0026nbsp;\u003C\/span\u003E\u003C\/div\u003E\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 border=\u00220\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 class=\u0022ckeditor_table_no_border\u0022 style=\u0022width: 100%;\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0410\u041a\u0422\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u043f\u0440\u0438\u0435\u043c\u0430-\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cem\u003E\u043a [\u003Ci\u003E\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/i\u003E] \u2116 [\u003Ci\u003E\u2116 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/i\u003E] \u043e\u0442 [\u003Ci\u003E\u0434\u0430\u0442\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/i\u003E]\u003C\/em\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u043c\u0435\u0441\u0442\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0410\u043a\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: right;\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0434\u0430\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0410\u043a\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: center;\u0022\u003E\n\t\u003Cstrong\u003E\u0026nbsp;\u003C\/strong\u003E\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u003Cstrong\u003E[\u003Ci\u003E\u0424\u0418\u041e\u003C\/i\u003E],\u003C\/strong\u003E \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u044b\u0439(-\u0430\u044f) \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a, \u0441 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0438 [\u003Ci\u003E\u003Cstrong\u003E\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/strong\u003E\u003C\/i\u003E] \u0432 \u043b\u0438\u0446\u0435 [\u003Ci\u003E\u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0438 \u0424\u0418\u041e \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E], \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 [\u003Ci\u003E\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E], \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u043e\u0435(-\u044b\u0439) \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c, \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0432\u043c\u0435\u0441\u0442\u0435 \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u044b\u0435 \u0421\u0442\u043e\u0440\u043e\u043d\u044b, \u0430 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 - \u0421\u0442\u043e\u0440\u043e\u043d\u0430, \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0410\u043a\u0442 \u043e \u043d\u0438\u0436\u0435\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u043e\u043a\u0430\u0437\u0430\u043b, \u0430 \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u043f\u0440\u0438\u043d\u044f\u043b \u0442\u0430\u043a\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438:\u003C\/p\u003E\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 border=\u00221\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 style=\u0022width: 500px;\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd\u003E\n\t\t\t\t\u003Cstrong\u003E\u2116\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd\u003E\n\t\t\t\t\u003Cstrong\u003E\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0426\u0435\u043d\u0430\u003C\/strong\u003E \u003Cstrong\u003E\u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041d\u0414\u0421\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0426\u0435\u043d\u0430 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u041d\u0414\u0421 \u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd\u003E\n\t\t\t\t1\u003C\/td\u003E\n\t\t\t\u003Ctd\u003E\n\t\t\t\t[\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0026nbsp;\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0410\u043a\u0442 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0432\u0443\u0445 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\u0445, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u0421\u0442\u043e\u0440\u043e\u043d, \u0435\u0433\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0432\u0448\u0438\u0445.\u003C\/p\u003E\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 align=\u0022center\u0022 border=\u00220\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 class=\u0022ckeditor_table_no_border\u0022 height=\u0022460\u0022 style=\u0022width: 100%;\u0022 width=\u0022546\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0438\u043c\u0435\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0410\u0434\u0440\u0435\u0441 (\u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 (\u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f: \u0441\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E] \u2116 [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f: \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t\u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 (\u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t\u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d: \u043e\u0440\u0433\u0430\u043d \u0432\u044b\u0434\u0430\u0432\u0448\u0438\u0439 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u003C\/i\u003E] [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d: \u0434\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u043a\u043e\u0434 \u0415\u0413\u0420\u041f\u041e\u0423:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041a\u043e\u0434 \u0415\u0413\u0420\u041f\u041e\u0423 (\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u0434)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430\u003C\/i\u003E] \u0432 [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430\u003C\/i\u003E] \u0432 [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u041c\u0424\u041e:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041c\u0424\u041e (\u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u041c\u0424\u041e:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041c\u0424\u041e (\u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043b\u0435\u0444\u043e\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043b\u0435\u0444\u043e\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0438\u0434 \u043d\u0430\u043b\u043e\u0433\u043e\u043e\u0431\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd colspan=\u00222\u0022 rowspan=\u00221\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t____________\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t____________\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cem\u003E(\u041f\u043e\u0434\u043f\u0438\u0441\u044c)\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cem\u003E(\u041f\u043e\u0434\u043f\u0438\u0441\u044c)\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0026nbsp;\u003C\/p\u003E\u003Cdiv style=\u0022page-break-after: always;\u0022\u003E\u003Cspan style=\u0022display: none;\u0022\u003E\u0026nbsp;\u003C\/span\u003E\u003C\/div\u003E\u003Cbr \/\u003E\n\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 border=\u00220\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 class=\u0022ckeditor_table_no_border\u0022 style=\u0022width: 100%;\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u041f\u0420\u0418\u041b\u041e\u0416\u0415\u041d\u0418\u0415 \u2116 1\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cem\u003E\u043a [\u003Ci\u003E\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/i\u003E] \u2116 [\u003Ci\u003E\u2116 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/i\u003E] \u043e\u0442 [\u003Ci\u003E\u0434\u0430\u0442\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430\u003C\/i\u003E]\u003C\/em\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u043c\u0435\u0441\u0442\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 style=\u0022text-align: right;\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0434\u0430\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u003Cstrong\u003E[\u003Ci\u003E\u0424\u0418\u041e\u003C\/i\u003E],\u003C\/strong\u003E \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u044b\u0439(-\u0430\u044f) \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a, \u0441 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0438 [\u003Ci\u003E\u003Cstrong\u003E\u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/strong\u003E\u003C\/i\u003E] \u0432 \u043b\u0438\u0446\u0435 [\u003Ci\u003E\u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0438 \u0424\u0418\u041e \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E], \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 [\u003Ci\u003E\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E], \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u043e\u0435(-\u044b\u0439) \u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c, \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0432\u043c\u0435\u0441\u0442\u0435 \u0438\u043c\u0435\u043d\u0443\u0435\u043c\u044b\u0435 \u0421\u0442\u043e\u0440\u043e\u043d\u044b, \u0430 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 - \u0421\u0442\u043e\u0440\u043e\u043d\u0430, \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e \u043d\u0438\u0436\u0435\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c.\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0026nbsp; \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0443 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0026nbsp;[\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0438\u0434 \u0443\u0441\u043b\u0443\u0433\u003C\/i\u003E]\u0026nbsp;\u0443\u0441\u043b\u0443\u0433\u0438:\u003C\/p\u003E\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 border=\u00221\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 style=\u0022width: 500px; height: 102px;\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd rowspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u2116\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd rowspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd rowspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0421\u043e\u0441\u0442\u0430\u0432 \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd colspan=\u00221\u0022 rowspan=\u00222\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cp style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\t\u003Cstrong\u003E\u041c\u0435\u0441\u0442\u043e \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/strong\u003E\u003Cbr \/\u003E\n\t\t\t\t\t\u0026nbsp;\u003C\/p\u003E\n\t\t\t\u003C\/td\u003E\n\t\t\t\u003Ctd colspan=\u00221\u0022 rowspan=\u00222\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cp style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\t\u003Cstrong\u003E\u0421\u0440\u043e\u043a \u003C\/strong\u003E\u003Cstrong\u003E\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433\u003C\/strong\u003E\u003C\/p\u003E\n\t\t\t\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top; text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0426\u0435\u043d\u0430\u0026nbsp; \u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top; text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0426\u0435\u043d\u0430\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top; text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u041d\u0414\u0421\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top; text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u041d\u0414\u0421\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E1\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\t\t\t\t[\u003Ci\u003E\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u043e\u0441\u0442\u0430\u0432 \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/i\u003E]\u003C\/p\u003E\n\t\t\t\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\t\t\t\t[\u003Ci\u003E\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0433\u0434\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/i\u003E]\u003C\/p\u003E\n\t\t\t\t\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\t\t\t\t\u0026nbsp;\u003C\/p\u003E\n\t\t\t\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\t\t\t\t[\u003Ci\u003E\u0441\u0440\u043e\u043a \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433\u003C\/i\u003E]\u003C\/p\u003E\n\t\t\t\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top; text-align: center;\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top; text-align: center;\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0446\u0438\u0444\u0440\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: center;\u0022\u003E\n\t\u0026nbsp;\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0423\u0441\u043b\u0443\u0433\u0430 [\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438\u003C\/i\u003E] \u0434\u043e\u043b\u0436\u043d\u0430 \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0430\u043c: [\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c\u044b\u0435 \u043a \u0443\u0441\u043b\u0443\u0433\u0430\u043c\u003C\/i\u003E].\u003C\/p\u003E\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0434\u0432\u0443\u0445 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430\u0445, \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u0421\u0442\u043e\u0440\u043e\u043d, \u0435\u0433\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0432\u0448\u0438\u0445.\u003C\/p\u003E\u003Ctable style=\u0022border-collapse:collapse; width:100%;\u0022 align=\u0022center\u0022 border=\u00220\u0022 cellpadding=\u00220\u0022 cellspacing=\u00220\u0022 class=\u0022ckeditor_table_no_border\u0022 height=\u0022460\u0022 style=\u0022width: 100%;\u0022 width=\u0022546\u0022\u003E\n\t\u003Ctbody\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022 style=\u0022text-align: center;\u0022\u003E\n\t\t\t\t\u003Cstrong\u003E\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u003C\/strong\u003E\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00222\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0438\u043c\u0435\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0410\u0434\u0440\u0435\u0441 (\u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 (\u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f: \u0441\u0435\u0440\u0438\u044f \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E] \u2116 [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0438\u044f: \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t\u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 (\u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t\u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022 colspan=\u00221\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d: \u043e\u0440\u0433\u0430\u043d \u0432\u044b\u0434\u0430\u0432\u0448\u0438\u0439 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u003C\/i\u003E] [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u044b\u0434\u0430\u043d: \u0434\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022vertical-align: top;\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u043a\u043e\u0434 \u0415\u0413\u0420\u041f\u041e\u0423:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041a\u043e\u0434 \u0415\u0413\u0420\u041f\u041e\u0423 (\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u0434)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430\u003C\/i\u003E] \u0432 [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430\u003C\/i\u003E] \u0432 [\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0447\u0435\u0442: \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u041c\u0424\u041e:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041c\u0424\u041e (\u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u041c\u0424\u041e:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u041c\u0424\u041e (\u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043b\u0435\u0444\u043e\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t\u0442\u0435\u043b\u0435\u0444\u043e\u043d:\u003C\/td\u003E\n\t\t\t\u003Ctd class=\u0022ckeditor_table_no_border\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0422\u0435\u043b\u0435\u0444\u043e\u043d (\u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441:\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E\u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0438\u0434 \u043d\u0430\u043b\u043e\u0433\u043e\u043e\u0431\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd colspan=\u00222\u0022 rowspan=\u00221\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t____________\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t____________\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t[\u003Ci\u003E \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424.\u0418.\u041e. \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0446\u0430\u003C\/i\u003E]\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\t\u003Ctr\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cem\u003E(\u041f\u043e\u0434\u043f\u0438\u0441\u044c)\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\t\u003Ctd style=\u0022text-align: center;\u0022 valign=\u0022top\u0022\u003E\n\t\t\t\t\u003Cem\u003E(\u041f\u043e\u0434\u043f\u0438\u0441\u044c)\u003C\/em\u003E\u003C\/td\u003E\n\t\t\t\u003Ctd valign=\u0022top\u0022\u003E\n\t\t\t\t\u0026nbsp;\u003C\/td\u003E\n\t\t\u003C\/tr\u003E\n\t\u003C\/tbody\u003E\n\u003C\/table\u003E\n\u003Cp style=\u0022text-align: justify; text-indent: 20px; \u0022\u003E\n\t\u0026nbsp;\u003C\/p\u003E"}';
    $scope.place = {};
    $scope.data = documentData;
    $scope.authentication = Authentication;
    $scope.person = {
      first_name: Authentication.user.firstName || '',
      last_name: Authentication.user.lastName || ''
    };

    //Accordion open on heading
    $scope.isOpen = true;

    //Modal open function
    $scope.openModal = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: function ($q, $http, $scope, $uibModalInstance, data, person) {


          //Header title select
          $scope.personType = function(){
            if (data.questions[0].selected === '1') return 'юридичну особу';
            else if (data.questions[0].selected === '2') return 'фізичну особу - підприємця';
            else if (data.questions[0].selected === '3') return 'фізичну особу';
          };
          //Modal window close functions
          $scope.close = function () {
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
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Найменування відповідача',
                placeholder: 'Найменування відповідача',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              key: 'code_edrp',
              type: 'horizontalInput',
              templateOptions: {
                type: 'text',
                label: 'Код ЄДРПОУ',
                placeholder: 'Введіть код ЄДРПОУ Відповідача (8 цифр)',
                required: true
              },
              hideExpression : function(){
                return (vm.data.questions[0].selected === '2')||(vm.data.questions[0].selected === '3');
              }
            },
            {
              "template": "<hr class='devider devider-db'/>"
            },
            {
              key: 'address',
              type: 'horizontalGoogleInput',
              templateOptions: {
                type: 'text',
                label: 'Адреса',
                placeholder: '',
                required: true,
                googleAutocomplete: ''
              }
            },
            {
              "className": "row",
              "fieldGroup": [
                {
                  "className": "input col col-6",
                  "type": "input",
                  "key": "address.address_components",
                  "templateOptions": {
                    "label": "Вулиця"
                  }
                },
                {
                  "className": "input col col-4",
                  "type": "input",
                  "key": "address.address_components[0].long_name",
                  "templateOptions": {
                    "label": "Місто"
                  }
                },
                {
                  "className": "input col col-2",
                  "type": "input",
                  "key": "zip",
                  "templateOptions": {
                    "type": "number",
                    "label": "Індекс",
                    "max": 99999,
                    "min": 0,
                    "pattern": "\\d{5}"
                  }
                }
              ]
            },
            {
              "template": "<hr class='devider devider-db' />"
            },
            {
              key: 'name',
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
                mask: '(999) 999-9999'
              }
            },

            {
              key: 'awesomeAddress',
              type: 'async-ui-select',
              templateOptions: {
                label: 'Назва(або шо угодно)',
                placeholder: 'тут може бути',
                valueProp: 'name',
                labelProp: 'name',
                options: [],
                refresh: refreshAddresses,
                refreshDelay: 0
              }
            }



          ];


          function refreshAddresses(address, field) {
            var promise;
            if (!address) {
              promise = $q.when({ data: { results: [] } });
            } else {
              var params = { name: address };
              var endpoint = '/api/company';
              promise = $http.get(endpoint, { params: params });
            }
            return promise.then(function(response) {
              field.templateOptions.options = response.data.results;
            });
          }



        },
        controllerAs: 'vm',
        size: 'md',
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



'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('createdoc').factory('Category', ['$resource',
  function ($resource) {
    return $resource('api/category/:categoryId', {
      categoryId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  },
]);

angular.module('createdoc').factory('Document', ['$resource',
  function ($resource) {
    return $resource('api/document/:documentId', {
      documentId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  },
]);




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


'use strict';

// Configure the 'support' module routes
angular.module('support').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('support', {
        url: '/support',
        templateUrl: 'modules/support/client/views/support.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);

'use strict';

angular.module('support').controller('SupportController', ['$scope',
  function ($scope) {
    $scope.hello = 'Jony';

  }
  ]);

'use strict';

// Configuring the Articles module
angular.module('users.admin').run(['Menus',
  function (Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Users',
      state: 'admin.users'
    });
  }
]);

'use strict';

// Setting up route
angular.module('users.admin.routes').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('admin.users', {
        url: '/users',
        templateUrl: 'modules/users/client/views/admin/list-users.client.view.html',
        controller: 'UserListController'
      })
      .state('admin.user', {
        url: '/users/:userId',
        templateUrl: 'modules/users/client/views/admin/view-user.client.view.html',
        controller: 'UserController',
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        }
      })
      .state('admin.user-edit', {
        url: '/users/:userId/edit',
        templateUrl: 'modules/users/client/views/admin/edit-user.client.view.html',
        controller: 'UserController',
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        }
      });
  }
]);

'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
  function ($httpProvider) {
    // Set the httpProvider "not authorized" interceptor
    $httpProvider.interceptors.push(['$q', '$location', 'Authentication',
      function ($q, $location, Authentication) {
        return {
          responseError: function (rejection) {
            switch (rejection.status) {
              case 401:
                // Deauthenticate the global user
                Authentication.user = null;

                // Redirect to signin page
                $location.path('signin');
                break;
              case 403:
                // Add unauthorized behaviour
                break;
            }

            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);

'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider
      .state('settings', {
        abstract: true,
        url: '/settings',
        templateUrl: 'modules/users/client/views/settings/settings.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('settings.profile', {
        url: '/profile',
        templateUrl: 'modules/users/client/views/settings/edit-profile.client.view.html'
      })
      .state('settings.password', {
        url: '/password',
        templateUrl: 'modules/users/client/views/settings/change-password.client.view.html'
      })
      .state('settings.accounts', {
        url: '/accounts',
        templateUrl: 'modules/users/client/views/settings/manage-social-accounts.client.view.html'
      })
      .state('settings.picture', {
        url: '/picture',
        templateUrl: 'modules/users/client/views/settings/change-profile-picture.client.view.html'
      })
      .state('authentication', {
        abstract: true,
        url: '/authentication',
        templateUrl: 'modules/users/client/views/authentication/authentication.client.view.html'
      })
      .state('authentication.signup', {
        url: '/signup',
        templateUrl: 'modules/users/client/views/authentication/signup.client.view.html'
      })
      .state('authentication.signin', {
        url: '/signin?err',
        templateUrl: 'modules/users/client/views/authentication/signin.client.view.html'
      })
      .state('password', {
        abstract: true,
        url: '/password',
        template: '<ui-view/>'
      })
      .state('password.forgot', {
        url: '/forgot',
        templateUrl: 'modules/users/client/views/password/forgot-password.client.view.html'
      })
      .state('password.reset', {
        abstract: true,
        url: '/reset',
        template: '<ui-view/>'
      })
      .state('password.reset.invalid', {
        url: '/invalid',
        templateUrl: 'modules/users/client/views/password/reset-password-invalid.client.view.html'
      })
      .state('password.reset.success', {
        url: '/success',
        templateUrl: 'modules/users/client/views/password/reset-password-success.client.view.html'
      })
      .state('password.reset.form', {
        url: '/:token',
        templateUrl: 'modules/users/client/views/password/reset-password.client.view.html'
      });
  }
]);

'use strict';

angular.module('users.admin').controller('UserListController', ['$scope', '$filter', 'Admin',
  function ($scope, $filter, Admin) {
    Admin.query(function (data) {
      $scope.users = data;
      $scope.buildPager();
    });

    $scope.buildPager = function () {
      $scope.pagedItems = [];
      $scope.itemsPerPage = 15;
      $scope.currentPage = 1;
      $scope.figureOutItemsToDisplay();
    };

    $scope.figureOutItemsToDisplay = function () {
      $scope.filteredItems = $filter('filter')($scope.users, {
        $: $scope.search
      });
      $scope.filterLength = $scope.filteredItems.length;
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
      var end = begin + $scope.itemsPerPage;
      $scope.pagedItems = $scope.filteredItems.slice(begin, end);
    };

    $scope.pageChanged = function () {
      $scope.figureOutItemsToDisplay();
    };
  }
]);

'use strict';

angular.module('users.admin').controller('UserController', ['$scope', '$state', 'Authentication', 'userResolve',
  function ($scope, $state, Authentication, userResolve) {
    $scope.authentication = Authentication;
    $scope.user = userResolve;

    $scope.remove = function (user) {
      if (confirm('Are you sure you want to delete this user?')) {
        if (user) {
          user.$remove();

          $scope.users.splice($scope.users.indexOf(user), 1);
        } else {
          $scope.user.$remove(function () {
            $state.go('admin.users');
          });
        }
      }
    };

    $scope.update = function (isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      var user = $scope.user;

      user.$update(function () {
        $state.go('admin.user', {
          userId: user._id
        });
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication', 'PasswordValidator',
  function ($scope, $state, $http, $location, $window, Authentication, PasswordValidator) {
    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    $scope.signup = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.signin = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // OAuth provider request
    $scope.callOauthProvider = function (url) {
      if ($state.previous && $state.previous.href) {
        url += '?redirect_to=' + encodeURIComponent($state.previous.href);
      }

      // Effectively call OAuth authentication route:
      $window.location.href = url;
    };
  }
]);

'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', 'PasswordValidator',
  function ($scope, $stateParams, $http, $location, Authentication, PasswordValidator) {
    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    //If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    // Submit forgotten password account id
    $scope.askForPasswordReset = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'forgotPasswordForm');

        return false;
      }

      $http.post('/api/auth/forgot', $scope.credentials).success(function (response) {
        // Show user success message and clear form
        $scope.credentials = null;
        $scope.success = response.message;

      }).error(function (response) {
        // Show user error message and clear form
        $scope.credentials = null;
        $scope.error = response.message;
      });
    };

    // Change user password
    $scope.resetUserPassword = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'resetPasswordForm');

        return false;
      }

      $http.post('/api/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.passwordDetails = null;

        // Attach user profile
        Authentication.user = response;

        // And redirect to the index page
        $location.path('/password/reset/success');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('ChangePasswordController', ['$scope', '$http', 'Authentication', 'PasswordValidator',
  function ($scope, $http, Authentication, PasswordValidator) {
    $scope.user = Authentication.user;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // Change user password
    $scope.changeUserPassword = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'passwordForm');

        return false;
      }

      $http.post('/api/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.$broadcast('show-errors-reset', 'passwordForm');
        $scope.success = true;
        $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('ChangeProfilePictureController', ['$scope', '$timeout', '$window', 'Authentication', 'FileUploader',
  function ($scope, $timeout, $window, Authentication, FileUploader) {
    $scope.user = Authentication.user;
    $scope.imageURL = $scope.user.profileImageURL;

    // Create file uploader instance
    $scope.uploader = new FileUploader({
      url: 'api/users/picture',
      alias: 'newProfilePicture'
    });

    // Set file uploader image filter
    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function (item, options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // Called after the user selected a new picture file
    $scope.uploader.onAfterAddingFile = function (fileItem) {
      if ($window.FileReader) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(fileItem._file);

        fileReader.onload = function (fileReaderEvent) {
          $timeout(function () {
            $scope.imageURL = fileReaderEvent.target.result;
          }, 0);
        };
      }
    };

    // Called after the user has successfully uploaded a new picture
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
      // Show success message
      $scope.success = true;

      // Populate user object
      $scope.user = Authentication.user = response;

      // Clear upload buttons
      $scope.cancelUpload();
    };

    // Called after the user has failed to uploaded a new picture
    $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
      // Clear upload buttons
      $scope.cancelUpload();

      // Show error message
      $scope.error = response.message;
    };

    // Change user profile picture
    $scope.uploadProfilePicture = function () {
      // Clear messages
      $scope.success = $scope.error = null;

      // Start upload
      $scope.uploader.uploadAll();
    };

    // Cancel the upload process
    $scope.cancelUpload = function () {
      $scope.uploader.clearQueue();
      $scope.imageURL = $scope.user.profileImageURL;
    };
  }
]);

'use strict';

angular.module('users').controller('EditProfileController', ['$scope', '$http', '$location', 'Users', 'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;

    // Update a user profile
    $scope.updateUserProfile = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      var user = new Users($scope.user);

      user.$update(function (response) {
        $scope.$broadcast('show-errors-reset', 'userForm');

        $scope.success = true;
        Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('SocialAccountsController', ['$scope', '$http', 'Authentication',
  function ($scope, $http, Authentication) {
    $scope.user = Authentication.user;

    // Check if there are additional accounts
    $scope.hasConnectedAdditionalSocialAccounts = function (provider) {
      for (var i in $scope.user.additionalProvidersData) {
        return true;
      }

      return false;
    };

    // Check if provider is already in use with current user
    $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
    };

    // Remove a user social account
    $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null;

      $http.delete('/api/users/accounts', {
        params: {
          provider: provider
        }
      }).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('SettingsController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    $scope.user = Authentication.user;
  }
]);

'use strict';

angular.module('users')
  .directive('passwordValidator', ['PasswordValidator', function(PasswordValidator) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$validators.requirements = function (password) {
          var status = true;
          if (password) {
            var result = PasswordValidator.getResult(password);
            var requirementsIdx = 0;

            // Requirements Meter - visual indicator for users
            var requirementsMeter = [
              { color: 'danger', progress: '20' },
              { color: 'warning', progress: '40' },
              { color: 'info', progress: '60' },
              { color: 'primary', progress: '80' },
              { color: 'success', progress: '100' }
            ];

            if (result.errors.length < requirementsMeter.length) {
              requirementsIdx = requirementsMeter.length - result.errors.length - 1;
            }

            scope.requirementsColor = requirementsMeter[requirementsIdx].color;
            scope.requirementsProgress = requirementsMeter[requirementsIdx].progress;

            if (result.errors.length) {
              scope.popoverMsg = PasswordValidator.getPopoverMsg();
              scope.passwordErrors = result.errors;
              status = false;
            } else {
              scope.popoverMsg = '';
              scope.passwordErrors = [];
              status = true;
            }
          }
          return status;
        };
      }
    };
  }]);

'use strict';

angular.module('users')
  .directive('passwordVerify', [function() {
    return {
      require: 'ngModel',
      scope: {
        passwordVerify: '='
      },
      link: function(scope, element, attrs, ngModel) {
        var status = true;
        scope.$watch(function() {
          var combined;
          if (scope.passwordVerify || ngModel) {
            combined = scope.passwordVerify + '_' + ngModel;
          }
          return combined;
        }, function(value) {
          if (value) {
            ngModel.$validators.passwordVerify = function (password) {
              var origin = scope.passwordVerify;
              return (origin !== password) ? false : true;
            };
          }
        });
      }
    };
  }]);

'use strict';

// Users directive used to force lowercase input
angular.module('users').directive('lowercase', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (input) {
        return input ? input.toLowerCase() : '';
      });
      element.css('text-transform', 'lowercase');
    }
  };
});

'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$window',
  function ($window) {
    var auth = {
      user: $window.user
    };

    return auth;
  }
]);

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
        var popoverMsg = 'Please enter a passphrase or password with greater than 10 characters, numbers, lowercase, upppercase, and special characters.';
        return popoverMsg;
      }
    };
  }
]);

'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
  function ($resource) {
    return $resource('api/users', {}, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

//TODO this should be Users service
angular.module('users.admin').factory('Admin', ['$resource',
  function ($resource) {
    return $resource('api/users/:userId', {
      userId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
