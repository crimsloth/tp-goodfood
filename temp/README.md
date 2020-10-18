# Taches pour Olivier

## frontend

component `menu_semaine` doit maintenant ne plus lire des fichiers list, mais au lieu de chercher son data par l'entremise du backend.

p.s. quand ton backend est hors ligne, tu peut mettre des placeholder a la place.

## backend

Rajout de deux endpoints:

1) DELETE -> permet de supprimer une recette de la liste par son ID

2) POST -> permet de rajoutez une recette dans la liste
  - Nouveau ID qui est la suite des ID existant
  - Nouvelle recette est dans le "body"

