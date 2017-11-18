angular.module('app')
.service('ScrollService',
  function($document){
    this.scrollToID = function(id){
      $document.scrollToElementAnimated(angular.element(document.getElementById(id)), 72)
    }
    this.scrollLeft = function(element, scrollPoint){
      element.scrollLeftAnimated(scrollPoint)
    }
    this.scrollTop = function(){
      $document.scrollTopAnimated(0)
    }
})