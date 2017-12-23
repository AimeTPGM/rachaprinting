angular.module('app')
.controller('OrderDetailCtrl',['$scope', '$http','$window', '$timeout', '$interval', '$document', '$routeParams', 'AngularService',

  'OrderDetailService', 'ScrollService', 'LanguageConfig',
  function($scope, $http, $window, $timeout, $interval, $document, $routeParams, AngularService,
    OrderDetailService, ScrollService, LanguageConfig){
    
    var languagePack = LanguageConfig.setLanguage($routeParams.lang)
    $scope.webContent = languagePack.orderDetail
    
    $scope.orderDetail = OrderDetailService.orderDetail
    $scope.countdown = 10
    $scope.customer = {}
    $scope.placeholder = {
      name: 'ชื่อ',
      email: 'อีเมลล์',
      phone: 'เบอร์โทรศัพท์'
    }

    function ValidateEmail(mail) {  
      var regexStr = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
      var regex = new RegExp(regexStr)
      console.log(mail)
      console.log(regex.test(mail.toLowerCase()))
     if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail))  
      {  
        return true  
      }  
      alert('กรุณากรอกอีเมลล์ในรูปแบบที่ถูกต้อง (ตัวอย่าง: email@example.com)')
      $scope.customer.email == ''
      return false
    } 

		$scope.placeOrder = function(){
      if($scope.customer.name == null || $scope.customer.name == ''
        || $scope.customer.phone == null || $scope.customer.phone == ''
        || $scope.customer.email == null || $scope.customer.email == '') {
        if($scope.customer.name == null || $scope.customer.name == '') {
          AngularService.addRequiredByID('customerName')
          $scope.placeholder.name = 'กรุณาใส่ชื่อของท่าน'
        } else {
          AngularService.removeRequiredByID('customerName')
        }
        if($scope.customer.phone == null || $scope.customer.phone == '') {
          AngularService.addRequiredByID('customerPhone')
          $scope.placeholder.phone = 'กรุณาใส่เบอร์โทรศัพท์ที่ติดต่อได้'

        } else {
          AngularService.removeRequiredByID('customerPhone')

        }
        if($scope.customer.email == null || $scope.customer.email == '') {
          AngularService.addRequiredByID('customerEmail')
          $scope.placeholder.email = 'กรุณาใส่อีเมลล์ที่ใช้ปัจจุบัน'
        } else {
          AngularService.removeRequiredByID('customerEmail')
        }
      }

      else {
        console.log('validate mail')
        console.log($scope.customer.email)
        if(ValidateEmail($scope.customer.email)) {
          $scope.completedOrder = true
          OrderDetailService.orderDetail.customer = $scope.customer
          $interval(function(){
            $scope.countdown--
            $timeout(function() {
              $window.location.href = "/"
            }, $scope.countdown*1000)
          }, 1000)
        }
      }
		}
    $scope.scrollToID = function(id){
      ScrollService.scrollToID(id)
    }
  }
]);