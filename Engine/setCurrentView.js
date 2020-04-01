module.exports = function(application, viewName, viewParams) {
  console.log("(VIEW)", viewName, viewParams || "");

  application.currentViewName = viewName;
  application.currentViewParams = viewParams;
};
