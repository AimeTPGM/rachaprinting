angular.module('app')
.controller('ExampleCtrl',['$scope', '$http','$window', '$interval',
	function($scope, $http, $window, $interval){
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
			angular.element(document.getElementById('showcase'+randomNumber)).removeClass('active')
			randomNumber = Math.floor(Math.random() * $scope.examples.length) + 0
			console.log(randomNumber)
			angular.element(document.getElementById('showcase'+randomNumber)).addClass('active')
		}
		$interval(function(){
			random()
		}, 1000)
		
	}
]);