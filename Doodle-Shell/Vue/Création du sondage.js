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
  console.log("Taper 1 pour Ajouter une option");
  console.log("Taper 2 pour Publier le sondage");

  prompt.question("Choix : ", choice => {
    if (choice === "1") {
      applicationController.executeAction("Action/Ajouter une option", {
        titreDuSondage: sondage.titre
      });
      displayCurrentView(applicationController, interfaceParams);
    } else if (choice === "2") {
      applicationController.executeAction("Action/Publier le sondage", {
        titreDuSondage: sondage.titre
      });
      displayCurrentView(applicationController, interfaceParams);
    } else {
      displayCurrentView(applicationController, interfaceParams);
    }
  });
};
