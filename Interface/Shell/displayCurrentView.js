const getCurrentViewName = require("../../Engine/getCurrentViewName");
const getCurrentViewParams = require("../../Engine/getCurrentViewParams");

module.exports = function(application) {
  const rootDir = application.shellRootDir
  const viewName = getCurrentViewName(application);
  const viewParams = getCurrentViewParams(application);
  const display = require(`${rootDir}/${viewName}`);
  display(application, viewParams);
};
