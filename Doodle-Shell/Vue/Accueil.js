const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  const {sondages} = applicationController.getCurrentViewContent();

  console.log("===============");
  console.log("=   Accueil   =");
  console.log("===============");
  console.log("");
  console.log(sondages);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une sondage : ", choice => {
    if (choice === "1") {
      applicationController.executeAction("Action/Créer un nouveau sondage");
      displayCurrentView(applicationController, interfaceParams);
    }
  });
};