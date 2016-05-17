(function () {
  'use strict';
  angular
    .module('com.module.core')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('router', {
          url: '/router',
          template: '<div class="lockscreen" style="height: 100%"></div>',
          controller: 'RouteCtrl'
        })
        .state('error', {
          url: '/error',
          template: '<div class="text-center alert alert-danger" style="margin: 100px">An error occurred.</div>'
        })
          .state('admin', {
           abstract: true,
           url: '/admin',
           templateUrl: 'modules/core/views/app.html',
           controller: 'MainCtrl'
         })
         .state('admin.home', {
            url: '',
           templateUrl: 'modules/core/views/home.html',
           controller: 'HomeCtrl'
         })
 
         .state('app', {
           abstract: true,
           url: '',
            templateUrl: 'modules/core/views/app1.html'
           //controller: 'MainCtrl'
         })
         .state('app.home', {
            url: '/home',
           //templateUrl: 'modules/core/views/index.html'
            templateUrl: 'modules/core/views/index.html'
           //controller: 'HomeCtrl'
        })
         .state('app.privacy', {
           url: '/privacy',
            templateUrl: 'modules/core/views/privacy.html',
           controller: 'PrivacyCtrl',
            activetab: 'privacy'
          })
          .state('app.abouty', {
            url: '/about',
            templateUrl: 'modules/core/views/about.html',
            controller: 'AboutCtrl',
            activetab: 'about'
          });
  

      $urlRouterProvider.otherwise('/router');
    });

})();
