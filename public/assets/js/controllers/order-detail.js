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
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
      {  
        return (true)  
      }  
      alert('กรุณากรอกอีเมลล์ในรูปแบบที่ถูกต้อง (ตัวอย่าง: email@example.com)')
      $scope.customer.email == ''
      return (false)  
    } 

		$scope.placeOrder = function(){
      console.log($scope.customer.phone)
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
          $scope.placeholder.phone = 'กรุณาใสเบอร์โทรศัพท์ที่ติดต่อได้'

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