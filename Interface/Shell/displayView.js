module.exports = function (viewOrViewRef, applicationController, interfaceParams) {
  const view = applicationController.createViewFromViewRef(viewOrViewRef)
  
  const viewName = view.name;
  const display = require(`${interfaceParams.rootDir}/${viewName}`);
  
  display(view, applicationController, interfaceParams);
};
