angular.module('app')
.directive('radio',
  function(){
    function link(scope){
      
    }
    return {
      restrict: 'EAC',
      scope: {
        lists: '=',
        radioClick: '=',
        radioName: '='
      },
      templateUrl: '/assets/js/directives/radio.html',
      link: link
    }
  }
)