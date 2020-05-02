# smallbox

Small toolbox for small apps

## ENVIES

Utile, accessible et durable. C'est la définition des low tech par le low tech lab.

Comment rendre le développement logiciel plus utile, accessible et durable ?

Quelques pistes explorées :

- Peu de concepts : Les actions et les vues
- On ne parle plus de "test" mais d'histoire
- Le minimum de dépendances externes
- Des outils de debug/visualisation pour comprendre le code les plus simples à comprendre et les plus simples à modifier

## TODO

- Rendre le test plus drole avec Martine :

```
Martine = ilEtaitUneFois()

Martine.décideDe("Action/Ouvrir un sondage existant", {
  titreDuSondage: "Prénom du bébé",
})
Martine.arriveSurLaVue(viewRef, "Vue/Ajout d'un sondage", {}, {});
```

- Tester de simplifier l'écriture des tests (Histoire) en utilisant un proxy dynamique :

```
Martine.décideDe().OuvrirUnSondageExistant()
  .avecLesParamètres({
    titreDuSondage: "Prénom du bébé",
  })
Martine.arriveSurLaVue().AjoutDUnSondage()
  .avecLesParamètres({})
  .avecLeContenu({});
```

(exemple de proxy : https://stackoverflow.com/questions/58614906/create-proxy-with-dynamic-functions)

## ETIRER LE CONCEPT

- Faire un stockage avec recutils (https://www.gnu.org/software/recutils/manual/)
- Faire un stockage database qui utilise du vanilla SQL avec sqlite
- Faire un stockage fichier conflict-free (comment?) pour préparer la synchro git décentralisée
- Rendre plus joli l'interface Web
- Faire un doodle distribué via une synchro git
- Faire une interface en pure JS pour faire une SPA ? (service worker ? browserify ?)
- Ajouter les parties qui sont généralement difficiles : authent OpenID, paiment en ligne, ...
- Faire un chatbot avec du RDF
- Gérer le cas de la favicon et des assets statiques en général
