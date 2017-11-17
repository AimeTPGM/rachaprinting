angular.module('app')
.controller('OrderDetailCtrl',['$scope', '$http','$window', '$timeout', 'OrderDetailService',
	function($scope, $http, $window, $timeout, OrderDetailService){
		$scope.orderDetail = OrderDetailService.orderDetail
		console.log(OrderDetailService.orderDetail)
		$scope.countdown = 5
		$scope.customer = {}
		$scope.placeOrder = function(){
			$scope.completedOrder = true
			OrderDetailService.orderDetail.customer = $scope.customer
			console.log(OrderDetailService.orderDetail)
			$timeout(function() {
				$window.location.href = "/"
			}, 5000)


		}
	}
]);