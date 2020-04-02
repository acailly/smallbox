const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  const { sondage } = applicationController.getCurrentViewContent();

  console.log("=============================");
  console.log("=   Création d'un sondage   =");
  console.log("=============================");
  console.log("Titre du sondage :" + sondage.titre);
  console.log("");
  console.log("Options :");
  console.log(sondage.options);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une option : ", choice => {
    if (choice === "1") {
      applicationController.executeCommand("Commande/Ajouter une option");
      displayCurrentView(applicationController, interfaceParams);
    }
  });
};