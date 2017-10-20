angular.module('app')
.controller('BannerCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.activeIndex = 0;
		$scope.banners = [
			{
			'img': '1'
			},
			{
			'img': '2'
			}
		]

		$scope.slideTo = function(index){
			console.log(index)
			$scope.activeIndex = index;

		}
	}
]);