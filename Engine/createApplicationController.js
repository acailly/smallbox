const executeCommand = require("./executeCommand");
const getCurrentViewName = require("./getCurrentViewName");
const getCurrentViewParams = require("./getCurrentViewParams");
const getCurrentViewContent = require("./getCurrentViewContent");
const setCurrentView = require("./setCurrentView");
const checkCurrentView = require("./checkCurrentView");

module.exports = function(application) {
  return {
    executeCommand: (commandName, commandParams) =>
      executeCommand(application, commandName, commandParams),
    setCurrentView: (viewName, viewParams) =>
      setCurrentView(application, viewName, viewParams),
    getCurrentViewName: () => getCurrentViewName(application),
    getCurrentViewParams: () => getCurrentViewParams(application),
    getCurrentViewContent: () => getCurrentViewContent(application),
    checkCurrentView: (
      expectedViewName,
      expectedViewParams,
      expectedViewContent
    ) =>
      checkCurrentView(
        application,
        expectedViewName,
        expectedViewParams,
        expectedViewContent
      )
  };
};
