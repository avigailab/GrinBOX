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
    .controller('MainCtrl', function ($scope, $rootScope, $state, AppAuth, CoreService, User, gettextCatalog,ngDialog) {
      AppAuth.ensureHasCurrentUser(function () {
        //This call also serves to redirect a user to the login screen, via the interceptor in users.auth.js, if they are not authenticated.
        $scope.currentUser = User.getCurrent();
      });

      $scope.menuoptions = $rootScope.menu;
      $scope.openContact = function () {
        ngDialog.open({ template: 'modules/core/views/contact.html', className: 'ngdialog-theme-default',scope: $scope });
      };
      $scope.logout = function () {
        AppAuth.logout(function () {
          CoreService.toastSuccess(gettextCatalog.getString('Logged out'),
            gettextCatalog.getString('You are logged out!'));
          $state.go('login');
        });
      };

    })
    .controller('LabCtrl', function ($scope,Post){
       $scope.posts=Post.find({limit: 5});
       console.log("posts1==>",$scope.posts);
    })
    .controller('GalleryCtrl', function () 
    {
      var self = this;
      self.images = [
         {thumb: 'https://i.ytimg.com/vi/qriRMGqares/maxresdefault.jpg', img: 'https://i.ytimg.com/vi/qriRMGqares/maxresdefault.jpg'},
              {thumb: 'https://i.ytimg.com/vi/H08vJM177Yo/maxresdefault.jpg', img: 'https://i.ytimg.com/vi/H08vJM177Yo/maxresdefault.jpg'},
             {thumb: 'https://lh3.googleusercontent.com/ZkcAqtzZUutGCM27ae1T4FvzjFNzb1LpecZJnvn4SKv7UfoiT8Rc-jUYkcToNW84zng=h900', img: 'https://lh3.googleusercontent.com/ZkcAqtzZUutGCM27ae1T4FvzjFNzb1LpecZJnvn4SKv7UfoiT8Rc-jUYkcToNW84zng=h900'},
              {thumb: 'https://i.ytimg.com/vi/0Y7N7kaxYz4/maxresdefault.jpg', img: 'https://i.ytimg.com/vi/0Y7N7kaxYz4/maxresdefault.jpg'},
              {thumb: 'http://bussin3ss.files.wordpress.com/2012/08/free-play-angry-birds-vs-zombies-games-online.jpg', img: 'http://bussin3ss.files.wordpress.com/2012/08/free-play-angry-birds-vs-zombies-games-online.jpg'},
              {thumb: 'https://i.ytimg.com/vi/J0VoEvlz3BU/maxresdefault.jpg', img: 'https://i.ytimg.com/vi/J0VoEvlz3BU/maxresdefault.jpg'}
      ];

    });

})();
