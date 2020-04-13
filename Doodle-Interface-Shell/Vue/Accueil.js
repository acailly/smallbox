const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondages } = view.content;

  console.log("===============");
  console.log("=   Accueil   =");
  console.log("===============");
  console.log("");
  console.log(sondages);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une sondage : ", (choice) => {
    if (choice === "1") {
      const nextView = applicationController.executeAction(
        "Action/Créer un nouveau sondage"
      );
      displayView(nextView, applicationController, interfaceParams);
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
