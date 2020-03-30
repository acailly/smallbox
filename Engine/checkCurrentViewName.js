const getCurrentViewName = require("./getCurrentViewName");

module.exports = function(application, expectedViewName) {
  const actualViewName = getCurrentViewName(application);
  if (actualViewName !== expectedViewName) {
    throw new Error(
      `Expected view name is '${expectedViewName}', current view name is '${actualViewName}'`
    );
  }
};
