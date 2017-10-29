var app = angular.module('app',['ngRoute', 'duScroll']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider,$locationProvider) {

		$routeProvider
		.when('/',{
			templateUrl: '/views/index.html',
			controller: 'IndexCtrl',
			title : 'Main'
			
		})
		.when('/order',{
			templateUrl: '/views/order.html',
			controller: 'OrderCtrl',
			title : 'Order'
		})
		
		.otherwise({ redirectTo: '/'});

		$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
		});
	}
]);