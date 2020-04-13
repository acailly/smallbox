const createView = require("../../Engine/createView");

module.exports = function (application, params) {
  const { titre } = params;

  if (!application.sondages) {
    application.sondages = [];
  }

  application.sondages.push({
    titre,
    publié: false,
    options: [],
    votes: [],
  });

  return createView(application, "Vue/Création du sondage", {
    titreDuSondage: titre,
  });
};
