# Exercice 1 - Clash of Clans
![coc-fnal.png](_support%2Fcoc-fnal.png)

## Étape 1 - Titre et description
* Créer un nouveau composant Vue.js dans le fichier `js/main.js` lié à la 
  `<div id="app">` du fichier `index.html`.
* Créer les données `data()` permettant d'afficher de manière dynamique le 
  **titre** et la **description** du jeu _Clash of Clans_.

   * **Titre:** `Clash of Clans`
   * **Description:** `Construire un village, former un clan et participer à des 
   guerres de clans épiques !`
---
## Étape 2 - Liens dynamiques
* Ajouter de manière dynamique le lien vers le site officiel de _Clash of 
  Clans_ aux liens `<a href="...">` de l'entête et du pied de page.
  * **Lien:** `https://supercell.com/en/games/clashofclans/`
---
## Étape 3 - Données des cartes
* Ajouter les informations des _troupes_ aux `data()` de votre composant Vue.js
* Créer une boucle avec la directive `v-for` qui affiche toutes les 
  _troupes_ voir le tableau ci-dessous. Ne pas oublier de spécifier la clé 
  `v-key`.
* Données à afficher dynamiquement pour chaque _troupe_ :
  * mage - avec nom de la troupe comme texte alternatif `alt="Barbare"`
  * niveau
  * nom
  * description
  * formation
  * vitesse
  * coût
* Si la durée de formation dépasse les 60 secondes, il faudra l'afficher en 
  minutes : `10 => 10<sup>sec</sup>` et `120 => 2<sup>min</sup>`
  * Utiliser les directives `v-if` et `v-else` pour afficher le bon texte
  * **Astuce :** utiliser la fonction `Math.round()`
  pour arrondir à l'entier le plus proche.

```javascript
// Tableau des troupes
[
  {
    id: 1,
    nom: 'Barbare',
    description: 'Ce guerrier intrépide compte sur ses muscles saillants et sa fière moustache pour semer le chaos dans les villages ennemis. Faites charger une horde de barbares et profitez du spectacle !',
    image: 'barbare.png',
    imageFond: 'barbare-bg.jpg',
    couleur: '#EC9B3B',
    niveau: 4,
    formation: 20,
    vitesse: 16,
    cout: 150
  },
  {
    id: 2,
    nom: 'Archer',
    description: 'Ces tireurs d\'élite préfèrent garder leurs distances, aussi bien sur le champs de bataille que dans la vie. Ils n\'aiment rien tant que de voir tomber la cible sur laquelle ils ont jeté leur dévolu.',
    image: 'archer.png',
    imageFond: 'archer-bg.jpg',
    couleur: '#EE5487',
    niveau: 5,
    formation: 25,
    vitesse: 24,
    cout: 300
  },
  {
    id: 3,
    nom: 'Géant',
    description: 'Ces grands gaillards semblent calmes de prime abord, mais ils se déchaîneront à la simple vue d\'une tourelle ou d\'un canon ! Lents mais résistants, ces guerriers sont faits pour encaisser les coups.',
    image: 'giant.png',
    imageFond: 'giant-bg.jpg',
    couleur: '#F6901A',
    niveau: 5,
    formation: 120,
    vitesse: 12,
    cout: 2250
  },
  {
    id: 4,
    nom: 'Gobelin',
    description: 'Ces petites créatures agaçantes ne pensent qu\'à une chose: le BUTIN ! Ils sont plus rapides qu\'un piège à ressort, et leur appétit pour les ressources est sans limite.',
    image: 'goblin.png',
    imageFond: 'goblin-bg.jpg',
    couleur: '#82BB30',
    niveau: 5,
    formation: 30,
    vitesse: 32,
    cout: 100
  },
  {
    id: 5,
    nom: 'Dragon',
    description: 'Les dragons sont connus à travers tout le territoire pour leur puissance sans égal. Cette terreur écailleuse du ciel ne montre aucune pitié ; et rien n\'échappe à son souffle mortel.',
    image: 'dragon.png',
    imageFond: 'dragon-bg.jpg',
    couleur: '#5F3A59',
    niveau: 2,
    formation: 720,
    vitesse: 16,
    cout: 12000
  }
]
```
---
## Étape 4 - Style de la carte
Ajouter le style dynamique aux cartes :
* Changer l'image de fond du `<header>` de la carte en fonction de la 
  _troupe_
* Changer la couleur de fond des trois `<div>` du `<footer>` de la carte pour la
  formation, la vitesse et le coût en fonction de la _troupe_
# Sources 
* https://codepen.io/drehimself/pen/QNXpyp/
* https://clashofclans.fandom.com/fr/wiki/Troupes_normales
* https://www.remove.bg/fr
