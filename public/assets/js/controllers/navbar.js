angular.module('app')
.controller('NavbarCtrl',['$scope', '$http','$window', '$document','$routeParams',
	'LanguageConfig',
	function($scope, $http, $window, $document,$routeParams,
		LanguageConfig){

		var languagePack = LanguageConfig.setLanguage($routeParams.lang)
    $scope.webContent = languagePack
    
    $scope.menus = $scope.webContent.nav.menus

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

		$scope.lang = function(lang){
			$window.location.href = '/'+lang
		}
	}
]);
