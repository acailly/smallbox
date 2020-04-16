const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  console.log(`\t<(^-^)>     Voila le sondage ${sondage.titre} !`);
  console.log(`\t<(^-^)>     Qui a voté quoi ? Voyez plutôt :`);
  console.log("");

  const headers =
    "\tParticipant\t|" +
    sondage.options.map((option) => `\t${option}\t`).join("|");
  console.log(headers);

  sondage.votes.forEach((vote) => {
    const line =
      `\t${vote.participant}\t|` +
      sondage.options
        .map((option) => vote.choix.indexOf(option) >= 0)
        .map((réponseOui) => `\t${réponseOui ? "oui" : "non"}\t`)
        .join("|");
    console.log(line);
  });

  console.log("");
  console.log("\t<(^-^)>     Que veux tu faire :");
  console.log("\t<(^-^)>     ajouter un VOTE ?");
  console.log("\t<(^-^)>     REVENIR à la liste des sondages ?");

  prompt.question("choix >", (choice) => {
    if (choice.toLowerCase() === "vote") {
      const nextViewRef = applicationController.executeAction(
        "Action/Ajouter un vote",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else if (choice.toLowerCase() === "revenir") {
      const nextViewRef = applicationController.executeAction(
        "Action/Revenir à la liste des sondages"
      );
      displayView(nextViewRef, applicationController, interfaceParams);
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
