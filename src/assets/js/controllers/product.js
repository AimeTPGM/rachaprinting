angular.module('app')
.controller('ProductCtrl',['$scope', '$http', '$q', '$window', '$document', '$timeout', '$routeParams', 'ProductFactory', 'AngularServiceFactory', 'ScrollService', 'LanguageConfig',
	function($scope, $http, $q, $window, $document, $timeout, $routeParams, ProductFactory, AngularServiceFactory, ScrollService, LanguageConfig){
  	
    var languagePack = LanguageConfig.setLanguage($routeParams.lang)
    $scope.webContent = languagePack.product
    $scope.products = {}

    async function getProducts(){
    	return await new Promise((resolve, reject) => { 
    		$http.get('http://192.168.1.105:8081/api/en/product')
	      .then(function(response){
	        resolve(response)
	      })
    	})
      
    }

  	function getProductValue(){
  		getProducts().then(function(value){
	  		$scope.product = value.data
	  	})
  	} 

  	getProductValue();
  	
		$scope.currentProduct = 0;
		var scrollPoint = 0;
		$scope.order = function(id){
			$window.location.href = $routeParams.lang+"/order/"+id+"/new"
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
