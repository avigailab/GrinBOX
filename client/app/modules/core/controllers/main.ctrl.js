(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name com.module.core.controller:MainCtrl
   * @description Login Controller
   * @requires $scope
   * @requires $state

   * @requires CoreService
   * @requires User
   * @requires gettextCatalog
   **/
  angular
    .module('com.module.core')
    .controller('MainCtrl', function ($scope, $rootScope, $state, AppAuth, CoreService, User, gettextCatalog) {
      AppAuth.ensureHasCurrentUser(function () {
        //This call also serves to redirect a user to the login screen, via the interceptor in users.auth.js, if they are not authenticated.
        $scope.currentUser = User.getCurrent();
      });

      $scope.menuoptions = $rootScope.menu;

      $scope.logout = function () {
        AppAuth.logout(function () {
          CoreService.toastSuccess(gettextCatalog.getString('Logged out'),
            gettextCatalog.getString('You are logged out!'));
          $state.go('login');
        });
      };

    })
    .controller('LabCtrl', function ($scope,Post){
       $scope.posts=Post.find({});
       console.log("posts==>",$scope.posts);
    })
    .controller('GalleryCtrl', function () 
    {
      var self = this;
      self.images = [
        {thumb: 'images/i1.jpg', img: 'images/i1.jpg'},
            {thumb: 'images/i2.jpg', img: 'images/i2.jpg'},
            {thumb: 'images/i3.jpg', img: 'images/i3.jpg'},
            {thumb: 'images/i4.jpg', img: 'images/i4.jpg'},
            {thumb: 'images/i5.jpg', img: 'images/i5.jpg'},
            {thumb: 'images/i6.jpg', img: 'images/i6.jpg'}
      ];

    });

})();
