# Grilles, récursions et aléatoires

## Grilles cartésiennes

## Grilles polaires
Nous l’avons vu la grille cartésienne est un élément permettant de réaliser des répétition de motif sur les axes XY que ce soit des frises ou des pavages. Cependant il ne s’agit pas du seul système de coordonnées possible. Parmi les différents systèmes de coordonnées il en est un que nous retrouvons régulièrement dans les arts graphique, le VFX ou les jeux vidéo : le système de coordonnées polaires (voir [cours d'introduction aux formes et dessins](https://alexr4.github.io/CC2018-eartsup/Cours/3_Introduction%20Formes%20et%20Dessins/)).

![Grilles polaires](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/generation_6-1024x768.jpg)

Pour rappel, en géométrie un espace polaire est un espace géométrique à deux dimensions dans lequel les coordonnées d’un point sont définie par une valeur d’angle et une distance (rayon). Ce système de coordonnées et particulière pratique dans la création de systèmes circulaires tels que les pendules, spirales ou autre. Pour réaliser un système polaire il est nécessaire de connaître l’équation nous permettant de positionner un point sur un cercle à partir d’un angle et d’une distance.

![Coordonnées polaires](http://arivaux.com/leliengraphique/wp-content/uploads/2013/03/Capture-d%E2%80%99%C3%A9cran-2013-03-17-%C3%A0-18.31.18.png)

Une fois que nous connaissons l’équation permettant de placer un point sur un cercle nous pouvons facilement réaliser la frise suivante :

![frise polaire](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/generation_7.jpg)

Une frise étant composé d’une répétition de motif nous pouvons la réaliser en utilisant un structure itérative. Nous pouvons définir la frise de la manière suivante :

* Définir l’origine XY du motif
* Définir la distance/rayon depuis l’origine
* Définir le nombre de répétition des motifs
* Pour un nombre i étant égale à 0; Ce nombre i étant toujours inférieur à 8; Et ce nombre s’incrémentant de 1; Pour chacun de ces nombres :
* * Nous définissons un angle pour chacun des motif où ce dernier est égales à 360/nombre d'itération * l'itération actuelle
* * Nous définissons les coordonnées XY du point à l’aide de l’équation :
* * * x = cos(angle)*rayon
* * * y = sin(angle)*rayon
* * Nous dessinons une ellipse

Ce qui nous donneras avec p5js :

```
var X = width/2;
var Y = height/2;
var rayon = 100;
for(var i=0; i<8; i++){
  var ni = i / 8; //on normalise i
  var angle = TWO_PI * ni;
  var ex = X + cos(angle) * rayon;
  var ey = Y + sin(angle) * rayon;
  ellipse(ex, ey, largeur, hauteur);
}
```

Une fois la frise réaliser nous pouvons facilement réaliser une grille polaire (aussi appelé pavage) par l'utilisation d'une répétition de la répétition du motif, soit une double structure itérative :

 ![Grille polaire](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/generation_8.jpg)

* Définir l’origine XY du motif
* Définir le nombre de répétition de frise
* Pour un nombre i étant égale à 0; Ce nombre i étant toujours inférieur à 2; Et ce nombre s’incrémentant de 1;
* * Définir le nombre de répétition des motifs
* * Pour chacun de ces nombres :
* * Nous définissons un rayon égale à la multiplication de l’itération par une certain nombre N
* * Pour un nombre j étant égale à 0; Ce nombre j étant toujours inférieur à 8; Et ce nombre s’incrémentant de 1;  Pour chacun de ces nombres :
* * * Nous définissons un angle pour chacun des motif où ce dernier est égales à 360/nombre d'itération * l'itération actuelle
* * * Nous définissons les coordonnées XY du point à l’aide de l’équation :
* * * * x = X + cos(angle)*rayon
* * * * y = Y + sin(angle)*rayon
* * * Nous dessinons une ellipse

Ce qui nous donneras avec p5js :
```
var X = width/2;
var Y = height/2;
var rayonRef = 100;
for(var i=0; i<2; i++){
  var ni = i / 2; //on normalise i
  var rayon = rayonRef + rayonRef * i;
  for(var j=0; j<8; j++){
    var nj = j / 8; //on normalise j
    var angle = TWO_PI * nj;
    var ex = X + cos(angle) * rayon;
    var ey = Y + sin(angle) * rayon;
    ellipse(ex, ey, largeur, hauteur);
  }
}
```

### Grille polaire uniforme
Si l'exemple ci-dessus nous montre comment réaliser une grille polaire simple on remarque que cette dernière aura rapidement une forme d'étoile. En effet chaque itération de frise ayant le même nombre d'élément, plus le rayon sera grand plus les motifs composant la frise seront espacés, créant ainsi un effet de type _étoile_.

Pour réaliser une grille polaire davantage uniforme il nous faudra alors changer le nombre de motif composant chaque frise de la grille. Plus rayon de la frise sera grande plus le nombre de motif la composant sera grand.
Pour ce faire nous pouvons utilisera la méthode suivante :

* Définir l’origine XY du motif
* Définir le nombre de répétition de frise
* Définir l'espace séparant chaque motif des frises
* Pour un nombre i étant égale à 0; Ce nombre i étant toujours inférieur à 2; Et ce nombre s’incrémentant de 1;
* * Définir le nombre de répétition des motifs étant égale au périmètre du cercle diviser par l'espace séparant chaque motif des frises
* * Nous définissons un rayon égale à la multiplication de l’itération par une certain nombre N
* * Pour un nombre j étant égale à 0; Ce nombre j étant toujours inférieur au nombre de répétition des motifs; Et ce nombre s’incrémentant de 1;  Pour chacun de ces nombres :
* * * Nous définissons un angle pour chacun des motif où ce dernier est égales à 360/nombre d'itération * l'itération actuelle
* * * Nous définissons les coordonnées XY du point à l’aide de l’équation :
* * * * x = X + cos(angle)*rayon
* * * * y = Y + sin(angle)*rayon
* * * Nous dessinons une ellipse

Ici on remarque que le nombre de motifs composant la frise est obtenue en divisant le périmètre du cercle par l'espace séparant ces motif. En géométrie, le périmètre d'un cercle est obtenu par le calcul suivant : ```P = 2 * PI * rayon```.

Ainsi, en programmation notre grille sera définie de la manière suivante :

```
var res = 20.0;
var radius = height /2;
var numberOfInnerCircle = 25;

var ox = width/2;
var oy = height/2;

for(var i=0; i<numberOfInnerCircle; i++){
  var ni = i/numberOfInnerCircle;
  var rad = radius * ni;
  var perimeter = TWO_PI * rad * 2.0;
  var numberOfElement = floor(perimeter / res);

  for(var j=0; j<numberOfElement; j++){
    var theta = (j/numberOfElement) * TWO_PI;
    var x = cos(theta) * rad + ox;
    var y = sin(theta) * rad + oy;
    ellipse(x, y, res * 0.35, res * 0.35);
  }
}
```

Ce qui nous donnera le motif suivant :

![Grille polaire uniforme](https://www.arivaux.com/preprod/cc-2018/GrillePolaireUniforme.png)

## La Récursion

Le principe de la récursion est d'effectuer une action en boucle en appelant une function à l'intérieur d'elle même.

Ainsi un exemple de base serait :


````
void uneFunction(){
 uneFunction();
}
````

Ce code ne génère aucun résultat, mais la function est effectuée en boucle jusqu'à l'arrêt du programme.

Ainsi en appelant une function à l'intérieur d'elle même nous créerons une boucle qui sera possible d'arrêté à l'aide de condition.
L'autre avantage c'est qu'il sera ainsi possible de faire passer des variables pour effectuer des calculs et donc modifier les valeurs à chaque boucle.


````
function setup(){
  drawCircle(width/2,height/2,200);
}

function drawCircle(x, y, radius) {
  ellipse(x, y, radius, radius);
  if(radius > 2) {
    radius *= 0.75f;
    drawCircle(x, y, radius);
  }
}
````

Dans cet exemple la function commence par dessiner un cercle, elle regarde ensuite si le rayon est supérieur à 2px , si c'est le cas la valeur dans la variable rayon est modifié et la function est rappelé pour effectuer une nouvelle fois les mêmes opérations.

Il est vrai que nous pourrions effectuer la même opération avec les bouche **for** ou **while** mais l'intérêt des récursions vient lorsque nous souhaitons créer des subdivisions presque infinies.
Car rien n'empêche la function de s'appeler plus d'une fois à l'intérieur d'elle même. Ainsi une function pourrait lors de son exécution s'appeler 2 fois. Chacune de ces deux fois se rappellerait deux fois ......


![Image of Circle](https://s17.postimg.org/698wfjocf/circle.png)

````
function setup() {
  createCanvas(900, 600);
drawCircle(width/2, height/2, 900);
}

function drawCircle(x, y, radius) {
  noFill();
  ellipse(x, y, radius, radius);
  if(radius > 8) {
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
    drawCircle(x, y + radius/2, radius/2);
    drawCircle(x, y - radius/2, radius/2);
  }
}

````

Dans cet exemple la function est appelée une première fois puis s'appelle quatre fois, chaque appel rappelle 4 fois, etc etc jusqu'a que la condition n’est plus respectée.
À chaque nouvel appel de la function les variables de tailles et de positions sont modifiées pour créer un pattern géométrique.

Un autre exemple appelé Cantor d'après le nom de sont créateur un mathématicien Allemand.


![Image of Cantor](https://s17.postimg.org/hycw3in0v/Fire_Shot_Capture_19_-_-_file_C_Users_maxly_Documents_Cours_J.png)

````
function setup() {
  createCanvas(900, 600);
  cantor(0,0,900);
}
function cantor( x, y, len) {
  if (len >= 1) {
    line(x,y,x+len,y);
    y += 20;
    cantor(x,y,len/3);
    cantor(x+len*2/3,y,len/3);
  }
}
````

### Tree

Un des exemples les plus utilisés pour présenter la récursion est l'arbre.
Voici son code :
![Image of Tree](http://natureofcode.com/book/imgs/chapter08/ch08_exc07.png)


````
// Recursive Tree Processing
// Daniel Shiffman <http://www.shiffman.net>

function setup() {
  createCanvas(400, 300);
  background(255);
  // Start the tree from the bottom of the screen
  translate(width/2, height);
  stroke(0);
  branch(60);
}

function draw() {


}

function branch(len) {
  strokeWeight(2);

  line(0, 0, 0, -len);
  // Move to the end of that line
  translate(0, -len);

  len *= 0.66;
  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (len > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(PI/5);   // Rotate by theta
    branch(len);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-PI/5);
    branch(len);
    pop();
  }
  delay
}
````

Cet exemple utilise la même technique que ceux précédemment présentés. La différence vient du fait qu'a la place de dessiner l'objet à tel ou tel position nous avons besoin d'utiliser les function de transformation pour faire bouger le plan de travail.

Dans un premier temps la fonction est appelée et vient dessiner la base de l'arbre. Nous allons ensuite déplacer le plan de travail pour que le 0,0 se trouve au bout de la branche précédemment créer.
Nous vérifions que la longueur est plus grande que 2px puis nous faisons faire une rotation à notre plan de travail dans un sens avant d'appeler une nouvelle fois la fonction.
Pour créer la branche dans l'autre sens nous recommencerons cette action.
Nous pouvons remarquer que nous utilisons des ``push()`` et ``pop()`` pour que les rotations ne soient prises en compte que par les appels de fonction voulus.

L'appel à la fonction branch ce faisant entre ``push()`` et ``pop()`` ça sera tous les objets dessinés par la fonction qui seront affectés par cette rotation. Ce qui permet de créer les branches de l'arbre.

Maintenant que nous avons créé un arbre symétrique, que se passerait-il si nous rajoutions du random pour que les arbres soient différents.

![Image of tree](https://s17.postimg.org/6d2pvt99b/tree.png)
https://codepen.io/rickyeckhardt/pen/Gkpez

## Aléatoires browniens et perlin
Nous pouvons facilement ajouter une variation graphique à un visuel par l’utilisation d’une valeur pseudo-aléatoire.
En programmation on appel ces valeurs pseudo-aléatoire car elle sont définie par une équation et sont donc prévisible, cependant elles offre une large possibilité de variations. Parmis le différents types d'aléatoires on compte l'aléatoire **browniens** qui offre des valeurs _chaotiques_ et l'aléatoire **perlin** qui offre des valeurs plus _douces_.

### Aléatoire brownien
Le bruit brownien est un aléatoire où les valeurs produites sont réparties de manière totalement aléatoire. Chaque valeur pourra être grandement espacée les une des autres ou totalement proche voir identique. Une répartition brownienne peut être imaginé par ce schema :

![Aléatoire brownien](http://arivaux.com/leliengraphique/wp-content/uploads/2013/03/01_01_aleatoire.jpg)

En javascript il est possible de générer un nombre aléatoire par l'utilisation de la méthode ````Math.random()``` (voir [cours d'introduction sur le javascript](https://alexr4.github.io/CC2018-eartsup/Cours/2_Introduction%20HTML5%20(2-2)/IntroductionJavascript). Cette dernière permet de retourner un nombre décimal (pseudo) aléatoire compris entre 0 et 1. Nous pourrons alors facilement changer le rang de cette valeur par une simple opération arithmétique. Ainsi pour obtenir une valeur comprise entre 50 et 150 nous écrirons :

```
var x = 50 + Math.random() * 100;
```

P5js permet également d'obtenir des valeurs aléatoires sans avoir à réaliser d'opération arithmétique. POur cela nous utiliserons la méthode ````random(v1, v2)```. Cette méthode nous renverra alors un nombre aléatoire compris entre **v1** et **v2**.  Ainsi pour obtenir une valeur comprise entre 50 et 150 nous écrirons :

```
var x = random(50, 150);
```

### Aléatoire perlin
Le bruit perlin est bien différent du bruit brownien tant dans sa syntaxe que dans les valeurs qu’il renvoie. Contrairement au bruit brownien le bruit perlin produit une séquence de valeurs où chaque valeur est proche de la valeur précédente. On obtient donc une répartition harmonieuse de valeurs. Similaire à la notion d’harmoniques en physique, le  bruit perlin est calculé sur plusieurs octaves qui sont traitées par lot pour le résultat final. On peut illustrer le bruit perlin par ce schéma :

![Bruit perlin](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/organique_3.jpg)

Le bruit de perlin a été développé par Ken Perlin en 1985. À cette époque, après avoir travaillé sur les effets spéciaux de Tron pour MAGI en 1981, il cherchait à éviter le look « machinique ». Il commença donc par mettre au point une fonction pseudo-aléatoire de bruit qui remplit les trois dimensions de l’espace, avant d’inventer l’année suivante le premier langage de shading. Ses travaux sur les textures procédurales ont valu à Ken Perlin l’Academy Award for Technical Achievement en 1997.

Ce bruit est très utilisé dans la génération de textures procédurales mais aussi dans les déplacements de particules puisque nous permet d’avoir une harmonie entre les valeurs et donc des sensations d’incrémentation et décrémentation plus douces. Dans sa syntaxe le bruit perlin est bien différent du bruit brownien. Voici comment il se déclare :

```
var n = noise(v1); //pour un bruit à 1 dimension
//ou
var n = noise(v1, v2); //pour un bruit à 2 dimensions
//ou
var n = noise(v1, v2, v3); //pour un bruit à 3 dimensions
```

On remarque de prime abord que là où le bruit brownien accueille deux valeurs entre ses parenthèses (minimum et maximum) le bruit perlin peut en accueillir trois. En effet on dit du bruit perlin qu’il peut être uni, bi ou tridimensionnel. Nous nous attarderons sur le bruit perlin unidimensionnel dans cette partie.

La seconde remarque que nous ferons sur le bruit perlin est qu’il ne nous renverra toujours qu’une seule valeur comprise entre 0 et 1 et celle-ci sera toujours identique. En effet la répartition de bruit perlin est définie par la valeur précédente obtenue. Il faudra donc incrémenter notre valeur puis recalculer notre bruit afin d’obtenir une suite de valeurs réparties de façon harmonieuse.

Pour cela nous allons utiliser une valeur que nous appellerons xInc et qui sera égale à 0. Nous calculerons un bruit à partir de cette valeur puis à la fin de chaque boucle nous l’incrémenterons de 0.01 pour calculer un nouveau bruit à partir de la valeur précédente.

```
var xInc = 0.0;

function draw(){
  var n = noise(xInc);
  xInc += 0.01;
}
```

Nous obtenons donc une suite de valeurs harmonieuses dépendante de la valeur précédente. Cependant nos valeurs restent comprises entre 0 et 1. Pour obtenir nos valeurs entre 50 et 150 il faudra donc effectuer une opération arithmétique qui nous renverra nos valeurs sur une échelle de 50 à 150 tel que :

```
var xInc = 0.0;

function draw(){
  var n = 50 + noise(xInc) * 100;
  xInc += 0.01;
}
```
## Exemples :
* [P5js : Grille polaire uniforme](https://alexr4.github.io/CC2018-eartsup/Cours/4_Grilles%20Recursions%20et%20Aleatoires/PolarGrid)
* [P5js : Bruit brownien](https://alexr4.github.io/CC2018-eartsup/Cours/4_Grilles%20Recursions%20et%20Aleatoires/Random)
* [P5js : Bruit perlin](https://alexr4.github.io/CC2018-eartsup/Cours/4_Grilles%20Recursions%20et%20Aleatoires/PerlinNoise)
* [P5js : Exemple de jeu](https://alexr4.github.io/CC2018-eartsup/Cours/4_Grilles%20Recursions%20et%20Aleatoires/GameExemple)
