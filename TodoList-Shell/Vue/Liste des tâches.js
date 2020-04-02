const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  const {tâches} = applicationController.getCurrentViewContent();

  console.log("========================");
  console.log("=   Liste des tâches   =");
  console.log("========================");
  console.log("");
  console.log(tâches);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une tâche : ", choice => {
    if (choice === "1") {
      applicationController.executeAction("Action/Ajouter une tâche");
      displayCurrentView(applicationController, interfaceParams);
    }
  });
};
