module.exports = function(application, viewParams) {
  return {
    tâches: application.tâches || []
  };
};
