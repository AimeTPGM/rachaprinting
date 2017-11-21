angular.module('app')
.controller('ProductSlideCtrl',['$scope', '$http','$window', '$document', '$timeout', '$routeParams', 'ProductFactory', 'AngularServiceFactory', 'ScrollService', 'LanguageConfig',
  function($scope, $http, $window, $document, $timeout, $routeParams, ProductFactory, AngularServiceFactory, ScrollService, LanguageConfig){

    if($routeParams.lang == 'th'){
      $scope.webContent = LanguageConfig.thai.product
    }
    else if($routeParams.lang == 'eng'){
      $scope.webContent = LanguageConfig.eng.product
    }

    $scope.products = ProductFactory.getProducts()
    for (var i = 0; i < $scope.products.length; i++) {
      if($routeParams.productId == $scope.products[i].id){
        $scope.currentSelectedProduct = $scope.products[i]
        $scope.products.splice(i,1)
        break
      }
    }
    $scope.currentProduct = 0
    var scrollPoint = 0
    $scope.order = function(id){
      $window.location.href = "/"+$routeParams.lang+"/order/"+id+"/new"
    }
    $scope.right = function(){
      if($scope.currentProduct == $scope.products.length-1)
        $scope.currentProduct == $scope.products.length-1
      else {
        $scope.currentProduct++
        scrollPoint += AngularServiceFactory.selectByID('product'+$scope.currentProduct)[0].clientWidth
      }
      ScrollService.scrollLeft(AngularServiceFactory.selectByQuery('div.item-wrapper'),scrollPoint)
    }

    $scope.left = function(){
      if($scope.currentProduct == 0)
        $scope.currentProduct == 0
      else {
        $scope.currentProduct--
        scrollPoint -= AngularServiceFactory.selectByID('product'+$scope.currentProduct)[0].clientWidth
      }
      ScrollService.scrollLeft(AngularServiceFactory.selectByQuery('div.item-wrapper'), scrollPoint)
    }
  }
]);