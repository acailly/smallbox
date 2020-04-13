module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  const html = `
    <h1>Votes</h1>

    <h2>Titre : ${sondage.titre}</h2>

    <h2>Votes</h2>
    <table>
      <thead>
        <tr>
          <th>Participant</th>
          ${sondage.options.map((option) => `<th>${option}</th>`).join("\n")}
        </tr>
      </thead>
      <tbody>
      ${sondage.votes
        .map(
          (vote) => `
          <tr>
            <td>${vote.participant}</td>
            ${sondage.options
              .map((option) => vote.choix.indexOf(option) >= 0)
              .map((réponseOui) => `<td>${réponseOui ? "oui" : "non"}</td>`)
              .join("\n")}
          </tr>
        `
        )
        .join("\n")}
      </tbody>    
    </table>

    <form method="POST" action="/Action/Ajouter un vote">
      <input type="hidden" name="titreDuSondage" value="${sondage.titre}">
      <button type="submit">Ajouter un vote</button>
    </form>
  `;

  return html;
};
