const Application = require("../Doodle/Application");
const createApplicationController = require("../Engine/createApplicationController");
const createHttpServer = require("../Interface/Http/createHttpServer");

const application = Application();
const applicationController = createApplicationController(application);

const interfaceParams = {
  rootDir: __dirname,
  port: 22222,
};

createHttpServer(applicationController, interfaceParams);
