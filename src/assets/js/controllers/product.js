angular.module('app')
.controller('ProductCtrl',['$scope', '$http','$window', '$document', '$timeout', 'ProductFactory', 'AngularServiceFactory', 'ScrollService',
	function($scope, $http, $window, $document, $timeout, ProductFactory, AngularServiceFactory, ScrollService){
  $scope.products = ProductFactory.getProducts()
		$scope.currentProduct = 0;
		var scrollPoint = 0;
		$scope.order = function(id){
			$window.location.href="/order/"+id+"/new"
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