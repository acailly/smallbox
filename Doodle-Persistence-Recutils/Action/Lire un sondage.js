const createViewRef = require("../../Engine/createViewRef");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage } = actionParams;

  return createViewRef("Vue/Sondage", {
    titreDuSondage,
  });
};
