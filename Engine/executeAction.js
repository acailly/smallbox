module.exports = function (applicationParams, actionName, actionParams) {
  const rootDir = applicationParams.rootDir;
  const action = require(`${rootDir}/${actionName}`);
  return action(applicationParams, actionParams || {});
};
