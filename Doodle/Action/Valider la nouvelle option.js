const setCurrentView = require("../../Engine/setCurrentView");

module.exports = function(application, params) {
  const { titreDuSondage, option } = params;

  const sondage = application.sondages.find(sondage => sondage.titre === titreDuSondage );
  
  if(!sondage.options){
      sondage.options = []
  }

  sondage.options.push(option);
};