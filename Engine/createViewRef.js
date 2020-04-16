module.exports = function (viewName, viewParams) {
  return {
    name: viewName,
    params: viewParams || {}
  };
};
