const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  console.log(`\t<(^-^)>     Voila le sondage ${sondage.titre} !`);
  console.log(`\t<(^-^)>     avec toutes ses supers options :`);
  console.log("");
  console.log(sondage.options);
  console.log("");
  console.log("\t<(^-^)>     Que veux tu faire :");
  console.log("\t<(^-^)>     ajouter une OPTION ?");
  console.log("\t<(^-^)>     PUBLIER le sondage ?");
  console.log("\t<(^-^)>     REVENIR à la liste des sondages ?");

  prompt.question("choix >", (choice) => {
    if (choice.toLowerCase() === "option") {
      const nextViewRef = applicationController.executeAction(
        "Action/Ajouter une option",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else if (choice.toLowerCase() === "publier") {
      const nextViewRef = applicationController.executeAction(
        "Action/Publier le sondage",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else if (choice.toLowerCase() === "revenir") {
      const nextViewRef = applicationController.executeAction(
        "Action/Revenir à la liste des sondages"
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
