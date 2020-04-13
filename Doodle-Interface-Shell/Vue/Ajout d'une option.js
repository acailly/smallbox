const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

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
    (option) => {
      if (option === "retour") {
        const nextView = applicationController.executeAction(
          "Action/Revenir au sondage",
          {
            titreDuSondage: sondage.titre,
          }
        );
        displayView(nextView, applicationController, interfaceParams);
      } else {
        const nextView = applicationController.executeAction(
          "Action/Valider la nouvelle option",
          {
            titreDuSondage: sondage.titre,
            option,
          }
        );
        displayView(nextView, applicationController, interfaceParams);
      }
    }
  );
};
