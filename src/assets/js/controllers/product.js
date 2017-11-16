angular.module('app')
.controller('ProductCtrl',['$scope', '$http','$window', '$document', '$timeout',
	function($scope, $http, $window, $document, $timeout){
		$scope.products = [
		{
			"img": "",
			"name": "A",
			"price": "100"	
		},
		{
			"img": "",
			"name": "B",
			"price": "200"	
		},
		{
			"img": "",
			"name": "C",
			"price": "300"	
		},
		{
			"img": "",
			"name": "D",
			"price": "400"	
		},
		{
			"img": "",
			"name": "E",
			"price": "400"	
		},
		{
			"img": "",
			"name": "F",
			"price": "400"	
		},
		{
			"img": "",
			"name": "G",
			"price": "400"	
		}
		]

		$scope.currentProduct = 0;
		var scrollPoint = 0;
		$scope.log = function(index){
			console.log('this product is '+$scope.products[index].name)
			$window.location.href="/order"
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