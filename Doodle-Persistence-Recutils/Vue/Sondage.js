const fs = require("fs");
const sanitizeFilename = require("../util/sanitize-filename");

module.exports = function (applicationParams, viewParams) {
  const { titreDuSondage } = viewParams;
  const sanitizedFilename = sanitizeFilename(titreDuSondage) + ".json";

  const sondagesDir = `${applicationParams.dataDir}/sondages`;

  let sondage;

  for (const file of fs.readdirSync(sondagesDir)) {
    if (file === sanitizedFilename) {
      const sondageJson = fs.readFileSync(`${sondagesDir}/${file}`, {
        encoding: "utf8",
      });
      sondage = JSON.parse(sondageJson);
    }
  }

  return sondage;
};
