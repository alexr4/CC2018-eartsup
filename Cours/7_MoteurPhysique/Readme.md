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
<img src="https://arivaux.com/preprod/cc-2018/Vectors/vector.gif">
</p>

![vectors](https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-01-1024x421.jpg)

En programmation nous pouvons considérer un vecteur comme un tableau à 2 composants (x, y) pour un vecteur 2D et 3 composants (x, y, z) pour un vecteur 3D. En p5js nous créons un vecteur de la manière suivante :

```
var monVecteur = createVector(x, y);
```

## Les opérations vectorielles
Avant de plonger plus loin dans les moteurs physiques et autres forces il est important de connaître les opérations vectorielles. En effet les vecteurs disposent d’un certain type d’opération possible permettant ainsi d’effectuer de nombreux calculs qui nous seront utiles par la suite.

### Addition de vecteurs
Soit deux vecteurs A(15, 20) et B(4,6). Soit C le résultat de leur addition. Alors C correspond à l’addition de leurs composants entre eux :
<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AaddBC.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AaddBCx.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AaddBCy.gif"></br>
<img src="https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-02.jpg">
</p>
