module.exports = function (application, viewName, viewParams) {
  console.log("(VIEW)", viewName, viewParams || "");

  const rootDir = application.rootDir;
  const view = require(`${rootDir}/${viewName}`);
  const viewContent = view(application, viewParams || {});

  return {
    name: viewName,
    params: viewParams || {},
    content: viewContent,
  };
};
