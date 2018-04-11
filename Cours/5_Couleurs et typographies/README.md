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

* ````textAlign(Horizontal, [Vertical])``` définie l'alignement horizontal et vertical d'un texte où :
* * Horizontal peut etre définie comme ```LEFT```, ```RIGHT``` ou ```CENTER```
* * Vertical [option] peut être défini comme ```TOP```, ```BOTTOM```, ```CENTER``` ou ```BASELINE```
* ```textSize(taille)``` définie le corps du texte en pixels
* ```textLeading(interligne)``` définie l'interligne du texte en pixels
* ```textFont(font)``` définie la typographie utilisée pour le texte. La typographie peut être chargée dans le programme via l'utilisation de la fonction ```loadFont(url)``` (voir référence)[https://p5js.org/reference/#/p5/loadFont] ou appelé depuis le css par l'utilisation de son nom de la manière suivante ```textFont('georgia')```
* ```textStyle(style)``` définie le style de texte. Les styles sont ```NORMAL```, ```BOLD``` et ```ITALIC```

![Simple texte](https://www.arivaux.com/preprod/cc-2018/simpleText.png)
![Texte size](https://www.arivaux.com/preprod/cc-2018/TextSize.png)
### Manipuler une chaine de caractère
![Color Scheme](https://www.arivaux.com/preprod/cc-2018/string%20manipulation.png)
### Manipulation typographique avec **p5.Font**
![p5.Font](https://www.arivaux.com/preprod/cc-2018/p5Font.png)
