const ApplicationParams = require("../Doodle/ApplicationParams");
const createApplicationController = require("../Engine/createApplicationController");
const displayView = require("../Interface/Shell/displayView");

const applicationParams = ApplicationParams();
const applicationController = createApplicationController(applicationParams);

const interfaceParams = {
  rootDir: __dirname,
};

const view = applicationController.executeAction(
  "Action/Démarrer l'application"
);
displayView(view, applicationController, interfaceParams);
