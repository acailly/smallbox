const ApplicationParams = require("./ApplicationParams");
const applicationParams = ApplicationParams();

const createApplicationController = require("../Engine/createApplicationController");
const applicationController = createApplicationController(applicationParams);

const createConsoleLogger = require("../Listeners/createConsoleLogger");
applicationController.addListener(createConsoleLogger());

const createHtmlLogger = require("../Listeners/createHtmlLogger");
const storyFile = __dirname + "/Histoire.html";
applicationController.addListener(createHtmlLogger(storyFile));

const createStoryRunner = require("../Engine/createStoryRunner");
const ʘ_ʘ = createStoryRunner(applicationController);

let viewRef;

// Démarrer l'application

viewRef = ʘ_ʘ.executeStartAction();
ʘ_ʘ.checkCurrentView(viewRef, "Vue/Accueil", {}, { sondages: [] });

// Créer un sondage

viewRef = ʘ_ʘ.executeAction("Action/Ajouter un nouveau sondage");
ʘ_ʘ.checkCurrentView(viewRef, "Vue/Ajout d'un sondage", {}, {});
viewRef = ʘ_ʘ.executeAction("Action/Valider le nouveau sondage", {
  titre: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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

viewRef = ʘ_ʘ.executeAction("Action/Ajouter une option", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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
viewRef = ʘ_ʘ.executeAction("Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Lise",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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
viewRef = ʘ_ʘ.executeAction("Action/Valider la nouvelle option", {
  titreDuSondage: "Prénom du bébé",
  option: "Emma",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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

viewRef = ʘ_ʘ.executeAction("Action/Revenir au sondage", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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

viewRef = ʘ_ʘ.executeAction("Action/Publier le sondage", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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

viewRef = ʘ_ʘ.executeAction("Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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
viewRef = ʘ_ʘ.executeAction("Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Alice",
  choix: [
    { option: "Lise", réponse: false },
    { option: "Emma", réponse: true },
  ],
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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
viewRef = ʘ_ʘ.executeAction("Action/Ajouter un vote", {
  titreDuSondage: "Prénom du bébé",
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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
viewRef = ʘ_ʘ.executeAction("Action/Valider le nouveau vote", {
  titreDuSondage: "Prénom du bébé",
  participant: "Bob",
  choix: [
    { option: "Lise", réponse: true },
    { option: "Emma", réponse: false },
  ],
});
ʘ_ʘ.checkCurrentView(
  viewRef,
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
