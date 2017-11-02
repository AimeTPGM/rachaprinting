angular.module('app')
.controller('OrderCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.templates = {
			'navbar' : '/views/navbar.html',
			'product' : '/views/product-slide.html',
			'orderForm' : '/views/order-form.html',
			'orderDetailFixed' : '/views/order-detail-fixed.html',
			'orderDetail' : '/views/order-detail.html',
			'footer' : '/views/footer.html',
			'credit' : '/views/credit.html'
		}
		
		angular.element($window).bind("scroll", function() {
			var orderDetailPostion = angular.element(document.querySelector('#orderDetail'))[0].offsetHeight
			// console.log(orderDetailPostion)
			if (this.pageYOffset >= orderDetailPostion) {
				angular.element(document.querySelector('#orderDetailFixed')).css('display', 'none')
			}
			else if (this.pageYOffset < orderDetailPostion) {
				angular.element(document.querySelector('#orderDetailFixed')).css('display', 'block')
			}
		})
	}
]);