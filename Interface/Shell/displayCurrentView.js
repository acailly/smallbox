module.exports = function(applicationController, interfaceParams) {
  const viewName = applicationController.getCurrentViewName();
  const display = require(`${interfaceParams.rootDir}/${viewName}`);
  display(applicationController, interfaceParams);
};



