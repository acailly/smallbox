const fs = require("fs");

function valueToHtml(value) {
  if (value === undefined) {
    return "";
  }

  if (typeof value === "object") {
    let html = "<ul>";
    const keys = Object.keys(value || {});
    for (key of keys) {
      html += `<li>${key} : ${valueToHtml(value[key])}</li>`;
    }
    html += "</ul>";
    return html;
  } else {
    return JSON.stringify(value, null, 2);
  }
}

module.exports = function (targetFile) {
  const html = `
    <h1>Histoire</h1>
  `;
  fs.writeFileSync(targetFile, html);

  return {
    executeAction: (actionName, actionParams) => {
      const html = `
        <section>
          <h2>Action "${actionName}"</h2>
          <h3>Paramètres :</h3>
          <p>
            ${valueToHtml(actionParams)}
          </p>
        </section>
      `;
      fs.appendFileSync(targetFile, html);
    },
    setCurrentView: (viewName, viewParams) => {},
    checkCurrentView: (
      expectedViewName,
      expectedViewParams,
      expectedViewContent
    ) => {
      const html = `
        <section>
          <h2>Vue "${expectedViewName}"</h2>
          <h3>Paramètres :</h3>
          <p>
          ${valueToHtml(expectedViewParams)}
          </p>
          <h3>Contenu :</h3>
          <p>
            ${valueToHtml(expectedViewContent)}
          </p>
        </section>
      `;
      fs.appendFileSync(targetFile, html);
    },
  };
};
