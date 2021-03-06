'use strict';

/**
 * Module dependencies.
 */
var acl = require('acl');

// Using the memory backend
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Articles Permissions
 */
exports.invokeRolesPolicies = function () {
  acl.allow([{
    roles: ['admin'],
    allows: [{
      resources: '/api/document',
      permissions: '*'
    }, {
      resources: '/api/document/:documentId',
      permissions: '*'
    },{
      resources: '/api/category',
      permissions: '*'
    },{
      resources: '/api/category/:categoryId',
      permissions: '*'
    },{
      resources: '/api/company',
      permissions: '*'
    },
    {
      resources: '/api/documentpreview/:documentId',
      permissions: '*'
    },
    {
      resources: '/api/convertFileDoc',
      permissions: ['post']
    },
    {
      resources: '/api/convertFilePdf',
      permissions: ['post']
    },
    {
      resources: '/api/postindex',
      permissions: ['get']
    },


    ]
  }, {
    roles: ['user'],
    allows: [{
      resources: '/api/document',
      permissions: ['get']
    }, {
      resources: '/api/document/:documentId',
      permissions: ['get']
    },{
      resources: '/api/company',
      permissions: ['get', 'post']
    },{
      resources: '/api/category',
      permissions: ['get']
    },{
      resources: '/api/category/:categoryId',
      permissions: ['get']
    },
    {
      resources: '/api/documentpreview/:documentId',
      permissions: ['post']
    },
    {
      resources: '/api/convertFileDoc',
      permissions: ['post']
    },
    {
      resources: '/api/convertFilePdf',
      permissions: ['post']
    },
    {
      resources: '/api/postindex',
      permissions: ['get']
    },


    ]
  }, {
    roles: ['guest'],
    allows: [{
      resources: '/api/document',
      permissions: ['get']
    }, {
      resources: '/api/document/:documentId',
      permissions: ['get']
    }]
  }]);
};

/**
 * Check If Articles Policy Allows
 */
exports.isAllowed = function (req, res, next) {
  var roles = (req.user) ? req.user.roles : ['guest'];

  // If an article is being processed and the current user created it then allow any manipulation
  if (req.article && req.user && req.article.user.id === req.user.id) {
    return next();
  }

  // Check for user roles
  acl.areAnyRolesAllowed(roles, req.route.path, req.method.toLowerCase(), function (err, isAllowed) {
    if (err) {
      // An authorization error occurred.
      return res.status(500).send('Unexpected authorization error');
    } else {
      if (isAllowed) {
        // Access granted! Invoke next middleware
        return next();
      } else {
        return res.status(403).json({
          message: 'User is not authorized'
        });
      }
    }
  });
};
