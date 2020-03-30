const prompt = require("./prompt");
const executeCommand = require("../../Engine/executeCommand");
const displayCurrentView = require("./displayCurrentView");

module.exports = function(application, tâches) {
  console.log("========================");
  console.log("=   Liste des tâches   =");
  console.log("========================");
  console.log("");
  console.log(tâches);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper 1 pour Ajouter une tâche : ", choice => {
    if (choice === "1") {
      executeCommand(application, "Ajouter une tâche");
      displayCurrentView(application);
    }
  });
};
