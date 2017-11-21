angular.module('app')
.controller('FooterCtrl',['$scope', '$http','$window', 'ContactService', '$routeParams',
	function($scope, $http, $window, ContactService, $routeParams){
		$scope.contacts = ContactService.contacts
		$scope.goTo = function(page){
			$window.location.href = '/'+$routeParams.lang+'/'+page
		}
	}
]);