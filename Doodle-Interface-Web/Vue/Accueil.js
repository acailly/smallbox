module.exports = function (view, applicationController, interfaceParams) {
  const { sondages } = view.content;

  const html = `
    <h1>Accueil</h1>

    <h2>Sondages</h2>
    <ul>
      ${sondages
        .map(
          (sondage) => `
        <li>
          <div style="display:flex">
            ${sondage.titre}
            (${sondage.publié ? "publié" : "en cours de création"})
            <form method="POST" action="/Action/Ouvrir un sondage existant">
              <input type="hidden" name="titreDuSondage" value="${
                sondage.titre
              }">
              <button style="margin-left:10px" type="submit">Ouvrir</button>
            </form>
          </div>
        </li>
        `
        )
        .join("\n")}
    </ul>

    <form method="POST" action="/Action/Ajouter un nouveau sondage">
      <button type="submit">Ajouter un nouveau sondage</button>
    </form>
  `;

  return html;
};
