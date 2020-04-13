const createView = require("../../Engine/createView");

module.exports = function (application, params) {
  const { titreDuSondage } = params;
  return createView(application, "Vue/Ajout d'un vote", { titreDuSondage });
};
