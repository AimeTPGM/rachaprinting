angular.module('app')
.service('LanguageConfig',
	function(){
    // Thai
    var howtoTH = {}
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
          }
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
    var ProductTH = {}
    var reviewTH = {}

		this.thai = {
      howto: howtoTH,
      orderDetail: orderDetailTH,
      orderForm: orderFormTH,
      product: ProductTH,
      review: reviewTH
    }

    // English
    var howtoEN = {}
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
            property: 'Printing์',
            print: {
              unselectedValue: 'Please select printing color option'
            },
            printColor:{
              unselectedValue: 'Please select page printing option'
            }
          }
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
    var ProductEN = {}
    var reviewEN = {}
    this.eng = {
      howto: howtoEN,
      orderDetail: orderDetailEN,
      orderForm: orderFormEN,
      product: ProductEN,
      review: reviewEN
    }
})
