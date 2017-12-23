angular.module('app')
.service('ConfigPath',
  function($document){
    this.servicePath = 'http://192.168.1.114:8081/api/'
})