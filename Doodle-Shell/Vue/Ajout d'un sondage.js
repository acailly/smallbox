const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  console.log("=========================");
  console.log("=   Ajouter un sondage   =");
  console.log("=========================");
  console.log("");

  prompt.question("Taper le titre du nouveau sondage : ", (text) => {
    const nextView = applicationController.executeAction(
      "Action/Valider le nouveau sondage",
      {
        titre: text,
      }
    );
    displayView(nextView, applicationController, interfaceParams);
  });
};
