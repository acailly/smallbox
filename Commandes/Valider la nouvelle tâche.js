const setCurrentView = require("../Engine/setCurrentView");

module.exports = function(application, params) {
  const { texte } = params;

  if (!application.tâches) {
    application.tâches = [];
  }

  application.tâches.push(texte);

  setCurrentView(application, "Liste des tâches");
};
