const createViewRef = require("../../Engine/createViewRef");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  sondage.publié = true;

  return createViewRef("Vue/Sondage", {
    titreDuSondage,
  });
};
