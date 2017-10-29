angular.module('app')
.controller('HowtoCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){

		$scope.steps = [
		{
			"description": "เลือกสินค้า&เช็คราคาหน้าเว็บ",
			"details" : [
				{	
					"icon": "fa-hand-pointer-o",
					"content": "เลือกสินค้าที่คุณต้องการ"
				},
				{	
					"icon": "fa-sort-amount-asc",
					"content": "เลือกปริมาณสินค้า ยิ่งเยอะ ยิ่งถูก!"
				},
				{	
					"icon": "fa-calendar-check-o",
					"content": "เลือกวันที่สะดวกรับสินค้า"
				},
				{	
					"icon": "fa-check-square-o",
					"content": "กรอกข้อมูลติดต่อของคุณ"
				}
				
			]
		},
		{
			"description": "รอรับการติดต่อ",
			"details" : [
				{	
					"icon": "fa-clock-o",
					"content": "โรงพิมพ์ราชาการพิมพ์ รับพิมพ์งานตลอด 24 ชั่วโมง"
				},
				{	
					"icon": "fa-mobile",
					"content": "คุณจะได้รับการติดต่อจากเรา"
				},
				{	
					"icon": "fa-check-circle-o",
					"content": "โรงพิมพ์จะยืนยันคำสั่งซื้อของคุณทางโทรศัพท์หรืออีเมลล์ที่คุณได้ให้ไว้"
				}
				
			]
		},
		{
			"description": "ชำระเงิน",
			"details" : [
				{	
					"icon": "fa-university",
					"content": "เมื่อคุณได้รับการยืนยันคำสั่งซื้อ คุณสามารถทำการชำระเงินได้ทางการโอนเงินผ่านธนาคารต่อไปนี้"
				},
				{	
					"icon": "fa-money",
					"content": "ธนาคารไทยพาณิชย์"
				},
				{	
					"icon": "fa-money",
					"content": "ธนาคารกสิกรไทย"
				}
				
			]
		},
		{
			"description": "รับสินค้าส่งตรงจากโรงพิมพ์",
			"details" : [
				{	
					"icon": "fa-truck",
					"content": "โรงพิมพ์ราชาการพิมพ์ เป็นพาร์ทเนอร์กับบริษัทโลจิสติกส์ต่างๆ"
				},
				{	
					"icon": "fa-check-circle-o",
					"content": "เราสามารถจัดส่งสินค้าได้อย่างรวดเร็วและปลอดภัย"
				},
				{	
					"icon": "fa-check-circle-o",
					"content": "ตัวเลือก จัดส่งด่วน ลูกค้าจะได้รับสินค้าภายใน 2 วัน หลังการผลิตสินค้า"
				}
			]
		}
		]

		var currentIndex = 0;
		
		$scope.moveStep = function(index){
			angular.element(document.querySelector('#stepDetail'+currentIndex)).removeClass('active')
			angular.element(document.querySelector('#stepDetail'+index)).addClass('active')
			angular.element(document.querySelector('#stepDetailDesktop'+currentIndex)).removeClass('active')
			angular.element(document.querySelector('#stepDetailDesktop'+index)).addClass('active')

			if(!angular.element(document.querySelector('#step'+index)).children().hasClass('active')){
				for (var i = 0; i < index; i++) {
					angular.element(document.querySelector('#step'+i)).children().addClass('active')
					angular.element(document.querySelector('#stepDetailDesktop'+i)).removeClass('active')
					angular.element(document.querySelector('#stepArrow'+i)).addClass('active')
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