const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;

  applicationParams.stockage.executeAction("Action/Publier un sondage", {
    titreDuSondage
  })

  return createView(applicationParams, "Vue/Votes", { titreDuSondage });
};
