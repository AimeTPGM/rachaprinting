angular.module('app')
.controller('HowtoCtrl',['$scope', '$http','$window', 'AngularServiceFactory', 'AngularService',
	function($scope, $http, $window, AngularServiceFactory, AngularService){

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
			AngularService.removeActiveClassByID('stepDetail'+currentIndex)
			AngularService.removeActiveClassByID('stepDetailDesktop'+currentIndex)
			AngularService.addActiveClassByID('stepDetail'+index)
			AngularService.addActiveClassByID('stepDetailDesktop'+index)

			if(!AngularServiceFactory.selectByID('step'+index).children().hasClass('active')){
				for (var i = 0; i < index; i++) {
					AngularService.addActiveClassOnChildrenByID('step'+i)
					AngularService.removeActiveClassByID('stepDetailDesktop'+i)
					AngularService.addActiveClassByID('stepArrow'+i)
					AngularService.addActiveClassByID('stepArrow'+i)
				}
				AngularService.addActiveClassOnChildrenByID('step'+index)
				currentIndex = index;
			}
			else if(AngularServiceFactory.selectByID('step'+index).children().hasClass('active')){
				for (var i = currentIndex; i > index; i--) {
					AngularService.removeActiveClassOnChildrenByID('step'+i)
					AngularService.removeActiveClassByID('stepArrow'+i)
				}
				AngularService.removeActiveClassByID('stepArrow'+index)
				currentIndex = index;
			}
			
		}
	}
]);