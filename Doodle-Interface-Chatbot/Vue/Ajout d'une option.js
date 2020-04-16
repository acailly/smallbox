const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  console.log(`\t<(^-^)>     Le sondage ${sondage.titre} mérite une nouvelle option !`);
  console.log("");
  console.log(sondage.options);
  console.log("");
  console.log("\t<(^-^)>     C'est quoi son petit nom ?");
  console.log("\t<(^-^)>     (Vous pouvez aussi REVENIR à la page du sondage)");

  prompt.question(
    "nom de l'option >",
    (option) => {
      if (option.toLowerCase() === "revenir") {
        const nextViewRef = applicationController.executeAction(
          "Action/Revenir au sondage",
          {
            titreDuSondage: sondage.titre,
          }
        );
        displayView(nextViewRef, applicationController, interfaceParams);
      } else {
        const nextViewRef = applicationController.executeAction(
          "Action/Valider la nouvelle option",
          {
            titreDuSondage: sondage.titre,
            option,
          }
        );
        displayView(nextViewRef, applicationController, interfaceParams);
      }
    }
  );
};
