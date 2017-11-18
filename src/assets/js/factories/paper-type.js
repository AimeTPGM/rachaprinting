angular.module('app')
.factory('PaperTypesFactory',
  function(){
    var paperType = {}

    paperType.getPaperTypes = function(){
      var paperTypes = [
        {
          id:1, 
          name: '200 gram', 
          description: '200 gram'
        },
        {
          id:2, 
          name: '180 gram', 
          description: '180 gram'
        },
        {
          id:3, 
          name: '150 gram', 
          description: '150 gram'
        },
        {
          id:4, 
          name: '130 gram', 
          description: '130 gram'
        },
        {
          id:5, 
          name: '100 gram', 
          description: '100 gram'
        },
        {
          id:6, 
          name: '80 gram', 
          description: '80 gram'
        }
      ]
      return paperTypes
    }

    return paperType
})