angular.module('app')
.controller('ProductSlideCtrl',['$scope', '$http','$window', '$document', '$timeout', '$routeParams', 
  function($scope, $http, $window, $document, $timeout, $routeParams){
    $scope.products = [
    {
      "id": "1",
      "img": "",
      "name": "A",
      "price": "100"  
    },
    {
      "id": "2",
      "img": "",
      "name": "B",
      "price": "200"  
    },
    {
      "id": "3",
      "img": "",
      "name": "C",
      "price": "300"  
    },
    {
      "id": "4",
      "img": "",
      "name": "D",
      "price": "400"  
    },
    {
      "id": "5",
      "img": "",
      "name": "E",
      "price": "400"  
    },
    {
      "id": "6",
      "img": "",
      "name": "F",
      "price": "400"  
    },
    {
      "id": "7",
      "img": "",
      "name": "G",
      "price": "400"  
    }
    ]
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