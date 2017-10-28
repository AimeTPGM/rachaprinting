angular.module('app')
.controller('NavbarCtrl',['$scope', '$http','$window', '$document',
	function($scope, $http, $window, $document){
		$scope.menus = [
			{
				'name': 'บริการของเรา',
				'section': 'service'
			},
			{
				'name': 'วิธีสั่งซื้อ',
				'section': 'howto'
			},
			{
				'name': 'รีวิว',
				'section': 'review'
			},
			{
				'name': 'ผลงานที่ผ่านมา',
				'section': 'example'
			}
		]
		$scope.scrollTo = function(id){
			$document.scrollToElementAnimated(angular.element(document.getElementById(id)))
		}
		

	}
]);