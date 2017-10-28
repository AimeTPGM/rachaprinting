angular.module('app')
.controller('toTopCtrl',['$scope', '$document',
	function($scope, $document){

		$scope.scrollTop = function(){
			$document.scrollTopAnimated(0)
		}

	}
]);