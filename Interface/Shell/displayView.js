module.exports = function (view, applicationController, interfaceParams) {
  const viewName = view.name;
  const display = require(`${interfaceParams.rootDir}/${viewName}`);
  display(view, applicationController, interfaceParams);
};
