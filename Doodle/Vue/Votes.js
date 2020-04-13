module.exports = function (applicationParams, viewParams) {
  const { titreDuSondage } = viewParams;
  const sondage = applicationParams.sondages.find(
    (sondage) => sondage.titre === titreDuSondage
  );
  return {
    sondage,
  };
};
