angular.module('app')
.controller('BannerCtrl',['$scope', '$http','$window', '$timeout',
	function($scope, $http, $window, $timeout){
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
			$scope.activeIndex = index;
		}

		var bannerChange = function() {

			if($scope.activeIndex == $scope.banners.length-1)
				$scope.activeIndex = 0;
			else
				$scope.activeIndex++;
			$timeout(bannerChange, 1500);
		}

		$timeout(bannerChange, 1500);

		$scope.showOverlay = function(){

		}
	}
]);