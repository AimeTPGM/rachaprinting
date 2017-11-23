angular.module('app')
.service('ThaiLanguagePack',
  function(){
    var nav={
      menus:[
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
    ],
    languagepack_nav_000001:'ค้นหา',
  }
    var navhome= {
      menus:[
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
    ],
    languagepack_navhome_000001:'ค้นหา',
  }
    var howto = {
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
    var orderDetail = {
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
    var orderForm = {
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
      bahtPerPcs:'บาทต่อชิ้น',
      languagepack_orderform_000001:{ name:'กรุณาเลือก'},
      languagepack_orderform_000002:'ออกแบบเอง',
      languagepack_orderform_000003:'ให้ราชาปริ้นติ้งออกแบบให้',
      languagepack_orderform_000004:'กำหนดเอง',
      languagepack_orderform_000005:'กำหนดเอง',
    }
    var Product = {
      languagepack_product_000001:'บริการสิ่งพิมพ์ของเรา',
      languagepack_product_000002:'ราคาเริ่มต้นที่'
    }
    var review = {
      languagepack_review_000001:'การันตีรีวิว',
      languagepack_review_000001:'จากลูกค้า',
    }
    var example ={
      languagepack_example_000001:'ผลงานที่ผ่านมา'
    }

    var banner = [
      {
        name: 'slide1'
      },
      {
        name: 'slide2'
      }
    ]

    this.getLanguagePack = {
      nav:nav,
      navhome: navhome,
      howto: howto,
      orderDetail: orderDetail,
      orderForm: orderForm,
      product: Product,
      review: review,
      example: example,
      banner: banner
    }
})
