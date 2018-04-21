# Moteurs Physiques
Lors du cours précédent nous avons vu comment effectuer le déplacement d’un objet par la mise à jour de ses variables x et y. Nous avions :

```
x += speedX;
y += speedY;
```

Lorsque nous effectuons cette opération nous calculons séparément les variables x et y afin d’effectuer le déplacement. Or, lorsque nous souhaitons réaliser des mouvements plus complexes telles de l’attraction ou de la répulsion calculer ces éléments séparément peut devenir plus compliqué. Pour cela nous utiliserons les vecteurs et leurs méthodes de calculs afin de déterminer la nouvelle position de notre élément.

La géométrie vectorielle est aujourd’hui une base des moteurs physiques. Elle permet de calculer une position dans un espace 2D ou 3D mais également des forces ou des directions et nous la retrouvons aussi bien dans les comportements “physique” des éléments, tel que leurs déplacements, que dans leurs comportements “graphiques” comme les réflections de lumières. Durant ce cours nous allons découvrir les bases du calcul vectoriel nous permettant de mettre en place notre premier moteur physique 2D baser d'une [intégration d'Euler](http://www.f-legrand.fr/scidoc/docimg/numerique/euler/eulers/eulers.html).

![Physic's Engine](https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-00-1024x661.jpg)

## Définition d’un vecteur
En mathématiques, en particulier en géométrie euclidienne, un vecteur est un objet géométrique possédant une magnitude (longueur) et une direction. Un vecteur est généralement représenté par une flèche pointant une direction. Nous reconnaissons un vecteur par son écriture :
<p align="center">
![Vector](https://arivaux.com/preprod/cc-2018/Vectors/vector.gif)
</p>
