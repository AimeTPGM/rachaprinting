angular.module('app')
.controller('HowtoCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){

		$scope.steps = [
		{
			"description": "เลือกสินค้า&เช็คราคาหน้าเว็บ",
			"img": ""
		},
		{
			"description": "รอรับการติดต่อ",
			"img": ""
		},
		{
			"description": "ชำระเงิน",
			"img": ""
		},
		{
			"description": "รับสินค้าส่งตรงจากโรงพิมพ์",
			"img": ""
		}
		]

		var currentIndex = 0;
		
		$scope.moveStep = function(index){
			if(!angular.element(document.querySelector('#step'+index)).children().hasClass('active')){
				for (var i = 0; i < index; i++) {
					angular.element(document.querySelector('#step'+i)).children().addClass('active')
					angular.element(document.querySelector('#stepArrow'+i)).addClass('active')
				}
				angular.element(document.querySelector('#step'+index)).children().addClass('active')
				currentIndex = index;
			}
			else if(angular.element(document.querySelector('#step'+index)).children().hasClass('active')){
				for (var i = currentIndex; i > index; i--) {
					angular.element(document.querySelector('#step'+i)).children().removeClass('active')
					angular.element(document.querySelector('#stepArrow'+i)).removeClass('active')
				}
				angular.element(document.querySelector('#stepArrow'+index)).removeClass('active')
				currentIndex = index;
			}
			
		}
	}
]);