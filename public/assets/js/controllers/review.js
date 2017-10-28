angular.module('app')
.controller('ReviewCtrl',['$scope', '$http','$window', '$timeout',
	function($scope, $http, $window, $timeout){
		$scope.activeIndex = 0;
		var imgPath = "assets/img/review.png"
		$scope.reviews = [
		{
			"customerName": "Aime",
			"customerCompany" : "AGA",
			"customerReview": "Good Service",
			"customerImg": imgPath
		},
		{
			"customerName": "James",
			"customerCompany" : "Agoda",
			"customerReview": "Kinda Okay",
			"customerImg": imgPath
		},
		{
			"customerName": "John",
			"customerCompany" : "Siam Paragon",
			"customerReview": "Hmmmm",
			"customerImg": imgPath
		},
		{
			"customerName": "Doe",
			"customerCompany" : "Siam Discovery",
			"customerReview": "Whaaat",
			"customerImg": imgPath
		},
		{
			"customerName": "Mary",
			"customerCompany" : "siam Center",
			"customerReview": "Helloooooo",
			"customerImg": imgPath
		},
		{
			"customerName": "Sharetea",
			"customerCompany" : "-",
			"customerReview": "Choco Choco Cheese",
			"customerImg": imgPath
		}
		]

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