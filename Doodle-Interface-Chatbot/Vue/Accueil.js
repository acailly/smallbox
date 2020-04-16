const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondages } = view.content;

  console.log("\t<(^-^)>     Bonjour !");
  console.log(
    "\t<(^-^)>     Je suis le chatbot qui va te permettre de créer des sondages"
  );
  console.log("\t<(^-^)>     Voici la liste des sondages en cours");
  console.log("");
  console.log(
    sondages
      .map((sondage) => {
        return `\t - ${sondage.titre} (${
          sondage.publié ? "publié" : "en cours de création"
        })`;
      })
      .join("\n")
  );
  console.log("");
  console.log("\t<(^-^)>     Que veux tu faire :");
  console.log("\t<(^-^)>     AJOUTER un sondage ?");
  console.log("\t<(^-^)>     OUVRIR un sondage existant ?");

  prompt.question("choix >", (choice) => {
    if (choice.toLowerCase() === "ajouter") {
      const nextViewRef = applicationController.executeAction(
        "Action/Ajouter un nouveau sondage"
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else if (choice.toLowerCase() === "ouvrir") {
      console.log("\t<(^-^)>     Quel sondage veux tu ouvrir ?");
      prompt.question("titre du sondage >", (titreDuSondage) => {
        const nextViewRef = applicationController.executeAction(
          "Action/Ouvrir un sondage existant",
          { titreDuSondage }
        );
        displayView(nextViewRef, applicationController, interfaceParams);
      });
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
