const createViewRef = require("../../Engine/createViewRef");
const mémoire = require("../mémoire")

module.exports = function (applicationParams, actionParams) {
  return createViewRef( "Vue/Contenu d'un objet", {
    objet: mémoire.sondages || []
  });
};