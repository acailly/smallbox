const Application = require("../Doodle/Application");
const displayCurrentView = require("../Interface/Shell/displayCurrentView");

const application = Application();

const interfaceParams = {
    rootDir: __dirname
}

displayCurrentView(application, interfaceParams);
