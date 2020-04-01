const getCurrentViewName = require("./getCurrentViewName");
const getCurrentViewParams = require("./getCurrentViewParams");

module.exports = function(application, expectedViewName, expectedViewParams) {
  const actualViewName = getCurrentViewName(application);
  if (actualViewName !== expectedViewName) {
    throw new Error(
      `Expected view name is '${expectedViewName}', current view name is '${actualViewName}'`
    );
  }

  if (expectedViewParams) {
    const actualViewParams = getCurrentViewParams(application);
    const actualViewParamsJson = JSON.stringify(actualViewParams, null, 2);
    const expectedViewParamsJson = JSON.stringify(expectedViewParams, null, 2)
    if (actualViewParamsJson !== expectedViewParamsJson) {
      throw new Error(
        `Expected view params are '${expectedViewParamsJson}', current view params are '${actualViewParamsJson}'`
      );
    }
  }
};
