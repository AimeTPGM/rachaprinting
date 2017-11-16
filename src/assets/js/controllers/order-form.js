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

		$scope.templateList = [{id:1, name: 'A4', description: 'print as A4'}, {id:2, name: 'A3', description: 'print as A3'}, {id:3, name: 'A5', description: 'print as A5'}]
		$scope.prints = [{id:1, name: 'One-side', description: 'print one side'},{id:2, name: 'Two-side', description: 'print two side'}]
		$scope.printColors = [{id:1, name: 'Black & White', description: 'print black & white'},{id:2, name: 'Color', description: 'print color'}]
		$scope.paperTypes = [{id:1, name: '200 gram', description: '200 gram'},{id:2, name: '180 gram', description: '180 gram'},{id:3, name: '150 gram', description: '150 gram'},{id:4, name: '130 gram', description: '130 gram'},{id:5, name: '100 gram', description: '100 gram'},{id:6, name: '80 gram', description: '80 gram'}]
		$scope.refinements = [{id:1, name: 'None', description: 'None'}, {id:2, name: 'UV', description: 'UV'}]
		
		$scope.selectedValue = {}
		$scope.setMainChoice = function(){

		}

		$scope.setFormat = function(){

		}

		$scope.setPrint = function(){

		}

		$scope.setPrintColor = function(){

		}

		$scope.setPaperType = function(){

		}

		$scope.setRefinement = function(){

		}

	}
]);