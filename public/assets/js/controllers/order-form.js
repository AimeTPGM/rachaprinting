angular.module('app')
.controller('OrderFormCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
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
		
		$scope.prices = [
			{
				amount: '100',
				priceOfDate: ['447', '414', '381', '331']
			},
			{
				amount: '200',
				priceOfDate: ['730', '676', '622', '540']
			},
			{
				amount: '300',
				priceOfDate: ['783', '723', '666', '579']
			},
			{
				amount: '500',
				priceOfDate: ['1180', '1095', '1005', '875']
			},
			{
				amount: '1000',
				priceOfDate: ['1570', '1450', '1330', '1160']
			},
			{
				amount: '2000',
				priceOfDate: ['2340', '2180', '2000', '1740']
			},
			{
				amount: '3000',
				priceOfDate: ['3120', '2880', '2670', '2310']
			},
			{
				amount: '5000',
				priceOfDate: ['4650', '4300', '3950', '3450']
			},
			{
				amount: '10000',
				priceOfDate: ['8500', '7900', '7200', '6300']
			}
		]

		$scope.selectedValue = {}

		$scope.setMainChoice = function(index){

			if(index == 0){
				angular.element(document.querySelector('#choice1')).addClass('selected')
				angular.element(document.querySelector('#choice2')).removeClass('selected')
				$scope.selectedValue.choice = { name: 'ออกแบบเอง' }
			}
			else if(index == 1){
				angular.element(document.querySelector('#choice2')).addClass('selected')
				angular.element(document.querySelector('#choice1')).removeClass('selected')
				$scope.selectedValue.choice = { name: 'ให้ราชาปริ้นติ้งออกแบบ' }
			}
			console.log($scope.selectedValue)
		}

		$scope.setFormat = function(index){
			$scope.selectedValue.format = $scope.formats[index]
			console.log($scope.selectedValue)
		}

		$scope.setPrint = function(index){
			$scope.selectedValue.print = $scope.prints[index]
			console.log($scope.selectedValue)
		}

		$scope.setPrintColor = function(index){
			$scope.selectedValue.printColor = $scope.printColors[index]
			console.log($scope.selectedValue)
		}

		$scope.setPaperType = function(index){
			$scope.selectedValue.paperType = $scope.paperTypes[index]
			console.log($scope.selectedValue)
		}

		$scope.setRefinement = function(index){
			$scope.selectedValue.refinement = $scope.refinements[index]
			console.log($scope.selectedValue)
		}

	}
]);