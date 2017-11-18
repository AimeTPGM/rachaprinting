angular.module('app')
.factory('OrderFactory',
  function(){
    var order = {}

    order.getPrices = function(){
      var prices = [
        {
          amount: '100',
          priceOfDate: [
            {
              fullprice: '447', 
              perOne: '4.47'
            },
            {
              fullprice: '414', 
              perOne: '4.14'
            },
            {
              fullprice: '381', 
              perOne: '3.81'
            },
            {
              fullprice: '331', 
              perOne: '3.31'
            }
          ]
        },
        {
          amount: '200',
          priceOfDate: [
            {
              fullprice: '730', 
              perOne: '3.65'
            },
            {
              fullprice: '676', 
              perOne: '3.38'
            },
            {
              fullprice: '622', 
              perOne: '3.11'
            },
            {
              fullprice: '540', 
              perOne: '2.70'
            }
          ]
        },
        {
          amount: '300',
          priceOfDate: [
            {
              fullprice: '783', 
              perOne: '2.61'
            },
            {
              fullprice: '723', 
              perOne: '2.41'
            },
            {
              fullprice: '666', 
              perOne: '2.22'
            },
            {
              fullprice: '579', 
              perOne: '1.93'
            }
          ]
        },
        {
          amount: '500',
          priceOfDate: [
            {
              fullprice: '1180', 
              perOne: '2.36'
            },
            {
              fullprice: '1095', 
              perOne: '2.19'
            },
            {
              fullprice: '1005', 
              perOne: '2.01'
            },
            {
              fullprice: '875', 
              perOne: '1.75'
            }
          ]
        },
        {
          amount: '1000',
          priceOfDate: [
            {
              fullprice: '1570', 
              perOne: '1.57'
            },
            {
              fullprice: '1450', 
              perOne: '1.45'
            },
            {
              fullprice: '1330', 
              perOne: '1.33'
            },
            {
              fullprice: '1160', 
              perOne: '1.16'
            }
          ]
        },
        {
          amount: '2000',
          priceOfDate: [
            {
              fullprice: '2340', 
              perOne: '1.17'
            },
            {
              fullprice: '2180', 
              perOne: '1.09'
            },
            {
              fullprice: '2000', 
              perOne: '1.00'
            },
            {
              fullprice: '1740', 
              perOne: '0.87'
            }
          ]
        },
        {
          amount: '3000',
          priceOfDate: [
            {
              fullprice: '3120', 
              perOne: '1.04'
            },
            {
              fullprice: '2880', 
              perOne: '0.96'
            },
            {
              fullprice: '2670', 
              perOne: '0.89'
            },
            {
              fullprice: '2310', 
              perOne: '0.97'
            }
          ]
        },
        {
          amount: '5000',
          priceOfDate: [
            {
              fullprice: '4650', 
              perOne: '0.93'
            },
            {
              fullprice: '4300', 
              perOne: '0.86'
            },
            {
              fullprice: '3950', 
              perOne: '0.79'
            },
            {
              fullprice: '3450', 
              perOne: '0.69'
            }
          ]
        },
        {
          amount: '10000',
          priceOfDate: [
            {
              fullprice: '8500', 
              perOne: '0.85'
            },
            {
              fullprice: '7900', 
              perOne: '0.79'
            },
            {
              fullprice: '7200', 
              perOne: '0.72'
            },
            {
              fullprice: '6300', 
              perOne: '0.63'
            }
          ]
        }
      ]
      return prices
    }

    return order
})