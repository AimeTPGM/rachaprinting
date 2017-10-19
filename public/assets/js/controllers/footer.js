angular.module('app')
.controller('FooterCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.contacts = [
			{
				"text" : "(+66)812345678",
				"icon" : "fa-phone"
			},
			{
				"text" : "facebook",
				"icon" : "fa-facebook"
			},
			{
				"text" : "twitter",
				"icon" : "fa-twitter"
			},
			{
				"text" : "instagram",
				"icon" : "fa-instagram"
			}
		]
	}
]);