const createView = require("../../Engine/createView");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;
  return createView(applicationParams, "Vue/Création du sondage", {
    titreDuSondage,
  });
};
