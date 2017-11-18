angular.module('app')
.factory('DeliveryFactory',
  function(){
    var delivery = {}

    delivery.getAvailableDeliveryDayAndDates = function(){
      var dayAndDates = [
        {
          day: 'วันพฤหัสบดี',
          date: '23 พ.ย.'
        },
        {
          day: 'วันศุกร์',
          date: '24 พ.ย.'
        },
        {
          day: 'วันเสาร์',
          date: '25 พ.ย.'
        },
        {
          day: 'วันอาทิตย์',
          date: '26 พ.ย.'
        },
        {
          day: 'วันจันทร์',
          date: '27 พ.ย.'
        }
      ]
      return dayAndDates
    }

    return delivery
})