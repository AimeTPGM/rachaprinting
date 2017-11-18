angular.module('app')
.controller('OrderDetailCtrl',['$scope', '$http','$window', '$timeout', '$interval', '$document', 
	'OrderDetailService', 'ScrollService',
	function($scope, $http, $window, $timeout, $interval, $document,
		OrderDetailService, ScrollService){
		$scope.orderDetail = OrderDetailService.orderDetail
		$scope.countdown = 10
		$scope.customer = {}
		$scope.placeOrder = function(){
			$scope.completedOrder = true
			OrderDetailService.orderDetail.customer = $scope.customer
			console.log(OrderDetailService.orderDetail)
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