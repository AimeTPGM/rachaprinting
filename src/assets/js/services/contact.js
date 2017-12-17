angular.module('app')
.service('ContactService',
  function(){
    this.contacts = [
      {
        "text" : "204/6-7 ถ.สุรวงศ์ แขวงสี่พระยา เขตบางรัก กทม.",
        "icon" : "fa-building"
      },
      {
        "text" : "02-266-3738",
        "icon" : "fa-phone"
      },
      {
        "text" : "02-266-3739",
        "icon" : "fa-phone"
      },
      {
        "text" : "02-266-3740",
        "icon" : "fa-phone"
      },
      {
        "text" : "02-234-8319",
        "icon" : "fa-fax"
      },
      {
        "text" : "rachagroup@email.com",
        "icon" : "fa-envelope"
      },
      {
        "text" : "facebook",
        "icon" : "fa-facebook",
        "link" : "https://www.facebook.com"
      },
      {
        "text" : "twitter",
        "icon" : "fa-twitter",
        "link" : "https://www.twitter.com"
      },
      {
        "text" : "instagram",
        "icon" : "fa-instagram"
      }
    ]
})