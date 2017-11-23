angular.module('app')
.directive('dropdown',
  function(){
    function link(scope){
      
    }
    return {
      restrict: 'EAC',
      scope: {
        lists: '=',
        itemClick: '&',
        selected: '=',
        show: '=',
        setValue: '=',
        itemId: '='
      },
      templateUrl: '/assets/js/directives/dropdown.html',
      link: link
    }
  }
)