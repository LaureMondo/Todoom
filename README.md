# Todoom
## 1. Le projet Todo
Vous trouverez deux dossiers : 
- un dossier backend contenant la partie nodeJS avec la gestion des sessions et des todos ;
- un dossier frontend avec la partie vueJS qui gère les templates, et l'envoi / affichage des Todos.

## 2. Explications

Les détails se trouvent dans les readme.md de chaque dossier.

## 2. Lancement et installation
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

Le titre du projet est un mauvais jeu de mot évident si l'on parle anglais et une référence à un super jeu... Ne me jugez pas :trollface:


Laure Mondoloni
:koala: 
