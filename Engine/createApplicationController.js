const executeAction = require("./executeAction");
const createView = require("./createView");

module.exports = function (applicationParams) {
  const listeners = [];

  function doExecuteAction(applicationParams, actionName, actionParams) {
    listeners.forEach((listener) => {
      if(listener.beforeExecuteAction){
        listener.beforeExecuteAction(actionName, actionParams);
      }
    });

    const nextViewRef = executeAction(applicationParams, actionName, actionParams);

    listeners.forEach((listener) => {
      if(listener.afterExecuteAction){
        listener.afterExecuteAction(actionName, actionParams, nextViewRef);
      }
    });

    return nextViewRef;
  }

  function doCreateView(applicationParams, viewName, viewParams) {
    const view = createView(applicationParams, viewName, viewParams);
    
    listeners.forEach((listener) => {
      if(listener.afterCreateView){
        listener.afterCreateView(view);
      }
    });

    return view;
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
    executeActionAndGetView: (actionName, actionParams) => {
      const viewRef = doExecuteAction(applicationParams, actionName, actionParams);
      return doCreateView(applicationParams, viewRef.name, viewRef.params);
    },
    createViewFromViewRef: (viewRef) => {
      return doCreateView(applicationParams, viewRef.name, viewRef.params);
    },
    addListener: (listener) => {
      listeners.push(listener);
    },
  };
};
