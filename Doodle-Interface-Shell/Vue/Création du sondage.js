const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

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

  prompt.question("Choix : ", (choice) => {
    if (choice === "1") {
      const nextView = applicationController.executeAction(
        "Action/Ajouter une option",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextView, applicationController, interfaceParams);
    } else if (choice === "2") {
      const nextView = applicationController.executeAction(
        "Action/Publier le sondage",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextView, applicationController, interfaceParams);
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
