const createView = require("../../Engine/createView");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const {sondage} = actionParams;

  if (!mémoire.sondages) {
    mémoire.sondages = [];
  }

  mémoire.sondages.push(sondage);

  return createView(applicationParams, "Vue/Contenu d'un objet", {
    objet: mémoire.sondages
  });
};