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
  console.log("\t<(^-^)>     AJOUTER une option ?");
  console.log("\t<(^-^)>     PUBLIER le sondage ?");

  prompt.question("choix >", (choice) => {
    if (choice.toLowerCase() === "ajouter") {
      const nextView = applicationController.executeAction(
        "Action/Ajouter une option",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextView, applicationController, interfaceParams);
    } else if (choice.toLowerCase() === "publier") {
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
