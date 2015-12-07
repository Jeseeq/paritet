'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/unify/css/*.css',
        'public/unify/css/plugins/*.css',
        'public/unify/css/plugins/line-icons/*.css',
        'public/unify/plugins/font-awesome/css/font-awesome.min.css',
        'public/unify/plugins/hover-effects/css/custom-hover-effects.css'

      ],
      js: [
        
        'public/lib/jquery/dist/jquery.js',
        'public/lib//jquery-migrate/jquery-migrate.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',

        'public/unify/plugins/owl-carousel/owl-carousel/owl.carousel.js',
        'public/unify/plugins/layer-slider/layerslider/js/greensock.js',
        'public/unify/plugins/layer-slider/layerslider/js/layerslider.transitions.js',
        'public/unify/plugins/layer-slider/layerslider/js/layerslider.kreaturamedia.jquery.js',
       

        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-bootstrap/ui-bootstrap.js',

        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',



        'public/unify/js/app.js',
        'public/unify/js/plugins/layer-slider.js',
        'public/unify/js/plugins/owl-carousel.js',
        'public/unify/js/plugins/owl-recent-works.js',


       
        
        'public/unify/plugins/smoothScroll.js',
        'public/unify/plugins/back-to-top.js'
        




      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
