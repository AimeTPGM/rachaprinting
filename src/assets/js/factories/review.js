angular.module('app')
.factory('ReviewFactory',
  function(){
    var review = {}

    review.getReviews = function(){
      var imgPath = "assets/img/review.png"
      var reviews = [
        {
          "customerName": "Aime",
          "customerCompany" : "AGA",
          "customerReview": "Good Service",
          "customerImg": imgPath
        },
        {
          "customerName": "James",
          "customerCompany" : "Agoda",
          "customerReview": "Kinda Okay",
          "customerImg": imgPath
        },
        {
          "customerName": "John",
          "customerCompany" : "Siam Paragon",
          "customerReview": "Hmmmm",
          "customerImg": imgPath
        },
        {
          "customerName": "Doe",
          "customerCompany" : "Siam Discovery",
          "customerReview": "Whaaat",
          "customerImg": imgPath
        },
        {
          "customerName": "Mary",
          "customerCompany" : "siam Center",
          "customerReview": "Helloooooo",
          "customerImg": imgPath
        },
        {
          "customerName": "Sharetea",
          "customerCompany" : "-",
          "customerReview": "Choco Choco Cheese",
          "customerImg": imgPath
        }
      ]
      return reviews
    }

    return review
})