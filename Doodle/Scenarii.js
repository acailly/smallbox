const Application = require("./Application");
const checkCurrentViewName = require("../Engine/checkCurrentViewName");
const executeCommand = require("../Engine/executeCommand");

const application = Application();

// Créer un sondage

checkCurrentViewName(application, "Vue/Page d'accueil");
executeCommand(application, "Commande/Créer un nouveau sondage");
checkCurrentViewName(application, "Vue/Page d'ajout d'un sondage");
executeCommand(application, "Commande/Valider le nouveau sondage", {
  titre: "Prénom du bébé"
});
checkCurrentViewName(application, "Vue/Page de création du sondage");

// Ajouter une option

executeCommand(application, "Commande/Ajouter une option");
checkCurrentViewName(application, "Vue/Page d'ajout d'une option");
executeCommand(application, "Commande/Valider la nouvelle option", { option: "Lise" });
checkCurrentViewName(application, "Vue/Page d'ajout d'une option");
executeCommand(application, "Commande/Valider la nouvelle option", { option: "Emma" });
checkCurrentViewName(application, "Vue/Page d'ajout d'une option");

// Revenir à la page de création du sondage

executeCommand(application, "Commande/Revenir au sondage");
checkCurrentViewName(application, "Vue/Page de création du sondage");

// Publier le sondage

executeCommand(application, "Commande/Publier le sondage");
checkCurrentViewName(application, "Vue/Page des votes");

// Ajouter un vote

executeCommand(application, "Commande/Ajouter un vote");
checkCurrentViewName(application, "Vue/Page d'ajout d'un vote");
executeCommand(application, "Commande/Valider le nouveau vote", {
  nom: "Alice",
  votes: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true }
  ]
});
checkCurrentViewName(application, "Vue/Page des votes");
executeCommand(application, "Commande/Ajouter un vote");
checkCurrentViewName(application, "Vue/Page d'ajout d'un vote");
executeCommand(application, "Commande/Valider le nouveau vote", {
  nom: "Bob",
  votes: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false }
  ]
});
checkCurrentViewName(application, "Vue/Page des votes");
