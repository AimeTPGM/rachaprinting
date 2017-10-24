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

		var countUp = function() {
			console.log($scope.activeIndex)

			if($scope.activeIndex == $scope.banners.length-1)
				$scope.activeIndex = 0;
			else
				$scope.activeIndex++;
			$timeout(countUp, 1500);
		}

		$timeout(countUp, 1500);
	}
]);