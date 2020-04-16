const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  console.log(`\t<(^-^)>     Nouveau vote pour le sondage ${sondage.titre} !`);
  console.log(`\t<(^-^)>     C'est quoi votre petit nom ?`);


  prompt.question("votre nom >", (participant) => {
    const [nextOption, ...remainingOptions] = sondage.options;
    makeNextChoice(participant, [], nextOption, remainingOptions);
  });

  function makeNextChoice(participant, choix, nextOption, remainingOptions) {
    if (nextOption) {
      console.log(`\t<(^-^)>     Vous pensez quoi de l'option ${nextOption} ?`);      
      prompt.question(
        `oui/NON >`,
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
