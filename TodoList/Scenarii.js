const Application = require("./Application");
const createApplicationController = require("../Engine/createApplicationController");

const application = Application();
const applicationController = createApplicationController(application)

// Ajouter une tâche

applicationController.checkCurrentView("Vue/Liste des tâches", {}, { tâches: [] });
applicationController.executeCommand("Commande/Ajouter une tâche");
applicationController.checkCurrentView("Vue/Ajout d'une tâche");
applicationController.executeCommand("Commande/Valider la nouvelle tâche", {
  texte: "Toto"
});
applicationController.checkCurrentView("Vue/Liste des tâches", {}, { tâches: ["Toto"] });
