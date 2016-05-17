(function () {
  'use strict';
  angular
    .module('com.module.cart')
    .run(function ($rootScope, Note, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Cart'), 'app.notes.list', 'fa-file-o');

/*
      Cart.find(function (data) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Cart'), 'bg-green', 'ion-clipboard', data.length, 'app.cart.list');
      });

    });
*/
})();
