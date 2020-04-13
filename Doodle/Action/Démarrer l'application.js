const createView = require("../../Engine/createView");

module.exports = function (application, params) {
  return createView(application, "Vue/Accueil");
};
