module.exports = function (applicationParams, viewParams) {
  const {content: sondages} = applicationParams.stockage.executeAction("Action/Lire la liste des sondages")

  return {
    sondages: sondages || [],
  };
};
