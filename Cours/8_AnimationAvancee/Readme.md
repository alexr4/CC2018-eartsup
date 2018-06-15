# Animation avancée : les sprites

> Un sprite, ou lutin, est dans le jeu vidéo un élément graphique qui peut se déplacer sur l'écran. En principe, un sprite est en partie transparent, et il peut être animé (en étant formé de plusieurs [images matricielles](https://fr.wikipedia.org/wiki/Image_matricielle) qui s'affichent les unes après les autres). Le fond de l'écran constitue généralement le décor et les sprites sont les personnages et les objets qui se  superposent au fond d'écran et qui se déplacent. Un sprite peut parfois aussi passer derrière un élément du fond d'écran.

![Sprite](https://www.arivaux.com/preprod/cc-2018/sprites.png)

> L'usage des sprites est une technique fondamentale dans les jeux vidéo en deux dimensions et se retrouve également dans les jeux en 3D principalement pour rendre des effets spéciaux, traiter l'interface graphique ou pour simplifier les objets à afficher. Un sprite est une image rectangulaire dont on fait varier la transparence à certains endroits au moyen du canal alpha afin d'obtenir une silhouette détaillée qui se découpe sur le fond de l'écran, au lieu d'un rectangle. Si le format de pixel comprend une composante alpha, le sprite peut se fondre avec l'image de fond pour créer un effet de transparence (ou d'autres effets, en fonction de la formule mathématique utilisée).

> Le système des sprites a eu une importance telle dans la programmation de jeux vidéo qu'il a fait l'objet de circuits dédiés sur toutes les consoles de jeux ainsi que sur certains ordinateurs comme l'Atari XL, le C64, l'Amiga, les MSX. Par contre, en leur absence, il fallait par la programmation émuler le fonctionnement de ces circuits notamment sur l'Amstrad CPC, les TO7 et MO5 de Thomson, le ZX Spectrum de Sinclair, l'Oric 1 et l'Oric Atmos, l'Atari ST, ainsi que sur les premiers compatibles PC et l'Apple Macintosh.

> Même si le passage des jeux vidéo à la 3e dimension a considérablement réduit l'utilisation des sprites, ils restent essentiels notamment pour les systèmes de particules, les Z-Sprite ou les Billboard.

Source : [wikipedia](https://fr.wikipedia.org/wiki/Sprite_(jeu_vid%C3%A9o))

## Créer un lecteur de sprites
Si javascript ne permet pas de lire nativement les sprites la création d'un lecteur de sprite n'en reste pas moins simple à mettre en place.
Il existe deux méthodes possible de sprites :

* Les sprites en fichiers découpés où chaque image de l'animation est découpé de manière séparée. Le lecteur consiste à se déplacer dans un tableau d'image afin d'afficher l'image necessaire à l'instant T de l'animation.
* Les sprites sheet où chaque étape de l'animation est disposer sur un fichier globale. Le lecteur consiste à changer la portion d'image affichée comme texture sur une plaque 2D ou 3D.

Nous verrons ici la première méthode. Pour ce faire nous utiliserons un lot de fichiers disponibles à l'adresse suivante : [https://github.com/alexr4/CC2018-eartsup/tree/master/Cours/8_AnimationAvancee/_SRC/Sprites/_EXPORTS/0_Bounce](https://github.com/alexr4/CC2018-eartsup/tree/master/Cours/8_AnimationAvancee/_SRC/Sprites/_EXPORTS/0_Bounce).

La première étape consiste à créer un tableau contenant l'ensemble des images à afficher. Le chargement de se tableau s'effectuera dans un fonction ```preload()```. Celle-ci permet à p5js d'attendre que l'ensemble des fichiers externes aient été chargée avant de passer à la première frame de la boucle ```draw()``` (voir chapitre sur la [couleur et la typographie](https://github.com/alexr4/CC2018-eartsup/tree/master/Cours/5_Couleurs%20et%20typographies))

```
var sprites = [];

function preload(){
  var nbSprites = 16; //nombre de sprites à afficher
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("https://www.arivaux.com/preprod/cc-2018/_EXPORTS/0_Bounce/ball_"+i+".png");
    sprites.push(sprite);
  }
}
```

Ici la méthode ```loadImage(url)``` permet de charger une image en mémoire.
La seconde étape consiste à se déplacer dans le tableau d'image afin de récupérer l'index de l'image à l'instant T de l'animation. Pour se faire nous utiliserons le temps passé depuis le lancement du programme — fourni par la méthode ```millis()``` — afin de ne pas dépendre du **fps** du programme qui peut être variable.

Globalement il s'agit donc de calculer une variable ```index``` qui s'inscrémentera de 0, la première image, à la taille du tableau - 1, la denière image; et ce en boucle.
nous savons que la méthode ```millis()``` rnvoie le temps en milliseconde; il s'agit donc d'un valeur de temps s'incrémentant tous le long du programme.
Si nous divisons ce temps par 1000 nous obtenons alors le temps passé en seconde. Nous pouvons alors utiliser un modulo ```%``` du nombre maximum d'élément dans notre tableau afin d'obtenir ue valeur s'incrémentant, en boucle, selon le nombre maximum de notre tableau soit :

| secondes | %4 |
| -------- |:----:|
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 0 |
| 5 | 1 |
| 6 | 2 |
| 7 | 3 |
| ... | ... |

Soit dans notre programme

```
var time = millis() / 1000;
var index = time % sprites.length;
image(sprites[index], 0, 0)
```

Si nous affichons l'image à l'index ```index``` dans le tableau de sprites à l'aide de la méthode ```image(img, x, y)``` nous obtenons alors une image animée à 1 frame par seconde.
Il nous reste donc à modifier la vitesse de l'animation du lecteur de sprite. Chaque sprite peut-être produit à un fps différents. Ainsi les sprites de _Super Street Fighter 2_ tourneront à 19 fps là où d'autre pourrons tourner à 12. Ici notre lot d'image à été produit à 25 fps.
Afin de modifier la vitesse de l'animation nous devons modifier le diviseur de la méthode ```millis()``` afin de diviser le temps passé en millisecondes par le temps écoulé, en millisecondes, entre chaque frame soit ```milliseconde / (1000 / fps)```

```
fps = 25;
millisDivider = 1000 / fps;
passedTime = millis();
passedFrame = floor(passedTime / millisDivider);
index = floor(passedFrame % sprites.length);
```

Nous obtenons alors un lecteur de sprite lisant en boucle le lot de sprites au fps désiré.

## p5.Sprite
Si le lecteur de sprites créé plus haut permet facilement de lire un lot d'images sous forme d'animation, il est souvent utile de pouvoir manipuler l'animation des sprites tel que :
* Mettre en pause, stoper ou lire le sprite
* Lier plusieurs animations à un même sprites
* Lire en boucle ou non un sprites

Pour ce faire nous allons utiliser la classe ```Sprite``` fournie par l'extension p5.Sprite disponible à l'adresse suivante : [p5.Sprite](https://github.com/alexr4/p5.Sprite). Comme toute librairie cette extension necessite d'être ajouté à notre page HTML afin d'étendre les possiblité de p5js. À noter que cette classe dépend également d'une seconde extension permettant de gérer le temps dans p5js : [p5.Time](https://github.com/alexr4/p5.Time). Nous devrons donc ajouter ces deux extension à notre page html :

```
<script src="https://rawgit.com/alexr4/p5.Time/master/TimeExtension.js"></script>
<script src="https://rawgit.com/alexr4/p5.Sprite/master/Sprite.js"></script>
```

La classe ```Sprite``` fonctionne sur le même principe que le lecteur précédemment écrit. Nous aurons donc besoins d'un tableau d'image afin d'instancier notre sprite.

```
var sprites = [];

function preload(){
  var nbSprites = 30;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("https://www.arivaux.com/preprod/cc-2018/_EXPORTS/1_Ryu/Ryu_"+i+".png");
    sprites.push(sprite);
  }
}
```

Nous pouvons alors instancier notre objet sprite dans le ```setup()``` de notre programme. Le constructeur de la classe fonctionne de lamanière suivante : ```Sprite(spritesArray, fps, loop)``` où :

* ```spritesArray``` est le tableau d'image du sprites
* ```fps``` est le nombre d'image par seconde de l'animation
* ```loop``` est la valeur booléenne permettant de définir si l'animation doit se jouer en boucle ou non

Soit :
```
var ryu;
function setup(){
  //initialize canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  ryu = new Sprite(sprites, 12, true);
}
```

Une fois l'objet instancié il est alors possible de lire sont animation à l'aide de la méthode ```update()``` ainsi que récupérer l'image à afficher à l'aide dela méthode ```getSprite()``` soit :

```
ryu.update();
image(ryu.getSprite(), x, y);
```

Il est également possible de mettre en pause, stoper ou relancer l'animation à l'aide des méthodes suivantes :
* ```play()``` lit l'animation
* ```replay()``` relit l'animation
* ```stop()``` arrête l'animation
* ```pause()``` pause l'animation

Les méthodes suivantes vous permettront également d'afficher quelques débug :
* ```displayBoundingBox(color, x, y)``` affiche la bounding box du sprite à la position ```x,y``` et de couleur ```color```
* ```displaySpriteSheet(x_, y_, w_, s_)``` affiche le sprite sous forme de sprite sheet à la position ```x_, y_``` de largeur ```w_``` et de taille de sprite ```s_```

Enfin la classe permet également d'ajouter différentes animations parmis le lot d'image. Pour ce faire le lot d'image chargé dans le sprite doit contenir différentes animations.
L'exemple utilisé ci-dessus contient 6 animations différentes :

* L'animation **idle** du personnage
* L'animation **walk** du personnage
* L'animation **jump** du personnage
* L'animation **jumpForward** du personnage
* L'animation **punch** du personnage
* L'animation **kick** du personnage

Afin de charger les différentes animations nous utiliserons la fonction ```addAnimation(name, in, out, [bool])``` où
* ```name``` correspond au nom de l'animation
* ```in``` correspond à première image de l'animation
* ```out``` correspond à dernière image de l'animation
* ```[bool]``` définit si l'animation sur joue en boucle ou non (définie comme vrai par défaut)

Soit dans notre programme :
```
ryu.addAnimation("idle", 0, 3); //first animation will always be idle
ryu.addAnimation("walk", 4, 10);
ryu.addAnimation("jump", 11, 17);
ryu.addAnimation("jumpForward", 12, 23);
ryu.addAnimation("punch", 24, 26);
ryu.addAnimation("kick", 27, 29);
```

Nous noterons que la première animation ajoutée sera automatiquement considéré comme la première animation à jouer par la classe.
Nous pouvons alors choisir à tous moment l'animation à jouer par l'utilisation de la méthode suivante ```ryu.setAnimation(nom);``` où ```nom``` correspond au nom de l'animation à jouer tel que :

```
function mousePressed(){
  ryu.setAnimation("kick");
}
```

## Exemples :
* [Animation avancée : sprite simple](https://alexr4.github.io/CC2018-eartsup/Cours/8_AnimationAvancee/1_Sprites/)
* [Animation avancée : class sprite 1/2](https://alexr4.github.io/CC2018-eartsup/Cours/8_AnimationAvancee/2_SpritesClass/)
* [Animation avancée : class sprite 2/2](https://alexr4.github.io/CC2018-eartsup/Cours/8_AnimationAvancee/3_SpritesClass/)
