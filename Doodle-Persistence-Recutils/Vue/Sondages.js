const fs = require("fs");

module.exports = function (applicationParams, viewParams) {
  const sondagesDir = `${applicationParams.dataDir}/sondages`;

  let sondages = [];

  if (fs.existsSync(sondagesDir)) {
    for (const file of fs.readdirSync(sondagesDir)) {
      const sondageJson = fs.readFileSync(`${sondagesDir}/${file}`, {
        encoding: "utf8",
      });
      const sondage = JSON.parse(sondageJson);
      sondages.push(sondage);
    }
  }

  return sondages;
};
