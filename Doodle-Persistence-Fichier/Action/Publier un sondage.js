const createViewRef = require("../../Engine/createViewRef");
const fs = require("fs");
const sanitizeFilename = require("../util/sanitize-filename");

module.exports = function (applicationParams, actionParams) {
  const { titreDuSondage, option } = actionParams;
  const sanitizedFilename = sanitizeFilename(titreDuSondage) + ".json";

  const sondagesDir = `${applicationParams.dataDir}/sondages`;

  for (const file of fs.readdirSync(sondagesDir)) {
    if (file === sanitizedFilename) {
      const sondageJson = fs.readFileSync(`${sondagesDir}/${file}`, {
        encoding: "utf8",
      });
      sondage = JSON.parse(sondageJson);

      sondage.publié = true;

      const nouveauSondageJson = JSON.stringify(sondage);
      fs.writeFileSync(
        `${sondagesDir}/${sanitizedFilename}`,
        nouveauSondageJson,
        {
          encoding: "utf8",
        }
      );
    }
  }

  return createViewRef("Vue/Sondage", {
    titreDuSondage,
  });
};
