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
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AaddBC.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AaddBCx.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AaddBCy.gif"><br>
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
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AsubBC.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AsubBCx.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AsubBCy.gif"><br>
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
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AtimeC.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AtimeCx.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AtimeCy.gif"><br>
</p>
<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AdivC.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AdivCx.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AdivCy.gif"><br>
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
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Amag.gif"><br>
</p>

Soit le vecteur A(15, 20). Quelle est la magnitude m de A?
<p align="center">
<img src="https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-05.jpg"><br>
</p>

Si on observe le vecteur ci-dessus on remarque que ce dernier peut être décrit comme le triangle rectangle ABC dont la longueur du côté opposé à l’angle CBA est a = 20 et  dont la longueur du côté adjacent à l’angle CBA est b = 15. Enfin le côté c correspond à l’hypoténuse du triangle ABC. Or on sait par le théorème de Pythagore que l’hypoténuse est égale à la racine de l’addition du coté opposé au carré par le côté adjacent au carré soit :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AmagCHypo0.gif"><br>
</p>

Nous pouvons alors définir que la magnitude du vecteur A est définie par le calcul suivant

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AmagC.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AmagCHypo.gif"><br>
</p>

Soit avec p5js :
```
var A = createVector(15, 20);
var c = A.mag();
```

### Normalisation d’un vecteur
Normaliser un vecteur signifie ramener sa magnitude à une valeur de 1. Ce calcul permet de standardiser afin de n’obtenir que sa direction indépendamment de sa longueur. Le vecteur résultant de cette opération est appelé vecteur unitaire. Il s’écri de la manière suivante :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalization.gif"><br>
</p>

Soit le vecteur A(15, 20). Quel le vecteur û correspondant au vecteur unitaire de A

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalization.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalizationx.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Anormalizationy.gif"><br>
</p>

Soit avec p5js :
```
var A = createVector(15, 20);
var U = A.copy().normalize(A);
```

## Mouvement : Location + Velocity
Après avoir vu les bases des opérations vectorielles nous pouvons désormais nous lancer dans l’utilisation des vecteurs afin de réaliser notre premier mouvement. Précédemment lorsque nous souhaitions effectuer un déplacement à un objet nous décrivions ce comportement de la manière suivante :

```
var x = 0;
var y = 0;
var speedX = 0.5;
var speedY = 0.5;
x += speedX;
y += speedY
```

Si nous souhaitons réaliser la même opération à l’aide de vecteurs nous l’écrirons alors de la manière suivante:

```
var location = createVector(0,0);
var velocity = createVector(0.5, 0.5);
location.add(velocity);
```
Nous noterons différentes choses dans l’exemple ci-dessus :

* Nous définissons nos vecteurs position et vitesse par les noms location et velocity. Vous retrouverez ces noms dans de nombreux programmes.
* Nous utilsons l’addition vectorielle pour définir la nouvelle position du vecteur location.
* L’addition vectorielle n’est plus définie par le code suivante : p5.Vector.add(location, velocity) dans la mesure nous où souhaitons mettre à jour le vecteur location

Par l’exemple ci-dessus nous venons donc de mettre à jour notre comportement de déplacement de notre objet par l’utilisation de vecteurs.

## Mouvement : Accélération
L’exemple précédent nous a permis de réaliser un mouvement constant, cependant dans le monde réel les éléments subissent des accélérations. L’accélération et la décélération d’un élément peuvent être décrites comme un changement dans la vélocité d’un élément. Pour le cas de l’accélération il s’agit d’une incrémentation de la vélocité. Cette accélération peut être constante, directionnelle, aléatoire ou à un instant T. Dans l’exemple suivant nous allons mettre en place une accélération constante. Pour ce faire nous allons mettre à jour notre comportement de déplacement de la manière suivante :

```
var location = createVector(0,0);
var velocity = createVector(0, 0);
var acceleration = createVector(0.01, 0.01);
velocity.add(acceleration);
velocity.limit(10.0);
location.add(velocity);
```

Nous noterons différentes choses dans l’exemple ci-dessus :
* Nous utilisons de faible valeur pour le vecteur d’accélération. En effet le calcul de vecteur étant cumulatif notre vecteur de vélocité s’incrémente au fur et à mesure jusqu’à atteindre une grande vitesse.
* Nous utilisons la méthode limit() afin de limiter la vélocité à une magnitude de 10. C’est-à-dire que si la longueur du vecteur de vélocité est supérieure à 10 alors il restera à une valeur de 10. De cette manière nous limitons la vitesse de notre élément à 10 pixels/frame.

Nous pouvons désormais mettre à jour notre classe Particle que nous avions créé lors du cours précédent en transformant ses comportement par l’utilisation de vecteurs de la manière dont nous venons de le voir.

```
var Particle = function(x_, y_, radius_){
  this.location = createVector(x_, y_);
  this.velocity = createVector(0.0, 0.0);
  this.acceleration = createVector(0.01, 0.01);
  this.radius = radius_;
       this.maxVel = 10.0;
  this.update = function(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVel);
    this.location.add(this.velocity);
  }
  this.checkEdges = function(){
    if(this.location.x <= 0 || this.location.x >= width){
      this.velocity.x *= -1;
    }
    if(this.location.y <= 0 || this.location.y >= height){
      this.velocity.y *= -1;
    }
  }
}
```

## Direction : la première accélération

Comme évoqué précédemment, une accélération peu  variable. Pour cela il suffit de mettre à jour sa valeur à chaque frame  que ce soit de manière aléatoire ou selon certains paramètres. Nous allons maintenant voir comment modifier cette accélération afin de changer la direction d’un élément de sorte à ce que ce dernier accélère en direction de la position de la souris

![direction](https://www.arivaux.com/generativedesign/wp-content/uploads/2017/02/03_CC-06.jpg)

Pour ce faire nous allons avoir besoin de calculer deux éléments :

* Le vecteur **D** pointant de la position de notre élément à la position de la souris
* Définir le scalaire **s**, c’est-à-dire la vitesse, de l’élément selon le vecteur D
Nous pouvons facilement calculer les valeurs dx et dy de la manière suivante :

```
dx = mouseX - element.x
dy = mouseY - element.y
```

Or nous savons que la soustraction entre deux vecteurs correspond à la soustraction de chacun des composants des deux vecteurs entre eux. Nous pouvons alors définir que le vecteur D est défini par :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/MsubED.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/MsubEDx.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/MsubEDy.gif"><br>
</p>

Où **M** est le vecteur de position de la souris, **E** le vecteur de position de l’élément et **D** est le vecteur de direction pointant de l’élément vers la souris. Soit en P5JS :

```
var mousePos = createVector(mouseX, mouseY);
var direction = p5.Vector.sub(mouse, location);
```

De cette manière nous obtenons alors le vecteur pointant de l’élément à la souris et de magnitude égale à la distance séparant les deux éléments. Il nous reste à définir le vecteur d’accélération pointant dans la même direction que D mais disposant d’une certaine vitesse **s**.
Pour ce faire nous allons définir le vecteur unitaire Û de D par le biais d’une normalisation. Notre vecteur d’accélération sera alors égal au vecteur unitaire Û multiplié par la vitesse **s**, soit :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Dnormalisation.gif"><br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/Aus.gif"><br>
</p>

Soit en P5JS :
```
direction.normalize();
var s = 0.5;
var acceleration = p5.Vector.mult(d, s);
```

Nous obtenons alors un vecteur d’accélération constante en direction de la souris qu’il nous reste à appliquer à notre élément de la manière suivante :
```
element.acceleration = acceleration;
```

Nous pouvons donc définir l’algorithme d’accélération directionnelle de la manière suivante :

* Soit E le vecteur de position de l’élément, soit M le vecteur de position de la cible (la souris)
* Soit D le vecteur pointant du vecteur E au vecteur M tel que défini par D = M – E;
* Soit Û le vecteur unitaire définit par la normalisation de D;
* Soit s la vitesse de l’accélération souhaitée
* Soit A l’accélération définie par A = û * s;

## Les forces : Newton à la rescousse
Un moteur physique est un environnement virtuel simulant des comportements physiques définis par des forces telles que la gravité, la friction, la densité où tout autre élément. Dans les exemples suivants nous allons voir comment simuler des forces afin de réaliser notre premier moteur physique.

_«En simulation physique une force est un vecteur causant à un objet possédant une masse une accélération.»_

Notre moteur physique sera donc défini par un lot de vecteurs définissant les force de notre “monde”. Afin de simuler  un comportement physique nous allons étudier différentes lois du mouvement de Newton.

En 1687 Newton énonce dans l’ouvrage _Philosophiae naturalis principia mathematica_ sa théorie concernant le mouvement des corps. Il définit par cette théorie différent principe mathématique permettant de définir le mouvement d’un objet dans le monde réel.

### La 1ère loi de Newton : le principe d’inertie
_«Tout corps persévère dans l’état de repos ou de mouvement uniforme en ligne droite dans lequel il se trouve, à moins que quelque force n’agisse sur lui, et ne le contraigne à changer d’état.»_

Cette loi permet de décrire l’état d’un objet dans un environnement dépourvu de toute force. Si ce dernier dispose d’une vélocité alors cette dernière restera constante. Si à l’inverse ce dernier ne possède aucune vélocité alors ce dernier restera statique. Nous pourrions imager cette loi par le comportement d’un objet projeté dans l’espace. Si ce dernier ne rencontre aucun obstacle alors il continuera sa course à une vitesse constante dans la même direction.

Nous avons déjà mis en pratique cette loi dans nos exemples précédents à travers les vélocités constantes.

### La 2nde loi de Newton : le principe de dynamique de translation
_«Les changements qui arrivent dans le mouvement sont proportionnels à la force motrice ; et se font dans la ligne droite dans laquelle cette force a été imprimée.»_

Par cette loi Newton définit la relation entre la masse d’un objet et son accélération. Nous pouvons la formuler de la manière suivante :

_«La force d’un objet est définie par son accélération multipliée par sa masse.»_

À partir de cette loi nous pouvons alors définir le comportement d’ajout de force, c’est-à-dire le comportement permettant de modifier l’accélération A d’un objet selon une force F.

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/FAm.gif"><br>ou<br>
<img src="https://arivaux.com/preprod/cc-2018/Vectors/AFm.gif"><br>
</p>

Ainsi dans P5JS, si nous souhaitons soumettre notre objet à une force nous écrirons :
```
function applyForce(force){
   force.div(mass);
   acceleration.add(force);
}
```

Par l’application de cette loi nous venons de mettre en place le comportement permettant de soumettre notre objet à une force.

### La 3ème loi de Newton : le principe d’action réciproque
_«L’action est toujours égale à la réaction ; c’est-à-dire que les actions de deux corps l’un sur l’autre sont toujours égales et de sens contraires.»_

Où dans d’autres termes : pour toute force f il existe une force égale de direction opposée. Cette loi pourrait être illustrée de la manière suivante : si deux patineurs exercent une force l’un contre l’autre alors ils seront poussés dans la direction inverse de la force qu’ils exercent.
Dans le cas de notre moteur physique nous ne souhaitons pas exercer une force inverse à chaque force émise. Par exemple, si nous soumettons des objets à un vent alors ce vent ne recevra pas de force opposée de la part des objets. En effet nous cherchons ici à simuler un comportement naturel, aussi nous pouvons simplifier notre environnement.

## Les forces de la nature
À partir des lois de Newton que nous avons observées et du nouveau comportement que nous avons ajouté à notre classe particule nous pouvons désormais soumettre nos objets à différentes forces.

### Nos premières forces
Les premières forces que nous pouvons simuler aisément sont le vent et la gravité. En effet nous pouvons définir les deux de la manière suivante :

* Le vent est une force, non constante, dans une direction
* La gravité est une force constante pointant vers le bas.
Ainsi si nous souhaitons créer ces deux forces et soumettre notre élément à celle-ci nous écrirons :

```
var wind = createVector(noise(frameCount), 0.0);
var gravity = createVector(0.0, 0.1);
element.applyForce(wind);
element.applyForce(gravity);
element.update();
```

Où :

* La fonction applyForce() correspond à la méthode d’application de force que nous avons écrite lors de notre découverte la 2nd loi de Newton
* La fonction update() correspond à la fonction de mise à jour de la position que nous avons écrite lors de la définition du mouvement. À noter qu’afin d’éviter toute accumulation de force d’accélération nous avons mis à jour la méthode update de la manière suivante :
```
velocity.add(acceleration);
velocity.limit(10.0);
location.add(velocity);
acceleration.mult(0);
```

### La gravité
Si nous testons la méthode précédente sur des objets de masses variables nous remarquons que plus la masse est grande moins l’objet est soumis à la gravité. Notre modèle de simulation de gravité n’est donc pas juste et cela s’explique par la seconde loi de Newton.

En effet notre fonction d’application de force définit l’accélération comme la force divisée par la masse. Ainsi pour une gravité de vecteur G(0, 1) et deux objet O et O’ de masse 1 et 5 nous aurons :

* L’accélération A de l’objet O est définie par G/1 = (0, 1)
* L’accélération A’ de l’objet O’ est définie par G/5 = (0, 0.2)

Ainsi plus petite serait la masse plus rapide serait l’objet ? Selon la légende Galilée effectua une expérimentation en 1589 afin de définir si cette affirmation était juste. L’expérimentation consistait à laisser tomber deux objets de masses différentes depuis le haut de la Tour de Pise. Il découvrit alors que les deux objets chutaient selon la même accélération les faisant heurter le sol au même moment. Ce comportement se définit par la relation entre la mass d’un objet et la force de gravité. De manière générale, et sans rentrer dans les détails de la force de gravité, nous pouvons dir que la force de gravité et calculé à partir de la masse de l’objet soumis à la force de gravité. Plus la masse est importante plus la force sera grande. Nous pouvons donc modifier notre force de gravité en la multipliant par la mass de l’objet soit :

```
var gravity = createVector(0.0, 0.1);
gravity.mult(element.mass);
```

### La friction
Si nous reprenons notre simulation avec plusieurs éléments de masse différente nous remarquons que ces derniers chutent bien à une accélération identique telle que décrite par Galilée. Cependant nos objets ne semblent jamais atterrir. Cela est dû au fait que l’accélération de nos éléments reste constante lors des rebonds. Or lorsque que nous lachons une balle au sol, celle-ci effectue des rebonds de plus en plus courts jusqu’à finir par être plaquée au sol. Ce comportement est dû à la friction que l’élément subit.

La friction est une force dissipative, c’est-à-dire une force qui a pour action de réduire la force d’un mouvement. Elle est autrement appelé frottement. Il peut s’agir du frottement de l’air ou encore du frottement entre un objet et une surface comme un patin sur la glace. Elle est définie par la formule suivante :

<p align="center">
<img src="https://arivaux.com/preprod/cc-2018/Vectors/friction.gif">
</p>

Où :

* F est la force de friction
* μ est le coefficient de friction. Il définit la puissance de la friction
* N est la force normale, le vecteur perpendiculaire à l’objet et la surface percutée.
* Û est le vecteur unitaire de la vélocité de l’objet

Nous pouvons alors appliquer cette formule à notre simulation par l’ajout de cette nouvelle force
```
var coef = 0.01;
var normal = 1;
var frictionMag = coef * normal;
var friction = element.velocity.copy();
friction.mult(-1);
friction.normalize();
friction.mult(frictionMag);
element.applyForce(friction);
```

Nous remarquons ici que nous avons simplifié la force normal par une valeur unitaire de 1. En effet notre système évoluant dans un espace rectangulaire la force normal sera toujours égale à N(0,1) que nous pourrons simplifier par 1.0 pour plus d’aisance dans notre code.

Nous obtenons alors un comportement plus proche de la réalité où nous objets rebondissent jusqu’à être plaqués au sol.
