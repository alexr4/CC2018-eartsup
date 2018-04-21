
# Déplacement Simple
![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/sim0-1.gif)

Les systèmes de particules sont des systèmes graphiques récurrents dans le milieu des arts graphique, que ce soit comme système graphique pur ou en tant que simulation d’éléments tels que de la fumée, des explosions ou de la poussière. D’un point de vue plus conceptuel, une particule est un élément évoluant dans un espace à travers plusieurs comportements tels que le déplacement, le rebond, la sensibilité à la gravité… À cet élément nous pourrons par la suite attacher des visuels, des animations ou des formes afin de donner vie à notre système.

![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/simulation_00.jpg)
## Introduction au mouvement
Nous l’avons vu une particule est caractérisée par divers comportements, son principal comportement étant le déplacement dans l’espace. Le déplacement d’un élément dans un espace 2D se caractérise par une évolution, frame par frame de sa position x et y. Dans un espace 2D nous pouvons le symboliser de la manière suivante :
![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/simulation_01.jpg)

Soit un point P caractérisé par une position ```x``` et ```y``` dans un espace cartésien.
Soit une vitesse de x ```speedX``` et une vitesse de y ```speedY```

À chaque frame nous incrémentons respectivement les valeurs x et y de leurs vitesses speed x et speed y.

Nous aurons donc besoin deux plusieurs variables pour créer ce déplacement.
Dans un premier temps deux variables x et y qui enregistreront la position de l’élément. Ceci nous permettra donc de dessiner l'élement à sa position mais aussi de pouvoir modifier et utiliser ces informations dans notre programme.

Nous aurons aussi besoin de deux variables qui viendront modifier les positions enregistrés pour que notre particule ce déplace.

Soit dans notre programme P5JS :
```
var x;
var y;
var speedX;
var speedY;

function update(){
  x += speedX;
  y += speedY;
}
```
Par cette méthode nous avons donc créé un comportement de déplacement qu’il nous suffira d’appeler dans la boucle de notre programme afin de mettre à jour la position de notre élément.

Nous avons dans cet exemple créer une function ```update()``` qui nous sers à modifier la position par d'autre valeurs. Le nom de cette fonction est créer par convention, en effet nous retrouverons ce nom dans la plupart des programmes tels que Unity3D, Unreal... Elle intervient avant le dessin de la forme. Dans notre programme, nous appelerons cette fonction au sein de la fonction ```draw()```.
Comme sont nom l'indique cette function update ou "de mise à jours" permet de faire toutes les modifications dont nous avons besoin sur nos élements. Nous les déssinerons ensuite grâce à la function ```draw()```.
De cette manière nous obtiendrons un code plus lisible.

Voici ce qui se passe si nous écrivons la totalité de notre code :

```
var x;
var y;
var speedX;
var speedY;

function setup(){
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  speedX = 0.5;
  speedY = 0.25;
}

function draw(){
  background(127);
  update();

  fill(255);
  stroke(0);
  ellipse(x, y, 100, 100);
}

function update(){
  x += speedX;
  y += speedY;
}
```

Vous pouvez voir que nous désinons notre élement au centre de notre scene dans le ```setup()```, nous initialiseront aussi les variables qui viendrons modifier notre position.

Ensuite nous appelons la function ```update()``` dans dans le ```draw()``` pour modifier la position et nous dessinerons notre ellipse.

Dans l’exemple ci-dessus nous avons réalisé un déplacement linéaire, c’est-à-dire un comportement où la position s’incrémente de manière uniforme selon une vitesse constante. Il est également possible de mettre à jour la position à travers un comportement plus aléatoire, qu’il soit chaotique ou doux. Pour se faire nous pouvons utiliser l’aléatoire brownien ou perlin vu dans les précédents cours.

```
//déplacement aléatoire chaotique de 1 pixel en x et 1
function update(){
  speedX = random(-1, 1);
  speedY = random(-1, 1);
  x += speedX;
  y += speedY;
}

//déplacement aléatoire doux de 1 pixel en x et y
function update(){
  speedX = -1 + noise(frameCount * 0.15) * 2;
  speedY = -1 + noise(frameCount * 0.125) * 2;
  x += speedX;
  y += speedY;
}
```

## Création de comportements
Dans l’exemple ci-dessus nous avons écrit notre déplacement sous la forme d’une fonction que nous avons par la suite appelée dans notre boucle ```draw()```. Nous avons créé ce que l’on appelle un comportement : celui de se mouvoir. Nous pouvons ajouter divers comportements à notre particule tel que le fait de grossir ou de se réduire.  

L’un des comportements les plus utilisés est celui de la limitation de la particule à l’espace de la scène par rebonds. Cette fonction décrit le comportement qu’aura notre particule lorsque celle-ci atteindra les limites de la scène. Dans ce cas celle-ci rebondira, c’est-à-dire ira dans le sens inverse. Pour ce faire, lorsque cette dernière atteint les limites de la scène nous inversons la vitesse en ```x``` ou ```y``` en fonction de la limite atteinte.

![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/simulation_03.jpg)

```
function checkEdges(){
  if(x < 0 || x > width){
    speedX *= -1;
  }
  if(y < 0 || y > height){
    speedY *= -1;
  }
}
```

Nous utilisons donc une fonction que nous appelerons ```checkEdges``` pour vérifier que notre particule soit à l'intérieur de la scène. Si celle-ci dépasse les bordures, nous multiplierons la variable de vitesse par **-1** ce qui permettra de faire partir la particule dans l'autre sens et donc "rebondir".
Si nous rajoutons cette fonction à l’exemple précédent en écrivant son appel dans la fonction ```draw()``` nous verrons que notre cercle rebondit sur les bords de notre scène. Nous remarquons aussi que le rebondissement intervient une fois que le centre du cercle est au bord et non pas les bords du cercle. Cela s'explique par le fait que nous comparons les position ```x``` et ```y``` de l'ellipse, soit son centre.
Pour que le comportement se déclenche lorsque le bord du cercle rencontre le bord de la scène il faudra rajouter le rayon du cercle à  notre calcul  soit :

```
var x;
var y;
var speedX;
var speedY;
var rayon;

function setup(){
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  speedX = 2;
  speedY = 3;
  rayon = 50;
}

function draw(){
  background(127);
  update();
	checkEdges();

  fill(255);
  stroke(0);
  ellipse(x, y, rayon*2, rayon*2);
}

function update(){
  x += speedX;
  y += speedY;
}

function checkEdges(){
  if(x-rayon < 0 || x+rayon > width){
    speedX *= -1;
  }
  if(y-rayon < 0 || y+rayon > height){
    speedY *= -1;
  }
}
```

Maintenant que nous créé les deux premier comportement ```update()``` et ```checkEdges()``` permettant de déplacer et faire rebondir la particule, nous allons voir comment effectuer cette action avec un nombre **X** de particules.

## Variable et objets

Le javascript est un langage non typé, à ce titre tous les élement sont des variables ```var```, ainsi cette variable pourra contenir un chiffre, un caractère, un texte ou un tableaux contenant plusieurs chiffres mais également un objet contenant d'autre variables et fonctions. Nous utiliserons donc cette spécificité pour créer des objets "variable".

### Les Objets (Classes)

Si nous avons vu comment réaliser des comportements simples nous ignorons toujours comment l’appliquer à un lot d’éléments. Pour ce faire nous allons utiliser une méthode : la création de classe. Une classe est un modèle de description d’un objet.

Un objet est directement inspiré du monde réel. En effet nous sommes entouré d’objets et chacun de ces objets a des propriétés propres. Par exemple nous avons les objets « téléphones ». Chacun de ses objets « téléphones » sont définis par le fait qu’ils ont tous des variables communes telle qu'une taille, une couleur ou encore une marque. Ces objets on également des fonctions communes tel que le fait de pouvoir passer des communications vocales par le biais d’un réseau téléphonique ou encore envoyer des messages écrits. Mais ils possèdent aussi des variables qui leur sont propre comme le fait d’être tactile ou pas, d’avoir des poids et des tailles qui diffèrent… Bref nos téléphones sont des objets appartenant à une même classe, la classe « Téléphone ».

Ce paradigme de developpement est appelé **programmation orientée objet** _Object Oriented Programming (OOP)_

Nous utilsons donc une classe afin de créer un modèle que nos particules utiliseront, ce modèle permettra à chaque particule d'avoir les mêmes "comportements", mais chacune aura des attributs (variables) propre. Ainsi même si chaque particule partagera le même modèle chaque particule aura une position différente, une taille différente, une couleur différente, une vitesse différente... si le modèle le décrit.

En javascript les classes prennent des syntaxes particulières. En effet, javascript étant un langage non typé et prototype il permet de créer de différente manière les classe. Ici nous verrons la déclarartion de classe encapsulé.Une classe encapsulé est un déclaration de fonctions décrivant notre objet à l'aide de variables et fonctions propre

La classe prendra la forme suivante :

```
var nomDeLaClass = function(param1, parma2){
    this.variable1 = valeur;

    this.comportement1 = function(){

    };
}
```

Nous noterons différentes observations :  

1.  Une classe JS ne possède pas de constructeur comme dans les langages typés tel que JAVA, C#, C++... À noter que ES6 permet l'utilisation de type, ainsi nous pourrons retrouver des déclarations proches des langages typé. Nous n'utilserons pas les types ici.
2.  L’ensemble des fonctions et variables sont désignées par l’indicateur **_this._** Permettant d’indiquer à notre à notre programme que cette variable appartient à cette classe.

Ainsi la **variable1** existera pour toutes les particules mais sa valeurs pourra changer pour chacune d'elle.


La création d’un objet dans le programme se fera par la suite de la manière suivante :
```
var objet;

function setup(){
  createCanvas(640, 320);
  var objet= new nomDeLaClass(width/2, height/2);
}
```

Ainsi l’élément **objet** a été créer en utilisant le modèle créé précédemment. Et peut donc utiliser toutes les variables et fonctions créé par le modèle tout en ayant des valeurs différentes.

Dans le cas de notre programme nous pouvons alors réaliser la classe particule regroupant nos comportements précédents de la manière suivante :

```
var Particle = function(x_, y_, radius_){
  this.speedX = random(-2, 2);
  this.speedY = random(-2, 2);
  this.radius = radius_;
  this.x = x_;
  this.y = y_;

  this.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }

  this.display = function(){
  	ellipse(this.x, this.y, this.radius, this.radius);
  }

  this.checkEdges = function(){
    if(this.x-this.radius/2 <= 0 || this.x+this.radius/2 >= width){
      this.speedX *= -1;
    }
    if(this.y-this.radius/2 <= 0 || this.y+this.radius/2 >= height){
      this.speedY *= -1;
    }
  }

}
```

L'exemple précédent est donc une classe **Particle**, celle-ci peut donc devenir un modèle pour les élements que nous souhaitons ajouter sur notre scène. Ils auront donc accès aux même variables bien que leurs valeurs soient uniquse à chacun d'eux et aux mêmes fonctions "comportement".

Une fois notre classe créé nous devons ensuite en créer plusieurs sur la scène. Afin d’instancier plusieurs objets nous utiliserons un tableau de la manière suivante :

```
var particleList = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i<30; i++){
    var p =  new Particle (width/2, height/2, 15)
    particleList.push(p);
  }
}
```
Nous avons donc créé 30 éléments ayant pour modèle la classe **Particule**. Tous nos élément ont pour position de départ le centre de notre scène ```width/2, height/2``` ainsi qu'un rayon de 5px.
Nos éléments une fois créés sont ajoutés à un tableaux ce qui nous permettra de les atteindre dans le programme.

Enfin nous utiliserons une boucle ```for()``` dans notre ```draw()``` afin de mettre à jour les comportements de nos particules et les afficher.

```
function draw(){
  background(127);
  for(var i=0; i<particleList .length; i++){
    var p= particleList[i];
    p.checkEdges();
    p.update();
   	p.display();
  }
}
```

### Collision entre éléments

Tous comme il est possible de vérifier la collision avec le bord de l'écran, il nous est possible de vérifier si les particules se rentrent l'une dans l'autre. Pour ce faire nous n'avons qu'à ajouter une function à notre **classe**

```
  this.checkCollision = function(ArrayPart, index){
  	for(var i = 0; i<ArrayPart.length;i++){
      if(i != index){
        var dx = this.x - ArrayPart[i].x; //longueur c en x
        var dy = this.y - ArrayPart[i].y; //longueur c en y
        var dxCube = dx * dx;
        var dyCube = dy * dy;
        var dist = sqrt(dxCube + dyCube);
        if(dist < this.radius + ArrayPart[i].radius){
        	this.speedY*=-1;
          this.speedX*=-1;
        }
      }
    }
  }
```

Ainsi cette fonction aura besoin du tableau contenant toutes les particules ainsi que de l'index de la particule en cours pour agir.
Cette fonction vérifie la distance entre notre particule et toute les autres particules du tableau puis vérifie si celle-ci est inférieur au rayon. Si c'est le cas, les particules parte dans l'autre sens.
Pour ce faire nous utiliseront calculons la distance entre deux points à l'aide d'une fonction trigonométrique.

#### Calculer la distance entre deux points
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

### Les Vecteurs

En mathématiques, en particulier en géométrie euclidienne, un vecteur est un objet géométrique possédant une magnitude (longueur) et une direction. Un vecteur est généralement représenté par une flèche pointant une direction. Un vecteur permet de stocker des coordonnée X,Y et Z. P5js permet d'utiliser des vecteurs ainsi que de nombreuses fonctions permetant de simplifier leur opérartions. Dans le prochain chapitre nous verrons comment utiliser des vecteurs afin de créer un premier moteur physique.

### Collision en vecteur

Voici donc à quoi ressemblera notre code si ont utilisent les **Vecteur** :
````
var particleList = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i<10; i++){
    var p =  new Particle (random(0,width), random(0,height), 50)
    particleList.push(p);
  }
}

function draw(){
  background(127);
  for(var i=0; i<particleList .length; i++){
    var p= particleList[i];
    p.checkEdges();
    p.checkCollision(particleList,i);
    p.update();
   	p.display();
  }
}



var Particle = function(x_, y_, radius_){
  this.speedX = random(-2, 2);
  this.speedY = random(-2, 2);
  this.radius = radius_;
  this.position = createVector(x_,y_);

  this.update = function(){
    this.position.x += this.speedX;
    this.position.y += this.speedY;
  }
  this.display = function(){
  	ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }

  this.checkEdges = function(){
    if(this.position.x-this.radius/2 <= 0 || this.position.x+this.radius/2 >= width){
      this.speedX *= -1;
    }
    if(this.position.y-this.radius/2 <= 0 || this.position.y+this.radius/2 >= height){
      this.speedY *= -1;
    }
  }
  this.checkCollision = function(ArrayPart,index){
  	for(let i = 0; i<ArrayPart.length;i++){
      let distance = this.position.dist(ArrayPart[i].position);
      if(distance < this.radius && index!=i){
      	this.speedY*=-1;
        this.speedX*=-1;
      }
    }
  }
}
````

## Easing
Lorsque qu'on objet chute, son mouvement n'est pas linéaire et ce dernier effectue une acceleration. Si cette objet rebondi, de même il effectuera une deceleration lors de son rebonds. Ces variations de vitesses sont définis comme un **easing**. C'est ce dernier qui rend le mouvement d'un objet plus réel.

En animation le **easing** — appelé spacing en animation — est la composante clée avec le **timing** permettant de créer un mouvement.
* Le **timing** est le temps d'animation. Par exemple, le temps que mettra un objet à parcourir une distance.
* Le **spacing** — appelé easing en programmation — correspond à l'acceleration dans le temps. Par exemple, une balle qui chute en 2 secondes aura une acceleration de mouvement, c'est à dire que cette dernière semblera rester plus longtemps à la position de départ avant de chuter et atteindre le sol. À l'inverse, lors du rebonds cette dernière semblera decélerer, c'est à dire rester plus longtemps dans les airs, en suspension à la fin du rebond, avant de retomber.

Vous pouvez retrouver les bases de l'animation sur les vidéo Ted Ed suivante :
[![TED Education :Les bases de l'animation : L'art du timing et de l'espacement ](http://img.youtube.com/vi/KRVhtMxQWRs/0.jpg)](http://www.youtube.com/watch?v=KRVhtMxQWRs)

En programmation les méthodes de easing consistent en un lot de différents calculs permettant d'adoucir une valeur, par exemple notre déplacement. Il s'agit donc de faire varier l'eacceleration d'un élément en fonction du temps ou de la distance à parcourir.

Dans l'exemple suivante nous allons mettre en place deux fonctions de easing simple : une acceleration et un deceleration. Pour cela nous allons reprendre notre class particule et crééer une nouvelle fonction permettant de modifiant la vitesse de X et Y en fonction de la distance séparant la particule d'une cible à atteindre, d'un timing et d'un spacing.

L'agorithme peut être déccomposé de la manière suivante :
```
var dx = target - position;
var vitesse = (dx * easing) * timing;
```

Où **dx** est la distance séparant la particule de sa cible, **easing** est la valeur de easing de l'animation et **timing** le temps de l'animation. Dans le cas de notre particule nous pourrons l'écrire de la manière suivante :

```
this.goTo = function(targetX_, targetY_, easing_, timing_, temps_){
  var timing = (temps_ % timing_) / timing_;

  var dx = targetX_ - this.x;
  var dy = targetY_ - this.y;
  this.speedX = (dx * easing_) * timing;
  this.speedY = (dy * easing_) * timing;
}
```
Ici nous envoyons en paramètres une position cible ```targetX````et ```targetY```, une valeur de ```easing``` **supérieur à 1.0 pour une acceleration et decelaration et inférieur à 1.0 pour une déceleration**; un temps maximum d'animation et le temps écoulé de l'animation.
La ligne ```var timing = (temps_ % timing_) / timing_;``` permet alors de calculer la temps normalisé de l'animation.

L'exemple ci-dessus n'est qu'un exemple simple de courbe de easing mais il existe de nombreuses courbes de easing différente. Robert Penner, qui est l'un des pionner en terme d'équation de easing explique sont approche de manière assez simple [ici](http://upshots.org/actionscript/jsas-understanding-easing)
![enter image description here](http://78.media.tumblr.com/5944bcf4f7fe9c0c99f7a593f233731a/tumblr_mj7bx09MDo1s5nl47o2_r1_500.gif)

Il n'est cependant pas necessaire d'implémenter des fonction de easing. Nous pouvons facilement utiliser des librairie telle que [JQuery](https://jquery.com/) ou [TweenMax](https://greensock.com/tweenmax).
Vous pouvez également utiliser le snippet de cours **_easingFunction_** vous fournissant un lot de fonction de easing normalisées. Vous trouverez ce fichier sur le repository GitHub suivant : [https://github.com/alexr4/easingFunction](https://github.com/alexr4/easingFunction)
Vous pouvez également utiliser le lien CDNS suivant pour l'ajouter dynamiquement à votre projet :
[https://cdn.rawgit.com/alexr4/easingFunction/master/easing.js](https://cdn.rawgit.com/alexr4/easingFunction/master/easing.js)

Télécharger le fichier et ajouter le dans votre dossier de travail au dessus de votre sketch. Créer ensuite un lien vers celui-ci dans votre fichier html comme vous l'avez fait pour le fichier **sketch**

```<script src="./js/easing.js">```

En important le fichier de cette façon vous avez maintenant accès à toute les functions directement dans votre code.

```
function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	fill(255)
	noStroke();
	var tempsMax = 4000;
	var timer = (millis() % tempsMax) / tempsMax;

	var begin = 40;
	var end = width - begin * 2;
	var offsety = 20;
	var lx = begin + timer * end;
	ellipse(lx, offsety, 10, 10);

	var inQuadx = begin + inQuad(timer) * end;
	ellipse(inQuadx, offsety * 2, 10, 10);

	var outQuadx = begin + outQuad(timer) * end;
	ellipse(outQuadx, offsety * 3, 10, 10);

	var inoutQuadx = begin + inoutQuad(timer) * end;
	ellipse(inoutQuadx, offsety * 4, 10, 10);


	var outExpx = begin + outExp(timer) * end;
	ellipse(outExpx, offsety * 5, 10, 10);

	colorMode(HSB);
	var hueBegin = 100;
	var hueEnd = 100;
	var hue = hueBegin + outCirc(timer) * hueEnd;
	var size = outQuintic(timer) * 200;
	fill(hue, 100, 100)
	ellipse(width/2, height/2, size, size);
 }
```

Ces fonctions de easing marchent avec des valeurs de temps normalisés. Une valeur normalisée est une valeurs ramenée à un rang de **0.0 à 1.0**.
Ainsi en temps normalisé **0.0 =  le début de notre animation** et **1.0 = la fin de notre animation**.

```
	var tempsMax = 4000;
	var timer = (millis() % tempsMax) / tempsMax;
```
Ainsi dans ce code nous commençons par donner le temps de notre animation, ici 4 secondes.
La deuxième variable est la valeur qui sera envoyée dans les fonctions de easing. Le calcul présent convertie le temps en temps normalisé. Ainsi si ```millis()``` qui nous donne le temps en milliseconde depuis le début de notre sketch = 2000 et que le temps maximum inscrit plutôt = 4000 alors le temps normalisé sera de 0.5 car nous somme à la moitié de l'animation (4000-2000 = 2000).

Pour normaliser un temps nous utiliseront cette formule : ```(millis() % tempsMax) / tempsMax;```

```
	var begin = 40;
	var end = width - begin * 2;
	var offsety = 20;
```
Dans la deuxième partie nous choisissons la position de début, la position de fin et l'interval en y (position vertical).

```
	var inQuadx = begin + inQuad(timer) * end;
	ellipse(inQuadx, offsety * 2, 10, 10);
```

Pour finir nous utilisons les fonctions de easing, dans cette exemple la fonction inQuad.
Pour avoir la position nous utiliserons donc la position de départ + la position calculée par la fonction de easing * la position de fin.

Nous utiliseront ensuite le résultat de notre calcul pour déplacer notre ellipse sur l'axe **X**.
