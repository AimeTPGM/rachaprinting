angular.module('app')
.controller('ProductSlideCtrl',['$scope', '$http','$window', '$document', '$timeout', '$routeParams', 'ProductFactory',
  function($scope, $http, $window, $document, $timeout, $routeParams, ProductFactory){
    $scope.products = ProductFactory.getProducts()
    for (var i = 0; i < $scope.products.length; i++) {
      if($routeParams.productId == $scope.products[i].id){
        $scope.currentSelectedProduct = $scope.products[i]
        $scope.products.splice(i,1)
        break
      }
    }
    console.log($scope.products)
    $scope.currentProduct = 0
    var scrollPoint = 0
    $scope.order = function(id){
      $window.location.href="/order/"+id+"/new"
    }
    $scope.right = function(){
      if($scope.currentProduct == $scope.products.length-1)
        $scope.currentProduct == $scope.products.length-1
      else {
        $scope.currentProduct++
        scrollPoint += angular.element(document.getElementById('product'+$scope.currentProduct))[0].clientWidth
      }
      angular.element(document.querySelector('div.item-wrapper')).scrollLeftAnimated(scrollPoint)
    }

    $scope.left = function(){
      if($scope.currentProduct == 0)
        $scope.currentProduct == 0
      else {
        $scope.currentProduct--
        scrollPoint -= angular.element(document.getElementById('product'+$scope.currentProduct))[0].clientWidth
      }
      angular.element(document.querySelector('div.item-wrapper')).scrollLeftAnimated(scrollPoint)
    }

  }
]);