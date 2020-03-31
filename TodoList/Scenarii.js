const Application = require("./Application");
const checkCurrentViewName = require("../Engine/checkCurrentViewName");
const executeCommand = require("../Engine/executeCommand");

const application = Application();

// Ajouter une tâche

checkCurrentViewName(application, "Vue/Liste des tâches");
executeCommand(application, "Commande/Ajouter une tâche");
checkCurrentViewName(application, "Vue/Ajout d'une tâche");
executeCommand(application, "Commande/Valider la nouvelle tâche", {
  texte: "Toto"
});
checkCurrentViewName(application, "Vue/Liste des tâches");
