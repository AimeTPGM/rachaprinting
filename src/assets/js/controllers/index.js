angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.templates = {
			'navbar' : '/views/navbar.html',
			'banner' : '/views/banner.html',
			'product' : '/views/product.html',
			'howto' : '/views/howto.html',
			'review' : '/views/review.html',
			'example' : '/views/example.html',
			'footer' : '/views/footer.html'
		}
	}
]);