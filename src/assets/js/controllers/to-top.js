angular.module('app')
.controller('toTopCtrl',['$scope', '$document', 'ScrollService',
	function($scope, $document, ScrollService){

		$scope.scrollTop = function(){
			ScrollService.scrollTop()
		}

	}
]);