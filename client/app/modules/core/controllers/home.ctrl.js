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
      console.log("product",$scope.products);	
    })
/*
    .controller('uploadController', function($scope, FileUploader) {
	console.log("upload controller launched");
        $scope.uploader = new FileUploader();
	console.log("my scope from uploader",$scope);
    })*/

    .controller('UploadController', function($scope, FileUploader,$location) {
        var uploader = $scope.uploader = new FileUploader({
            url: 'api/products/upload'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    })
    .controller('singleProductCtrl',function ($scope,ngDialog){
      $scope.clickToOpen = function () {
        ngDialog.open({ template: 'modules/core/views/single-product.html', className: 'ngdialog-theme-default',scope: $scope });
      };

    });

})();
