module.exports = function () {
  const applicationParams = {
    rootDir: __dirname,
    startActionName: "Action/Démarrer l'application",
    startActionParams: {},
    dataDir: __dirname + "/Données",
  };

  return applicationParams;
};
