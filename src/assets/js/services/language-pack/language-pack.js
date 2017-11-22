angular.module('app')
.service('LanguageConfig',
	function(){
    // Thai
    var howtoTH = {
			languagepack_howto_000001:'4 ขั้นตอน สั่งง่าย',
			languagepack_howto_000002:'สั่งพิมพ์ออนไลน์กับ',
			languagepack_howto_000003:'ราชาการพิมพ์',
			languagepack_howto_000004:[
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
		}
    var orderDetailTH = {
          summary: 'สรุปรายการสั่งซื้อของคุณ',
          mainOption: {
            property: 'คุณเลือก',
            unselectedValue: 'กรุณาเลือกตัวเลือกการออกแบบ'
          },
          format: {
            property: 'ขนาด',
            unselectedValue: 'กรุณาเลือกขนาด',
            size: {
              unselectedValue: 'กรุณาใส่ขนาดที่ต้องการ',
              unselectedValueWidth: 'กรุณาใส่ความกว้าง',
              unselectedValueHeight: 'กรุณาใส่ความยาว'
            }
          },
          print: {
            property: 'การพิมพ์',
            print: {
              unselectedValue: 'กรุณาเลือกสีที่ใช้พิมพ์'
            },
            printColor:{
              unselectedValue: 'กรุณาเลือกการพิมพ์หน้าหลัง'
            }
          },
					languagepack_orderdetail_000001:'ประเภทกระดาษ',
					languagepack_orderdetail_000002:'กรุณาเลือกประเภทกระดาษ',
					languagepack_orderdetail_000003:'การเคลือบ',
					languagepack_orderdetail_000004:'กรุณาเลือกการเคลือบ',
					languagepack_orderdetail_000005:'จัดส่งวันที่',
					languagepack_orderdetail_000006:'กรุณาเลือกวันจัดส่ง',
					languagepack_orderdetail_000007:'ที่',
					languagepack_orderdetail_000008:'กรุณาเลือกราคาด้านบน',
					languagepack_orderdetail_000009:'ค่าใช้จ่ายสุทธิ',
					languagepack_orderdetail_000010:'บาท',
					languagepack_orderdetail_000011:'โปรดกรอกข้อมูลของคุณเพื่อให้เราติดต่อกลับ',
					languagepack_orderdetail_000012:'ชื่อ',
					languagepack_orderdetail_000013:'เบอร์โทรศัพท์',
					languagepack_orderdetail_000014:'อีเมลล์',
					languagepack_orderdetail_000015:'สั่งเลย',
					languagepack_orderdetail_000016:'เราได้รับออเดอร์ของคุณเรียบร้อยแล้ว!',
					languagepack_orderdetail_000017:'ขอบคุณค่ะ คุณ',
					languagepack_orderdetail_000018:'ราชาการพิมพ์ได้รับคำสั่งซื้อของคุณเรียบร้อยแล้ว',
					languagepack_orderdetail_000019:'พนักงานของเราจะทำการติดต่อกลับไปทางเบอร์',
					languagepack_orderdetail_000020:'ภายใน',
					languagepack_orderdetail_000021:'ชั่วโมง',
					languagepack_orderdetail_000022:'(หากทำการติดต่อทางโทรศัพท์ไม่ได้ ราชาการพิมพ์จะติดต่อคุณผ่านทาง',
					languagepack_orderdetail_000023:'ค่ะ)',
					languagepack_orderdetail_000024:'ต้องการพิมพ์ด่วนที่สุด?',
					languagepack_orderdetail_000025:'ติดต่อราชาการพิมพ์ได้ที่ 02-413-5661-4',
					languagepack_orderdetail_000026:'กำลังพาคุณกลับไปที่หน้าหลักของเว็บราชาการพิมพ์ภายใน',
					languagepack_orderdetail_000027:'วินาที...',
        }
    var orderFormTH = {
			firstStep: 'Step 1 : ตัวเลือกการพิมพ์',
			printOption:{
				printOption:'คุณมีแบบสิ่งพิมพ์ที่ต้องการแล้วหรือยัง?',
				designedOption:'มีแล้ว',
				upload:'คลิ๊กเพื่ออัพโหลดรูปภาพ',
				undesignedOption:'ให้เราออกแบบให้',
				rachaDesignOption:'ใช้บริการออกแบบของราชาการพิมพ์ในราคาที่คุ้มค่า!',
			},
			sizeOption:{
				sizeOption:'กำหนดขนาดเอง',
				designedOption:'กำหนดขนาดเอง',
				printingSizeOption:{
					printingSizeOption:'ขนาดของสิ่งพิมพ์',
					width:'กว้าง',
					height:'ยาว',
				},
			},
			sideOption:'เลือกประเภทการพิมพ์',
			colorOption:'เลือกสีที่ใช้พิมพ์',
			paperOption:'เลือกประเภทกระดาษ',
			refinementOption:'เลือกการเคลือบ',
			secondStep:'Step 2 เลือกจำนวนและความเร็วในการจัดส่ง',
			deliveryLocation:'จัดส่งไปที่',
			bangkok:'กรุงเทพมหานคร',
			totalPrice:'ราคาสิ่งพิมพ์พร้อมค่าจัดส่ง',
			fastestDelivery:'จัดส่งแบบด่วนพิเศษ?',
			deliveredDate:'วันรับสินค้า',
			quantity:'ปริมาณ',
			pieces:'ชิ้น',
			bahtPerPcs:'บาทต่อชิ้น'
		}
    var ProductTH = {
			languagepack_product_000001:'บริการสิ่งพิมพ์ของเรา',
			languagepack_product_000002:'ราคาเริ่มต้นที่'
		}
    var reviewTH = {
			languagepack_review_000001:'การันตีรีวิว',
			languagepack_review_000001:'จากลูกค้า',
		}

		this.thai = {
      howto: howtoTH,
      orderDetail: orderDetailTH,
      orderForm: orderFormTH,
      product: ProductTH,
      review: reviewTH
    }

    // English
    var howtoEN = {
			languagepack_howto_000001:'Easy 4 Steps',
			languagepack_howto_000002:' Online printing service ',
			languagepack_howto_000003:'with RachaPrinting',
			languagepack_howto_000004:[
			{
				"description": "Choose products & Pricing",
				"details" : [
					{
						"icon": "fa-hand-pointer-o",
						"content": "Choose your product"
					},
					{
						"icon": "fa-sort-amount-asc",
						"content": "Select quantity, Buy more get more discount!"
					},
					{
						"icon": "fa-calendar-check-o",
						"content": "Choose delivered date"
					},
					{
						"icon": "fa-check-square-o",
						"content": "Fill up your information"
					}

				]
			},
			{
				"description": "Wait for your reply",
				"details" : [
					{
						"icon": "fa-clock-o",
						"content": "RachaPrinting 24/7 service"
					},
					{
						"icon": "fa-mobile",
						"content": "Call back guarantee"
					},
					{
						"icon": "fa-check-circle-o",
						"content": "RachaPrinting make a confirmation via phone or e-mail from your information"
					}

				]
			},
			{
				"description": "Payment",
				"details" : [
					{
						"icon": "fa-university",
						"content": "After you got your order confirmation, You can pay with following bank"
					},
					{
						"icon": "fa-money",
						"content": "SCB, Siam Commercial Bank,"
					},
					{
						"icon": "fa-money",
						"content": "KBank, Kasikornbank"
					}

				]
			},
			{
				"description": "Get your products",
				"details" : [
					{
						"icon": "fa-truck",
						"content": "RachaPrinting is a partner of many logistic companies"
					},
					{
						"icon": "fa-check-circle-o",
						"content": "Guaranteed delivery Speeds and Secure"
					},
					{
						"icon": "fa-check-circle-o",
						"content": "Fastest delivery option, Customer will get products in 2 days after produce"
					}
				]
			}
			]
		}
    var orderDetailEN = {
          summary: 'Your Order Summary',
          mainOption: {
            property: 'You choose',
            unselectedValue: 'Please choose your design option'
          },
          format: {
            property: 'Format & Size',
            unselectedValue: 'Please select format you\'d prefered',
            size: {
              unselectedValue: 'Please enter size',
              unselectedValueWidth: 'Please enter width',
              unselectedValueHeight: 'Please enter height'
            }
          },
          print: {
            property: 'Printing',
            print: {
              unselectedValue: 'Please select printing color option'
            },
            printColor:{
              unselectedValue: 'Please select page printing option'
            }
          },
					languagepack_orderdetail_000001:'Paper type',
					languagepack_orderdetail_000002:'Please select paper type option',
					languagepack_orderdetail_000003:'Refinement',
					languagepack_orderdetail_000004:'Please select paper refinement option',
					languagepack_orderdetail_000005:'Delivered date',
					languagepack_orderdetail_000006:'Please select delivered date option',
					languagepack_orderdetail_000007:' - ',
					languagepack_orderdetail_000008:'Please select a product price',
					languagepack_orderdetail_000009:'Total cost',
					languagepack_orderdetail_000010:'Baht',
					languagepack_orderdetail_000011:'Please fill information form for our call back',
					languagepack_orderdetail_000012:'Name',
					languagepack_orderdetail_000013:'Telephone Number',
					languagepack_orderdetail_000014:'e-mail',
					languagepack_orderdetail_000015:'Order',
					languagepack_orderdetail_000016:'We got your order!',
					languagepack_orderdetail_000017:'Thank you, ',
					languagepack_orderdetail_000018:'RachaPrinting already got your order',
					languagepack_orderdetail_000019:'We will call you back with number ',
					languagepack_orderdetail_000020:' in',
					languagepack_orderdetail_000021:' hours',
					languagepack_orderdetail_000022:'(If we can not call you, we will send a confimation e-mail to ',
					languagepack_orderdetail_000023:')',
					languagepack_orderdetail_000024:'Need fastest delivery?',
					languagepack_orderdetail_000025:' You can directly call us 02-413-5661-4',
					languagepack_orderdetail_000026:'Back to RachaPrinting index ',
					languagepack_orderdetail_000027:' Seconds ...',
        }
    var orderFormEN = {			firstStep: 'Step 1 : Select printing options',
					printOption:{
						printOption:'Do you have a printing design?',
						designedOption:'Yes, I do.',
						upload:'Click to upload',
						undesignedOption:'Let us design.',
						rachaDesignOption:'RachaPrinting design service.',
					},
					sizeOption:{
						sizeOption:'Printing size options.',
						designedOption:'My printing size.',
						printingSizeOption:{
							printingSizeOption:'Printing size.',
							width:'Width',
							height:'Heigh',
						},
					},
					sideOption:'Printing side options',
					colorOption:'Printing color options',
					paperOption:'Paper type options',
					refinementOption:'Refinement options',
					secondStep:'Step 2 : Select quantity and delivered date',
					deliveryLocation:'Delivery location',
					bangkok:'Bangkok',
					totalPrice:'Total price',
					fastestDelivery:'Fastest Delivery',
					deliveredDate:'Delivired date',
					quantity:'Quantity',
					pieces:'pcs.',
					bahtPerPcs:'Bht/pc'
				}
    var ProductEN = {
			languagepack_product_000001:'Our products',
			languagepack_product_000002:'Starting price'
		}
    var reviewEN = {
			languagepack_review_000001:'Guarantee review by ',
			languagepack_review_000002:'Customer'
		}
    this.eng = {
      howto: howtoEN,
      orderDetail: orderDetailEN,
      orderForm: orderFormEN,
      product: ProductEN,
      review: reviewEN
    }
})
