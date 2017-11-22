angular.module('app')
.controller('ReviewCtrl',['$scope', '$http','$window', '$timeout', '$routeParams', 'ReviewFactory', 'LanguageConfig',
	function($scope, $http, $window, $timeout, $routeParams, ReviewFactory, LanguageConfig){

		var languagePack = LanguageConfig.setLanguage($routeParams.lang)
    $scope.webContent = languagePack.review

		$scope.activeIndex = 0;
		$scope.reviews = ReviewFactory.getReviews()

		var reviewAutoChange = function() {

			if($scope.activeIndex == $scope.reviews.length-1)
				$scope.activeIndex = 0;
			else
				$scope.activeIndex++;
			$timeout(reviewAutoChange, 5000);
		}

		$timeout(reviewAutoChange, 5000);

		$scope.changeReview = function(index){
			$scope.activeIndex = index;
		}
	}
]);
