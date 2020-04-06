const Application = require("./Application");
const createApplicationController = require("../Engine/createApplicationController");
const createStoryWrapper = require("../Engine/createStoryWrapper");

const application = Application();
const applicationController = createApplicationController(application);

const storyFile = __dirname + "/Histoire.html";
const ʘ_ʘ = createStoryWrapper(applicationController, storyFile);

// Créer un sondage

ʘ_ʘ.checkCurrentView("Vue/Accueil", {}, { sondages: [] });
ʘ_ʘ.executeAction("Action/Créer un nouveau sondage");
ʘ_ʘ.checkCurrentView("Vue/Ajout d'un sondage", {}, {});
ʘ_ʘ.executeAction("Action/Valider le nouveau sondage", {
  titre: "Prénom du bébé"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Création du sondage",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: [],
      votes: []
    }
  }
);

// Ajouter une option

ʘ_ʘ.executeAction("Action/Ajouter une option", {
  titreDuSondage: "Prénom du bébé"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Ajout d'une option",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: [],
      votes: []
    }
  }
);
ʘ_ʘ.executeAction("Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Lise"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Ajout d'une option",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: ["Lise"],
      votes: []
    }
  }
);
ʘ_ʘ.executeAction("Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Emma"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Ajout d'une option",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: ["Lise", "Emma"],
      votes: []
    }
  }
);

// Revenir à la page de création du sondage

ʘ_ʘ.executeAction("Action/Revenir au sondage", {
  titreDuSondage: "Prénom du bébé"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Création du sondage",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: ["Lise", "Emma"],
      votes: []
    }
  }
);

// Publier le sondage

ʘ_ʘ.executeAction("Action/Publier le sondage", {
  titreDuSondage: "Prénom du bébé"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Votes",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: []
    }
  }
);

// Ajouter un vote

ʘ_ʘ.executeAction("Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Ajout d'un vote",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: []
    }
  }
);
ʘ_ʘ.executeAction("Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Alice",
  choix: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true }
  ]
});
ʘ_ʘ.checkCurrentView(
  "Vue/Votes",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: [
        {
          participant: "Alice",
          choix: [
            { option: "Lise", réponse: false },
            { option: "Emma", réponse: true }
          ]
        }
      ]
    }
  }
);
ʘ_ʘ.executeAction("Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé"
});
ʘ_ʘ.checkCurrentView(
  "Vue/Ajout d'un vote",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: [
        {
          participant: "Alice",
          choix: [
            { option: "Lise", réponse: false },
            { option: "Emma", réponse: true }
          ]
        }
      ]
    }
  }
);
ʘ_ʘ.executeAction("Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Bob",
  choix: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false }
  ]
});
ʘ_ʘ.checkCurrentView(
  "Vue/Votes",
  {
    titreDuSondage: "Prénom du bébé"
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: [
        {
          participant: "Alice",
          choix: [
            { option: "Lise", réponse: false },
            { option: "Emma", réponse: true }
          ]
        },
        {
          participant: "Bob",
          choix: [
            { option: "Lise", réponse: true },
            { option: "Emma", réponse: false }
          ]
        }
      ]
    }
  }
);
