angular.module('app')
.controller('ReviewCtrl',['$scope', '$http','$window', '$timeout',
	function($scope, $http, $window, $timeout){
		$scope.activeIndex = 0;
		$scope.reviews = [
		{
			"customerName": "Aime",
			"customerCompany" : "AGA",
			"customerReview": "Good Service"
		},
		{
			"customerName": "James",
			"customerCompany" : "Agoda",
			"customerReview": "Kinda Okay"
		},
		{
			"customerName": "John",
			"customerCompany" : "Siam Paragon",
			"customerReview": "Hmmmm"
		},
		{
			"customerName": "Doe",
			"customerCompany" : "Siam Discovery",
			"customerReview": "Whaaat"
		},
		{
			"customerName": "Mary",
			"customerCompany" : "siam Center",
			"customerReview": "Helloooooo"
		},
		{
			"customerName": "Sharetea",
			"customerCompany" : "-",
			"customerReview": "Choco Choco Cheese"
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