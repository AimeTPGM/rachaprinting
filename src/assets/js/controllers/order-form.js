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

		$scope.templateList = [{id:1, name: 'Please Select'}, {id:2, name: 'Template1'}, {id:3, name: 'Template2'}]

		$scope.selectedValue = {}
		$scope.setValue = function(list){

			
		}
	}
]);