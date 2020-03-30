const Application = require("./Application");
const checkCurrentViewName = require("./Engine/checkCurrentViewName");
const executeCommand = require("./Engine/executeCommand");

const application = Application();

// Créer un sondage

checkCurrentViewName(application, "Page d'accueil");
executeCommand(application, "Créer un nouveau sondage");
checkCurrentViewName(application, "Page d'ajout d'un sondage");
executeCommand(application, "Valider le nouveau sondage", {
  titre: "Prénom du bébé"
});
checkCurrentViewName(application, "Page de création du sondage");

// Ajouter une option

executeCommand(application, "Ajouter une option");
checkCurrentViewName(application, "Page d'ajout d'une option");
executeCommand(application, "Valider la nouvelle option", { option: "Lise" });
checkCurrentViewName(application, "Page d'ajout d'une option");
executeCommand(application, "Valider la nouvelle option", { option: "Emma" });
checkCurrentViewName(application, "Page d'ajout d'une option");

// Revenir à la page de création du sondage

executeCommand(application, "Revenir au sondage");
checkCurrentViewName(application, "Page de création du sondage");

// Publier le sondage

executeCommand(application, "Publier le sondage");
checkCurrentViewName(application, "Page des votes");

// Ajouter un vote

executeCommand(application, "Ajouter un vote");
checkCurrentViewName(application, "Page d'ajout d'un vote");
executeCommand(application, "Valider le nouveau vote", {
  nom: "Alice",
  votes: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true }
  ]
});
checkCurrentViewName(application, "Page des votes");
executeCommand(application, "Ajouter un vote");
checkCurrentViewName(application, "Page d'ajout d'un vote");
executeCommand(application, "Valider le nouveau vote", {
  nom: "Bob",
  votes: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false }
  ]
});
checkCurrentViewName(application, "Page des votes");
