# Introduction aux Formes et Dessins via p5js
Pour ce cours nous utiliserons la librairie [p5js](https://p5js.org) de la fondation processing.

Pour son chargement au sein de votre page HTML référez-vous au cours d'[introduction à Javascript](https://github.com/alexr4/CC2018-eartsup/blob/master/Cours/2_Introduction%20HTML5%20(2-2)/IntroductionJavascript.md)

## P5JS
P5JS une librairie javascript créée par [Lauren McCarthy](http://lauren-mccarthy.com/) et développée par la [Fondation Processing](https://processingfoundation.org/).

Cette librairie a pour objectif de fournir un modèle simple à tous designer, artiste ou développeur en se basant sur les paradigmes déjà établis par processing et proposer un environnement simple dessin. Ainsi nous y retrouverons de nombreuses méthodes proches du framework Java précédemment utilisé.

## setup() & draw()
La plupart des programmes se reposent sur l’utilisation de deux fonctions principales : 

* **Fonction d’initialisation**. Elle permet de lancer le programme. C’est ici que nous définirons la taille du programme, son mode de dessins ou que nous initialisons nos variables. Dans **p5js** cette fonction s'écrit ```function setup()```
* **Fonction de boucle**. Fonction se répétant plusieurs fois par seconde. Il s’agit de la répétition/boucle générale permettant de lire le programme frame par frame. Dans **p5js** cette fonction s'écrit ```function draw()```

Ces deux function sont les composante de notre programme. Nous aurons donc :

```
function steup(){
	//initialisation
}

function draw(){
	//boucle principale
}
```

## Canvas
P5js est un librairie permettant de réaliser des dessin et animation interactive sur une page web. Pour ce faire elle créer et utilise une surface permettant de dessiner des formes vectorielles au sein d'un page web : le [canvas](https://developer.mozilla.org/fr/docs/Web/HTML/Canvas). L'élément ```<canvas></canvas>``` est une balise html permettant la création de surface de dessins 2D ou 3D lorsque celle-ci est définie comme un élément WebGL.

P5js permet de créé automatiquement cette surface sans avoir à intervenir sur le html de notre page par le biais de la fonction ```createCanvas(largeur, hauteur)```. Cette fonction créera et ajoutera à la page html l'élément ```<canvas>``` à la taille souhaitée.

La référence p5js précise l'élément suivant :
> Syntax : ```createCanvas(w,h,[renderer])```
> Parameters :
> * w	Number: width of the canvas
> * h	Number: height of the canvas
> * renderer	Constant: either P2D or WEBGL

Ici la taille (largeur et hauteur) est définie en pixel.
Le renderer correspond quant à lui au moteur de rendu. Ce dernier, optionnel, permet de définir si l'on souhaite travailler dans un contexte 2D ```P2D``` ou 3D ```WEBGL```. Ce paramètre est optionnel, s'il n'est pas rempli le contexte sera défini comme un contexte 2D.

Parce que la création du canvas est un élément que nous devons réaliser qu'une seule fois et au départ du programme nous apperlons cette fonction dans la fonction d'initialisation de notre programme soit :

```
function setup(){
	createCanvas(720, 405);
}
```

### Créer un canvas de la taille de la page
P5js permet également de créer rapidement une surface de dessin de la taille de la page par l'utilisation de deux variables ```windowWidth``` et ```windowHeight```. Ces deux variables permettent de récupérer automatiquement la largeur et hauteur de la page. Elle correspond à aux variables [```window.innerWidth``` et ```window.innerHeight``` en javascript](https://developer.mozilla.org/fr/docs/Web/API/Window/innerWidth).

Aussi pour créer une surface de la taille de notre prage nous écrirons :
```
function setup(){
	createCanvas(windowWidth, windowHeight);
}
```

### Changer la taille de la surface de dessin au resize
Parce que chaque personne dispose d'une résolution d'écran différente il est souvent necessaire d'adapter la taille du contenu de sa page web à la résolution disponible pour l'utlisateur. Afin de rendre rendre la surface de dessin responsive en fonction de la taille de la fenêtre nous pourront utiliser la fonction ```resizeCanvas(largeur, hauteur)```. Cette dernière permettre de changer la taille du canvas selon une largeur et hauteur fournies.

Si nous souhaitons adpater la taille de notre canvas à celle de la fan^tre de notre navigateur lorsque ce dernier change nous pourrons appeler cette fonction au sein de la fonction ```windowResized()```. Cette dernière est appelée à chaque fois que la fênêtre du navigateur change de taille. Ainsi nous écrirons :

```
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
```

### Positionner la surface de dessin dans la page
Lorsque que l'on créer une surface de dessin via p5js on remarque que cette dernière est automatiquement ajoutée à la fin de page HTML. En effet dans notre code html nous aurons :

```
<div class="container">
	<header></header>
	<div class="content"></div>
	<footer></footer>
</div>
<canvas></canvas>
```

Il est possible, lorsque l'on créer le canvas, de la positionner dans la page au sein d'une ici. Si on reprend la structure ci-dessus, il serait logique d'ajouter notre surface de dessin à la div **content**. Pour ce faire nous devons, à la création de notre canvas, l'enregistrer dans une variable afin de définir, par la suite, sa div parent par la fonction suivante ```element.parent('className')```.
Ainsi nous écrirons : 

```
function setup(){
	var canvas = createCanvas(720, 405);
	canvas.parent('content');
}
```

## Les formes primitives
P5js dispose de différente formes prmitive permettant de dessiner rapidement certaines formes. Vous povez retrouver l'ensemble de ces formes sur la [référence](https://p5js.org/reference/) de la librairie. Parmis celle-ci on comptera : 

* ```point(x, y)``` Fonction permettant de dessiner un point dans un espace 2D.
* ```line(x1, y1, x2, y2)``` Fonction permettant de dessiner une ligne dans un espace 2D.
* ```triange(x1, y1, x2, y2, x3, y3)``` Fonction permettant de dessiner un triangle dans un espace 2D.
* ```quad(x1, y1, x2, y2, x3, y3, x4, y4)``` Fonction permettant de dessiner un quadrilatère dans un espace 2D.
* ```rect(x, y, largeur, hauteur)``` Fonction permettant de dessiner un rectangle dans un espace 2D.
* ```ellipse(x1, y1, largeur, hauteur)``` Fonction permettant de dessiner une ellipse dans un espace 2D.
* ```arc(x, y, largeur, hauteur, startAngle, stopAngle, [MODE])``` Fonction permettant de dessiner un arc de cercle. Le mode ici permet de définir si l'arc est fermé ```CHORD```, ouvert ```OPEN``` ou relié par son centre ```PIE```. Par defaut les arcs son fermés

Ces fonction étant des fonction des dessins nous les appelerons à l'interieur de la fonction ```draw()``` de la manière suivante :

```
function draw(){
	ellipse(10, 10, 100, 100);
}
```

## Background, couleur de remplissage et contour
### Background
Il est possible de définir la couleur de fond du canvas par l'utilisation de la fonction ```background(r, g, b)```. Cette fonction permettant de remplir la surface de dessin d'une couleur elle sera appelée en première dans la fonction ```draw()``` soit :

```
function draw(){
	background(20, 20, 20);
	ellipse(10, 10, 100, 100);
}
```

Il est important de noter que sans couleur de fond, le programme dessinera en sur-impression, c’est à dire que les dessins effectués aux frames précédentes seront toujours visible en dessous du nouveau dessin. Cela reviendrait, dans Photoshop, à dessiner sur plusieurs claques superposés. La fonction background() a donc pour rôle «d’effacer» les dessins effectués aux frames précédentes.

![Lorsque je dessine, à chaque frame, un cercle à la position de ma souris sans utiliser la fonction background() je remarque que les dessins se superposent au fil du temps.](http://ixd.education/wp-content/uploads/2013/03/ixd_processingIntro_00.gif)
_Lorsque je dessine, à chaque frame, un cercle à la position de ma souris sans utiliser la fonction background() je remarque que les dessins se superposent au fil du temps._

![Si pour ce même code j’utilise la fonction background(), alors je dessinerai un fond entre chaque frame. Les dessins des frames précédentes seront effacés et je verrai alors mon cercle se déplacer.](http://ixd.education/wp-content/uploads/2013/03/ixd_processingIntro_01.gif)
_Si pour ce même code j’utilise la fonction background(), alors je dessinerai un fond entre chaque frame. Les dessins des frames précédentes seront effacés et je verrai alors mon cercle se déplacer._

### Couleurs de remplissage et de contour
Afin de définir les couleurs de remplissage et de contour d'une forme une utiliserons respectivement les fonction ```fill(r, g, b)``` et ```stroke(r, g, b)```. La première permettra de définir la couleur du remplissage de la forme alors que la seconde définira la couleur de contour.

parce que notre programme est lu de haut en bas par notre ordinateur, les couleurs de remplissage et de contours doivent être définies avant le dessins de la forme. Ainsi nous aurons :

```
fill(127, 127, 127);
stroke(0, 0, 127);
ellipse(10, 10, 100, 100);
```

De même, si nous ne redefinissons pas les couleurs avant le dessin d'une forme, celle-ci prendra les couleurs précédemment définies. L'exemple suivant présente deux ellipses de la même couleur :

```
fill(127, 127, 127);
stroke(0, 0, 127);
ellipse(10, 10, 100, 100);
ellipse(20, 10, 100, 100)
```

### Dessiner sans contour ou sans ramplissage
Il est également possible de déssiner des formes sans remplissage ou sans contour. Pour se faire nous utiliserons respectivement les deux fonctions ```noFill()``` et ```noStroke()``` à la place des fonctions ```fill(r, g, b)``` et ```stroke(r, g, b)```. L'exemple suivante présente une ellipse sans contour et un rectangle sans remplissage :

```
noStroke();
fill(0, 0, 0);
ellipse(10, 10, 100, 100);

stroke(0, 0, 0);
noFill()
rect(20, 10, 100, 100)
```

### Format des couleurs
Nous aurons noté que l'utilisation des couleurs s'effectue au format R, G, B. il est également possible d'appeler les couleurs au format [hexadécimal](https://fr.wikipedia.org/wiki/Couleur_du_Web). Ainsi nous pourrons écrire ```fill(#40A497)```. Cela sera identique à ```fill(64, 164, 151)```

Il est également possible d'utiliser un unique paramètre comme valeur RGB afin de définir une valeur de gris. Ainsi lorsque j'écris ```fill(20)```, cela revient à écrire ```fill(20, 20, 20)``` soit une valeur de gris.

Enfin il est possible d'ajouter un quatrième paramètre aux couleur. Ce dernier correspondra à la couche alpha de la couleur et sera définie entre 0 et 255 comme toute valeur RGB. Ainsi ```fill(0, 0, 255, 127)``` permettra de définir une couleur de remplissage bleu avec un aplha de 50%

## Transformations et rotations
Lorsque nous dessinons sur nos écrans, nous travaillons sur une grille, une matrice. Dans le cas d’une réalisation de maquette pour un site web, nous travaillons, par exemple, sur des .psd de 1280*1024 soit une grille de pixels de 1280*1024, c’est notre matrice. Nous plaçons ensuite nos éléments sur cette grille. Il en est de même avec nos programmes où notre grille commence au point d’origine 0, 0 pour finir au point ```width```, ```height```. Nous allons voir comment manipuler cette matrice.

![Matrice du programme](http://ixd.education/wp-content/uploads/2014/02/matrice-01-011.jpg)

Par défaut le point d’origine (0, 0) de notre matrice se trouve au coin supérieur gauche de notre programme mais il peut être facilement déplaçable.

Déplacer une matrice signifie que l’on décale son point d’origine à un autre endroit. Cela nous donne un autre point de vue et change notre système de géométrie.

Il peut être pratique de déplacer son point d’origine au centre du programme, notamment lorsque nous souhaitons réaliser un programme en symétrie. Ainsi dans le cas d’un rectangle de position 10, 10 dans une symétrie axiale, dont le point d’origine sera le centre de notre programme, le second rectangle aura une position de -10, 10 soit l’inverse de la position x du premier rectangle.

![Coordonnées déplacées à width/2 height/2](http://ixd.education/wp-content/uploads/2014/02/matrice-02-02.jpg)

Afin d’effectuer un déplacement de matrice, nous utilisons la function ```translate(x, y);```. Cela aura pour effet de déplacer la matrice de x pixels en latéral et y pixels en vertical. Le point d’origine 0,0 sera alors en x, y. Il est important de savoir que cette méthode est cumulative, c’est à dire que si nous effectuons, tout au long de notre code, les méthodes suivante :

```
translate(10, 10);
//code
translate(10, 10);
//code
translate(10, 10)
//code
```

Cela aura pour effet de déplacer une première fois notre matrice en 10,10 puis en 20, 20 puis en 30, 30. Nous devrons donc effectuer un déplacement inverse si nous souhaitons positionner la matrice à son premier point d’origine.

![Déplacement de matrice cumulatif](http://ixd.education/wp-content/uploads/2014/02/matrice-03-03.jpg)

Afin d’éviter de nombreuses transformations retour durant notre code, il est possible d’isoler notre déplacement de matrice à l’aide des méthodes suivante :

```
push();
translate(10, 10);
//code
pop();
```

```push()``` permet à un instant T d’enregistrer les coordonnées du point d’origine afin de pouvoir les restituer à l’aide de la commande ```pop()```

À l’exécution de ce code, la matrice se déplacera en position x, y lors de la fonction ```translate()```, puis reviendra à son point d’origine lors de la fonction ```pop()```. Cela nous permet donc de changer notre géométrie à un instant T et de dessiner l’ensemble de nos formes voulues dans ce nouveau système de géométrie encadrée par les méthodes ```push()``` et ```pop()```

![push()/pop()](http://ixd.education/wp-content/uploads/2014/02/matrice-04-04.jpg)

La rotation d’un élément est un cas particulier. Pour bien comprendre son fonctionnement revenons au point de vue microscopique de notre espace de travail, le pixel.

Nous souhaitons dessiner un rectangle de position 10, 10 et de taille 10, 10.Puis nous souhaitons effectuer un rotation de 45° de ce même rectangle. Le pixel est un élément dessiné, 0 ou 1, plein ou vide, il ne peut être rempli de manière partielle. Lorsque nous effectuons ce genre de manipulation dans photoshop, notre logiciel dessine notre diagonale sous forme de pixels pleins ou vides.

![Rotation de matrice](http://ixd.education/wp-content/uploads/2014/02/matrice-05-05.jpg)

Cette transformation utilisée par photoshop n’est pas la plus simple à réaliser et processing utilise un autre méthode.

Au lieu de redessiner les pixels de notre rectangle, nous allons effectuer une rotation de notre espace de coordonnées à l’aide la fonction suivante ```rotate(angle)```. **Nous noterons que p5js définit ses angles en radians**. Cette méthode permet donc faire faire une rotation à notre matrice et ce depuis son point d’origine.

![Rotation de matrice](http://ixd.education/wp-content/uploads/2014/02/matrice-06-06.jpg)

Pour obtenir notre rectangle à une véritable position 10, 10 et ayant effectué une rotation à 45° nous devons donc déplacer la matrice un premier temps, puis effectuer la rotation.

![Rotation de matrice](http://ixd.education/wp-content/uploads/2014/02/matrice-07-07.jpg)

Pour ce faire nous utilserons la méthode suivante :
```
push();
translate(10, 10);
rotate(degrees(45));
pop();
```

## Formes personnalisées
## Formes procédurales et coordonnées polaires
## interaction clavier/souris
## Variables p5js
