const executeAction = require("./executeAction");
const checkCurrentView = require("./checkCurrentView");

module.exports = function (application) {
  return {
    executeStartAction: () =>
      executeAction(
        application,
        application.startActionName,
        application.startActionParams
      ),
    executeAction: (actionName, actionParams) =>
      executeAction(application, actionName, actionParams),
    checkCurrentView: (
      view,
      expectedViewName,
      expectedViewParams,
      expectedViewContent
    ) =>
      checkCurrentView(
        view,
        expectedViewName,
        expectedViewParams,
        expectedViewContent
      ),
  };
};
