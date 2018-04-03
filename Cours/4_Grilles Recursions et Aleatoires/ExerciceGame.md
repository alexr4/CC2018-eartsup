# Exercice :

À partir des éléments vue en cours, réaliser un mini jeu autour de la grille. Ce dernier pourra s'inspirer de l'exemple du cours (the maze) ou se baser sur un autre gameplay (jeu de la taupe, enigma, puzzle...). Pour cela vous utiliserez l'ensemble des connaissances apprises en cours et les mettrez en application dans votre jeu.

Votre travail devra faire preuve d'un sens graphique affiné. Il se composera des contraintes suivantes :

* Vous utiliserez la nomenclature developpé pour le cours en y incluant :
* * La date de l'exercice
* * Votre prénom + nom
* * Le nom de votre jeu
* * Les consignes de l'exercice
* * Les consignes de votre jeu
* Votre jeu se composera d'un niveau de difficulté. Vous pourrez allez plus loin et en proposer 3
* Le gameplay passera par des interaction clavier et/ou souris
* Votre jeu devra reprendre un des trois grands thèmes abordés en cours : **grille cartésienne, grille polaire ou récursion**.
* Votre jeu fera preuve d'un sens graphique affiné.

# Trucs et astuces :
Afin de vous aider dans votre production voici quelques algroithmes utiles.

## Mini compteur
Il est possible de réaliser un compteur simple par l'utilisation d'un simple modulo (%) et de la méthode ```millis()```.

Le modulo % est un opérateur permetant de calculer le reste d'une division. Ainsi pour la l'opération ```2%3``` le resultat sera ````1```
Lorsque nous effectuons un modulo sur un suite de nombre E divisée par une certain nombre X nous obtenons un résultat intéressant. En effet le modulo nous renverra une suite de résultat se répétant en fonction du dénominateur (diviseur). Ainsi nous obtenons les résultats suivant :

```
→ Soit une suite de nombre allant de 0 à 5 en incrémentant de 1
→ Soit un dénominateur X
Si X = 2
  0%2 = 0
  1%1 = 1
  2%2 = 0
  3%2 = 1
  4%2 = 0
  …
Si X = 3
  0%3 = 0
  1%3 = 1
  2%3 = 2
  3%3 = 0
  4%3 = 1
  5%3 = 2
  ...
Si X = 4
  0%4 = 0
  1%4 = 1
  2%4 = 2
  3%4 = 3
  4%4 = 0
  5%4 = 1
  6%4 = 2
  7%4 = 3
  ...
```

La méthode ```millis()```, quant à elle, permet de renvoyer les millisecondes passées depuis le lancement du programme. Son resultat est un nombre entier.
1000 millisecondes est égale à 1 seconde. Nous pouvons donc facilement compter un certains nombre de secondes en boucle dans nbotre programme par l'utilisation du modulo et de la méthode ```millis()```.

Ainsi si l'on souhaite compter en boucle toute les 4 secondes nous écrirons :

```
var tempsMax = 4;
var temps = millis() / 1000; //on passe les millisecondes au rang de secondes
var boucleSeconde = temps % tempsMax;
```

Il est également possible de compter le nombre de boucle passée. Pour ce faire nous regardons si la valeur de ```boucleSeconde``` est égale à 0, soit le départ d'une nouvelle boucle, et nous incrémentons un compteur de boucles passées. Nous utiliserons également une valeur boolean afin de n'incrémenter notre compteur qu'une fois durant la première seconde de chaque boucle :

```
var count = 0;
var counted = false;

if(boucleSeconde == 0){
  if(counted == false){
    count ++;
    counted = true;
  }
}else{
  counted = false;
}
```

## Calculer la distance entre deux points
Pour calculer la distance entre deux points ```A``` et ```B``` il suffit de calculer l'hypothénuse du triangle ```ABC``` où ```C.x = B.x``` et ```C.y = A.y```

![Rapport trigonométrique](http://arivaux.com/leliengraphique/wp-content/uploads/2013/03/Capture-d%E2%80%99%C3%A9cran-2013-03-17-%C3%A0-18.24.47.png)

Nous pourrons alors utiliser le théorème de pythagore pour calculer la distance AB. En effet selon le théorème de Pythagore la taille de l'hypothénuse est donnée par la formule : ```c = √(a * a + b * b)``` soit, avec p5 js ```AB = sqrt(BC * BC + AC * AC)```

```
var Ax = 10;
var Ay = 20;
var Bx = 100;
var By = 200;

var dx = x1 - x2; //longueur c en x
var dy = y1 - y2; //longueur c en y
var dxCube = dx * dx;
var dyCube = dy * dy;
var dist = sqrt(dxCube + dyCube);
```

## Collisions
Detecter la colision d'un élément avec un autre est souvent très utile, dans pour un jeu, une animation qu'un interface. Les deux exemples suivant présentent la manière de detecter une collision avec une ellipse ou un rectangle.

### Collision avec une ellipse
Afin de detecter une collision d'un point ```p``` avec un ellipse ```e``` il suffit de calculer la distance séparant les deux éléments. Si celle-ci est inférieur au rayon de l'ellipse avec le point ```p``` sera définie comme à l'intérieur de l'ellipse.

```
var ex = width/2;
var ey = height/2;
var rayon = 100;
var px = mouseX;
var py = mouseY;

var dx = ex - px; //longueur c en x - voir Calculer la distance entre deux points
var dy = ey - py; //longueur c en y - voir Calculer la distance entre deux points
var dxCube = dx * dx;
var dyCube = dy * dy;
var dist = sqrt(dxCube + dyCube);

if(dist <= rayon){
  //la souris se trouve dans l'ellipse
}else{
  //la souris est en dehors de l'ellipse
}
```

### Collision avec un rectangle
Afin de detecter une collision d'un point ```p``` avec un rectangle ```r``` il suffit de vérifier si les coordonnées du point ```p``` se situe entre la position xy du rectangle et sa taille; soit ses limites. Ainsi nous aurons :

```
var rx = 10;
var ry = 20;
var rw = 100;
var rh = 40;
var px = mouseX;
var py = mouseY;

//pour un rectangle dont le point d'ancrage est situé en haute à gauche :
if(px >= rx && px <= rx + rw && py >= ry && py <= ry + rh){
  //la souris se trouve dans le rectangle
}

//pour un rectangle dont le point d'ancrage est situé au centre de la forme :
if(px >= rx - rw/2 && px <= rx + rw/2 && py >= ry - rh/2 && py <= ry + rh/2){
  //la souris se trouve dans le rectangle
}
```

# Références graphiques :
![Ash Thorp, Creative Director](https://www.arivaux.com/preprod/cc-2018/AshThorp.jpg)
