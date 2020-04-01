const setCurrentView = require("../Engine/setCurrentView");

module.exports = function() {
  const application = {
    rootDir: __dirname
  };

  setCurrentView(application, "Vue/Liste des tâches");

  return application;
};
