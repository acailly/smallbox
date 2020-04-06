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

module.exports = function (applicationController, targetFile) {
  const html = `
    <style>
      .card {
        border: solid 3px black;
        padding: 10px 30px;
        margin-bottom: 0.5rem;
      }
      .view {
        background-color: palegreen;
        margin-right: 10%;
      }
      .action{
        background-color: lightskyblue;
        margin-left: 10%;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .width-70 {
        width: 70px;
      }
      .small {
        font-weight: 300;
        font-size: 1.3rem;
        color: slategray;
      }
    </style>

    <h1>Histoire</h1>
  `;
  fs.writeFileSync(targetFile, html);

  return {
    executeAction: (actionName, actionParams) => {
      const html = `
        <div class="card action">
          <h2>${actionName}<span class="small"> - Action</span></h2>
          <h3>Paramètres :</h3>
          <p>
            ${valueToHtml(actionParams)}
          </p>
        </div>
      `;
      fs.appendFileSync(targetFile, html);

      applicationController.executeAction(actionName, actionParams);
    },
    setCurrentView: (viewName, viewParams) => {
      applicationController.setCurrentView(viewName, viewParams);
    },
    checkCurrentView: (
      expectedViewName,
      expectedViewParams,
      expectedViewContent
    ) => {
      const html = `
        <div class="card view">
          <h2>${expectedViewName}<span class="small"> - Vue</span></h2>
          <div class="row">
            <div>
              <h3>Paramètres :</h3>
              <p>
              ${valueToHtml(expectedViewParams)}
              </p>
            </div>
            <div class="width-70"></div>
            <div>
              <h3>Contenu :</h3>
              <p>
                ${valueToHtml(expectedViewContent)}
              </p>
            </div>
          </div>
        </div>
      `;
      fs.appendFileSync(targetFile, html);

      applicationController.checkCurrentView(expectedViewName, expectedViewParams, expectedViewContent);
    },
  };
};
