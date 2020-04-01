const prompt = require("../../Interface/Shell/prompt");
const executeCommand = require("../../Engine/executeCommand");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(application, interfaceParams) {
  console.log("=========================");
  console.log("=   Ajouter un sondage   =");
  console.log("=========================");
  console.log("");

  prompt.question("Taper le titre du nouveau sondage : ", text => {
    executeCommand(application, "Commande/Valider le nouveau sondage", { titre: text });
    displayCurrentView(application, interfaceParams);
  });
};
