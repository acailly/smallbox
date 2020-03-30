const setCurrentView = require("./Engine/setCurrentView");

module.exports = function() {
  const application = {};

  setCurrentView(application, "Liste des tâches");

  return application;
};
