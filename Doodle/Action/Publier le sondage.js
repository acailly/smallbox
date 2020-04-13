const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;

  const sondage = applicationParams.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  sondage.publié = true;

  return createView(applicationParams, "Vue/Votes", { titreDuSondage });
};
