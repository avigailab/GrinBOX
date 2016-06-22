(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name com.module.core.directive:home
   * @description
   * # product
   */
  angular
    .module('com.module.core')
    .directive('product', function () {
	 console.log("Products directive");
      return {
        //template: '<div>Product</div>',
        templateUrl:'modules/core/views/product.html',
        restrict: 'EA',
        link: function postLink (scope, element, attrs) {
            console.log("Products directive");
	}
      };
    });

})();

