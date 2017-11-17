angular.module('app')
.controller('OrderDetailCtrl',['$scope', '$http','$window', 'OrderDetailService',
	function($scope, $http, $window, OrderDetailService){
		$scope.orderDetail = OrderDetailService.orderDetail
		console.log(OrderDetailService.orderDetail)

		$scope.placeOrder = function(){
			
		}
	}
]);