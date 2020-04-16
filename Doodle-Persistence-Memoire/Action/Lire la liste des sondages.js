const createView = require("../../Engine/createView");
const mémoire = require("../mémoire")

module.exports = function (applicationParams, actionParams) {
  return createView(applicationParams, "Vue/Contenu d'un objet", {
    objet: mémoire.sondages || []
  });
};