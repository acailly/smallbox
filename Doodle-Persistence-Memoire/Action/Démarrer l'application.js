const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  return createViewRef( "Vue/Contenu d'un objet", {
    objet: mémoire
  });
};
