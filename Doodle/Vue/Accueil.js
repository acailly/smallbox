module.exports = function (applicationParams, viewParams) {
  const {content: sondages} = applicationParams.stockage.executeActionAndGetView("Action/Lire la liste des sondages")

  return {
    sondages: sondages || [],
  };
};
