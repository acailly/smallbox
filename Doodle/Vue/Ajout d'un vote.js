module.exports = function(application, viewParams) {
  const { titreDuSondage } = viewParams;
  const sondage = application.sondages.find(
    sondage => sondage.titre === titreDuSondage
  );
  return {
    sondage
  };
};
