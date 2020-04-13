module.exports = function (applicationParams, viewName, viewParams) {
  const rootDir = applicationParams.rootDir;
  const view = require(`${rootDir}/${viewName}`);
  const viewContent = view(applicationParams, viewParams || {});

  return {
    name: viewName,
    params: viewParams || {},
    content: viewContent,
  };
};
