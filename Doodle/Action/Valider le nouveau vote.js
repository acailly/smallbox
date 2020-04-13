const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, participant, choix } = actionParams;

  const sondage = applicationParams.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  if (!sondage.votes) {
    sondage.votes = [];
  }

  sondage.votes.push({
    participant,
    choix,
  });

  return createView(applicationParams, "Vue/Votes", { titreDuSondage });
};
