angular.module('app')
.service('LanguageConfig',
	function(ThaiLanguagePack, EnglishLanguagePack){
    this.selectedLanguage = 'th'
    this.setLanguage = function(lang){
      if (lang == 'th') {
        return ThaiLanguagePack.getLanguagePack
      } else if (lang == 'en') {
        return EnglishLanguagePack.getLanguagePack
      }
    }
})
