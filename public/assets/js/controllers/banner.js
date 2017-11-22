angular.module('app')
.controller('BannerCtrl',['$scope', '$http','$window', '$timeout', 'BannerFactory', 'LanguageConfig', '$routeParams',
	function($scope, $http, $window, $timeout, BannerFactory, LanguageConfig, $routeParams){

		var languagePack = LanguageConfig.setLanguage($routeParams.lang)
		$scope.webContent = languagePack.banner
		
		$scope.activeIndex = 0;
		$scope.banners = BannerFactory.getBanners()
		$scope.slideTo = function(index){
			$scope.activeIndex = index
		}

		var bannerChange = function() {

			if($scope.activeIndex == $scope.banners.length-1)
				$scope.activeIndex = 0
			else
				$scope.activeIndex++
			$timeout(bannerChange, 1500)
		}

		$timeout(bannerChange, 1500)
	}
]);