const prompt = require("./prompt");
const executeCommand = require("../../Engine/executeCommand");
const displayCurrentView = require("./displayCurrentView");

module.exports = function(application) {
  console.log("=========================");
  console.log("=   Ajouter une tâche   =");
  console.log("=========================");
  console.log("");

  prompt.question("Taper le nom de la nouvelle tâche : ", text => {
    executeCommand(application, "Valider la nouvelle tâche", { texte: text });
    displayCurrentView(application);
  });
};
