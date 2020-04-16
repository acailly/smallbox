const createViewRef = require("../../Engine/createViewRef");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  if (!sondage.options) {
    sondage.options = [];
  }

  sondage.options.push(option);

  return createViewRef( "Vue/Contenu d'un objet", {
    objet: sondage.options
  });
};