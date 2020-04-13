module.exports = function () {
  return {
    beforeAction: (actionName, actionParams) => {
      console.log("(ACTION)", actionName, actionParams || "");
    },
    afterAction: (actionName, actionParams, nextView) => {
      console.log("(VIEW)", nextView.name, nextView.params || "");
    },
  };
};
