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

Soit avec p5js :
```
var A = createVector(15, 20);
var B = createVector(4, 6);
var C = p5.Vector.add(A, B);
```

### Soustraction de vecteurs
Soit deux vecteurs A(15, 20) et B(4,6). Soit C le résultat de leur soustraction. Alors C correspond à la soustraction de leurs composants entre eux :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AsubBC.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AsubBCx.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AsubBCy.gif"></br>
<img src="https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-03.jpg">
</p>

Soit avec p5js :
```
var A = createVector(15, 20);
var B = createVector(4, 6);
var C = p5.Vector.sub(A, B);
```

### Multiplication et Division de vecteurs
La multiplication et division sont des opérations différentes quand il s’agit de calcul vectoriel. En effet lorsque l’on parle de multiplication et division de vecteur nous parlons de modifier l’échelle de ce dernier, c’est-à-dire d’en changer sa magnitude — pour rappel la magnitude d’un vecteur correspond à sa longueur. Ainsi nous ne multiplions ou divisons un vecteur que par un nombre décimale. En mathématiques le nombre qui multiplie ou divise un vecteur est appelé **scalaire**.

Soit le vecteur A(15, 20) et n(2)  son scalaire. Soit C le résultat de la multiplication de A par n et C’ le résultat de la division de A par n. Alors C et C’ correspondent respectivement à la multiplication et division des composants de A par n :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AtimeC.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AtimeCx.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AtimeCy.gif"></br>
</p>
<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AdivC.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AdivCx.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AdivCy.gif"></br>
</p>
<p align="center">
<img src="https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-04-1024x588.jpg">
</p>

Soit avec p5js :
```
var A = createVector(15, 20);
var n = 2.0;
var C = p5.Vector.mult(A, n);
var C_ = p5.Vector.div(A, n);
```

### Magnitude d’un vecteur
Comme nous l’avons vu juste, la multiplication et division d’un vecteur par un scalaire modifie sa longueur, c’est-à-dire sa magnitude, sans en changer sa direction. Lors de certaines opérations il est également utile de connaître la magnitude de ce vecteur. La magnitude d’un vecteur s’écrit de la manière suivante :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Amag.gif"></br>
</p>

Soit le vecteur A(15, 20). Quelle est la magnitude m de A?
<p align="center">
<img src="https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-05.jpg"></br>
</p>

Si on observe le vecteur ci-dessus on remarque que ce dernier peut être décrit comme le triangle rectangle ABC dont la longueur du côté opposé à l’angle CBA est a = 20 et  dont la longueur du côté adjacent à l’angle CBA est b = 15. Enfin le côté c correspond à l’hypoténuse du triangle ABC. Or on sait par le théorème de Pythagore que l’hypoténuse est égale à la racine de l’addition du coté opposé au carré par le côté adjacent au carré soit :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AmagCHypo0.gif"></br>
</p>

Nous pouvons alors définir que la magnitude du vecteur A est définie par le calcul suivant

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AmagC.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AmagCHypo.gif"></br>
</p>

Soit avec p5js :
```
var A = createVector(15, 20);
var c = A.mag();
```

### Normalisation d’un vecteur
Normaliser un vecteur signifie ramener sa magnitude à une valeur de 1. Ce calcul permet de standardiser afin de n’obtenir que sa direction indépendamment de sa longueur. Le vecteur résultant de cette opération est appelé vecteur unitaire. Il s’écri de la manière suivante :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalization.gif"></br>
</p>

Soit le vecteur A(15, 20). Quel le vecteur û correspondant au vecteur unitaire de A

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalization.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalizationx.gif"></br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalizationy.gif"></br>
</p>

Soit avec p5js :
```
var A = createVector(15, 20);
var U = A.copy().normalize(A);
```
