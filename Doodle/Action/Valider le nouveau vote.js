const setCurrentView = require("../../Engine/setCurrentView");

module.exports = function(application, params) {
  const { titreDuSondage, participant, choix } = params;

  const sondage = application.sondages.find(
    sondage => sondage.titre === titreDuSondage
  );

  if (!sondage.votes) {
    sondage.votes = [];
  }

  sondage.votes.push({
    participant,
    choix
  });

  setCurrentView(application, "Vue/Votes", { titreDuSondage });
};
