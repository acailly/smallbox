const createView = require("../../Engine/createView");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, participant, choix } = actionParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  if (!sondage.votes) {
    sondage.votes = [];
  }

  sondage.votes.push({
    participant,
    choix,
  });

  return createView(applicationParams, "Vue/Contenu d'un objet", {
    objet: sondage.votes
  });
};