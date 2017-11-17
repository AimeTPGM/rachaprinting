angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.templates = {
			'navbar' : '/views/navbar-home.html',
			'banner' : '/views/banner.html',
			'product' : '/views/product.html',
			'howto' : '/views/howto.html',
			'review' : '/views/review.html',
			'example' : '/views/example.html',
			'footer' : '/views/footer.html',
			'credit' : '/views/credit.html',
			'toTop' : '/views/totop.html'
		}
	}
]);