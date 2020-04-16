const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;

  applicationParams.stockage.executeAction("Action/Publier un sondage", {
    titreDuSondage
  })

  return createViewRef( "Vue/Votes", { titreDuSondage });
};
