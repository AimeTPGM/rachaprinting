angular.module('app')
.factory('PrintFactory',
  function(){
    var print = {}

    print.getPrints = function(){
      var prints = [
        {
          id:1, 
          name: 'One-side', 
          description: 'print one side'
        },
        {
          id:2, 
          name: 'Two-side', 
          description: 'print two side'
        }
      ]
      return prints
    }

    return print
})