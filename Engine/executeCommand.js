module.exports = function(application, commandName, commandParams) {
  console.log("(COMMAND)", commandName, commandParams || "");

  const rootDir = application.rootDir;
  const command = require(`${rootDir}/${commandName}`);
  command(application, commandParams || {});
};
