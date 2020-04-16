const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;

  const {
    content: sondage,
  } = applicationParams.stockage.executeActionAndGetView(
    "Action/Lire un sondage",
    {
      titreDuSondage,
    }
  );

  if (sondage.publié) {
    return createViewRef("Vue/Votes", {
      titreDuSondage,
    });
  } else {
    return createViewRef("Vue/Création du sondage", {
      titreDuSondage,
    });
  }
};
