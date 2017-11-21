angular.module('app')
.service('ContactService',
  function(){
    this.contacts = [
      {
        "text" : "Address",
        "icon" : "fa-building"
      },
      {
        "text" : "(+66)812345678",
        "icon" : "fa-phone"
      },
      {
        "text" : "email@email.com",
        "icon" : "fa-envelope"
      },
      {
        "text" : "facebook",
        "icon" : "fa-facebook"
      },
      {
        "text" : "twitter",
        "icon" : "fa-twitter"
      },
      {
        "text" : "instagram",
        "icon" : "fa-instagram"
      }
    ]
})