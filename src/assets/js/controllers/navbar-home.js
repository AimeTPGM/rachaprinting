angular.module('app')
.controller('NavbarHomeCtrl',['$scope', '$http','$window', '$document', 'ScrollService','$routeParams',
	'LanguageConfig',
	function($scope, $http, $window, $document, ScrollService, $routeParams,
		LanguageConfig,){

		if ($routeParams.lang == 'th') {
			$scope.webContent = LanguageConfig.thai.navhome
		} else if ($routeParams.lang == 'en') {
			$scope.webContent = LanguageConfig.eng.navhome
		}

		$scope.menus = $scope.webContent.menus
		var showMobile = false
		$scope.navMobile = function(){
			if(showMobile == false){
				showMobile = true
				$scope.show = function(){
					return true;
				}
			}
			else {
				showMobile = false
				$scope.show = function(){
					return false;
				}
			}

		}

		$scope.scrollTo = function(id){
			ScrollService.scrollToID(id)
		}




	}
]);
