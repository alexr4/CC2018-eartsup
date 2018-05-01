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
