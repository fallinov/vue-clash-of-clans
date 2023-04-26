# Exercice 2 - Événements et méthodes Vue.js
![coc-e2-fin.png](_support%2Fcoc-e2-fin.png)

## Étape 1 - Pièces d'or
* Afficher dynamiquement le nombre de pièces d'or `totalOr` dans la `div` 
  avec la classe `solde-or`.
* **Astuce :** utiliser `monNombre.toLocaleString('fr-CH')` pour afficher un 
  nombre avec les espaces entre les milliers.

## Étape 2 - Bouton _Former_
* Ajouter dynamiquement la couleur de fond au bouton
* Au clic **soustraire** à `totalOr` le **coût de formation** de la troupe

## Étape 3 - Méthode `formerTroupe` et validation
* Créer une méthode `formerTroupe` qui sera appelée au clic sur le bouton 
  _Former_ et prendra en paramètre le coût de formation de la troupe
* Si le coût de formation est supérieur à `totalOr` afficher le message 
  d'erreur suivant dans une alerte : `Vous n'avez pas assez d'or mon seigneur !`
* Si le coût de formation est inférieur ou égal à `totalOr` soustraire le 
  coût de formation à `totalOr`

## Étape 4 - Désactiver le bouton _Former_
* Désactiver le bouton _Former_ si le coût de formation est supérieur à 
  `totalOr`
* Astuce : utiliser la directive `v-bind:disabled` pour désactiver le bouton

## Sources 
* https://codepen.io/drehimself/pen/QNXpyp/
* https://clashofclans.fandom.com/fr/wiki/Troupes_normales
