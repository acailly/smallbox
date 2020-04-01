const prompt = require("../../Interface/Shell/prompt");
const executeCommand = require("../../Engine/executeCommand");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(application, interfaceParams) {
  console.log("===============");
  console.log("=   Accueil   =");
  console.log("===============");
  console.log("");
  console.log(application.sondages);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une sondage : ", choice => {
    if (choice === "1") {
      executeCommand(application, "Commande/Créer un nouveau sondage");
      displayCurrentView(application, interfaceParams);
    }
  });
};