module.exports = function (view, applicationController, interfaceParams) {
  const html = `
    <h1>Ajout d'un sondage</h1>

    <form method="POST" action="/Action/Valider le nouveau sondage">
      <label for="titre">Titre du sondage</label>
      <input type="text" id="titre" name="titre">
      <button type="submit">Valider la création du nouveau sondage</button>
    </form>
  `;

  return html;
};
