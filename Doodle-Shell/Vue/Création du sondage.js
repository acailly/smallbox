const prompt = require("../../Interface/Shell/prompt");
const executeCommand = require("../../Engine/executeCommand");
const getCurrentViewParams = require("../../Engine/getCurrentViewParams");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(application, interfaceParams) {
  const {titreDuSondage} = getCurrentViewParams(application);
  const sondage = application.sondages.find(sondage => sondage.titre === titreDuSondage)

  console.log("=============================");
  console.log("=   Création d'un sondage   =");
  console.log("=============================");
  console.log("Titre du sondage :" + titreDuSondage);
  console.log("");
  console.log("Options :");
  console.log(sondage.options);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une option : ", choice => {
    if (choice === "1") {
      executeCommand(application, "Commande/Ajouter une option");
      displayCurrentView(application, interfaceParams);
    }
  });
};