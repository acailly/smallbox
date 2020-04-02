const getCurrentViewName = require("./getCurrentViewName");
const getCurrentViewParams = require("./getCurrentViewParams");
const getCurrentViewContent = require("./getCurrentViewContent");

module.exports = function(application, expectedViewName, expectedViewParams, expectedViewContent) {
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

  if (expectedViewContent) {
    const actualViewContent = getCurrentViewContent(application);
    const actualViewContentJson = JSON.stringify(actualViewContent, null, 2);
    const expectedViewContentJson = JSON.stringify(expectedViewContent, null, 2)
    if (actualViewContentJson !== expectedViewContentJson) {
      throw new Error(
        `Expected view params are '${expectedViewContentJson}', current view params are '${actualViewContentJson}'`
      );
    }
  }
};
