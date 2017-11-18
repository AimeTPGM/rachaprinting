angular.module('app')
.controller('ExampleCtrl',['$scope', '$http','$window', '$interval', 'AngularService', 'ExampleFactory',
	function($scope, $http, $window, $interval, AngularService, ExampleFactory){
		$scope.examples = ExampleFactory.getExamples()
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