module.exports = function(application, actionName, actionParams) {
  console.log("(ACTION)", actionName, actionParams || "");

  const rootDir = application.rootDir;
  const action = require(`${rootDir}/${actionName}`);
  return action(application, actionParams || {});
};
