angular.module('app')
.factory('AngularServiceFactory',
  function(){
    var factory = {}

    factory.selectByQuery = function(query){
      var result = angular.element(document.querySelector(query))
      return result
    }

    factory.selectByID = function(id){
      var result = angular.element(document.getElementById(id))
      return result
    }


    return factory
})