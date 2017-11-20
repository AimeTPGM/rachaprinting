angular.module('app')
.controller('AboutUsCtrl',['$scope', '$http','$window', '$routeParams', 'AngularServiceFactory', 'AngularService', 'LanguageConfig',
  function($scope, $http, $window, $routeParams, AngularServiceFactory, AngularService, LanguageConfig){
    
    if($routeParams.lang == 'th'){
      $scope.webContent = LanguageConfig.thai.howto
    }
    else if($routeParams.lang == 'eng'){
      $scope.webContent = LanguageConfig.eng.howto
    }

    $scope.templates = {
      'navbar' : '/views/navbar-home.html',
      'footer' : '/views/footer.html',
      'credit' : '/views/credit.html',
    }

  }
]);