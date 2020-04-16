const createView = require("../../Engine/createView");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  sondage.publié = true;

  return createView(applicationParams, "Vue/Contenu d'un objet", {
    objet: sondage
  });
};