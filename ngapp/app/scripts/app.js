'use strict';

/**
 * @ngdoc overview
 * @name notesApp
 * @description
 * # notesApp
 *
 * Main module of the application.
 */
angular.module('notesApp', ['ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: 'views/note.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'views/productDetail.html',
        controller: 'ProductDetailCtrl'
      })
      .when('/products/:productId/edit', {
        templateUrl: 'views/productEdit.html',
        controller: 'ProductEditCtrl'
      })
      .otherwise({
        redirectTo: '/products'
      });
  });
