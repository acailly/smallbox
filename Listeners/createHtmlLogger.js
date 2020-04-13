const fs = require("fs");

module.exports = function (targetFile) {
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
    beforeAction: (actionName, actionParams) => {
      const splittedActionName = actionName.split("/");
      const actionNameSuffix = splittedActionName.pop();
      const actionNamePrefix = splittedActionName.join("/");
      const html = `
        <div class="card action">
          <h2>${actionNameSuffix}<span class="small"> - Action située dans ${actionNamePrefix}/</span></h2>
          <h3>Paramètres :</h3>
          <p>
            ${valueToHtml(actionParams)}
          </p>
        </div>
      `;
      fs.appendFileSync(targetFile, html);
    },
    afterAction: (actionName, actionParams, nextView) => {
      const splittedViewName = nextView.name.split("/");
      const viewNameSuffix = splittedViewName.pop();
      const viewNamePrefix = splittedViewName.join("/");
      const html = `
        <div class="card view">
          <h2>
            ${viewNameSuffix}<span class="small"> - Vue située dans ${viewNamePrefix}/</span>
          </h2>
          <div class="row">
            <div>
              <h3>Paramètres :</h3>
              <p>
              ${valueToHtml(nextView.params)}
              </p>
            </div>
            <div class="width-70"></div>
            <div>
              <h3>Contenu :</h3>
              <p>
                ${valueToHtml(nextView.content)}
              </p>
            </div>
          </div>
        </div>
      `;
      fs.appendFileSync(targetFile, html);
    },
  };
};

function valueToHtml(value) {
  if (value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    let html = "<ul>";
    for (v of value) {
      html += `<li>${valueToHtml(v)}</li>`;
    }
    html += "</ul>";
    return html;
  } else if (typeof value === "object") {
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
