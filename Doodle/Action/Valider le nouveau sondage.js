const createView = require("../../Engine/createView");

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

  return createView(applicationParams, "Vue/Création du sondage", {
    titreDuSondage: titre,
  });
};
