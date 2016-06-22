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
    .controller('HomeCtrl', function ($scope, $rootScope,Product,ngDialog) {
      $scope.count = {};
      $rootScope.countItem=0;
      $rootScope.cartItems=[];
      $scope.boxes = $rootScope.dashboardBox;
      var proArr =Product.find({}).$promise.then(function(res){
        $scope.products = res;  
        res.forEach(function(product){
          //console.log("one product",product);
        });
      });
      
      $scope.colors=['#67962C','rgb(63, 145, 210)','#ffcc66','#ff5050'];	
      //console.log("products",proArr);
      $rootScope.addToCart =function(product){
        var index= $rootScope.cartItems.indexOf(product);
          if(index != -1)
            $rootScope.cartItems[index].count ++;
          else{
            product.count = 1;
            $rootScope.cartItems.push(product);
          }
          console.log("$scope.cartItems",$scope.cartItems);
          $rootScope.countItem++;
          //console.log("product------",$rootScope.countItem);
      }
      $rootScope.removeFromCart = function(product){
          var index= $rootScope.cartItems.indexOf(product);
          if(index == -1) return;
          if($rootScope.cartItems[index].count == 1)
            $rootScope.cartItems.splice(index,1);
          else
            $rootScope.cartItems[index].count--;
          //console.log("my index",index);
          //console.log("$scope.cartItems",$scope.cartItems);
          //if($rootScope>0)
            $rootScope.countItem--;
      }

      $rootScope.showCart = function () {
        ngDialog.open({ template: 'modules/core/views/cart.html', className: 'ngdialog-theme-default',scope: $scope });
        $scope.$on('ngDialog.opened', function (event, $dialog) {
          $dialog.find('.ngdialog-content').css('width', '60%');
        });
      };
      
    })
/*
    .controller('uploadController', function($scope, FileUploader) {
	console.log("upload controller launched");
        $scope.uploader = new FileUploader();
	console.log("my scope from uploader",$scope);
    })*/

    .controller('UploadController', function($scope, FileUploader,$location,$rootScope) {
        var uploader = $scope.uploader = new FileUploader({
            url: '/api/containers/products/upload',
            //formData:
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
            //console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
            console.log("my scope",$rootScope.currentProductId);
            fileItem.file.name = $rootScope.currentProductId;
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            //console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            //console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            //console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            //console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            //console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            //console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            //console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            //console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        //console.info('uploader', uploader);
    })
    .controller('singleProductCtrl',function ($scope,ngDialog){
      $scope.clickToOpen = function () {
        ngDialog.open({ template: 'modules/core/views/single-product.html', className: 'ngdialog-theme-default',scope: $scope });
        $scope.$on('ngDialog.opened', function (event, $dialog) {
          $dialog.find('.ngdialog-content').css('width', '60%');
        });
      };
      
    });

})();
