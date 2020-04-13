const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titre } = actionParams;

  if (!applicationParams.sondages) {
    applicationParams.sondages = [];
  }

  applicationParams.sondages.push({
    titre,
    publié: false,
    options: [],
    votes: [],
  });

  return createView(applicationParams, "Vue/Création du sondage", {
    titreDuSondage: titre,
  });
};
