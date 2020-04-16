const createApplicationController = require('../Engine/createApplicationController')

module.exports = function () {
  const stockageApplicationParams = require('../Doodle-Persistence-Memoire/ApplicationParams')();
  const stockageApplicationController = createApplicationController(stockageApplicationParams);

  const applicationParams = {
    rootDir: __dirname,
    startActionName: "Action/Démarrer l'application",
    startActionParams: {},
    stockage: stockageApplicationController
  };

  return applicationParams;
};
