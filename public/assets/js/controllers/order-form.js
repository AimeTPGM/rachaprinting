angular.module('app')
.controller('OrderFormCtrl',['$scope', '$http','$window', '$document', 
	'OrderDetailService', 
	'FormatFactory', 'PrintFactory', 'PrintColorFactory',
	function($scope, $http, $window, $document, 
		OrderDetailService,
		FormatFactory, PrintFactory, PrintColorFactory){

		$scope.formats = FormatFactory.getFormats()
		$scope.prints = PrintFactory.getPrints()
		$scope.printColors = PrintColorFactory.getPrintColors()
		$scope.paperTypes = 
		$scope.refinements = [{id:1, name: 'None', description: 'None'}, {id:2, name: 'UV', description: 'UV'}]
		$scope.sortedPaperTypes = $scope.paperTypes
		$scope.dayAndDate = [
			{
				day: 'วันพฤหัสบดี',
				date: '23 พ.ย.'
			},
			{
				day: 'วันศุกร์',
				date: '24 พ.ย.'
			},
			{
				day: 'วันเสาร์',
				date: '25 พ.ย.'
			},
			{
				day: 'วันอาทิตย์',
				date: '26 พ.ย.'
			},
			{
				day: 'วันจันทร์',
				date: '27 พ.ย.'
			}
		]
		$scope.prices = [
			{
				amount: '100',
				priceOfDate: [
					{
						fullprice: '447', 
						perOne: '4.47'
					},
					{
						fullprice: '414', 
						perOne: '4.14'
					},
					{
						fullprice: '381', 
						perOne: '3.81'
					},
					{
						fullprice: '331', 
						perOne: '3.31'
					}
				]
			},
			{
				amount: '200',
				priceOfDate: [
					{
						fullprice: '730', 
						perOne: '3.65'
					},
					{
						fullprice: '676', 
						perOne: '3.38'
					},
					{
						fullprice: '622', 
						perOne: '3.11'
					},
					{
						fullprice: '540', 
						perOne: '2.70'
					}
				]
			},
			{
				amount: '300',
				priceOfDate: [
					{
						fullprice: '783', 
						perOne: '2.61'
					},
					{
						fullprice: '723', 
						perOne: '2.41'
					},
					{
						fullprice: '666', 
						perOne: '2.22'
					},
					{
						fullprice: '579', 
						perOne: '1.93'
					}
				]
			},
			{
				amount: '500',
				priceOfDate: [
					{
						fullprice: '1180', 
						perOne: '2.36'
					},
					{
						fullprice: '1095', 
						perOne: '2.19'
					},
					{
						fullprice: '1005', 
						perOne: '2.01'
					},
					{
						fullprice: '875', 
						perOne: '1.75'
					}
				]
			},
			{
				amount: '1000',
				priceOfDate: [
					{
						fullprice: '1570', 
						perOne: '1.57'
					},
					{
						fullprice: '1450', 
						perOne: '1.45'
					},
					{
						fullprice: '1330', 
						perOne: '1.33'
					},
					{
						fullprice: '1160', 
						perOne: '1.16'
					}
				]
			},
			{
				amount: '2000',
				priceOfDate: [
					{
						fullprice: '2340', 
						perOne: '1.17'
					},
					{
						fullprice: '2180', 
						perOne: '1.09'
					},
					{
						fullprice: '2000', 
						perOne: '1.00'
					},
					{
						fullprice: '1740', 
						perOne: '0.87'
					}
				]
			},
			{
				amount: '3000',
				priceOfDate: [
					{
						fullprice: '3120', 
						perOne: '1.04'
					},
					{
						fullprice: '2880', 
						perOne: '0.96'
					},
					{
						fullprice: '2670', 
						perOne: '0.89'
					},
					{
						fullprice: '2310', 
						perOne: '0.97'
					}
				]
			},
			{
				amount: '5000',
				priceOfDate: [
					{
						fullprice: '4650', 
						perOne: '0.93'
					},
					{
						fullprice: '4300', 
						perOne: '0.86'
					},
					{
						fullprice: '3950', 
						perOne: '0.79'
					},
					{
						fullprice: '3450', 
						perOne: '0.69'
					}
				]
			},
			{
				amount: '10000',
				priceOfDate: [
					{
						fullprice: '8500', 
						perOne: '0.85'
					},
					{
						fullprice: '7900', 
						perOne: '0.79'
					},
					{
						fullprice: '7200', 
						perOne: '0.72'
					},
					{
						fullprice: '6300', 
						perOne: '0.63'
					}
				]
			}
		]

		$scope.selectedValue = {}
		$scope.showPaperType = true
		$scope.showPaperTypeList = false

		$scope.setMainChoice = function(index){

			if(index == 0){
				angular.element(document.querySelector('#choice1')).addClass('selected')
				angular.element(document.querySelector('#choice2')).removeClass('selected')
				$scope.selectedValue.choice = { name: 'ออกแบบเอง' }
			}
			else if(index == 1){
				angular.element(document.querySelector('#choice2')).addClass('selected')
				angular.element(document.querySelector('#choice1')).removeClass('selected')
				$scope.selectedValue.choice = { name: 'ให้ราชาปริ้นติ้งออกแบบให้' }
			}
			OrderDetailService.orderDetail.choice = $scope.selectedValue.choice
			console.log($scope.selectedValue)
		}

		$scope.setPrint = function(index){
			$scope.selectedValue.print = $scope.prints[index]
			OrderDetailService.orderDetail.print = $scope.prints[index]
			console.log($scope.selectedValue)
		}

		$scope.setPrintColor = function(index){
			$scope.selectedValue.printColor = $scope.printColors[index]
			OrderDetailService.orderDetail.printColor = $scope.printColors[index]
			console.log($scope.selectedValue)
		}

		$scope.setPrice = function(i, j){
			$scope.selectedValue.price = $scope.prices[i].priceOfDate[j]
			OrderDetailService.orderDetail.price = $scope.prices[i].priceOfDate[j]
			$scope.selectedValue.dayAndDate = $scope.dayAndDate[j+1]
			OrderDetailService.orderDetail.dayAndDate = $scope.dayAndDate[j+1]
			console.log($scope.selectedValue)
			$document.scrollToElementAnimated(angular.element(document.getElementById('orderDetail')), 72)
		}

		// Format

		$scope.selectedFormat = { name: 'Please Select...' }
		$scope.showFormatList = false
		$scope.formatSize = {}

		$scope.showFormat = function(){
			if($scope.showFormatList == true) $scope.showFormatList = false
			else if($scope.showFormatList == false) $scope.showFormatList = true
		}

		$scope.setWidth = function(){
			setSize($scope.formatSize.width, $scope.formatSize.height)
			if($scope.formatSize.width != undefined){
				if($scope.formatSize.width == '') angular.element(document.querySelector('#width')).attr('required', true)
				else angular.element(document.querySelector('#width')).removeAttr('required')
			}
		}

		$scope.setHeight = function(){
			setSize($scope.formatSize.width, $scope.formatSize.height)
			if($scope.formatSize.height != undefined){
				if($scope.formatSize.height == '') angular.element(document.querySelector('#height')).attr('required', true)
				else angular.element(document.querySelector('#height')).removeAttr('required')
			}
		}

		function setSize(w, h){
			var description = w+" X "+h+" mm"
			$scope.selectedFormat = { 
				name: 'กำหนดขนาดเอง', 
				description: description, 
				formatSize: {
					width: w,
					height: h
				}
			}
			$scope.selectedValue.format = $scope.selectedFormat
			OrderDetailService.orderDetail.format = $scope.selectedFormat
		}

		$scope.setFormat = function(id, index){
			if(index == -1){
				angular.element(document.querySelector('#width')).removeAttr('disabled')
				angular.element(document.querySelector('#height')).removeAttr('disabled')
				angular.element(document.querySelector('#width')).attr('required', true)
				angular.element(document.querySelector('#height')).attr('required', true)
				console.log(angular.element(document.querySelector('#width')))
				$scope.formatSize = {}
				var description = $scope.formatSize.width+" x "+$scope.formatSize.height
				$scope.selectedFormat = { name: 'กำหนดขนาดเอง', description: description }
			} 
			else {
				angular.element(document.querySelector('#width')).removeAttr('required')
				angular.element(document.querySelector('#height')).removeAttr('required')
				angular.element(document.querySelector('#width')).attr('disabled', true)
				angular.element(document.querySelector('#height')).attr('disabled', true)
				$scope.selectedFormat = $scope.formats[index]
				$scope.formatSize = $scope.formats[index].formatSize
				console.log($scope.formatSize)
			}
			$scope.selectedValue.format = $scope.selectedFormat
			OrderDetailService.orderDetail.format = $scope.selectedFormat
			console.log($scope.selectedValue)
			angular.element(document.querySelector('#selectedFormat')).addClass('active')
			$scope.showFormatList = false
		}

		// Refinement
		$scope.selectedRefinement = { name: 'Please Select...' }
		$scope.showRefinementList = false
		$scope.showRefinement = function(){
			if($scope.showRefinementList == true) $scope.showRefinementList = false
			else if($scope.showRefinementList == false) $scope.showRefinementList = true
		}

		$scope.setRefinement = function(id, index){
			$scope.selectedRefinement = $scope.refinements[index]
			$scope.selectedValue.refinement = $scope.selectedRefinement
			OrderDetailService.orderDetail.refinement = $scope.selectedRefinement
			console.log($scope.selectedValue)
			angular.element(document.querySelector('#selectedRefinement')).addClass('active')
			$scope.showRefinementList = false
		}
		
		// PaperType
		$scope.selectedPaperType = { name: 'Please Select...' }
		$scope.showPaperTypeList = false
		$scope.showSelectPaperType = function(){
			if($scope.showPaperTypeList == true) $scope.showPaperTypeList = false
			else if($scope.showPaperTypeList == false) $scope.showPaperTypeList = true
		}

		$scope.setPaperType = function(id, index){
			$scope.selectedPaperType = $scope.paperTypes[index]
			$scope.selectedValue.paperType = $scope.selectedPaperType
			OrderDetailService.orderDetail.paperType = $scope.selectedPaperType
			console.log($scope.selectedValue)
			angular.element(document.querySelector('#selectedPaperType')).addClass('active')
			$scope.showPaperTypeList = false
		}

	}
]);