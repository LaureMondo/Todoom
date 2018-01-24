# Serveur Backend

## 1. Explication
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

Chaque route appelle son module node du dossier node afin d'effectuer les traitements sur les Todos.


Différents middlewares permettent de faire fonctionner le serveur :

Cors permettant de faire des requêtes sur le vueJS et express pour gérer les sessions.

## 2. Lancement et installation
Il faut installer le serveur et les modules
```
npm install
```

Ensuite on peut lancer le serveur :
```
node index.js
```
