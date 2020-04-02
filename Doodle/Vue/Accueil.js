module.exports = function(application, viewParams) {
  return {
    sondages: application.sondages || []
  };
};
