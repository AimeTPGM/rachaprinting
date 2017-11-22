angular.module('app')
.controller('NavbarHomeCtrl',['$scope', '$http','$window', '$document', 'ScrollService','$routeParams',
	'LanguageConfig',
	function($scope, $http, $window, $document, ScrollService, $routeParams,
		LanguageConfig,){

		if ($routeParams.lang == 'th') {
			$scope.webContent = LanguageConfig
		} else if ($routeParams.lang == 'en') {
			$scope.webContent = LanguageConfig.eng
		}

		$scope.menus = $scope.webContent.navhome.menus
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


		$scope.lang = function(lang){
			$window.location.href = '/'+lang
		}

	}
]);
