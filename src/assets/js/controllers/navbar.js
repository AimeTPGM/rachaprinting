angular.module('app')
.controller('NavbarCtrl',['$scope', '$http','$window', '$document','$routeParams',
	'LanguageConfig',
	function($scope, $http, $window, $document,$routeParams,
		LanguageConfig){

			if ($routeParams.lang == 'th') {
				$scope.webContent = LanguageConfig.thai.nav
			} else if ($routeParams.lang == 'en') {
				$scope.webContent = LanguageConfig.eng.nav
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
			$window.location.href = '/#'+id
		}




	}
]);
