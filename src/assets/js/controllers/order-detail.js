angular.module('app')
.controller('OrderDetailCtrl',['$scope', '$http','$window', '$timeout', 'OrderDetailService', '$interval', 
	function($scope, $http, $window, $timeout, OrderDetailService, $interval){
		$scope.orderDetail = OrderDetailService.orderDetail
		console.log(OrderDetailService.orderDetail)
		$scope.countdown = 7
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
	}
]);