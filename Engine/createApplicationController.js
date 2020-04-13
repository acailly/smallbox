const executeAction = require("./executeAction");

module.exports = function (application) {
  const listeners = [];

  function doExecuteAction(application, actionName, actionParams) {
    listeners.forEach((listener) => {
      listener.beforeAction(actionName, actionParams);
    });

    const nextView = executeAction(application, actionName, actionParams);

    listeners.forEach((listener) => {
      listener.afterAction(actionName, actionParams, nextView);
    });

    return nextView;
  }

  return {
    executeStartAction: () => {
      return doExecuteAction(
        application,
        application.startActionName,
        application.startActionParams
      );
    },
    executeAction: (actionName, actionParams) => {
      return doExecuteAction(application, actionName, actionParams);
    },
    addListener: (listener) => {
      listeners.push(listener);
    },
  };
};
