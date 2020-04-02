const Application = require("../TodoList/Application");
const createApplicationController = require("../Engine/createApplicationController");
const displayCurrentView = require("../Interface/Shell/displayCurrentView");

const application = Application();
const applicationController = createApplicationController(application);

const interfaceParams = {
  rootDir: __dirname
};

displayCurrentView(applicationController, interfaceParams);
