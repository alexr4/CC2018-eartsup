
# Déplacement Simple
![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/sim0-1.gif)

Les systèmes de particules sont des systèmes graphiques récurrents dans le milieu des arts graphique, que ce soit comme système graphique pur ou en tant que simulation d’éléments tels que de la fumée, des explosions ou de la poussière. D’un point de vue conceptuel, une particule est un élément évoluant dans un espace à travers plusieurs comportements tels que le déplacement, le rebond, la sensibilité à la gravité… À cet élément nous pourrons par la suite attacher des visuels ou des formes afin de donner vie à notre système.

![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/simulation_00.jpg)
### Introduction au mouvement
Nous l’avons vu une particule est caractérisée par divers comportements, son principal comportement étant le déplacement dans l’espace. Le déplacement d’un élément dans un espace 2D se caractérise par une évolution, frame par frame de sa position x et y. Dans un espace 2D nous pouvons le symboliser de la manière suivante :
![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/simulation_01.jpg)

Soit un point P caractérisé par une position x et y
Soit une vitesse de x speedX et une vitesse de y speedY

À chaque frame nous incrémentons respectivement les valeurs x et y de leur vitesse speed x et speed y.

Nous aurons donc besoin deux plusieurs variables pour créer ce déplacement.
Dans un premier temps deux variables x et y qui enregistrerons la position de l’élément. Ceci nous permettra donc de dessiner l'élement à sa position mais aussi de pouvoir modifier et utiliser ces informations dans notre programme.

Nous aurons aussi besoin de deux variables qui viendront modifier les position enregistré pour que notre particule ce déplace.

Soit dans notre programme P5JS :
````
var x;
var y;
var speedX;
var speedY;

function update(){
  x += speedX;
  y += speedY;
}
 ````
Par cette méthode nous avons donc créé un comportement de déplacement qu’il nous suffira d’appeler dans la boucle de notre programme afin de mettre à jour la position de notre élément.

Nous avons dans cet exemple créer une function **update()** qui nous sers à modifier la position par d'autre valeurs. Cette variable est créer par convention dans la plupart des programmes, elle intervient généralement avant la function **draw()** dans les languages de programmation l'incorporant par défaut (C++, C#...) et il faudra d'appeler au début de notre function **draw()** dans les langage de programmation qui ne l'aurai pas.
Comme sont nom l'indique cette function update ou "de mise à jours" permet de faire toute les modifications dont nous avons besoin sur nos élement. Nous les déssinerons ensuite grâce à la function draw().
Cette façon de faire nous permet d'avoir un code plus lisible et d'optimiser notre code.

Voici ce qui se passe si nous écrivons la totalité de notre code :
````
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
````

Vous pouvez voir que nous désinons notre élement au centre de notre scene dans le **setup()**, nous initialiseront aussi les variables qui viendrons modifier notre position.

Ensuite nous appeler la function update() dans dans le draw() pour modifier la position et nous dessinerons notre ellipse.

Dans l’exemple ci-dessus nous avons réalisé un déplacement linéaire, c’est-à-dire un comportement où la position s’incrémente de manière uniforme selon une vitesse constante. Il est également possible de mettre à jour la position à travers un comportement plus aléatoire, qu’il soit chaotique ou doux. Pour se faire nous pouvons utiliser l’aléatoire brownien ou perlin vu dans les précédents cours.

````
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
````

### **Création de comportements**
Dans l’exemple ci-dessus nous avons écrit notre déplacement sous la forme d’une fonction que nous avons par la suite appelée dans notre boucle **draw()**. Nous avons créé ce que l’on appelle un comportement : celui de se mouvoir. Nous pouvons ajouter divers comportements à notre particule tels que le fait de grossir ou de se réduire.  

L’un des comportements les plus utilisés est celui de la limitation de la particule à l’espace de la scène par rebond. Cette fonction décrit le comportement qu’aura notre particule lorsque celle-ci atteint les limites de la scène. Dans ce cas celle-ci rebondira, c’est-à-dire ira dans le sens inverse. Pour ce faire, lorsque cette dernière atteint les limites de la scène nous inversons la vitesse en x ou y.

![enter image description here](http://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/simulation_03.jpg)

````
function checkEdges(){
  if(x < 0 || x > width){
    speedX *= -1;
  }
  if(y < 0 || y > height){
    speedY *= -1;
  }
}
````

Nous utiliseront donc une function appelée checkEdges pour vérifier que notre particule sois à l'intérieur de la scène. S'il dépasse les bordures, nous multiplierons la variable modifiant la valeurs de position par **-1** ce qui permettra de faire partir la particule dans l'autre sens et donc "rebondir".
Si nous rajoutons cette function à l’exemple précédent en écrivant sont appel dans l'**update** nous verrons que notre cercle rebondit sur les bords de notre scène. Nous remarquerons aussi que le rebondissement intervient une fois que le centre du cercle est au bord et non pas les bords du cercle.
Pour que le comportement ce déclenche lorsque les bords du cercle rencontre le bord de la scène il faudra rajouter le rayon du cercle à  notre calcul :
````
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

  fill(255);
  stroke(0);
  ellipse(x, y, rayon*2, rayon*2);
}

function update(){
  x += speedX;
  y += speedY;
	checkEdges();
}

function checkEdges(){
  if(x-rayon < 0 || x+rayon > width){
    speedX *= -1;
  }
  if(y-rayon < 0 || y+rayon > height){
    speedY *= -1;
  }
}
````

Maintenant que nous avons vu comment faire ce déplacer et rebondir une particule, nous allons voir comment effectuer cette action avec un nombre X de particule.

### Variable et objets

Comme nous l'avons vu, le javascript est un langage non typé, à ce titre tous les élement sont des variables **var**, ainsi cette variable pourra contenir un chiffre, comme un caractère, comme un texte, comme un tableaux contenant plusieurs chiffres mais aussi un objet contenant d'autre variable et function.
Nous utiliserons donc cette spécificité pour créer des objets "variable".

### **** Algorithm tips : les Objets (Classes) ****

Si nous avons vu comment réaliser des comportements simples nous ignorons toujours comment l’appliquer à un lot d’éléments. Pour ce faire nous allons utiliser un méthode : la création de classe. Une classe est un modèle de description d’un objet.

Celle-ci nous permet de créer un modèle que nos particules utiliseront, ce modèle permettra à chaque particules d'avoir les mêmes "comportement" et possibilité, mais chacune aura des attribut (variable) propre. Ainsi même si chaque particule partagera le même modèle chaque particule aura une position différentes, une taille différentes, une couleurs différentes, une vitesse différentes... Bien sur si vous en avez l'envie.

En javascript les classes prennent une syntaxe particulière. En effet, javascript étant un langage non typé il ne dispose d’aucune déclaration de type classe. Ces dernière prendront donc la forme de fonctions imbriquées.

La classe prendra la forme suivante :

````
var nomDeLaClass = function(param1, parma2){
    this.variable1;

    this.comportement1 = function();
}
````

Nous noterons différentes observations :  

1.  Une classe JS ne possède pas de constructeur comme en JAVA
2.  L’ensemble des fonctions et variables sont désignées par l’indicateur **_this._** Permettant d’indiquer à notre à notre programme que cette variable appartient à cette classe.

Ainsi la **variable1** existera pour toute les particules mais sa valeurs pourra changer pour chacune d'elle.


La création d’un objet dans le programme se fera par la suite de la manière suivante :
````
var objet;

function setup(){
  createCanvas(640, 320);
  var objet= new nomDeLaClass(width/2, height/2);
}
````

Ainsi l’élément **objet** à été créer en utilisant le modèle créer précédemment. Et peut donc utiliser toute les variables et function créer par le modèle tout en ayant des valeurs différentes.

Dans le cas de notre programme nous pouvons alors réaliser la classe particule regroupant nos comportements précédents de la manière suivante :
````
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
````

L'exemple précédent est donc une Class Particle, celle-ci peut donc devenir un modèle pour les élements que nous souhaitons ajouter sur notre scène. Ils auront donc accès au même variables bien que leurs valeurs seront unique à chacun deux et au même function "comportement".

Une fois notre classe créer nous devons ensuite en créer plusieurs sur la scène. Afin d’instancier plusieurs objets nous utiliserons un tableau de la manière suivante :

````
var particleList = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i<30; i++){
    var p =  new Particle (width/2, height/2, 15)
    particleList.push(p);
  }
}
````
Nous avons donc créer 30 élément ayant pour modèle la class Particule. Tous nos élément ont pour position de départ le centre de notre scène "width/2, height/2" ainsi qu'un rayon de 5px.
Nos élément une fois créer sont ajouté à un tableaux ce qui nous permettra de les atteindre dans le programme.

Enfin nous utiliserons un boucle for dans notre draw afin de mettre à jour les comportements de nos particules et les afficher

````
function draw(){
  background(127);
  for(var i=0; i<particleList .length; i++){
    var p= particleList[i];
    p.checkEdges();
    p.update();
   	p.display();
  }
}
````

### Collision entre éléments

Tous comme il est possible de tcheck la collision avec le bord de l'écran, il nous est possible de voir si les particules se rentre l'une dans l'autre. Pour ce faire nous n'aurons qu'a rajouter une function à notre **objet**

````
  this.checkCollision = function(ArrayPart,index){
  	for(let i = 0; i<ArrayPart.length;i++){
      let distance = this.position.dist(ArrayPart[i].position);
      if(distance < this.radius && index!=i){
      	this.speedY*=-1;
        this.speedX*=-1;
      }
    }
  }
````

Ainsi cette function aura besoin du tableau contenant toutes les particules ainsi que de l'index de la particule en cours pour agir.
Cette function tcheck la distance entre notre particule et toute les autres particules et vérifie si celle-ci est inférieur au rayon. Si c'est le cas, les particules parte dans l'autre sens.
Pour ce faire nous utiliseront la function **dist()** qui existe avec les **Vector**.

### Les Vector
Un vector permet de stocker des coordonnée X,Y et Z. Ceux-ci viennent avec plein de formule mathématique permettant de simplifier notre code. Les vectors sont la base des systèmes de particules mais nous les verrons dans le prochain chapitres sur le mouvement, pour le moment considéré l'est comme des position.

### Collision en vector

Voici donc à quoi ressemblera notre code si ont utilisent les **Vector** :
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
![enter image description here](http://78.media.tumblr.com/5944bcf4f7fe9c0c99f7a593f233731a/tumblr_mj7bx09MDo1s5nl47o2_r1_500.gif)

Vous avez surement déjà utilisé le easing en animation pour changer la vitesse d'un élément pendant sont déplacement. Nous allons maintenant utiliser les functions de easing pour que le déplacement de nos élements sois moin linéaire.

Vous trouverez à ce lien un fichier comportant un grand nombre de function de easing déjà écrite : https://github.com/alexr4/easingFunction

Télécharger le fichier et ajouter le dans votre dossier de travail au dessus de votre sketch. Créer ensuite un lien vers celui-ci dans votre fichier html comme vous l'avez fait pour le fichier **sketch**

``<script src="./js/easing.js">``

En important le fichier de cette façon vous avez maintenant accès à toute les function directement dans votre code.

````

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	fill(255)
	noStroke();
	let tempsMax = 4000;
	let timer = (millis() % tempsMax) / tempsMax;

	let begin = 40;
	let end = width - begin * 2;
	let offsety = 20;
	let lx = begin + timer * end;
	ellipse(lx, offsety, 10, 10);

	let inQuadx = begin + inQuad(timer) * end;
	ellipse(inQuadx, offsety * 2, 10, 10);

	let outQuadx = begin + outQuad(timer) * end;
	ellipse(outQuadx, offsety * 3, 10, 10);

	let inoutQuadx = begin + inoutQuad(timer) * end;
	ellipse(inoutQuadx, offsety * 4, 10, 10);


	let outExpx = begin + outExp(timer) * end;
	ellipse(outExpx, offsety * 5, 10, 10);

	colorMode(HSB);
	let hueBegin = 100;
	let hueEnd = 100;
	let hue = hueBegin + outCirc(timer) * hueEnd;
	let size = outQuintic(timer) * 200;
	fill(hue, 100, 100)
	ellipse(width/2, height/2, size, size);
 }
````

Les functions de easing marche avec du temps normalisé. Une valeur normalisé est une valeurs entre **0 et 1**.
Ainsi en temps normalisé **0 =  le début de notre animation** et **1 = la fin de notre animation**.

````
	let tempsMax = 4000;
	let timer = (millis() % tempsMax) / tempsMax;
````
Ainsi dans ce code nous commençons par donner le temps de notre animation, ici 4 secondes.
La deuxième variable est la valeur qui sera envoyé dans les functions de easing. Le calcul présent convertie le temps en temps normalisé. Ainsi si ``millis()`` qui nous donne le temps en milliseconde depuis le début de notre sketch = 2000 et que le temps maximum inscrit plutôt = 4000 alors le temps normalisé sera de 0.5 car nous somme à la moitier de l'animation (4000-2000 = 2000).

Pour normalisé un temps nous utiliseront cette formule : ``(millis() % tempsMax) / tempsMax;``

````
	let begin = 40;
	let end = width - begin * 2;
	let offsety = 20;
````
Dans la deuxième partie nous choisissons la position de début, la position de fin et l'interval en y (position vertical).

````
	let inQuadx = begin + inQuad(timer) * end;
	ellipse(inQuadx, offsety * 2, 10, 10);
````

Pour finir nous utilisons les function de easing, dans cette exemple la function inQuad.
Pour avoir la position nous utiliseront donc la position de départ + la position calculé par la function de easing * la position de fin.

Nous utiliseront ensuite le résultat de notre calcule pour déplacer notre ellipse sur l'axe **X**.
