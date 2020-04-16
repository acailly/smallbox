module.exports = function () {
  return {
    beforeExecuteAction: (actionName, actionParams) => {
      console.log("(ACTION)", actionName, actionParams || "");
    },
    afterExecuteAction: (actionName, actionParams, nextViewRef) => {
      console.log("(VIEW)", nextViewRef.name, nextViewRef.params || "");
    },
  };
};
