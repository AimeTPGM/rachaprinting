angular.module('app')
.service('EnglishLanguagePack',
  function(){
    var nav ={
        menus:[
        {
          'name': 'Our Services',
          'section': 'service'
        },
        {
          'name': 'How to order',
          'section': 'howto'
        },
        {
          'name': 'Review by customer',
          'section': 'review'
        },
        {
          'name': 'Accomplishments',
          'section': 'example'
        }
      ],
      languagepack_nav_000001:'Search',
    }
    var navhome = {
        menus:[
        {
          'name': 'Our Services',
          'section': 'service'
        },
        {
          'name': 'How to order',
          'section': 'howto'
        },
        {
          'name': 'Review by customer',
          'section': 'review'
        },
        {
          'name': 'Accomplishments',
          'section': 'example'
        }
      ],
      languagepack_navhome_000001:'Search',
    }
    var howto = {
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
    var orderDetail = {
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
    var orderForm = {     firstStep: 'Step 1 : Select printing options',
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
          bahtPerPcs:'Bht/pc',
          languagepack_orderform_000001:{ name:'My design'},
          languagepack_orderform_000002:'My design',
          languagepack_orderform_000003:'Let us design',
          languagepack_orderform_000004:'My format',
          languagepack_orderform_000005:'My size',
        }
    var Product = {
      languagepack_product_000001:'Our products',
      languagepack_product_000002:'Starting price'
    }
    var review = {
      languagepack_review_000001:'Guarantee review by ',
      languagepack_review_000002:'Customer'
    }
    var example ={
      languagepack_example_000001:'Accomplishments',
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
      nav: nav,
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
