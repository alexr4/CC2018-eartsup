# Couleurs et typographies
## Couleurs
### La base de la théorie des couleurs
> RGB vs CMJN -> addition vs soustraction
![CMJN vs RGB](https://www.arivaux.com/preprod/cc-2018/CMJN-RGB.png)
> Illusion de Couleurs
![Color Illusion](https://www.arivaux.com/preprod/cc-2018/colorIllusion.png)
> RGB/HSB/HSL
![RGB, HSB, HSL](https://www.arivaux.com/preprod/cc-2018/RGB-HSB-HSL.png)

### Cercle chromatique et schémas de couleurs
![Color Scheme](https://www.arivaux.com/preprod/cc-2018/ColorScheme.png)
## Typographies
S'il est possible d'écrire et afficher du texte au sein d'une page HTML il est également possible d'en dessiner sur la surface de dessin qu'est l'objet ```<canvas>```. Cela permet ainsi de dessiner et afficher des interfaces par dessus le ```canvas``` ou mainpuler une chaine de caractère afin d'en changer son affichage ou son tracé.

### Écrire sur le canvas
P5js permet d'afficher un texte sur la surface de dessin par l'utilisation de la fonction ```text(text, x, y, w, h)``` où :

* **text** est la chaîne de caractères ou le caractère à afficher.
* **x** est la position x du texte
* **y** est la position y du texte
* **w** est la largeur du bloc texte
* **h** est la hauteur du bloc texte

Si aucune fonction d'affichage ne définie les paramètres le texte sera afficher avec une typographie, une taile et un alignement gauche par défaut. Pour changer les paramètre d'affichage nous utiliserons les méthodes suivante :

* ```textAlign(Horizontal, [Vertical])``` définie l'alignement horizontal et vertical d'un texte où :
* * Horizontal peut etre définie comme ```LEFT```, ```RIGHT``` ou ```CENTER```
* * Vertical [option] peut être défini comme ```TOP```, ```BOTTOM```, ```CENTER``` ou ```BASELINE```
* ```textSize(taille)``` définie le corps du texte en pixels
* ```textLeading(interligne)``` définie l'interligne du texte en pixels
* ```textFont(font)``` définie la typographie utilisée pour le texte. La typographie peut être chargée dans le programme via l'utilisation de la fonction ```loadFont(url)``` (voir référence)[https://p5js.org/reference/#/p5/loadFont] ou appelé depuis le css par l'utilisation de son nom de la manière suivante ```textFont('georgia')```
* ```textStyle(style)``` définie le style de texte. Les styles sont ```NORMAL```, ```BOLD``` et ```ITALIC```

p5js permet également de récupérer les information de taille d'un texte telle que sa largeur ou sa hauteur, saouvent necessaire pour le dessin d'interfaces de datavisualization. Afin de connaitre la largeur d'un texte nous utiliserons la méthode ```textWidth(texte)``` qui renverra la taille du texte envoyé en paramètre. Nous noterons qu'il est necesseraire de définir en amont les paramètres d'affichage du texte sans quoi la largeur renvoyée sera calculé pour un typographie et taille de base du programme.

La hauteur d'un texte se décompose en deux éléments : la hauteur des hampes ascendante et descendante.
![line height](https://upload.wikimedia.org/wikipedia/hu/a/a1/Fontmetrik%C3%A1k.png)

Pour connaître ces taille avec p5js nous utiliserons les méthodes suivante :
* ```textAscent()``` renvoie la hauteur ascendante en pixels de la typographie utilisée
* ```textDescent()``` renvoie la hauteur descendante en pixels de la typographie utilisée

Ainsi pour connaitre la hauteur complète d'un ligne nous réaliserons le calcul suivant :

```
var hauteur = textAscent() + textDescent();
```

### Manipuler une chaine de caractère
Au dela de la mise en forme de texte il est possible de manipuler une chaine de caractère afin de la composer. Cela permet par exemple, à partir d'un paragraphe, de lister et compter le nombre de mot, ou de décomposer le texte en caractère afin de dessiner chaque caractère indépendamment.

La méthodes ```split(text, param)``` permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes. Le premier paramètre **text** est le texte à diviser, le second **param** défini le séparateur à utiliser pour scinder le texte.

Pour l'exemple suivant nous utiliserons en texte de référence la citation de [Paul Rand](http://www.paul-rand.com) suivante :
>There are no formulas in creative work. I do many variations, which is a question of curiosity. I arrive at many different configurations-some just slight variations, others more radical-of an original idea. It is a game of evolution.

Si nous souhaitons compter le nombre de mots utiliser dans cette citation il nous suffira de diviser le texte en en tavleau de mots et d'en demander sa taille. Chaque mot étant séparé d'une espace, nous utiliserons celle-ci comme spérateur de notre méthode.

```
var quotes = "There are no formulas in creative work. I do many variations, which is a question of curiosity. I arrive at many different configurations-some just slight variations, others more radical-of an original idea. It is a game of evolution.";
var wordsArray = split(quotes, " ");
var numberOfWord = wordsArray.length;
```

Nous noterons également qu'il est possible de diviser une chaîne de caractère en tableau de caractère si notre séparateur est défini comme vide. Nous récupérons ainsi un tableau contenant l'ensemble des caractères (espces et ponctuation incluses).

```
var quotes = "There are no formulas in creative work. I do many variations, which is a question of curiosity. I arrive at many different configurations-some just slight variations, others more radical-of an original idea. It is a game of evolution.";
var charArray = split(quotes, "");
var numberOfChar = charArray.length;
```

![Manipulation typo](https://www.arivaux.com/preprod/cc-2018/string%20manipulation.png)

### Manipulation typographique avec **p5.Font**
Au delà de la manipulation de la chaîne de caractère nous pouvons également manipuler le tracé d'un texte et de se typographie par l'utilisation de l'objet p5.Font. Cet objet de p5js est une implémentation de la librairie [opentype.js](https://opentype.js.org/) permettant de parser et mainpuler des typographies aux formats **OpenType (OTF)** et **True Type (TTF)**. Par son utilisation nous pourrons récupérer le tracé vectoriel d'un texte sous forme d'un tableau de coordonées pour créer, manipuler, interagir ou animer avec le tracé du texte.

Pour fonctionner la librairie aura besoins de charger dans sa mémoire l'ensemble de la typographie, aussi nous ne pourrons pas utiliser d'appels de typographies chargées en css, ces dernières étant encodées pour le DOM. Aussi la première étape consiste à charger la typographie à manipuler de la manière suivante :

```
var font;
function preload(){
  font = loadFont("./MuktaMahee-Bold.ttf");
}
```

Nous nottons ici l'utilisation de la fonction ```preload()```. Cette fonction, appelée avant le ```setup()``` est utiliser afin de gérer le chargement de fichiers et assets de manière asynchrone. Si cette fonction est utilisée le ```setup()``` attendra la fin de chargement des assets avant de passer au ```draw()```.

Un fois la typographie chargée nous pouvons utiliser la méthode ```p5.Font.textToPoints(text, x, y, taille, [options])``` afin de calculer la liste de points composant notre texte pour une typographie et taille donnée. Les paramètres sont les suivants :

* **text** texte dont nous souhaitons calculer le tracé
* **x** position x du text (nous noterons ici que l'alignement est un alignement gauche)
* **y** position y du text (nous noterons ici que l'alignement est un alignement sur la ligne de base)
* **taille** corps du texte
* [option] Objet définissant la résolution du tracé. Il se compose des variables suivantes :
* * ```sampleFactor``` Ratio du nombre de point par tracé. Par défaut ce paramètre est **0.25**. Plus le paramètre sera grand plus nous aurons de points sur le tracé.
* * ```simplifyThreshold``` Si ce paramètre est différent de **0** alors des valeurs colinéaires seront retirées du tableau de points. Des points sont dit colinéaires s'ils sont tous sur la même droite D.

Ainsi pour obtenir notre liste de coordonées nous écrirons :

```
var pointsList = font.textToPoints('Hello World!', 0, 0, 75, {
    sampleFactor: 0.25,
    simplifyThreshold: 0
  });
```

Nous pourrons alors naviguer dans la liste de points par l'utilisation d'une boucle ```for``` afin de manipuler ou dessiner notre tracé de la manière suivante :

```
for(var i=0; i<pointsList.length; i++){
  var point = pointsList[i];
  ellipse(p.x, p.y, 4, 4);
}
```

Nous noterons ici que le tableau ```pointsList````est un tableau de coordonée 2D. Aussi nous pouvons récupérer indépendamment les coordonées x et y par l'appel des variable de chaque objet présent dans le tableau où :

* ```pointsList[i].x``` correspond à la position x du point i
* ```pointsList[i].y``` correspond à la position y du point i

De la même manière nous pourrons récupérer la _bounding box_ (boite) du texte par l'utilsation de la méthode ```p5.Font.textBounds(text, x, y, taille)```. Les paramètres sont les suivants :

* **text** texte dont nous souhaitons calculer le tracé
* **x** position x du text (nous noterons ici que l'alignement est un alignement gauche)
* **y** position y du text (nous noterons ici que l'alignement est un alignement sur la ligne de base)
* **taille** corps du texte

```
var bounds = font.textBounds('Hello World!', 0, 0, 75);
```

La méthode nous reverra alors un objet pour lequel nous pourrons interroger les variables suivantes :

* ```bounds.x``` position x de la bounding box
* ```bounds.y``` position y de la bounding box
* ```bounds.w``` largeur w de la bounding box
* ```bounds.h``` hauteur h de la bounding box

![p5.Font](https://www.arivaux.com/preprod/cc-2018/p5Font.png)

## Exemples :
* [RGB vs CMNJ](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/0_RGB-CMYK/)
* [Couleurs et Illusions](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/1_ColorIllusion/)
* [RGB, HSB, HSL](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/2_RGB_HSB_HSL/)
* [Schémas de couleurs](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/3_ColorSchemes/)
* [Texte : affiche et mise en forme simple](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/4_SimpleText/)
* [Texte : calcul de taille d'un texte](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/5_TextSize/)
* [Texte : manipulation de texte](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/6_CustomText/)
* [Texte : manipulation de forme](https://alexr4.github.io/CC2018-eartsup/Cours/5_Couleurs%20et%20typographies/7_TextShape/)
