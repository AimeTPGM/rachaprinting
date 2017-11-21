angular.module('app')
.controller('FooterCtrl',['$scope', '$http','$window', 'ContactService', '$routeParams',
	function($scope, $http, $window, ContactService, $routeParams){
		$scope.contacts = ContactService.contacts
		$scope.goTo = function(page){
			console.log()
			$window.location.href = '/'+$routeParams.lang+'/'+page
		}
	}
]);