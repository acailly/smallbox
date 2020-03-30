module.exports = function(application, commandName, commandParams) {
  console.log("(COMMAND)", commandName, commandParams || "");

  const command = require(`../Commandes/${commandName}`);
  command(application, commandParams || {});
};
