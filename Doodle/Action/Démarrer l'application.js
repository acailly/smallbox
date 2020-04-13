const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  return createView(applicationParams, "Vue/Accueil");
};
