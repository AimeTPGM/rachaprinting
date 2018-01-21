angular.module('app')
.controller('ExampleCtrl',['$scope', '$http','$window', '$interval', 'AngularService', 'ExampleFactory','$routeParams',
	'LanguageConfig',
	function($scope, $http, $window, $interval, AngularService, ExampleFactory, $routeParams,
		LanguageConfig,){

		var languagePack = LanguageConfig.setLanguage($routeParams.lang)
    $scope.webContent = languagePack.example


		$scope.examples = ExampleFactory.getExamples()
		var randomNumber = 0;
		function random(){
			AngularService.removeActiveClassByID('showcase'+randomNumber)
			randomNumber = Math.floor(Math.random() * $scope.examples.length) + 0
			AngularService.addActiveClassByID('showcase'+randomNumber)
		}
		$interval(function(){
			random()
		}, 1000)

	}
]);
