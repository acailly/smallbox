const Application = require("../Application");
const displayCurrentView = require("../../Interface/Shell/displayCurrentView");

const application = Application();
const rootDir = __dirname;

displayCurrentView(application);
