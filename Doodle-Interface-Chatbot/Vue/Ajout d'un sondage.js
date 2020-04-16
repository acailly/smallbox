const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  console.log("\t<(^-^)>     C'est parti pour un nouveau sondage !");
  console.log("\t<(^-^)>     C'est quoi son petit nom ?");

  prompt.question("nom du sondage >", (text) => {
    const nextViewRef = applicationController.executeAction(
      "Action/Valider le nouveau sondage",
      {
        titre: text,
      }
    );
    displayView(nextViewRef, applicationController, interfaceParams);
  });
};
