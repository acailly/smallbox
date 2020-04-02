const setCurrentView = require("../../Engine/setCurrentView");

module.exports = function(application, params) {
  const { titreDuSondage } = params;
  setCurrentView(application, "Vue/Ajout d'un vote", {titreDuSondage});
};