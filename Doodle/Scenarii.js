const Application = require("./Application");
const checkCurrentViewName = require("../Engine/checkCurrentViewName");
const executeCommand = require("../Engine/executeCommand");

const application = Application();

// Créer un sondage

checkCurrentViewName(application, "Vue/Accueil");
executeCommand(application, "Commande/Créer un nouveau sondage");
checkCurrentViewName(application, "Vue/Ajout d'un sondage");
executeCommand(application, "Commande/Valider le nouveau sondage", {
  titre: "Prénom du bébé"
});
checkCurrentViewName(application, "Vue/Création du sondage");

// Ajouter une option

executeCommand(application, "Commande/Ajouter une option");
checkCurrentViewName(application, "Vue/Ajout d'une option");
executeCommand(application, "Commande/Valider la nouvelle option", { titreDuSondage: "Prénom du bébé", option: "Lise" });
checkCurrentViewName(application, "Vue/Ajout d'une option");
executeCommand(application, "Commande/Valider la nouvelle option", { titreDuSondage: "Prénom du bébé", option: "Emma" });
checkCurrentViewName(application, "Vue/Ajout d'une option");

// Revenir à la page de création du sondage

executeCommand(application, "Commande/Revenir au sondage");
checkCurrentViewName(application, "Vue/Création du sondage");

// Publier le sondage

executeCommand(application, "Commande/Publier le sondage", { titreDuSondage: "Prénom du bébé" });
checkCurrentViewName(application, "Vue/Votes");

// Ajouter un vote

executeCommand(application, "Commande/Ajouter un vote");
checkCurrentViewName(application, "Vue/Ajout d'un vote");
executeCommand(application, "Commande/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Alice",
  choix: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true }
  ]
});
checkCurrentViewName(application, "Vue/Votes");
executeCommand(application, "Commande/Ajouter un vote");
checkCurrentViewName(application, "Vue/Ajout d'un vote");
executeCommand(application, "Commande/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Bob",
  choix: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false }
  ]
});
checkCurrentViewName(application, "Vue/Votes");
