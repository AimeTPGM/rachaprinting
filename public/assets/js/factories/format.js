angular.module('app')
.factory('FormatFactory',
  function(){
    var format = {}

    format.getFormats = function(){
      var formats = [
        {
          id:1, 
          name: 'A4', 
          description: '210 x 297 mm',
          formatSize: {
            width: 210,
            height: 297
          }
        }, 
        {
          id:2, 
          name: 'A3', 
          description: '297 x 240 mm',
          formatSize: {
            width: 297,
            height: 240
          }
        }, 
        {
          id:3, 
          name: 'A5', 
          description: '148 x 120 mm',
          formatSize: {
            width: 148,
            height: 120
          }
        }
      ]
      return formats
    }

    return format
})