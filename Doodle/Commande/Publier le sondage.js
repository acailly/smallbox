const setCurrentView = require("../../Engine/setCurrentView");

module.exports = function(application, params) {
  const { titreDuSondage } = params;

  const sondage = application.sondages.find(sondage => sondage.titre === titreDuSondage );
  
  sondage.publié = true;

  setCurrentView(application, "Vue/Votes");
};