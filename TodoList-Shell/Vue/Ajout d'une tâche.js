const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  console.log("=========================");
  console.log("=   Ajouter une tâche   =");
  console.log("=========================");
  console.log("");

  prompt.question("Taper le nom de la nouvelle tâche : ", text => {
    applicationController.executeAction("Action/Valider la nouvelle tâche", { texte: text });
    displayCurrentView(applicationController, interfaceParams);
  });
};
