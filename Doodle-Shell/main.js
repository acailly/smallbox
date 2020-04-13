const Application = require("../Doodle/Application");
const createApplicationController = require("../Engine/createApplicationController");
const displayView = require("../Interface/Shell/displayView");

const application = Application();
const applicationController = createApplicationController(application);

const interfaceParams = {
  rootDir: __dirname,
};

const view = applicationController.executeAction(
  "Action/Démarrer l'application"
);
displayView(view, applicationController, interfaceParams);
