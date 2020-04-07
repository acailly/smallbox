module.exports = function(applicationController, interfaceParams) {
  const { sondages } = applicationController.getCurrentViewContent();

  const html = `
    <h1>Accueil</h1>

    <h2>Sondages</h2>
    <ul>
      ${sondages.map(sondage => `<li>${sondage.titre}</li>`).join('\n')}
    </ul>

    <form method="POST" action="/Action/Créer un nouveau sondage">
      <button type="submit">Créer un nouveau sondage</button>
    </form>
  `

  return html;
};
