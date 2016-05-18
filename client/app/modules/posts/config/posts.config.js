(function () {
  'use strict';
  angular
    .module('com.module.posts')
    .run(function ($rootScope, Post, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Posts'), 'admin.posts.list', 'fa-edit');

      Post.find(function (posts) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Posts'), 'bg-red', 'ion-document-text', posts.length, 'admin.posts.list');
      });

    });

})();
