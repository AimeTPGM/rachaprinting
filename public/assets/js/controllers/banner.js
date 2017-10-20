angular.module('app')
.controller('BannerCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.activeIndex = 0;
		$scope.banners = [
			{
			'img': 'Slide 1'
			},
			{
			'img': 'Slide 2'
			}
		]

		$scope.slideTo = function(index){
			console.log(index)
			$scope.activeIndex = index;

		}
	}
]);