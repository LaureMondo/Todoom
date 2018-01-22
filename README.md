# Todoom
## 1. Le projet Todo
Vous trouverez deux dossiers : 
- un dossier backend contenant la partie nodeJS avec la gestion des sessions et des todos ;
- un dossier frontend avec la partie vueJS qui gère les templates, et l'envoi / affichage des Todos.

## 2. Explication
### Serveur
Le serveur va gérer les routes et les Todos en session.
Les routes appellent les différents modules qui vont réaliser les traitements nécessaires sur les Todos.
Chaque route utilise son module.

Il existe plusieurs routes : 

*/* elle renvoie la liste de toutes les todos en session ;

*/add* permet d'ajouter une nouvelle Todo ;

*/delete* cette route supprime la Todo d'identifiant donné ;

*/modifier* permet de modifier une Todo d'identifiant donné ;

*/getTodo* renvoie la Todo d'id donné ;

*/detail* donne le détail de la Todo d'id demandé.


Différents middlewares permettent de faire fonctionner le serveur :


### Vues

## Lancement et installation
### Backend - Serveur
Il faut installer le serveur et les modules
```
npm install
```

Ensuite on peut lancer le serveur :
```
node index.js
```

### Frontend - Vues
Il faut installer le front
```
npm install
```

On le lance avec : 
```
npm run dev
```

## 3. Problèmes et conclusion
Ce projet est intéressant et permet de voir de façon assez large les possibilités du nodeJS et du vueJS associés ensemble. Le problème a été de relier les deux, au début il a fallu comprendre les mécanismes et savoir comment ces deux langages fonctionnent indépendamment.

Un autre problème concerne les sessions, au départ celles-ci ne se concervaient pas entre les différents rafraichissements des pages du front (alors que sur Postman celles-ci fonctionnaient). En fait le problème vient de CORS qui oblige à utiliser un middleware et un module externe.


Laure Mondoloni
:koala: 
