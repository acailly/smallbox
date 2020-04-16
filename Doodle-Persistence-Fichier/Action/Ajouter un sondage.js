const createViewRef = require("../../Engine/createViewRef");
const fs = require("fs");
const sanitizeFilename = require("../util/sanitize-filename");

module.exports = function (applicationParams, actionParams) {
  const { sondage } = actionParams;

  const sondagesDir = `${applicationParams.dataDir}/sondages`;

  if (!fs.existsSync(sondagesDir)) {
    fs.mkdirSync(sondagesDir);
  }

  const sanitizedFilename = sanitizeFilename(sondage.titre) + ".json";
  const sondageJson = JSON.stringify(sondage);
  fs.writeFileSync(`${sondagesDir}/${sanitizedFilename}`, sondageJson, {
    encoding: "utf8",
  });

  return createViewRef("Vue/Sondages");
};
