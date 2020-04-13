const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  console.log("=======================");
  console.log("=   Ajouter un vote   =");
  console.log("=======================");
  console.log("Titre du sondage :" + sondage.titre);
  console.log("");
  console.log("------------------------");

  prompt.question("Taper le nom du participant : ", (participant) => {
    const [nextOption, ...remainingOptions] = sondage.options;
    makeNextChoice(participant, [], nextOption, remainingOptions);
  });

  function makeNextChoice(participant, choix, nextOption, remainingOptions) {
    if (nextOption) {
      prompt.question(
        `Taper la réponse pour le choix '${nextOption}' (oui/NON) : `,
        (réponse) => {
          const réponseOui = réponse.toLowerCase() === "oui";
          if (réponseOui) {
            choix.push(nextOption);
          }

          const [newNextOptions, ...newRemainingOptions] = remainingOptions;
          makeNextChoice(
            participant,
            choix,
            newNextOptions,
            newRemainingOptions
          );
        }
      );
    } else {
      const nextView = applicationController.executeAction(
        "Action/Valider le nouveau vote",
        {
          titreDuSondage: sondage.titre,
          participant,
          choix,
        }
      );
      displayView(nextView, applicationController, interfaceParams);
    }
  }
};
