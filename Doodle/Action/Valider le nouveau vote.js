const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, participant, choix } = actionParams;

  applicationParams.stockage.executeAction("Action/Ajouter un vote", {
    titreDuSondage,
    participant,
    choix: choix || []
  })

  return createViewRef( "Vue/Votes", { titreDuSondage });
};
