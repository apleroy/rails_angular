'use strict';

angular.module('notesApp')
  .factory('Product', function ($resource) {
    return $resource('/api/products/:productId', {}, {
      update: {method: 'PUT', params: {productId: '@productId'}}
    });
  });

angular.module('notesApp')
  .controller('ProductCtrl', function ($scope, Product) {

    $scope.products = Product.query();

    $scope.create = function(name, description, price) {
      Product.save({name: name, description: description, price: price}, function(product) {
        $scope.products.push(product);
      });
    };



  })
  .controller('ProductDetailCtrl', function ($scope, Product, $routeParams, $location) {

    $scope.product = Product.get({productId: $routeParams.productId});

    $scope.delete = function(id) {
      Product.delete({productId: id}, function() {
        $location.path('/products');
      });
    };

  })
  .controller('ProductEditCtrl', function ($scope, Product, $routeParams, $location) {

    $scope.product = Product.get({productId: $routeParams.productId}, function() {

      $scope.updateProduct = function() {
        Product.update({productId: $routeParams.productId}, $scope.product);
        $location.path('/products/' + $routeParams.productId);
      };


    });


  });
