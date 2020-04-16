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
  console.log(sondages);
  console.log("");
  console.log("\t<(^-^)>     Que veux tu faire :");
  console.log("\t<(^-^)>     ajouter un SONDAGE ?");

  prompt.question("choix >", (choice) => {
    if (choice.toLowerCase() === "sondage") {
      const nextViewRef = applicationController.executeAction(
        "Action/Ajouter un nouveau sondage"
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
