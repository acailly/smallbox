module.exports = function (applicationParams, viewParams) {
  return {
    sondages: applicationParams.sondages || [],
  };
};
