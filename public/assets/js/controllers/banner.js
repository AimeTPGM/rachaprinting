angular.module('app')
.controller('BannerCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		
		$scope.banners = [
			{
			'img': '1'
			},
			{
			'img': '2'
			}
		]
	}
]);