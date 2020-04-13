const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;

  const sondage = applicationParams.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  if (!sondage.options) {
    sondage.options = [];
  }

  sondage.options.push(option);

  return createView(applicationParams, "Vue/Ajout d'une option", {
    titreDuSondage,
  });
};
