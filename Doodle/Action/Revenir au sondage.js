const createView = require("../../Engine/createView");

module.exports = function (application, params) {
  const { titreDuSondage } = params;
  return createView(application, "Vue/Création du sondage", { titreDuSondage });
};
