angular.module('app')
.controller('HowtoCtrl',['$scope', '$http','$window', '$routeParams', 'AngularServiceFactory', 'AngularService', 'LanguageConfig',
	function($scope, $http, $window, $routeParams, AngularServiceFactory, AngularService, LanguageConfig){

		var languagePack = LanguageConfig.setLanguage($routeParams.lang)
    $scope.webContent = languagePack.howto
		$scope.steps = $scope.webContent.languagepack_howto_000004

		var currentIndex = 0;

		$scope.moveStep = function(index){
			AngularService.removeActiveClassByID('stepDetail'+currentIndex)
			AngularService.removeActiveClassByID('stepDetailDesktop'+currentIndex)
			AngularService.addActiveClassByID('stepDetail'+index)
			AngularService.addActiveClassByID('stepDetailDesktop'+index)

			if(!AngularServiceFactory.selectByID('step'+index).children().hasClass('active')){
				for (var i = 0; i < index; i++) {
					AngularService.addActiveClassOnChildrenByID('step'+i)
					AngularService.removeActiveClassByID('stepDetailDesktop'+i)
					AngularService.addActiveClassByID('stepArrow'+i)
					AngularService.addActiveClassByID('stepArrow'+i)
				}
				AngularService.addActiveClassOnChildrenByID('step'+index)
				currentIndex = index;
			}
			else if(AngularServiceFactory.selectByID('step'+index).children().hasClass('active')){
				for (var i = currentIndex; i > index; i--) {
					AngularService.removeActiveClassOnChildrenByID('step'+i)
					AngularService.removeActiveClassByID('stepArrow'+i)
				}
				AngularService.removeActiveClassByID('stepArrow'+index)
				currentIndex = index;
			}

		}
	}
]);
