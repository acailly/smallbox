module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  const html = `
    <h1>Ajout d'une option</h1>

    <h2>Titre du sondage : ${sondage.titre}</h2>

    <form method="POST" action="/Action/Revenir au sondage">
      <input type="hidden" name="titreDuSondage" value="${sondage.titre}">
      <button type="submit">Revenir au sondage</button>
    </form>

    <h2>Options</h2>
    <ul>
      ${sondage.options.map((option) => `<li>${option}</li>`).join("\n")}
    </ul>    

    <form method="POST" action="/Action/Valider la nouvelle option">
      <input type="hidden" name="titreDuSondage" value="${sondage.titre}">
      <label for="titre">Texte de l'option</label>
      <input type="text" id="option" name="option">
      <button type="submit">Valider la nouvelle option</button>
    </form>
  `;

  return html;
};
