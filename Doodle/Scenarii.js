const Application = require("./Application");
const checkCurrentView = require("../Engine/checkCurrentView");
const executeCommand = require("../Engine/executeCommand");

const application = Application();

// Créer un sondage

checkCurrentView(application, "Vue/Accueil");
executeCommand(application, "Commande/Créer un nouveau sondage");
checkCurrentView(application, "Vue/Ajout d'un sondage");
executeCommand(application, "Commande/Valider le nouveau sondage", { titre: "Prénom du bébé" });
checkCurrentView(application, "Vue/Création du sondage", { titreDuSondage: "Prénom du bébé" });

// Ajouter une option

executeCommand(application, "Commande/Ajouter une option");
checkCurrentView(application, "Vue/Ajout d'une option");
executeCommand(application, "Commande/Valider la nouvelle option", { titreDuSondage: "Prénom du bébé", option: "Lise" });
checkCurrentView(application, "Vue/Ajout d'une option");
executeCommand(application, "Commande/Valider la nouvelle option", { titreDuSondage: "Prénom du bébé", option: "Emma" });
checkCurrentView(application, "Vue/Ajout d'une option");

// Revenir à la page de création du sondage

executeCommand(application, "Commande/Revenir au sondage");
checkCurrentView(application, "Vue/Création du sondage");

// Publier le sondage

executeCommand(application, "Commande/Publier le sondage", { titreDuSondage: "Prénom du bébé" });
checkCurrentView(application, "Vue/Votes");

// Ajouter un vote

executeCommand(application, "Commande/Ajouter un vote");
checkCurrentView(application, "Vue/Ajout d'un vote");
executeCommand(application, "Commande/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Alice",
  choix: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true }
  ]
});
checkCurrentView(application, "Vue/Votes");
executeCommand(application, "Commande/Ajouter un vote");
checkCurrentView(application, "Vue/Ajout d'un vote");
executeCommand(application, "Commande/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Bob",
  choix: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false }
  ]
});
checkCurrentView(application, "Vue/Votes");
