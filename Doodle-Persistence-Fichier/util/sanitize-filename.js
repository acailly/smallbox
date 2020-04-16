module.exports = function (filename) {
  // From https://stackoverflow.com/a/42210346
  return filename.replace(/[/\\?%*:|"<>]/g, "-");
};
