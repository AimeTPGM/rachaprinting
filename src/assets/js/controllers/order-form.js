angular.module('app')
.controller('OrderFormCtrl',['$scope', '$http','$window', '$document', 'OrderDetailService', 
	function($scope, $http, $window, $document, OrderDetailService){
		$scope.show = function(id){
			angular.element(document.querySelector('#type')).addClass('active')
			$scope.selectedValue.id = list.id
			$scope.selectedValue.name = list.name
			angular.element(document.querySelector('#type')).removeClass('active')
			console.log($scope.selectedValue)
		}

		$scope.formats = [{id:1, name: 'A4', description: 'print as A4'}, {id:2, name: 'A3', description: 'print as A3'}, {id:3, name: 'A5', description: 'print as A5'}]
		$scope.prints = [{id:1, name: 'One-side', description: 'print one side'},{id:2, name: 'Two-side', description: 'print two side'}]
		$scope.printColors = [{id:1, name: 'Black & White', description: 'print black & white'},{id:2, name: 'Color', description: 'print color'}]
		$scope.paperTypes = [{id:1, name: '200 gram', description: '200 gram'},{id:2, name: '180 gram', description: '180 gram'},{id:3, name: '150 gram', description: '150 gram'},{id:4, name: '130 gram', description: '130 gram'},{id:5, name: '100 gram', description: '100 gram'},{id:6, name: '80 gram', description: '80 gram'}]
		$scope.refinements = [{id:1, name: 'None', description: 'None'}, {id:2, name: 'UV', description: 'UV'}]
		$scope.sortedPaperTypes = $scope.paperTypes
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
			console.log($scope.selectedValue)
			$document.scrollToElementAnimated(angular.element(document.getElementById('orderDetail')), 72)
		}

		// Format

		$scope.selectedFormat = { name: 'Please Select...' }

		$scope.showFormat = function(){
			$scope.showFormatList = true
		}

		$scope.setFormat = function(id, index){
			$scope.selectedFormat = $scope.formats[index]
			$scope.selectedValue.format = $scope.formats[index]
			OrderDetailService.orderDetail.format = $scope.formats[index]
			console.log($scope.selectedValue)
			angular.element(document.querySelector('#selectedFormat')).addClass('active')
			$scope.showFormatList = false
		}

		// Refinement

		$scope.selectedRefinement = { name: 'Please Select...' }

		$scope.showRefinement = function(){
			$scope.showRefinementList = true
		}

		$scope.setRefinement = function(id, index){
			$scope.selectedRefinement = $scope.refinements[index]
			$scope.selectedValue.refinement = $scope.refinements[index]
			OrderDetailService.orderDetail.refinement = $scope.refinements[index]
			console.log($scope.selectedValue)
			angular.element(document.querySelector('#selectedRefinement')).addClass('active')
			$scope.showRefinementList = false
		}
		
		// PaperType

		$scope.selectedPaperType = { name: 'Please Select...' }

		$scope.showSelectPaperType = function(){
			$scope.showPaperTypeList = true
		}

		$scope.setPaperType = function(id, index){
			$scope.selectedPaperType = $scope.paperTypes[index]
			$scope.selectedValue.paperType = $scope.paperTypes[index]
			OrderDetailService.orderDetail.paperType = $scope.paperTypes[index]
			console.log($scope.selectedValue)
			angular.element(document.querySelector('#selectedPaperType')).addClass('active')
			$scope.showPaperTypeList = false
		}

	}
]);