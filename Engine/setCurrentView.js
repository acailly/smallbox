module.exports = function(application, viewName) {
  console.log("(VIEW)", viewName);

  const rootDir = application.rootDir;
  const view = require(`${rootDir}/${viewName}`);
  application.currentViewName = viewName;
  application.currentViewParams = view(application);
};
