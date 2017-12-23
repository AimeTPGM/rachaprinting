var app = angular.module('app',['ngRoute', 'duScroll', 'ngFileUpload'])

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider,$locationProvider) {

		$routeProvider
		.when('/:lang',{
			templateUrl: '/views/index.html',
			controller: 'IndexCtrl',
			title : 'Main'
			
		})
		.when('/:lang/order/:productId/new',{
			templateUrl: '/views/order.html',
			controller: 'OrderCtrl',
			title : 'Order'
		})
		.when('/:lang/about',{
			templateUrl: '/views/about-us.html',
			controller: 'AboutUsCtrl',
			title : 'Order'
		})
		
		.otherwise({ redirectTo: '/th'});

		$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
		})
	}
])