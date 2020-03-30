const getCurrentViewName = require("../../Engine/getCurrentViewName");
const getCurrentViewParams = require("../../Engine/getCurrentViewParams");

module.exports = function(application) {
  const viewName = getCurrentViewName(application);
  const viewParams = getCurrentViewParams(application);
  const display = require(`./${viewName}`);
  display(application, viewParams);
};
