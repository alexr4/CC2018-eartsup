# 28/02/2018 - DOM

Dans ce cours nous allons voir la base de tous site internet : le DOM

![enter image description here](https://media.giphy.com/media/3LyZBPN2iv76muaPlu/giphy.gif)


## LE DOM

### Le DOM Késako ?
Le DOM *(Document Object Model)* représente la structure d'une page web, c'est à dire la façon dont les éléments sont hiérarchisé. Grâce au DOM nous somme capable de mettre en place la page et d'accéder aux éléments la composants.

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/428px-DOM-model.svg.png)

### Les noeuds
Comme dit précédemment le DOM représente la structure de la page, mais qu'elle est le nom des éléments qui sont structuré ? : Les nœuds !
Le terme nœuds (ou nodes en anglais) représente tous les éléments de la pages, il existes trois type de nœuds : 

#### 1- Les nœuds Éléments

Les éléments sont les nœuds principaux, ce sont des balises permettant d'expliquer au navigateurs de quel type est l’élément que l'on souhaite afficher.  
Exemple :

 - "h1" pour les titres de premier niveau (les plus importants)
 - "h2" pour les titres de deuxième niveaux .... les titres vont jusqu'a h6
 - "img" les balises indiquant que l'élement est une image
 - "a" représentant les liens
 - "p" représentant les paragraphes
 - ....
 Il existes des dizaines de balises/type d’éléments permettant de couvrir tous les besoins.

Les éléments sont écrit entre de cette manière : 

    <h1></h1> // Un titre de premier niveau
    <h6></h6> // Un titre de 6e niveau
    <p></p> // Un paragraphe
    <a></a> // Un lien

#### 2- Les nœuds attribut
Les attributs sont des informations supplémentaire qu'ont ajoute au élements pour apporter des informations supplémentaires, par exemple l'adresse vers lequel un lien dois nous envoyer.
Exemple : 

    <a href="adresse_de_mon_lien.com"></a>

Dans cette exemple le terme **href** est un attribut qui permet au navigateur de savoir que le texte inscrit entre les " " est l'adresse du lien.
Comme pour les élements il existe plusieurs dizaine d'attribut comme : 

 - "height" permet d'indiquer la hauteur de l'élement
 - "width" permet d'indiquer la largeur de l'élement
 - "class" permet d'indiquer à l'élement une classe pour pouvoir le cibler
 - "color" permet d'indiquer la couleur de l’élément

Il est même possible de créer des attributs que nous utiliseront pour effectuer des actions pousser sur l’élément.

#### 3- Les nœuds texte
Le nœud texte représente le texte inscrit à l’intérieur de notre balise. 
Par exemple : 

    <p>Mon paragraphe</p>
  Dans cet exemple le nœud texte est le texte "Mon paragraphe" qui ce trouve être un paragraphe car le noeuds élement (ou balise) est un "p".

Si l'ont reprend l’exemple du lien et qu'ont rajoute un nœuds texte pour indiquer le texte afficher par le lien nous aurons ce résultat : 

       <a href="adresse_de_mon_lien.com">Mon lien</a>
Ainsi le texte "Mon lien" est un nœud texte, mais l'adresse de l’attribue est aussi un nœud texte.

Donc voila à quoi ressemblera un lien vers google en code : 

    <a href="http://google.com">Google</a>
  
  Ce qui nous donnera ce resultat une fois lu par le navigateur :
  
  <a href="http://google.com">Google</a>

#### Mais pourquoi j'ai besoin de savoir ça  ?

Pour rien et tous en même temps. Le DOM et les nœuds sont les éléments permettant de faire comprendre au navigateur ce que l'ont veux afficher, ils sont la base de tout les site internet. 
Le terme nœuds est particulièrement utilisé en Javascript (le langage de programmation permettant de rendre un site dynamique) car il permet de comprendre quel partie du code est visé. 
Pour écrire le code d'un site ont préférera les termes **balise** pour parler des nœuds éléments, **Attribue** pour les nœuds attribut et **Texte** pour les nœuds texte.

Et justement maintenant que nous avons vu qu'elle était les éléments composant une page web nous allons découvrir le langage permettant de l'est écrires : **le HTML**

## Le HTML

Nous avons vu précédemment que pour que notre navigateur (Chrome / firefox / Safari / internet explorer) affiche une page internet celle-ci devais être écrite de t'elle sorte à ce que celui-ci puisse comprendre de qu'elle type sont les éléments à afficher. C'est dans ce but qu'à été créé le HTML en 1991 lors du lancement du Web. Son rôle est de gérer et organiser le contenu. C'est donc en HTML que vous écrirez ce qui doit être affiché sur la page : du texte, des liens, des images… Vous direz par exemple : « Ceci est mon titre, ceci est mon menu, voici le texte principal de la page, voici une image à afficher, etc. ».

![enter image description here](https://user.oc-static.com/files/339001_340000/339311.png)

Pour nous autres humain il est facile de deviner que dans le paragraphe ci-dessous le texte "Je suis un titre" est le titre simplement car il est écrit plus gros. C'est la façon dont notre cerveau à été formater qui nous permet de le comprendre.
___________

### Je suis un titre
Je suis un paragraphe.
_________
L'ordinateur lui n'est pas formaté comme nous, il est donc incapable de savoir qu'elle texte est le titre et qu'elle texte est le paragraphe. Pour qu'il puisse le faire il faudra donc formater l'information dans sont langage. Ci je voulais recréer l'exemple ci-dessus j'écrirai : 

    <h3>Je suis un titre </h3>
    <p>Je suis un paragraphe.</p>

Ainsi dans cet exemple la balise "h3" entourant le texte indique au navigateur qu'il s'agit d'une titre de 3e niveaux, la balise "p" indique qu'il s'agit d'un paragraphe. Le navigateur se permettra aussi de modifier le style de l’élément pour que nous puissions aussi reconnaître les éléments. C'est pour cela que le titre est écrit plus gros et en gras. Ainsi si on liste les différents niveaux de titre ainsi qu'un paragraphe voici ce que le navigateur donnera comme résultat.

|Balises | Rendu du navigateur |
|--|--|
| `<h1>Titre 1</h1>` |  <h1>Titre1</h1>|
| `<h2>Titre 2</h2>` |  <h2>Titre2</h2>|
| `<h3>Titre 3</h3>` |  <h3>Titre3</h3>|
| `<h4>Titre 4</h4>` |  <h4>Titre4</h4>|
| `<h5>Titre 5</h5>` |  <h5>Titre5</h5>|
| `<h6>Titre 6</h6>` |  <h6>Titre6</h6>|
| `<p>Paragraphe</p>` |  <p>Paragraphe</p>|

Attention, suivant les navigateurs les résultats ne seront pas les même. La façon dont est affiché ces éléments est tributaire des choix des concepteurs des navigateurs.

### Ecriture des balises HTML

Il existe des dizaines de balise en HTML, vous pourrez retrouvez la liste complete sur W3C : https://www.w3schools.com/Tags/ref_byfunc.asp
Ces balises fonctionne de la même façon sauf certain cas particuliers : 

#### Ouvrante et fermante
Elles s'utilisent de la même façon avec une balise ouvrante, notre contenu et une balise fermante :

`<h4>Le contenu de la balise </h4>`
|  Ouvrante| Contenu | Fermante |
|--|--| --|
| `<h4>` | Le contenu de la balise | `</h4>`

La balise ouvrante permet d'indiquer au navigateur qu'un élement doit être afficher et sont type. Ensuite on inscrit le contenu à afficher. Pour finir ont indique au navigateur que nous avons fini d'afficher le contenu en fermant la balise. Les balises ne sont pas afficher par le navigateur, ainsi l'élement ci-dessus donnera ce resultat : 
______
<h4>Le contenu de la balise </h4>

_____

Malgré que cette façon de faire sois commune à la plus part des balises certaine s'écrivent différemment. C'est le cas par exemple de la balise **image**.

#### Balise image

La balise image fait parti des quelques cas particulier qui ne nécessite pas de balise fermante, ainsi on l'écrira : 

    <img/> ou <img>

*Le "/" sers à dire que la balise ce termine, depuis l'arrivé de l'HTML5 cet ajout n'est plus nécessaire.* 

La raison derrière cette différence viens du fait que lorsque l'ont utilise les balises fermante et ouvrante on indique au navigateur que le texte ou élément à l’intérieur de la balise est de tel ou tel type. Dans le cas de la balise image, on aura besoin d'indiquer au navigateur ou ce trouve le fichier de l'image qui est donc externe. Il n'y a donc pas besoin d'ajouter de texte dans la balise.

Pour indiquer au navigateur ou est l'image il nous suffit de rajouter un attribut "src" de cette façon :

    <img src="https://media.giphy.com/media/FP48Ef3VkmtSNHelSF/giphy.gif" >

L'attribut src (ou source) permet d'indiquer le chemin vers l'image qu'elle sois externe (comme dans le cas actuel ou l'image viens du site giphy) ou interne (Nous verrons comment naviguer dans la structure d'un site plus tard).

Le résultat du code précédent : 

<img src="https://media.giphy.com/media/FP48Ef3VkmtSNHelSF/giphy.gif">

Il existe d'autre type de balise utilisant cette écriture comme la balise `<br/>` qui indique au navigateur qu'il faut sauter une ligne.

#### Les balises de formatage
Pour finir avec les différents type de balise HTML nous allons parler des balises de formatage. Celle-ci permettent d'indiquer au navigateurs que nous souhaitons afficher un élément avec style particulier. Par exemple qu'un mot dans un paragraphe sois en gras : 

    <p>Je suis <b>gras</b></p>
Je suis <b>gras</b>

Vous retrouverez toutes les balises dans la partie Formatting : https://www.w3schools.com/Tags/ref_byfunc.asp

### Les types de balises HTML

Il existes de type de balises HTML, Block et Inline. Ces deux type indique la façon dont la balise va se comporter sur la page. 
![enter image description here](https://blog.4psa.com/wp-content/uploads/block-inline1.png)
#### Block
Par défaut les balises blocks d'une page web s'affiche les uns au dessus des autres. Ces éléments prennent toute la place en largeurs sauf si ont leurs indique une valeurs définie.

![enter image description here](https://image.slidesharecdn.com/introductiontohtmlcss-120711044236-phpapp01/95/introduction-to-html-7-728.jpg?cb=1341982751)

Les balises de type "h1" "p" etc etc sont de type blocks.

#### Inline
Les balises de type Inline sont des balises qui ne passe pas à la ligne et qui donc se positionnerons sur la même ligne en prenant la largeur dont elle ont besoins.
Nous avons vu un exemple de balise inline précedement : la balise `<b></b>`
Celle-ci s'ajoute à une ligne de texte en la modifiant (passe en gras) mais ne modifie pas la largeur de l’élément ni ne le fait passé à la ligne. 

    <p>Je suis <b>gras</b></p>
Je suis <b>gras</b>

Si on prend la balise "p" comme exemple ont vois que le résultat n'est pas le même avec une balise block.

    <p>Je suis un <p>test</p></p>
<p>Je suis un <p>test</p></p>

Le plus souvent les balises Inline servent à modifier le style d'un élément dans un textes.

### Les balises DIV et SPAN

Nous avons vu dans une partie précédente que les balises servait à indiquer au navigateur le type d’élément qu'elles contiennent.
Il existe deux balises qui diffèrent de cette approche, les balises DIV et SPAN.
Ces balises permettent de structuré la page quand nos éléments n'ont pas de type particuliers. Imaginons que nous souhaitons avoir bloc de texte ne correspondant à aucun des types présent en HTML. Nous utiliserons la balise DIV pour encapsuler notre texte.

La balise div permet de créer un élément de genre indéfinie de type block.
La balise span permet de créer un élément de genre indéfinie de type inline. 

Ces balises sont particulièrement utile pour la construction de nos pages car elle permettrons de créer la structures (colonne contenant plusieurs élément....)

Et justement maintenant que nous avons vu les différents types de balises et leurs écritures, voyont comment se construit une page HTML.

## La page HTML

Avant de ce lancer dans la création d'une page HTML il faut insister sur un point. **Une balise HTML peux contenir une balise HTML**. 

![enter image description here](https://media.giphy.com/media/VRvFAP4CXxUQw/giphy.gif)

C'est de cette façon que sont construit tous les sites internet. Une balise qui contient une balise qui contient une balise qui contient une balise... jusqu'au contenu.

Ainsi dans cette image on peut voir comment les balises s'agence entre elle : 

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/HTML5-BlockElements.png/520px-HTML5-BlockElements.png)

On retrouve des balises (dans ce cas des "div") qui viennent créer une partie du site comme une colonne, un haut de page, un pied de page etc etc.

Maintenant que nous avons ça en tête passons à la page en tant que t'elle :

### html, head et body

Lors ce qu'ont crée une page on doit retrouver trois éléments (balise) obligatoires. 

#### Balise html
La balise html permet de faire comprendre au navigateur que le fichier actuel est en langage HTML. Pour ce faire ont ouvre la balise `<html>` au début du fichier et on la ferme `</html>` à la fin.

    <!-- Début du fichier -->
    <html>
    
    <!-- Mon code -->
    
    </html>
    <!-- Fin du fichier -->
    
#### Balise head
La balise head se positionne juste après la balise `<html>` donc au tous début du fichier. Elle contient les informations essentielles à la description du document qui sera affiché dans le corps du document :  
 - le titre du document (inclus dans la balise `<title>`)  
  - les références aux feuilles de style utilisées par le document 
  - les références aux javascripts utilisés par le document 
  - les balises `[<meta>]`pouvant spécifier l'auteur la description du contenu l'encodage et de nombreuses autres informations.

#### Balise body

La balise body est l'endroit ou on écrit le contenu de notre page. C'est la partie visible ou l'ont mettras toute nos balises dans lequel ce trouverons nos texte, image etc etc.

    <!-- Début du fichier -->
    <html>
	    <head>
		    <title>Mon titre </title>
	    </head>
	    <body>
		    <p> Mon body </p>
	    </body>
    
    </html>
    <!-- Fin du fichier -->
    
#### Les commentaires 
Vous avez pu voir dans les exemples précédent ces écritures : `<!-- Un texte -->` , cette ligne de texte n'est pas une balise, elle indique juste un commentaire écrit dans le code, elle ne sera donc pas visible sur la page final mais sera pratique pour se retrouver dans son code.

## Créez sa première page web

Pour créez votre première page web nous aurons besoin d'un éditeur de texte comme Atom, sublime text, bracket ou même notepad.
A partir de cet éditeur nous allons créer un fichier appelé **index.html** n'importe où. 

Le fichier index.html est le premier fichier de n'importe quel site. Quand vous vous connecter sur la page d'accueil d'un site, le fichier derrière cette page est le fichier index.html.

Maintenant ajouter les balises `<html>`, `<head>` et `<body>` que nous avons précédemment et ajouter du contenu, un paragraphe, un titre ou tous ce que vous voulez.

Bravo vous avez créer une page web !

![enter image description here](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

Maintenant vous pouvez jouer avec les différentes balises qui existes en les assemblant pour créer une page plus complexe et vous familiarisé avec la structure avant que nous passions à la suite : LE CSS !

## Le CSS

Maintenant que nous avons vu comment on ajoutais du contenu à une page web intéressons nous à comment donner un peu de design à tous cela !
Pour ce faire nous utiliserons le langage CSS qui permet d'agir sur le style des balises HTML. 

![enter image description here](https://user.oc-static.com/files/339001_340000/339428.png)

 ### Compatibilité du CSS
 
 99% des balises HTML sont compris de la même façon par tous les navigateurs ce qui fait qu'ont peut écrire notre code sans ce poser de question sur la compatibilité entre chaque navigateur. Pour le CSS ce n'est pas le cas.
Une propriété CSS peut-être être reconnu et parfaitement affiché par un navigateur, reconnu mais mal affiché par un autre ou être totalement inconnu par un dernier car chaque navigateurs ont actuellement un niveau d'intégration des propriété CSS totalement différents. Allant parfois par favorisé leurs propre propriété par rapport à d'autre ou leurs propre façon d'écrire la même propriété.

Ce problème explique souvent pourquoi une page marchant parfaitement sur chrome est totalement cassé sur internet explorer. 

Mais tous n'est pas noir, il existe souvent des hack pour pouvoir arriver au résultat voulu, et le problème est souvent moindre lorsque l'ont décide que notre site ne sera accessible que pour les navigateurs récents.

Pour pouvoir savoir si une propriété utilisable et accepté par le plus grand nombre d'utilisateurs vous pouvez allez voir ce site : https://www.caniuse.com/ qui permet pour chaque propriété de savoir qu'elle sont les versions des navigateurs l'ayant intégrée et le % d'intégration global.

Maintenant passons au cœurs du sujet :

### Ou on l'écrit ?

Il y a plusieurs endroit où l'ont peux écrire le css :

- Dans un fichier à part que l'ont appellera dans le fichier html (Recommandé)
- Dans la balise `<head>` du fichier HTML
- Directement dans les balises HTML avec l'attribut `style` (Non recommandé).

 #### Dans un fichier
 ![enter image description here](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/html_css1.png)

La méthode la plus recommandé est de créer un fichier avec une extension `.css` à coté de notre fichier index.html, c'est dans ce fichier que nous écrirons toute les propriété de style.
Pour que notre fichier HTML utilise le fichier ainsi créé il faudra lui indiquer sa position. Pour ce faire nous devons nous rendre dans la partie `<head>` de notre page et indiquer cette balise : 

    <link rel="stylesheet" href="style.css" />
   
- Cette balise `<link>` permet comme sont nom l'indique de créer un lien entre la page HTML et le fichier .css
- Ont retrouve l'attribut `rel` qui nous permet d'indiquer le type du fichier, dans ce cas un fichier stylesheet (un fichier CSS est un fichier de style donc stylesheet => feuille de style).
- Pour finir l'attribut `href` nous permet d'indiquer la position du fichier. On utilisera le même attribut dans un lien pour indiquer la page de destination. Dans notre cas le fichier style.css est au même niveau que notre fichier HTML donc nous n'avons qu'a écrire sont nom. Si celui-ci avait été dans un dossier "css" par exemple il aurait fallut écrire : `./css/style.css` qui indique que par rapport à la position du fichier HTML dans le dossier, nous devont rentrer dans le dossier css et prendre le fichier "style.css".

Cette utilisation à l'avantage d'avoir la meilleurs lisibilité (chaque fichier ayant une un langage spécifique ) mais aussi de utiliser le même fichier CSS pour toute nos pages et ainsi éviter la duplication de code.

![enter image description here](https://user.oc-static.com/files/342001_343000/342652.png)

 #### Dans la balise head
 La deuxième solution pour ajouter du code css dans un fichier html est de l'inclure dans la balise `<head>` de notre fichier. Pour ce faire il faudra encapsuler notre code css dans la balise `<style> Mon code CSS </style>` .
Cette méthode à l'avantage de ne pas demander la création d'un fichier supplémentaire mais arrive vite à ces limites lorsque le code CSS deviens important (lisibilité) et surtout si le site à plusieurs page, car il faudra écrire le code CSS pour chaque page, quitte à le dupliquer.

#### Dans les balises HTML (Inline)
Il est aussi possible d'ajouter du CSS directement dans les balises HTML à l'aide de l'attribut style. Par exemple : 
``<p style="color: red"> Mon paragraphe</p>``
La encore par soucis de lisibilité et utilisabilité cette méthode est à éviter.

### Comment que ça s'écrit ?

![enter image description here](https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif)

Pour écrire une propriété CSS nous avons besoin de trois éléments. 

 - Le nom de la balise que nous souhaitons stylisée par exemple pour modifier l'apparence de tous les paragraphes ``<p>`` nous écrirons **p**. En CSS le nom des balises que nous ciblons sera toujours le nom de la balise en HTML sans les "<" ">".
 - la propriété CSS : les « effets de style » de la page sont rangés dans des propriétés. Il y a par exemple la propriété`color`qui permet d'indiquer la couleur du texte,`font-size`qui permet d'indiquer la taille du texte, etc. Il y a beaucoup de propriétés CSS.
 - La valeurs que nous souhaitons attribué à la propriété. Par exemple, pour la propriété`color`, il faut indiquer le nom de la couleur. Pour`font-size`, il faut indiquer quelle taille on veut, etc.

Ces trois élements s'écrirons de cette façon dans le fichier CSS : 
```
balise
{
	propriete : valeur;
}
```
Nous retrouvons donc le nom de notre balise, les signes ``{`` et ``}`` qui serves à connaitre à quel endroit nous commençons et finissons de modifier la balise, la propriété à modifier et la valeur.

Si nous avons plusieurs balise et à stylisées avec plusieurs propriétées:

```
balise1
{
	propriete1 : valeur1;
	propriete2 : valeur2;
}
balise2
{
	propriete1 : valeur1;
}
balise3
{
	propriete1 : valeur1;
	propriete2 : valeur2;
	propriete3 : valeur3;
}
```
Avec un exemple concret permettant de colorisé un texte en rouge :

````
p
{
	color : red;
}
````

Ainsi nous ciblons le ou les balises p et nous leurs appliquons la valeurs red à la propriété color.

Si je souhaitais coloriser un titre en bleu j'écrirais plus ou moin la même chose : 

````
h1
{
	color : blue;
}
````

Il existe des dizaines de propriété différentes que vous pouvez retrouver : https://www.w3schools.com/cssref/

#### Les propriété de formatage texte

Nous allons maintenant voir quelque propriété nous permettant de changer le style de nos textes. 

##### La taille ou propriété font-size
La propriété ``font-size`` permet de modifier la taille de notre texte. Elle s'écriera de cette façon : 
````
p
{
	font-size : 14px;
}
````

Ainsi dans cet exemple nous donnons une taille de 14px à tous les paragraphes présent.
La valeur la plus utilisé est le pixel ``px`` qui est une valeurs absolut. Il existe d'autre valeur comme le ``em``, ``rem``, ou ``%`` qui permettent d'avoir une taille relative.

##### La police ou propriété font-family

En CSS il est possible de changer la police ou font d'un élement en utilisant la propriété ``font-family``. Elle s'écrira de cette façon :

````
p
{
	font-family : Arial, Courier, New, Impact, sans-serif;
}
````

Cette propriété va chercher si la première police de la liste est installé sur l'ordinateur, si ce n'est pas le cas elle regardera si la 2e l'est etc etc.
Nous aurions pu indiquer n'importe qu'elle nombre de valeurs, tant qu'une de celle-ci est installé. La propriété sans-serif final sers à indiquer que le navigateur doit utiliser une police sans-serif par defaut.

##### Italique, gras, souligné

En CSS pour mettre en italique, on utilise`font-style`qui peut prendre trois valeurs :

-   `italic`: le texte sera mis en italique.
    
-   `oblique`: le texte sera passé en oblique (les lettres sont penchées, le résultat est légèrement différent de l'italique proprement dit).
    
-   `normal`: le texte sera normal (par défaut). Cela vous permet d'annuler une mise en italique. Par exemple, si vous voulez que les textes entre`<em>`ne soient plus en italique, vous devrez écrire.

##### Mettre en gras
La propriété CSS pour mettre en gras est`font-weight`et prend les valeurs suivantes :

-   `bold`: le texte sera en gras ;
    
-   `normal`: le texte sera écrit normalement (par défaut).

##### Soulignement et autres décorations
La propriété CSS associée porte bien son nom :`text-decoration`. Elle permet, entre autres, de souligner le texte, mais pas seulement. Voici les différentes valeurs qu'elle peut prendre :

-   `underline`: souligné.
    
-   `line-through`: barré.
    
-   `overline`: ligne au-dessus.
    
-   `blink`: clignotant. Ne fonctionne pas sur tous les navigateurs (Internet Explorer et Google Chrome, notamment).
    
-   `none`: normal (par défaut).

##### L'alignement
On utilise la propriété`text-align`et on indique l'alignement désiré :

-   `left`: le texte sera aligné à gauche (c'est le réglage par défaut).
    
-   `center`: le texte sera centré.
    
-   `right`: le texte sera aligné à droite.
    
-   `justify`: le texte sera « justifié ». Justifier le texte permet de faire en sorte qu'il prenne toute la largeur possible sans laisser d'espace blanc à la fin des lignes. Les textes des journaux, par exemple, sont toujours justifiés.

#### Les propriété de couleurs 

Nous allons passer au couleurs :

##### Couleur du texte
Comme nous l'avons vu en exemple précedement pour changer la couleurs d'un texte nous utiliserons la propriété ``color``.
Nous pouvons donner différents type de valeurs à cette propriété :

- Le nom d'une couleurs : 
![enter image description here](https://user.oc-static.com/files/380001_381000/380399.png)
````
h1
{
	color : blue;
}
````


- Nous pouvons aussi indiquer une valeur hexadécimal récupéré dans un de nos logiciel de PAO préféré. Dans ce cas elle sera indiqué de cette façon :
````
h1
{
	color : #FFFFFF;
}
````

##### Couleur de fond 

Pour indiquer une couleur de fond nous indiquerons la propriété ``background-color`` qui sera utilisé avec le même type de valeur que pour la propriété ``color``. Ainsi nous pourrions donnez une couleurs de fond noir à la page avec le code suivant : 

````
body
{
	background-color : black;
}
````
##### Les couleurs avec le RGBA
Vous pouvez aussi utiliser la valeurs RGBA comme valeurs, vous devrez donc indiquer les valeurs RGB ainsi que la valeurs d'opacité ou alpha.
Ainsi un blanc pur s'écriera comme cela : ``color : rgba(255,255,255,1)`` et un rouge transparent à 50% : ``color: rgba(255,0,0,0.5)``
##### Le CSS et l'héritage
En CSS, si vous appliquez un style à une balise, toutes les balises qui se trouvent à l'intérieur prendront le même style.

C'est en fait simple à comprendre et intuitif. La balise`<body>`, vous le savez, contient entre autres les balises de paragraphe`<p>`et de titre`<h1>`.

Si j'applique une couleur de fond noire et une couleur de texte blanche à la balise`<body>`, tous mes titres et paragraphes auront eux aussi un arrière-plan de couleur noire et un texte de couleur blanche… C'est ce phénomène qu'on appelle l'héritage : on dit que les balises qui se trouvent à l'intérieur d'une autre balise « héritent » de ses propriétés.

> C'est d'ailleurs de là que vient le nom « CSS », qui signifie « 
> _Cascading Style Sheets_  », c'est-à-dire « Feuilles de style en cascade ». Les propriétés CSS sont héritées en cascade : si vous
> donnez un style à un élément, tous les sous-éléments auront le même
> style.

*Cela veut dire que TOUT le texte de ma page web sera forcément écrit en blanc ?*

Non, pas obligatoirement. Si vous dites par la suite que vous voulez vos titres en rouge, ce style aura la priorité et vos titres seront donc en rouge. En revanche, si vous n'indiquez rien de particulier (comme on l'a fait tout à l'heure), alors vos titres hériteront de la couleur blanche.  
Cela ne fonctionne pas uniquement pour la couleur, entendons-nous bien. Toutes les propriétés CSS seront héritées : vous pouvez par exemple demander une mise en gras dans la balise`<body>`et tous vos titres et paragraphes seront en gras.
