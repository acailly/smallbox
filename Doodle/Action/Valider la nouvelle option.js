const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;

  applicationParams.stockage.executeAction("Action/Ajouter une option", {
    titreDuSondage,
    option
  })

  return createViewRef( "Vue/Ajout d'une option", {
    titreDuSondage,
  });
};
