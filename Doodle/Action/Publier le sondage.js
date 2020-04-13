const createView = require("../../Engine/createView");

module.exports = function (application, params) {
  const { titreDuSondage } = params;

  const sondage = application.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );

  sondage.publié = true;

  return createView(application, "Vue/Votes", { titreDuSondage });
};
