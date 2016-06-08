(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name com.module.core.controller:HomeCtrl
   * @description Dashboard
   * @requires $scope
   * @requires $rootScope
   **/
  angular
    .module('com.module.core')
    .controller('HomeCtrl', function ($scope, $rootScope,Product) {
      $scope.count = {};
      $scope.boxes = $rootScope.dashboardBox;
      $scope.products=Product.find({});
      $scope.colors=['#60298C','rgb(63, 145, 210)','#ffcc66','#ff5050'];	
	console.log("product-----",$scope.products);
    })
    .controller('singleProductCtrl',function ($scope,ngDialog){
      $scope.clickToOpen = function () {
        ngDialog.open({ template: 'modules/core/views/single-product.html', className: 'ngdialog-theme-default',scope: $scope });
      };

    });

})();
