const executeAction = require("./executeAction");
const getCurrentViewName = require("./getCurrentViewName");
const getCurrentViewParams = require("./getCurrentViewParams");
const getCurrentViewContent = require("./getCurrentViewContent");
const setCurrentView = require("./setCurrentView");
const checkCurrentView = require("./checkCurrentView");

module.exports = function(application) {
  return {
    executeAction: (actionName, actionParams) =>
      executeAction(application, actionName, actionParams),
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
