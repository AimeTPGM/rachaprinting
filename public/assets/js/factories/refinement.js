angular.module('app')
.factory('RefinementFactory',
  function(){
    var refinement = {}

    refinement.getRefinements = function(){
      var refinements = [
        {
          id:1, 
          name: 'None', 
          description: 'None'
        }, 
        {
          id:2, 
          name: 'UV', 
          description: 'UV'
        }
      ]
      return refinements
    }

    return refinement
})