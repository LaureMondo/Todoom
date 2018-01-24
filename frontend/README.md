# VueJS Front

## 1. Explication

Les vues sont découpées en fonction de leur "réutilisabilité" afin d'avoir une certaine indépendance, et que lorsque qu'un module se met à jour, tous les autres modules qui n'ont pas besoin de l'information reste inchangé.
Les requêtes sont préparées par Axios (il a fallu rajouter le paramètre *withCredentials : true* sans quoi les requêtes ne rejoignaient jamais le back).

## 2. Lancement et installation
### Frontend - Vues
Il faut installer le front
```
npm install
```

On le lance avec : 
```
npm run dev
```
