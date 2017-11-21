angular.module('app')
.controller('NavbarCtrl',['$scope', '$http','$window', '$document', '$route',
	function($scope, $http, $window, $document, $route){
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
		var showMobile = false
		$scope.navMobile = function(){
			if(showMobile == false){
				showMobile = true
				$scope.show = function(){
					return true;
				}
			}
			else {
				showMobile = false
				$scope.show = function(){
					return false;
				}
			}

		}

		$scope.scrollTo = function(id){
			$window.location.href = '/#'+id
		}

		$scope.lang = function(lang){
			$window.location.href = '/'+lang
		}




	}
]);
