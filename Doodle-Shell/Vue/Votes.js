const prompt = require("../../Interface/Shell/prompt");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

module.exports = function(applicationController, interfaceParams) {
  const { sondage } = applicationController.getCurrentViewContent();
  console.log("=============");
  console.log("=   Votes   =");
  console.log("=============");
  console.log("Titre du sondage :" + sondage.titre);
  console.log("");

  const headers =
    "\tParticipant\t|" +
    sondage.options.map(option => `\t${option}\t`).join("|");
  console.log(headers);

  const votes = sondage.votes;
  votes.forEach(vote => {
    const line =
      `\t${vote.participant}\t|` +
      sondage.options
        .map(option => vote.choix.find(c => c.option === option).réponse)
        .map(réponse => `\t${réponse}\t`)
        .join("|");
    console.log(line);
  });
  console.log("");
  console.log("------------------------");
  console.log("Taper 1 pour Ajouter un vote");

  prompt.question("Choix : ", choice => {
    if (choice === "1") {
      applicationController.executeAction("Action/Ajouter un vote", {
        titreDuSondage: sondage.titre
      });
      displayCurrentView(applicationController, interfaceParams);
    } else {
      displayCurrentView(applicationController, interfaceParams);
    }
  });
};