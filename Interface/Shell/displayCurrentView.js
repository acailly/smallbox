const getCurrentViewName = require("../../Engine/getCurrentViewName");

module.exports = function(application, interfaceParams) {
  const viewName = getCurrentViewName(application);
  const display = require(`${interfaceParams.rootDir}/${viewName}`);
  display(application, interfaceParams);
};



