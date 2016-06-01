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
    .controller('LabCtrl', function () 
        {

        })
        .controller('GalleryCtrl', function () 
        {
                  var self = this;
        self.images = [
          {thumb: 'images/1.png', img: 'images/1.png'},
              {thumb: 'images/2.png', img: 'images/2.png'},
              {thumb: 'images/3.png', img: 'images/3.png'},
              {thumb: 'images/4.png', img: 'images/4.png'},
              {thumb: 'images/5.png', img: 'images/5.png'},
              {thumb: 'images/6.png', img: 'images/6.png'}
        ];

        });

})();
