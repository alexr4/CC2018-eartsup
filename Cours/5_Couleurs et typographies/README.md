# Couleurs et typographies
## Couleurs
### La base de la théorie des couleurs
* RGB vs CMJN -> addition vs soustraction
![CMJN vs RGB](https://www.arivaux.com/preprod/cc-2018/CMJN-RGB.png)
* Illusion de Couleurs
![Color Illusion](https://www.arivaux.com/preprod/cc-2018/colorIllusion.png)
* RGB/HSB/HSL
![RGB, HSB, HSL](https://www.arivaux.com/preprod/cc-2018/RGB-HSB-HSL.png)
* Color Scheme
![Color Scheme](https://www.arivaux.com/preprod/cc-2018/ColorScheme.png)
### Cercle chromatique et schémas de couleurs
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
![p5.Font](https://www.arivaux.com/preprod/cc-2018/p5Font.png)
