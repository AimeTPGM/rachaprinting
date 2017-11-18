angular.module('app')
.controller('NavbarHomeCtrl',['$scope', '$http','$window', '$document', 'ScrollService',
	function($scope, $http, $window, $document, ScrollService){
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
			ScrollService.scrollToID(id)
		}

		
		

	}
]);