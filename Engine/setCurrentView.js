module.exports = function(application, viewName) {
  console.log("(VIEW)", viewName);

  const view = require(`../Vues/${viewName}`);
  application.currentViewName = viewName;
  application.currentViewParams = view(application);
};
