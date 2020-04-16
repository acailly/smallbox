const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;

  applicationParams.stockage.executeAction("Action/Ajouter une option", {
    titreDuSondage,
    option
  })

  return createView(applicationParams, "Vue/Ajout d'une option", {
    titreDuSondage,
  });
};
