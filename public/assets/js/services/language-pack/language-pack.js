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
    var orderFormTH = {}
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
    var orderFormEN = {}
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