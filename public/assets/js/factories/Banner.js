angular.module('app')
.factory('BannerFactory',
  function(){
    var banner = {}

    banner.getRefinements = function(){
      var banners = [
        {
        'img': 'Slide 1'
        },
        {
        'img': 'Slide 2'
        }
      ]
      return banners
    }

    return banner
})