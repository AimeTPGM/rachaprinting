angular.module('app')
.service('AngularService',
  function(AngularServiceFactory){
    this.addActiveClassByID = function(id){
      AngularServiceFactory.selectByID(id).addClass('active')
    }
    this.addActiveClassOnChildrenByID = function(id){
      AngularServiceFactory.selectByID(id).children().addClass('active')
    }
    this.addClassByID = function(id, className){
      AngularServiceFactory.selectByID(id).addClass(className)
    }
    this.removeActiveClassByID = function(id){
      AngularServiceFactory.selectByID(id).removeClass('active')
    }
    this.removeActiveClassOnChildrenByID = function(id){
      AngularServiceFactory.selectByID(id).children().removeClass('active')
    }
    this.removeClassByID = function(id, className){
      AngularServiceFactory.selectByID(id).removeClass(className)
    }
    this.addAttrByID = function(id, attr, value){
      AngularServiceFactory.selectByID(id).attr(attr, value)
    }
    this.removeAttrByID = function(id, attr){
      AngularServiceFactory.selectByID(id).removeAttr(attr)
    }
    this.addRequiredByID = function(id){
      AngularServiceFactory.selectByID(id).attr('required', 'true')
    }
    this.removeRequiredByID = function(id){
      AngularServiceFactory.selectByID(id).attr('required', 'falses')
    }
})