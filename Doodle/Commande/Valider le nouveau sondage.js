const setCurrentView = require("../../Engine/setCurrentView");

module.exports = function(application, params) {
  const { titre } = params;

  if (!application.sondages) {
    application.sondages = [];
  }

  application.sondages.push({
    titre,
    publié: false
  });

  setCurrentView(application, "Vue/Création du sondage", { titreDuSondage: titre });
};