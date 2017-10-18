angular.module('app')
.controller('ProductCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.products = [
		{
			"img": "",
			"name": "A",
			"price": "100"	
		},
		{
			"img": "",
			"name": "B",
			"price": "200"	
		},
		{
			"img": "",
			"name": "C",
			"price": "300"	
		},
		{
			"img": "",
			"name": "D",
			"price": "400"	
		},
		{
			"img": "",
			"name": "E",
			"price": "400"	
		},
		{
			"img": "",
			"name": "F",
			"price": "400"	
		},
		{
			"img": "",
			"name": "G",
			"price": "400"	
		}
		]
	}
]);