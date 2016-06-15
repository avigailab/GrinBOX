(function () {
  'use strict';
  angular
    .module('com.module.cart')
    .config(function ($stateProvider) {
      $stateProvider
        .state('admin.cart', {
          abstract: true,
          url: '/cart',
          templateUrl: 'modules/cart/views/main.html'
        })
        .state('admin.cart.list', {
          url: '',
          templateUrl: 'modules/notes/views/list.html',
          controllerAs: 'ctrl',
          controller: function (cartProducts) {
            this.cartProductsArray = cartProducts;
          },
          resolve: {
            cartProducts: function (CartService) {
              return CartService.getProducts();//to service
            }
          }
        })
        .state('admin.cart.checkout', {
          url: '/checkout',
          //templateUrl: 'modules/cart/views/list.html',
          template: "<h1>checking out the cart</h1>",
          controllerAs: 'ctrl',
          controller: function (cartProducts) {
            this.cartProductsArray = cartProducts;
          },
          resolve: {
            cartProducts: function (CartService) {
              return CartService.getProducts();//to service
            }
          }
        })
        .state('admin.cart.add', {
          url: ':productId/add',
          templateUrl: '',
          controllerAs: 'ctrl',

          controller: function ($state, CartService, product) {
            /*this.note = note;
            this.formFields = NotesService.getFormFields();
            this.formOptions = {};*/
            CartService.addProductToCart(product.id, function () {//to service
              $state.go('^.list');
            },
            function () {
              $state.go('^.list');
            });
          },
          resolve: {
            product: function ($stateParams,ProductsService, CartService){
              //return CartService.getProductFromCatalog($stateParams.id);
              return ProductsService.getProduct($stateParams.productId);
            }
          }
        });
        /*
        .state('app.notes.list', {
          url: '',
          templateUrl: 'modules/notes/views/list.html',
          controllerAs: 'ctrl',
          controller: function (notes) {
            this.notes = notes;
          },
          resolve: {
            notes: function (NotesService) {
              return NotesService.getNotes();
            }
          }
        })
        .state('app.notes.add', {
          url: '/add',
          templateUrl: 'modules/notes/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, NotesService, note) {
            this.note = note;
            this.formFields = NotesService.getFormFields();
            this.formOptions = {};
            this.submit = function () {
              NotesService.upsertNote(this.note).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            note: function () {
              return {};
            }
          }
        })
        .state('app.notes.edit', {
          url: '/:id/edit',
          templateUrl: 'modules/notes/views/form.html',
          controllerAs: 'ctrl',
          controller: function ($state, NotesService, note) {
            this.note = note;
            this.formFields = NotesService.getFormFields();
            this.formOptions = {};
            this.submit = function () {
              NotesService.upsertNote(this.note).then(function () {
                $state.go('^.list');
              });
            };
          },
          resolve: {
            note: function ($stateParams, NotesService) {
              return NotesService.getNote($stateParams.id);
            }
          }
        })
        .state('app.notes.view', {
          url: '/:id',
          templateUrl: 'modules/notes/views/view.html',
          controllerAs: 'ctrl',
          controller: function (note) {
            this.note = note;
          },
          resolve: {
            note: function ($stateParams, NotesService) {
              return NotesService.getNote($stateParams.id);
            }
          }
        })
        .state('app.notes.delete', {
          url: '/:id/delete',
          template: '',
          controllerAs: 'ctrl',
          controller: function ($state, NotesService, note) {
            NotesService.deleteNote(note.id, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          },
          resolve: {
            note: function ($stateParams, NotesService) {
              return NotesService.getNote($stateParams.id);
            }
          }
        })*/
    });

})();
