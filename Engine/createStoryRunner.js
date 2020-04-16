function checkCurrentView(
  applicationController,
  viewRef,
  expectedViewName,
  expectedViewParams,
  expectedViewContent
) {
  const view = applicationController.createViewFromViewRef(viewRef);

  const actualViewName = view.name;
  if (actualViewName !== expectedViewName) {
    throw new Error(
      `Expected view name is '${expectedViewName}', current view name is '${actualViewName}'`
    );
  }

  if (expectedViewParams) {
    const actualViewParams = view.params;
    const actualViewParamsJson = JSON.stringify(actualViewParams, null, 2);
    const expectedViewParamsJson = JSON.stringify(expectedViewParams, null, 2);
    if (actualViewParamsJson !== expectedViewParamsJson) {
      throw new Error(
        `Expected view params are '${expectedViewParamsJson}', current view params are '${actualViewParamsJson}'`
      );
    }
  }

  if (expectedViewContent) {
    const actualViewContent = view.content;
    const actualViewContentJson = JSON.stringify(actualViewContent, null, 2);
    const expectedViewContentJson = JSON.stringify(
      expectedViewContent,
      null,
      2
    );
    if (actualViewContentJson !== expectedViewContentJson) {
      throw new Error(
        `Expected view content is '${expectedViewContentJson}', current view content is '${actualViewContentJson}'`
      );
    }
  }
}

module.exports = function (applicationController) {
  return {
    executeStartAction: () => applicationController.executeStartAction(),
    executeAction: (actionName, actionParams) =>
      applicationController.executeAction(actionName, actionParams),
    checkCurrentView: (
      viewRef,
      expectedViewName,
      expectedViewParams,
      expectedViewContent
    ) => {
      checkCurrentView(
        applicationController,
        viewRef,
        expectedViewName,
        expectedViewParams,
        expectedViewContent
      );
    },
  };
};
