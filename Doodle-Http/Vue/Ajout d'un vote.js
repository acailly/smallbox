module.exports = function(applicationController, interfaceParams) {
  const { sondage } = applicationController.getCurrentViewContent();

  const html = `
    <h1>Ajouter un vote</h1>

    <h2>Titre du sondage : ${sondage.titre}</h2>

    <form method="POST" action="/Action/Valider le nouveau vote">
      <input type="hidden" name="titreDuSondage" value="${sondage.titre}">

      <h2>Participant</h2>
      <label for="participant">Nom du participant</label>
      <input type="text" id="participant" name="participant">

      <h2>Choix</h2>
      <ul>
        ${sondage.options.map(option => `
          <li>
            <label for="participant">${option}</label>
            <input type="checkbox" id="${option}" name="choix" value="${option}">
          </li>
        `).join('\n')}
      </ul>    

      <button type="submit">Valider le vote</button>
    </form>
  `

  return html;
};
