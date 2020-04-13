const ApplicationParams = require("../Doodle/ApplicationParams");
const createApplicationController = require("../Engine/createApplicationController");
const createHttpServer = require("../Interface/Http/createHttpServer");

const applicationParams = ApplicationParams();
const applicationController = createApplicationController(applicationParams);

const interfaceParams = {
  rootDir: __dirname,
  port: 22222,
};

createHttpServer(applicationController, interfaceParams);
