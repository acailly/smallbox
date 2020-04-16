const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  const { titre } = actionParams;

  applicationParams.stockage.executeAction("Action/Ajouter un sondage", {
    sondage : {
      titre,
      publié: false,
      options: [],
      votes: [],
    }
  })

  return createViewRef( "Vue/Création du sondage", {
    titreDuSondage: titre,
  });
};
