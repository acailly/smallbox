const setCurrentView = require("../Engine/setCurrentView");

module.exports = function() {
  const application = {
    rootDir: __dirname,
    shellRootDir: __dirname + '/shell'
  };

  setCurrentView(application, "Vue.Page d'accueil");

  return application;
};
