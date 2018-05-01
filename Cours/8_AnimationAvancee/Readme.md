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

La première étape consiste à créer un tableau contenant l'ensemble des images à afficher. Le chargement de se tableau s'effectuera dans un fonction ```preload()```; Celle-ci permet à p5js d'attendre que l'ensemble des fichiers externes aient été chargée avant de passer à la première frame de la boucle ```draw()```
