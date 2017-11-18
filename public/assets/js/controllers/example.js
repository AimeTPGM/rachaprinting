angular.module('app')
.controller('ExampleCtrl',['$scope', '$http','$window', '$interval', 'AngularService',
	function($scope, $http, $window, $interval, AngularService){
		$scope.examples = [
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			},
			{
				"name": "",
				"img": "",
				"price": "100" 
			}
		]
		var randomNumber = 0;
		function random(){
			AngularService.removeActiveClassByID('showcase'+randomNumber)
			randomNumber = Math.floor(Math.random() * $scope.examples.length) + 0
			console.log(randomNumber)
			AngularService.addActiveClassByID('showcase'+randomNumber)
		}
		$interval(function(){
			random()
		}, 1000)
		
	}
]);