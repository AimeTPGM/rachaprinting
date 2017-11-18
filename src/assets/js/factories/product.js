angular.module('app')
.factory('ProductFactory',
	function(){
		var product = {}

    product.getProducts = function(){
      var products = [
        {
          "id": "1",
          "img": "",
          "name": "A",
          "price": "100"  
        },
        {
          "id": "2",
          "img": "",
          "name": "B",
          "price": "200"  
        },
        {
          "id": "3",
          "img": "",
          "name": "C",
          "price": "300"  
        },
        {
          "id": "4",
          "img": "",
          "name": "D",
          "price": "400"  
        },
        {
          "id": "5",
          "img": "",
          "name": "E",
          "price": "400"  
        },
        {
          "id": "6",
          "img": "",
          "name": "F",
          "price": "400"  
        },
        {
          "id": "7",
          "img": "",
          "name": "G",
          "price": "400"  
        }
      ]
      return products
    }

    return product
})