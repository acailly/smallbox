module.exports = function (applicationParams, viewParams) {
  const { titreDuSondage } = viewParams;
  
  const {content: sondage} = applicationParams.stockage.executeAction("Action/Lire un sondage", {
    titreDuSondage
  })
  
  return {
    sondage,
  };
};
