module.exports = function(application, viewName, viewParams) {
  console.log("(VIEW)", viewName, viewParams || "");

  application.currentViewName = viewName;
  application.currentViewParams = viewParams || {};

  const rootDir = application.rootDir;
  const view = require(`${rootDir}/${viewName}`);
  const viewContent = view(application, viewParams || {});
  application.currentViewContent = viewContent;
};
