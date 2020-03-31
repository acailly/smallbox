const prompt = require("../../../Interface/Shell/prompt");
const executeCommand = require("../../../Engine/executeCommand");
const displayCurrentView = require("../../../Interface/Shell/displayCurrentView");

module.exports = function(application) {
  console.log("=========================");
  console.log("=   Ajouter une tâche   =");
  console.log("=========================");
  console.log("");

  prompt.question("Taper le nom de la nouvelle tâche : ", text => {
    executeCommand(application, "Commande/Valider la nouvelle tâche", { texte: text });
    displayCurrentView(application);
  });
};
