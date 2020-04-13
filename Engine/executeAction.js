module.exports = function (application, actionName, actionParams) {
  const rootDir = application.rootDir;
  const action = require(`${rootDir}/${actionName}`);
  return action(application, actionParams || {});
};
