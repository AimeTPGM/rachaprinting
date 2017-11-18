angular.module('app')
.controller('OrderCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.templates = {
			'navbar' : '/views/navbar.html',
			'product' : '/views/product-slide.html',
			'orderForm' : '/views/order-form.html',
			'orderDetail' : '/views/order-detail.html',
			'footer' : '/views/footer.html',
			'credit' : '/views/credit.html'
		}
	}
]);