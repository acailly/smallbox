const Application = require("./Application");
const createApplicationController = require("../Engine/createApplicationController");
const createStoryRunner = require("../Engine/createStoryRunner");

const application = Application();
const applicationController = createApplicationController(application);

const createConsoleLogger = require("../Listeners/createConsoleLogger");
applicationController.addListener(createConsoleLogger());

const createHtmlLogger = require("../Listeners/createHtmlLogger");
const storyFile = __dirname + "/Histoire.html";
applicationController.addListener(createHtmlLogger(storyFile));

const ʘ_ʘ = createStoryRunner(applicationController);

let view;

// Démarrer l'application

view = ʘ_ʘ.executeStartAction();
ʘ_ʘ.checkCurrentView(view, "Vue/Accueil", {}, { sondages: [] });

// Créer un sondage

view = ʘ_ʘ.executeAction("Action/Créer un nouveau sondage");
ʘ_ʘ.checkCurrentView(view, "Vue/Ajout d'un sondage", {}, {});
view = ʘ_ʘ.executeAction("Action/Valider le nouveau sondage", {
  titre: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Création du sondage",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: [],
      votes: [],
    },
  }
);

// Ajouter une option

view = ʘ_ʘ.executeAction("Action/Ajouter une option", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Ajout d'une option",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: [],
      votes: [],
    },
  }
);
view = ʘ_ʘ.executeAction("Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Lise",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Ajout d'une option",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: ["Lise"],
      votes: [],
    },
  }
);
view = ʘ_ʘ.executeAction("Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Emma",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Ajout d'une option",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: ["Lise", "Emma"],
      votes: [],
    },
  }
);

// Revenir à la page de création du sondage

view = ʘ_ʘ.executeAction("Action/Revenir au sondage", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Création du sondage",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: false,
      options: ["Lise", "Emma"],
      votes: [],
    },
  }
);

// Publier le sondage

view = ʘ_ʘ.executeAction("Action/Publier le sondage", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Votes",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: [],
    },
  }
);

// Ajouter un vote

view = ʘ_ʘ.executeAction("Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Ajout d'un vote",
  {
    titreDuSondage: "Prénom du bébé",
  },
  {
    sondage: {
      titre: "Prénom du bébé",
      publié: true,
      options: ["Lise", "Emma"],
      votes: [],
    },
  }
);
view = ʘ_ʘ.executeAction("Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Alice",
  choix: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true },
  ],
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Votes",
  {
    titreDuSondage: "Prénom du bébé",
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
            { option: "Emma", réponse: true },
          ],
        },
      ],
    },
  }
);
view = ʘ_ʘ.executeAction("Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Ajout d'un vote",
  {
    titreDuSondage: "Prénom du bébé",
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
            { option: "Emma", réponse: true },
          ],
        },
      ],
    },
  }
);
view = ʘ_ʘ.executeAction("Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Bob",
  choix: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false },
  ],
});
ʘ_ʘ.checkCurrentView(
  view,
  "Vue/Votes",
  {
    titreDuSondage: "Prénom du bébé",
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
            { option: "Emma", réponse: true },
          ],
        },
        {
          participant: "Bob",
          choix: [
            { option: "Lise", réponse: true },
            { option: "Emma", réponse: false },
          ],
        },
      ],
    },
  }
);
