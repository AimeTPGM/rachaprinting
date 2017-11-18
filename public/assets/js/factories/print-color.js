angular.module('app')
.factory('PrintColorFactory',
  function(){
    var printColor = {}

    printColor.getPrintColors = function(){
      var printColors = [
        {
          id:1, 
          name: 'Black & White', 
          description: 'print black & white'
        },
        {
          id:2, 
          name: 'Color', 
          description: 'print color'
        }
      ]
      return printColors
    }

    return printColor
})