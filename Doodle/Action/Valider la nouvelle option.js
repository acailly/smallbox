const createView = require("../../Engine/createView");

module.exports = function (application, params) {
  const { titreDuSondage, option } = params;

  const sondage = application.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  if (!sondage.options) {
    sondage.options = [];
  }

  sondage.options.push(option);

  return createView(application, "Vue/Ajout d'une option", { titreDuSondage });
};
