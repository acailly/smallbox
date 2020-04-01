const Application = require("../TodoList/Application");
const displayCurrentView = require("../Interface/Shell/displayCurrentView");

const application = Application();

application.shellRootDir = __dirname

displayCurrentView(application);
