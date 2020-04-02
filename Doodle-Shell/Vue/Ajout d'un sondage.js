const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  console.log("=========================");
  console.log("=   Ajouter un sondage   =");
  console.log("=========================");
  console.log("");

  prompt.question("Taper le titre du nouveau sondage : ", text => {
    applicationController.executeAction("Action/Valider le nouveau sondage", { titre: text });
    displayCurrentView(applicationController, interfaceParams);
  });
};
