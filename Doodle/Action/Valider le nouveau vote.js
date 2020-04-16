const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, participant, choix } = actionParams;

  applicationParams.stockage.executeAction("Action/Ajouter un vote", {
    titreDuSondage,
    participant,
    choix
  })

  return createView(applicationParams, "Vue/Votes", { titreDuSondage });
};
