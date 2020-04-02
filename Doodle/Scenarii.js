const Application = require("./Application");
const checkCurrentView = require("../Engine/checkCurrentView");
const executeAction = require("../Engine/executeAction");

const application = Application();

// Créer un sondage

checkCurrentView(application, "Vue/Accueil", {}, { sondages: [] });
executeAction(application, "Action/Créer un nouveau sondage");
checkCurrentView(application, "Vue/Ajout d'un sondage");
executeAction(application, "Action/Valider le nouveau sondage", {
  titre: "Prénom du bébé"
});
checkCurrentView(application, "Vue/Création du sondage", {
  titreDuSondage: "Prénom du bébé"
}, {sondage: {
  titre: "Prénom du bébé",
  publié: false,
  options: []
}});

// Ajouter une option

executeAction(application, "Action/Ajouter une option", {
  titreDuSondage: "Prénom du bébé"
});
checkCurrentView(application, "Vue/Ajout d'une option", {
  titreDuSondage: "Prénom du bébé"
});
executeAction(application, "Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Lise"
});
checkCurrentView(application, "Vue/Ajout d'une option", {
  titreDuSondage: "Prénom du bébé"
});
executeAction(application, "Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Emma"
});
checkCurrentView(application, "Vue/Ajout d'une option", {
  titreDuSondage: "Prénom du bébé"
});

// Revenir à la page de création du sondage

executeAction(application, "Action/Revenir au sondage", {
  titreDuSondage: "Prénom du bébé"
});
checkCurrentView(application, "Vue/Création du sondage", {
  titreDuSondage: "Prénom du bébé"
});

// Publier le sondage

executeAction(application, "Action/Publier le sondage", {
  titreDuSondage: "Prénom du bébé"
});
checkCurrentView(application, "Vue/Votes", {
  titreDuSondage: "Prénom du bébé"
});

// Ajouter un vote

executeAction(application, "Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé"
});
checkCurrentView(application, "Vue/Ajout d'un vote", {
  titreDuSondage: "Prénom du bébé"
});
executeAction(application, "Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Alice",
  choix: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true }
  ]
});
checkCurrentView(application, "Vue/Votes", {
  titreDuSondage: "Prénom du bébé"
});
executeAction(application, "Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé"
});
checkCurrentView(application, "Vue/Ajout d'un vote", {
  titreDuSondage: "Prénom du bébé"
});
executeAction(application, "Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Bob",
  choix: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false }
  ]
});
checkCurrentView(application, "Vue/Votes", {
  titreDuSondage: "Prénom du bébé"
});
