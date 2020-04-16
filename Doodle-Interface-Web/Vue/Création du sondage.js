module.exports = function (view, applicationController, interfaceParams) {
  const { sondage } = view.content;

  const html = `
    <h1>Création d'un sondage</h1>

    <h2>Titre : ${sondage.titre}</h2>

    <h2>Options</h2>
    <ul>
      ${sondage.options.map((option) => `<li>${option}</li>`).join("\n")}
    </ul>    

    <form method="POST" action="/Action/Ajouter une option">
      <input type="hidden" name="titreDuSondage" value="${sondage.titre}">
      <button type="submit">Ajouter une option</button>
    </form>

    <h2>Prêt à publier ?</h2>
  
    <form method="POST" action="/Action/Publier le sondage">
      <input type="hidden" name="titreDuSondage" value="${sondage.titre}">
      <button type="submit">Publier le sondage</button>
    </form>
  `;

  return html;
};
