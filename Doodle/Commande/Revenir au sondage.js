const setCurrentView = require("../../Engine/setCurrentView");

module.exports = function(application, params) {
  const {titreDuSondage} = params
  setCurrentView(application, "Vue/Création du sondage", {titreDuSondage});
};