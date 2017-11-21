angular.module('app')
.service('LanguageConfig',
	function(){
    // Thai
    var howtoTH = {
			languagepack_howto_000001:'4 ขั้นตอน สั่งง่าย',
			languagepack_howto_000002:'สั่งพิมพ์ออนไลน์กับ',
			languagepack_howto_000003:'ราชาการพิมพ์',
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
			laugeagepack_howto_000001:'Easy 4 Steps',
			laugeagepack_howto_000002:' Online printing service ',
			laugeagepack_howto_000003:'with RachaPrinting',
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
    var ProductEN = {
			languagepack_product_000001:'Our products',
			languagepack_product_000002:'Starting price'
		}
    var reviewEN = {
			languagepack_review_000001:'Garantee review by ',
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
