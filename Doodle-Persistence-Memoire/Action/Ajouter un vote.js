const createViewRef = require("../../Engine/createViewRef");
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

  return createViewRef( "Vue/Contenu d'un objet", {
    objet: sondage.votes
  });
};