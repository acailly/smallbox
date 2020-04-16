const createViewRef = require("../../Engine/createViewRef");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const { sondage } = actionParams;

  if (!mémoire.sondages) {
    mémoire.sondages = [];
  }

  mémoire.sondages.push(sondage);

  return createViewRef("Vue/Sondages");
};
