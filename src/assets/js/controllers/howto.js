angular.module('app')
.controller('HowtoCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){

		$scope.steps = [
		{
			"no": "1",
			"description": "step 1",
			"img": ""
		},
		{
			"no": "2",
			"description": "step 2",
			"img": ""
		},
		{
			"no": "3",
			"description": "step 3",
			"img": ""
		},
		{
			"no": "4",
			"description": "step 4",
			"img": ""
		}
		]
		
	}
]);