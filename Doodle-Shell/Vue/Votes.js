const prompt = require("../../Interface/Shell/prompt");
const displayView = require("../../Interface/Shell/displayView");

module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  console.log("=============");
  console.log("=   Votes   =");
  console.log("=============");
  console.log("Titre du sondage :" + sondage.titre);
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
  console.log("------------------------");
  console.log("Taper 1 pour Ajouter un vote");

  prompt.question("Choix : ", (choice) => {
    if (choice === "1") {
      const nextView = applicationController.executeAction(
        "Action/Ajouter un vote",
        {
          titreDuSondage: sondage.titre,
        }
      );
      displayView(nextView, applicationController, interfaceParams);
    } else {
      displayView(view, applicationController, interfaceParams);
    }
  });
};
