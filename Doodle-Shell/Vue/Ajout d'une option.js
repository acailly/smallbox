const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  const { sondage } = applicationController.getCurrentViewContent();

  console.log("==========================");
  console.log("=   Ajouter une option   =");
  console.log("==========================");
  console.log("Titre du sondage :" + sondage.titre);
  console.log("");
  console.log("Options :");
  console.log(sondage.options);
  console.log("");
  console.log("------------------------");

  prompt.question(
    "Taper le nom de la nouvelle option ou 'retour' pour revenir à l'étape précédente : ",
    option => {
      if (option === "retour") {
        applicationController.executeAction("Action/Revenir au sondage", {
          titreDuSondage: sondage.titre
        });
        displayCurrentView(applicationController, interfaceParams);
      } else {
        applicationController.executeAction(
          "Action/Valider la nouvelle option",
          {
            titreDuSondage: sondage.titre,
            option
          }
        );
        displayCurrentView(applicationController, interfaceParams);
      }
    }
  );
};
