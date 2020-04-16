const createViewRef = require("../../Engine/createViewRef");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const {titreDuSondage} = actionParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  return createViewRef( "Vue/Contenu d'un objet", {
    objet: sondage
  });
};