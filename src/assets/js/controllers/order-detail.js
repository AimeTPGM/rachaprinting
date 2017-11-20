angular.module('app')
.controller('OrderDetailCtrl',['$scope', '$http','$window', '$timeout', '$interval', '$document', '$routeParams',
	'OrderDetailService', 'ScrollService', 'LanguageConfig',
	function($scope, $http, $window, $timeout, $interval, $document, $routeParams,
		OrderDetailService, ScrollService, LanguageConfig){
		
		if($routeParams.lang == 'th'){
			$scope.webContent = LanguageConfig.thai.orderDetail
		}
		else if($routeParams.lang == 'en'){
			$scope.webContent = LanguageConfig.eng.orderDetail
		}
		
		$scope.orderDetail = OrderDetailService.orderDetail
		$scope.countdown = 10
		$scope.customer = {}
		$scope.placeOrder = function(){
			$scope.completedOrder = true
			OrderDetailService.orderDetail.customer = $scope.customer
			$interval(function(){
				$scope.countdown--
				$timeout(function() {
					$window.location.href = "/"
				}, $scope.countdown*1000)
			}, 1000)
		}

		$scope.scrollToID = function(id){
			ScrollService.scrollToID(id)
		}
	}
]);