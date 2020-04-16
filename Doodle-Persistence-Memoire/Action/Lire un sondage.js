const createViewRef = require("../../Engine/createViewRef");
const mémoire = require("../mémoire");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;

  return createViewRef("Vue/Sondage", {
    titreDuSondage,
  });
};
