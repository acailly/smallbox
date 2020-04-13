const executeAction = require("./executeAction");

module.exports = function (applicationParams) {
  const listeners = [];

  function doExecuteAction(applicationParams, actionName, actionParams) {
    listeners.forEach((listener) => {
      listener.beforeAction(actionName, actionParams);
    });

    const nextView = executeAction(applicationParams, actionName, actionParams);

    listeners.forEach((listener) => {
      listener.afterAction(actionName, actionParams, nextView);
    });

    return nextView;
  }

  return {
    executeStartAction: () => {
      return doExecuteAction(
        applicationParams,
        applicationParams.startActionName,
        applicationParams.startActionParams
      );
    },
    executeAction: (actionName, actionParams) => {
      return doExecuteAction(applicationParams, actionName, actionParams);
    },
    addListener: (listener) => {
      listeners.push(listener);
    },
  };
};
