angular.module('app')
.controller('AboutUsCtrl',['$scope', '$http','$window', '$routeParams', 'AngularServiceFactory', 'AngularService', 'LanguageConfig', 'ContactService',
  function($scope, $http, $window, $routeParams, AngularServiceFactory, AngularService, LanguageConfig, ContactService){
    
    

    $scope.templates = {
      'navbar' : '/views/navbar.html',
      'footer' : '/views/footer.html',
      'credit' : '/views/credit.html',
    }

    $scope.contacts = ContactService.contacts

  }
]);