const mémoire = require("../mémoire");

module.exports = function (applicationParams, viewParams) {
  const { titreDuSondage } = viewParams;

  const sondage = mémoire.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  return sondage;
};
