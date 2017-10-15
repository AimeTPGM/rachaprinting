angular.module('app')
.controller('NavbarCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.menus = [
			{
				'name': 'Home',
				'link': "#"
			},
			{
				'name': 'Order',
				'link': "#"
			},
			{
				'name': 'How to',
				'link': "#"
			},
			{
				'name': 'Contact us',
				'link': "#"
			}
		]

	}
]);