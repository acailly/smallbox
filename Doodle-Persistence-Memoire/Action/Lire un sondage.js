const createView = require("../../Engine/createView");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const {titreDuSondage} = actionParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  return createView(applicationParams, "Vue/Contenu d'un objet", {
    objet: sondage
  });
};