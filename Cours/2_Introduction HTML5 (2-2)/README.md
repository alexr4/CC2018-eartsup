# 28/02/2018 - DOM 2/2

Dans ce cours nous allons continuer notre voyage dans la construction d'une page web.

Dans un premier temps nous verrons les balises HTML de liste qui nous permettront de créer des liens entre plusieurs pages de nos sites. Nous partirons aussi sur les balises de mise en pages. Pour finir avec le DOM nous continuerons l'apprentissage du CSS avec les balises permettant de mettre en page le HTML.

## HTML : Les listes et les liens

Pour écrire des listes en HTML, nous avons besoin de deux balises. Une balise "container" qui va indiquer au navigateur que nous écrivons une liste et lui indiquer le genre de la liste et une balise "contenue" avec les éléments écrit dans la liste.

### Les listes
Il existe deux balises container pour les listes : les ``<ul>`` et les ``<ol>``. La différence entre ces balises est qu'elle indique au navigateur si la liste est ordonnée ou désordonnée. C'est-à-dire qu'elles indiquent si l'ordre des éléments est important.

 - ``<ul>`` Désordonnée
 - ``<ol>`` Ordonnée

Une manière simple de comprendre la différence entre les deux est d'imaginer que nous écrivons une recette de cuisine :
Pour indiquer la liste des ingrédients, nous pourrons utiliser une liste désordonnée, car l'ordre de celle-ci n'a pas d'importance pour notre recette. L'ordre dans lequel nous sortons nos ingrédients du frigo n'a pas d'impact.

Par contre lorsqu'il s'agit des étapes de la recette, l'ordre à une grande importance. Si je mets mon plat au four alors que je n'ai pas coupé mes légumes je n'aurai pas le même résultat que si j'avais suivi la recette dans l'ordre.

La différence entre ces deux balises vient de cette information. Pour des éléments qui ne nécessite pas un ordre particulier on utilisera la balise ``<ul>``, si c'est le cas nous utiliserons la balise ``<ol>``.

Si je veux créer une liste désordonnée, j'écrirai donc :

````
<ul>
<!-- Ma liste -->
</ul>
````

J'indique donc au navigateur que cet élément est une liste et que cette liste désordonnée. Il me faut ensuite écrire les éléments de ma liste. Comme vous avez pu le remarquer avec les autres balises que nous avons pu voir jusqu'ici. Le navigateur ne prendra pas en compte les retours à la ligne donc nous aurons besoin d'indiquer en entourant de balise chacun des éléments de notre liste. On utilisera la balise ``<li>``.

Ainsi une liste d'ingrédient ressemblera à cela :
````
<ul>
 <li>Du pain</li>
 <li>Du sucre</li>
 <li>Deux tomates</li>
</ul>
````

Ce qui nous donnera :

 - Du pain
 - Du sucre
 - Deux tomates

Pour une liste ordonner nous écriront ceci :
````
<ol>
 <li>Couper les tomates</li>
 <li>Les faire réduisent à la casserole</li>
</ol>
````

Ce qui nous donnera ceci :

 1. Couper les tomates
 2. Les faire réduire à la casserole

Vous remarquerez que par défaut le navigateur vous indiquera le type de liste en ajoutant des points ou des chiffres devant les éléments.

### La navigation

Maintenant que nous avons vu les listes, nous pouvons voir le menu (ou navigation) de votre site.
Les menus ne sont finalement que des listes de liens qui pointeront vers votre site ou vers un site externe.

Ainsi pour créer un menu à votre site nous utiliserons simplement la liste désordonnée dans lequel nous ajouterons des balises ``<a>`` :

````
<ul>
 <li><a href="index.html">Page d'accueil</a></li>
 <li><a href="galerie.html">Galerie</a></li>
 <li><a href="contact.html">Contact</a></li>
</ul>
````

Dans l'exemple ci-dessus, nous retrouvons notre liste qui contient des éléments ``<li>`` contenant eux même des balises ``<a>``. Chacune de ces balises ``<a>`` pointe vers une page différente de votre site.
Vous pouvez remarquer que nous n'avons pas indiqué le **http://** devant les liens, ceci, car nous cherchons des pages internes au site.

Comme pour l'attribut ``src`` de l'image, on peut utiliser l'attribut ``href`` pour pointer vers un élément interne.  Ainsi si j'indique juste ``galerie.html`` le lien ira pointer vers le fichier galerie.html qui se trouve dans le même dossier que le fichier sur lequel nous nous trouvons.

Pour pointer un fichier qui se trouverait dans un sous-dossier nous écrirons : ``./nom_du_dossier/galerie.html``

Finalement si nous voulons pointer vers un fichier qui se trouverait dans le dossier supérieur nous écrirons : ``../galerie.html``, ou ``../`` indique au navigateur qu'il faut remonter d'un niveau dans l’arborescence.

Voilà maintenant vous savez comment créer un site avec plusieurs pages et comment les lier entre elles.

## HTML : Mise en page

### Retour sur les balises DIV et la mise en page.
Nous avons vu dans le cours précédent qu'il existe différentes balises HTML permettant d'indiquer au navigateur le type de contenu que nous affichons. La plupart des balises que nous avons vues permettent d'indiquer un élément texte comme un titre, un paragraphe ou un lien.
````
<h1> Je suis un titre </h1>
````

Nous avons aussi vu qu'il existait des balises "DIV" et "SPAN" permettant d'intégrer un contenu qui n'aurait pas de balise prédéfinie.
````
<div> Je suis un bloc de texte X </div>
<span>Je suis une line de texte de type X</span>
````
Les balises HTML étant assez complète on trouvera presque toujours le type voulu pour un contenu. Ainsi les balises "DIV" nous serviront la plupart du temps à organiser et mettre en page notre document.
````
<div>
 <h1> Partie 1</h1>
</div>
<div>
 <img src="monimage.png">
</div>
````

Dans cet exemple nous utilisons les balises "DIV" pour séparer notre contenu en deux parties. Ainsi les balises "div" viendront contenir les autres balises ayant du contenu.

En français cela voudrait dire : je crée un élément dans lequel j'ai un titre et je crée ensuite un élément dans lequel j'ai une image.

Actuellement nos éléments s'affichent l'un après l'autre, ce qui pourrait être utile si je souhaitais différencier ces deux parties grâce à une couleur de fond différente par exemple. Mais nous allons voir aussi qu'il nous est possible grâce à quelques lignes de CSS de repositionner nos "DIV" pour créer deux colonnes par exemple.

En gardant ça en tête, il sera alors possible de créer différentes mises en page pour nos sites :

 - Deux colonnes de textes
 - Une colonne de texte et une avec des images
 - Une colonne de navigation et une autre avec notre contenu
 - ....

Une fois les fondamentaux de la mise en pages acquis, il vous sera possible de créer la mise en page que les colonnes soient de même largeur ou non.

### HTML 5 et les nouvelles balises de mise en page

Comme nous l'avons vu précédemment nous utiliserons la plupart du temps les "div" pour créer la mise en page. Mais depuis l'arrivée de l'HTML5, certaines balises ont été créer pour prendre cette fonction.

Ainsi nous avons vu l'arrivée des balises :

 - Header
 - Footer
 - Main
 - Section
 - Article
 - Nav
 - Aside
 - ... Retrouver toute la liste ici : https://www.w3schools.com/tags/ref_byfunc.asp

Ces balises sont donc comme les autres balises HTML et donnent au navigateur l'information de type de leur contenu. Ainsi le navigateur comprendra : "Ceci est un article", "Ceci est mon menu", "Ceci est un header".

Elles ont donc la même utilisation que les balises "DIV" c'est à dire structurer la page, le gros avantage de celle-ci est le fait qu'elle indique dans un même temps au navigateur leurs types et donc votre site sera plus lisible par lui, mais aussi par les robots qui viendrait visiter votre page (les robots d’indexation de google par exemple).

Voici les principales :

#### Header

Le header se traduit par "en-tête", c'est généralement la partie du site se trouvant en haut de la page qui contient le nom du site, le logo, etc., etc.

![enter image description here](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/header25.png)

Les contenus à afficher dans "l'en-tête" devront comme pour les autres balises être écrits entre la balise ouvrante et fermante.

````
<header>
 <!-- Le contenu de mon header -->
 <h1> Mon super site </h1>
 <img src="logo.png">
</header>
````

#### Footer
Le footer est le "pied de page" de notre site. C'est la partie qui se trouve à la fin de chaque page.
![enter image description here](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/footer19.png)

On y trouve généralement des liens utiles, des contacts, des liens vers les réseaux sociaux, etc., etc.

On l'écrit de cette façon :

````
<footer>
 <!-- Le contenu de mon footer -->
 <h3>Réseaux sociaux </h3>
 <a src="http://monfacebook.html">Facebook</a>
</footer>
````

#### Navigation : `nav`

La balise `<nav>` indique l'endroit où se trouvera la navigation principale (ou menu) de mon site.

![enter image description here](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/nav6.png)

La navigation d'un site s'écriera toujours à l'aide d'une liste, car un menu est une liste de liens.

Ainsi on écrira la balise de cette façon :

````
<!-- J'ouvre ma balise navigation -->
<nav>
 <!-- J'ouvre ma balise liste -->
 <ul>
  <!-- J'écris les balises des éléments dans la liste et inclus les lien vers mes pages-->
  <li><a href="page1.html">Page 1</a></li>
  <li><a href="page2.html">Page2</a></li>
 </ul>
 <!-- Je ferme ma balise liste-->
</nav>
<!-- Je ferme ma balise navigation-->
````

La balise ``<nav>`` contient donc ma liste de lien. Elle indiquera au navigateur que la liste est la navigation de mon site et non pas une liste de course par exemple.

## CSS & HTML : Class et ID

Dans le cours précédant, nous avons vu comment utiliser des propriétés CSS pour changer le style de nos éléments. Vous avez aussi pu remarquer que lorsque vous changiez la couleur en rouge, cette valeur était appliquée sur tous les paragraphes de la page.

````
p /* Vise tous les paragraphes de la page */
{
 color: red;
}
````

Nous allons maintenant voir comment faire pour viser un élément unique ou un groupe d’élément.  Pour ce faire nous allons utiliser les **Class** et les **ID**.

### ID

Les ID permettent de donner un nom à une balise html. Ainsi lorsque nous voudrons la sélectionner en CSS, mais aussi en JavaScript il nous suffira d'indiquer le nom précédemment attribué.

**Attention :  chaque ID est unique, deux éléments sur une page ne devront donc jamais avoir le même ID**

Ainsi on utilisera l'ID dans les situations ou nous devons cibler un seul élément en particulier.

Pour ajouter un **ID** à une balise html on l'ajoutera de cette façon :
````
<p id="bob" >Paragraphe</p>
````

Maintenant pour le navigateur ce paragraphe s'appelle "bob" et je peux donc le modifier en utilisant ce nom :
````
#bob
{
 color : red;
}
````

Vous remarquerez que devant le nom "bob" j'ai rajouté le signe **#**, celui-ci indique au navigateur que nous cherchons un élément grâce à son ID. Si vous oubliez ce signe, le navigateur ne comprendra pas votre demande, car il n'existe aucune balise ``<bob>``.


### Class
Les class fonctionnent de la même façon que les ID, mais à la place de donner un nom unique à un élément nous attribuons un groupe. Ainsi nous pourrons sélectionner tous les éléments du groupe et les modifier de la même façon, même s'ils ont des balises HTML différentes à la base.

Pour ajouter, une class à une balise HTML nous écrira de cette manière :
````
<h1 class="bricoleur">Mon titre</h1>
<p class="bricoleur">Un paragraphe</p>
````

Dans cet exemple nous avons ajouté l'attribut "class" à un titre et à un paragraphe. Si dans mon css je change la couleur en utilisant la class **bricoleur** ces deux éléments auront leurs couleurs changer de la même manière.
````
.bricoleur
{
 color: red;
}
````

De la même manière que pour l'ID, nous avons besoin d'ajouter un "**.**" devant le nom de notre class, pour que le navigateur comprennent que nous utilisons une class et non pas une balise ``<bricoleur>``.

Il est possible pour un élément d'avoir plusieurs class, dans ce cas la on écriera ``<p class="bricoleur voiture" >Texte</p>``. Ainsi notre paragraphe fera partie des deux groupes.
Il sera donc possible en css d'utiliser une des class pour changer la couleur et une autre class pour changer la couleur de fond, ou la largeur, etc., etc....

### Class & ID

Il est tout à fait possible d'utiliser les deux attributs sur une même balise :
``<p id="bob" class="bricoleur"> Paragraphe </p>``
Dans ce cas-là on pourra utiliser la class pour stylisé plusieurs paragraphes ".bricoleur" et styliser indépendamment  certaine propriété de "#bob".

HTML :
````
<p id="first" class="ligne">Bonjour</p>
<p>Je suis une balise P</p>
<p class="ligne">et j'aime les fraises</p>
<p class="ligne">et le nougat</p>
````

CSS :

````
p
{
text-align : center;  
}

.ligne
{
 color: red;
 font-size: 10px;
}

#first{
 font-size : 20px;
 text-decoration: underline;
}
````

Résultat :
![enter image description here](https://image.ibb.co/gYLWoS/classID.png)

Ainsi dans l'exemple j'ai ciblé la balise ``p`` pour que mon texte soit aligné au centre et j'ai utilisé la class pour modifier la couleur et la taille de différents éléments. Finalement j'ai utilisé l'ID pour ajouter du css spécifique à mon premier paragraphe.
Dans le cas ou la class ou l'ID indiquerais un font-size différent c'est l'ID qui prend le l'avantage.

## CSS : Width & Height

Les propriétés CSS ``width`` et ``height`` permettent de modifier la largeur et la hauteur des balises de type **block**, mais aussi de la balise ``<img>``.

Elles s'utilisent de cette manière :
````
p
{
 width : 100px;
 height : 100px;
}
````

Elles ont donc besoin d'une valeur de taille, la plupart du temps on utilisera le ``px`` pour pixel pour avoir une taille fixe. Une autre unité souvent utilisé est  le ``%`` pour pourcentage si l'on indique ``width: 100%;`` le bloc prendra 100% de la largeur disponible, c'est-à-dire la largeur de son parent.

## CSS : Margin & Padding

Les propriétés CSS margin et padding permettent d'indiquer des espaces autour de notre contenu.

![enter image description here](http://www.mediaforma.com/uneminuteparjour/html5/images/raccourcissez-vos-styles-css-margin-et-padding-1.jpg)

### Margin
La propriété margin permet d'indiquer la marge à l’extérieur de notre bloc. On utilisera le plus souvent des pixels comme unité.
Cette propriété est utilisée principalement pour créer de l'espace entre nos différentes balises.

### Padding
La propriété padding permet d'indiquer la marge à l'intérieur de notre bloc. On utilisera le plus souvent des pixels comme unité.
Cette propriété est utilisée principalement pour créer des espaces entre notre texte et les bords de la balise. Par exemple si on ajoute une bordure à notre block.

### Écriture

`margin`(comme`padding`d'ailleurs) s'applique aux quatre côtés du bloc.

Si vous voulez spécifier des marges différentes en haut, en bas, à gauche et à droite, il va falloir utiliser des propriétés plus précises… Le principe est le même que pour la propriété`border`, vous allez voir !

#### En haut, à droite, à gauche, en bas… Et on recommence !

L'idéal serait que vous reteniez les termes suivants en anglais :

-   _top_  : haut ;

-   _bottom_  : bas ;

-   _left_  : gauche ;

-   _right_  : droite.


Ainsi, vous pouvez retrouver toutes les propriétés de tête.  
Je vais quand même vous faire la liste des propriétés pour`margin`et`padding`, histoire que vous soyez sûrs que vous avez compris le principe.

Voici la liste pour`margin`:

-   `margin-top`: marge extérieure en haut ;

-   `margin-bottom`: marge extérieure en bas ;

-   `margin-left`: marge extérieure à gauche ;

-   `margin-right`: marge extérieure à droite.


Et la liste pour`padding`:

-   `padding-top`: marge intérieure en haut ;

-   `padding-bottom`: marge intérieure en bas ;

-   `padding-left`: marge intérieure à gauche ;

-   `padding-right`: marge intérieure à droite.


Il y a d'autres façons de spécifier les marges avec les propriétés`margin`et`padding`. Par exemple :  
`margin: 2px 0 3px 1px;`signifie « 2 px de marge en haut, 0 px à droite (le px est facultatif dans ce cas), 3 px en bas, 1 px à gauche ».  
Autre notation raccourcie :`margin: 2px 1px;`signifie « 2 px de marge en haut et en bas, 1 px de marge à gauche et à droite ».

#### Centrer des blocs

Il est tout à fait possible de centrer des blocs. C'est même très pratique pour réaliser un design centré quand on ne connaît pas la résolution du visiteur.

Pour centrer, il faut respecter les règles suivantes :

-   donnez une largeur au bloc (avec la propriété`width`) ;

-   indiquez que vous voulez des marges extérieures automatiques, comme ceci :`margin: auto;`.

## CSS : Position

La propriété **`position`** définit la façon dont un élément est positionné dans un document. Les propriétés `top` `right` `bottom`et `left` déterminent l'emplacement final de l'élément positionné.

### Types de positionnement
La propriété **position** permet d'indiqué comment le block doit se comporter en terme de positionnement. Par défaut la valeur est ``static``.  Dans ce cas le bloc se positionnera suivant sa position dans la page HTML.

La valeur ``relative`` permet de modifier la position suivant l'emplacement par défaut du bloc.
Ainsi avec cette valeur la propriété ``top : 5px`` décalera le bloc de 5px vers le bas.

La valeur ``absolute`` positionne l’élément par rapport au coin en haut à gauche de la page.
Ainsi avec cette valeur la propriété ``top : 5px`` positionnera le block à 5px du haut de la page.

 Exemple pour positionner un bloc en haut à gauche de l'écran :
 ````
 p
 {
 position: absolute;
 top: 0px;
 left: 0px;
 }
 ````


## CSS : Display

La propriété display permet de changer le type de la balise. Nous avons vu précédemment que les balises étaient de type **block** ou **inline**, cette propriété permet de modifier ce type pour par exemple transformer un ``<a>`` en balise block pour pouvoir indiquer une hauteur et une largeur à notre lien. Changer un **block** en **inline** permettra par exemple de mettre sur la même ligne deux balise paragraphe, mais cela retirera la possibilité d'utiliser certaine propriété comme ``width`` et ``height``.

En dehors de ces deux types, il existe une multitude d'autres valeurs à cette propriété :

``none`` : cette propriété cachera la balise sur laquelle elle est appliquée. Celle-ci ne sera plus visible et ne prendra plus d'espace sur la page. Elle est utilisée pour faire afficher ou non des éléments en JavaScript lorsqu'ils sont nécessaires.

``inline-block`` : Cette propriété permet d'utiliser la faculté du type inline à se positionner sur la même ligne en gardant la possibilité d'utiliser toutes les propriétés du type block.

``flex``: Nous allons voir cette propriété dans la prochaine partie.

## CSS : Flexbox le renouveau de la mise en page.
*Cours tiré du site openclassrooms.com*

Nous découvrirons le fonctionnement de Flexbox dans ce chapitre.

### Un conteneur, des éléments

Le principe de la mise en page avec Flexbox est simple : vous définissez un conteneur, et à l'intérieur vous placez plusieurs éléments. Imaginez un carton dans lequel vous rangez plusieurs objets : c'est le principe !

Sur une même page web, vous pouvez sans problème avoir plusieurs conteneurs (plusieurs cartons si vous préférez. Ce sera à vous d'en créer autant que nécessaire pour obtenir la mise en page que vous voulez.

Commençons par étudier le fonctionnement d'un conteneur.

![Un conteneur et ses éléments](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flexbox_conteneur.png)

Un conteneur et ses éléments

Le conteneur est une balise HTML, et les éléments sont d'autres balises HTML à l'intérieur :

Mais si je fais ça, par défaut, mes éléments vont se mettre les uns en dessous des autres non ? Ce sont des blocs après tout !

Oui tout à fait. Si je mets une bordure au conteneur, une taille et une couleur de fond aux éléments, on va vite voir comment ils s'organisent :

![Par défaut, les blocs se placent les uns en dessous des autres](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/position_defaut.png)

Par défaut, les blocs se placent les uns en dessous des autres

Rien de bien nouveau, c'est le comportement normal dont nous avons l'habitude.

### Soyez flex !

Découvrons maintenant Flexbox. Si je mets une propriété CSS, tout change. Cette propriété, c'est`flex`, et je l'applique au conteneur les blocs se placent par défaut côte à côte.

````
#conteneur
{
 display: flex;
}
````

![Un coup de flex, tout change !](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex_defaut.png)

#### La direction

Flexbox nous permet d'agencer ces éléments dans le sens que l'on veut. Avec`flex-direction` , on peut les positionner verticalement ou encore les inverser. Il peut prendre les valeurs suivantes :

-   row : organisés sur une ligne (par défaut)

-   column : organisés sur une colonne

-   row-reverse : organisés sur une ligne, mais en ordre inversé

-   column-reverse : organisés sur une colonne, mais en ordre inversé


Exemple :
````
#conteneur
{
 display: flex;
 flex-direction: column;
}
````
![Les éléments sont disposés en colonne](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex_direction_column.png)

Les éléments sont disposés en colonne
Bien que le résultat est le même, avec ce type ils ont tout un tas d'autres propriétés utiles que nous allons voir juste après, on va y revenir.

Essayez aussi de tester l'ordre inversé pour voir :

````
#conteneur
{
    display: flex;
    flex-direction: column-reverse;
}
````


![Les éléments sont en colonne... dans l'ordre inverse !](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex_direction_column_reverse.png)

Les éléments sont en colonne dans l'ordre inverse ! Pourtant avec le même code HTML !

#### Le retour à la ligne

Par défaut, les blocs essaient de rester sur la même ligne s'ils n'ont pas la place (ce qui peut provoquer des bugs de design parfois). Si vous voulez, vous pouvez demander à ce que les blocs aillent à la ligne lorsqu'ils n'ont plus la place avec`flex-wrap` qui peut prendre ces valeurs :

-   nowrap : pas de retour à la ligne (par défaut)

-   wrap : les éléments vont à la ligne lorsqu'il n'y a plus la place

-   wrap-reverse : les éléments vont à la ligne lorsqu'il n'y a plus la place en sens inverse


Exemple :
````
#conteneur
{
    display: flex;
    flex-wrap: wrap;
}
````

Voici l'effet que prennent les différentes valeurs sur une même illustration :

![Gestion du retour à la ligne avec flex-wrap](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex_wrap.png)

Gestion du retour à la ligne avec flex-wrap

### Alignez-les !

Reprenons. Les éléments sont organisés soit horizontalement (par défaut), soit verticalement. Cela définit ce qu'on appelle  **l'axe principal**. Il y a aussi un axe secondaire (cross axis) :

-   Si vos éléments sont organisés horizontalement, l'axe secondaire est l'axe vertical.

-   Si vos éléments sont organisés verticalement, l'axe secondaire est l'axe horizontal.

Pourquoi je vous raconte ça ? Parce que nous allons découvrir comment aligner nos éléments sur l'axe principal  _et_  sur l'axe secondaire.

#### Aligner sur l'axe principal

Pour faire simple, partons sur des éléments organisés horizontalement (c'est le cas par défaut).

Pour changer leur alignement, on va utiliser`justify-content` , qui peut prendre ces valeurs :

-   flex-start : alignés au début (par défaut)

-   flex-end : alignés à la fin

-   center : alignés au centre

-   space-between : les éléments sont étirés sur tout l'axe (il y a de l'espace entre eux)

-   space-around : idem, les éléments sont étirés sur tout l'axe, mais ils laissent aussi de l'espace sur les extrémités


Par exemple :
````
#conteneur
{
    display: flex;
    justify-content: space-around;
}
````

![Les différentes valeurs possibles pour l'alignement avec justify-content](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/justify_content.png)

Les différentes valeurs possibles pour l'alignement avec justify-content

Vous voyez comment les éléments s'alignent différemment selon les cas ? Avec une simple propriété, on peut intelligemment agencer nos éléments comme on veut !  

Maintenant, voici ce qu'il faut bien comprendre :  **ça marche aussi si vos éléments sont dans une direction verticale**. Dans ce cas, l'axe vertical devient l'axe principal, et`justify-content` s'applique aussi :
````
#conteneur
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 350px; /* Un peu de hauteur pour que les éléments aient la place de bouger */
}
````
![Avec une direction verticale (column), le centrage fonctionne de la même façon](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/vertical_center.png)

Avec une direction verticale (column), le centrage fonctionne de la même façon cette fois en hauteur !

#### Aligner sur l'axe secondaire

Comme je vous disais, si nos éléments sont placés dans une direction horizontale (ligne), l'axe secondaire est... vertical. Et inversement, si nos éléments sont dans une direction verticale (colonne), l'axe secondaire est horizontal.

Avec`align-items` , nous pouvons changer leur alignement sur l'axe secondaire. Il peut prendre ces valeurs :

-   stretch : les éléments sont étirés sur tout l'axe (valeur par défaut)

-   flex-start : alignés au début

-   flex-end : alignés à la fin

-   center : alignés au centre

-   baseline : alignés sur la ligne de base (semblable à flex-start)


Pour ces exemples, nous allons partir du principe que nos éléments sont dans une direction horizontale.
````
#conteneur
{
    display: flex;
    justify-content: center;
    align-items: center;
}
````
![Un alignement sur l'axe secondaire nous permet de centrer complètement l'élément dans le conteneur !](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/center_center.png)

Un alignement sur l'axe secondaire avec align-items nous permet de centrer complètement l'élément dans le conteneur !

#### Aligner un seul élément

Il est possible de faire une exception pour un seul des éléments sur l'axe secondaire avec`align-self` :

````
#conteneur
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.element:nth-child(2) /* On prend le deuxième bloc élément */
{
    background-color: blue;
    align-self: flex-end; /* Seul ce bloc sera aligné à la fin */
}

/* ... */
````
Résultat :

![Un élément aligné différemment avec align-self](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/align_self.png)

Un élément aligné différemment des autres avec align-self. Tiens je crois que j'ai dessiné une tête en pixel art !

### Répartir plusieurs lignes

Si vous avez plusieurs lignes dans votre Flexbox, vous pouvez choisir comment celles-ci seront réparties avec`align-content` .

Cette propriété n'a aucun effet s'il n'y a qu'une seule ligne dans la Flexbox.

Prenons donc un cas de figure où nous avons plusieurs lignes. Je vais rajouter des éléments :
````
<div id="conteneur">
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
    <div class="element"></div>
</div>
````

````
#conteneur
{
    display: flex;
    flex-wrap: wrap;
}
````

J'autorise mes éléments à aller à la ligne avec `flex-wrap` :


![Plusieurs lignes dans une Flexbox](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/multilignes.png)

Plusieurs lignes dans une Flexbox

Jusque-là, rien de vraiment nouveau. Voyons voir comment les lignes se répartissent différemment avec la nouvelle propriété`align-content` que je voulais vous présenter. Elle peut prendre ces valeurs :

-   flex-start : les éléments sont placés au début

-   flex-end : les éléments sont placés à la fin

-   center : les éléments sont placés au centre

-   space-between : les éléments sont séparés avec de l'espace entre eux

-   space-around : idem, mais il y a aussi de l'espace au début et à la fin

-   stretch (par défaut) : les éléments s'étirent pour occuper tout l'espace


Voici ce que donnent les différentes valeurs :

![Les lignes sont placées différemment avec align-content](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/align_content.png)

Les lignes sont placées différemment avec align-content

### Rappel à l'ordre

Sans changer le code HTML, nous pouvons modifier l'ordre des éléments en CSS grâce à la propriété`order`. Indiquez simplement un nombre, et les éléments seront triés du plus petit au plus grand nombre.

Reprenons une simple ligne de 3 éléments :
````
#conteneur
{
    display: flex;
}
````
![Une ligne de 3 éléments](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex_defaut.png)

Une ligne de 3 éléments

Si je dis que le premier élément sera placé en 3e position, le second en 1ère position et le troisième en 2nde position, l'ordre à l'écran change !
````
.element:nth-child(1)
{
    order: 3;
}
.element:nth-child(2)
{
    order: 1;
}
.element:nth-child(3)
{
    order: 2;
}
````

![Avec order, nous pouvons réordonner les éléments en CSS](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/order.png)

Avec order, nous pouvons réordonner les éléments en CSS

### Encore plus flex : faire grossir ou maigrir les éléments

Avec la propriété`flex` , nous pouvons permettre à un élément de grossir pour occuper tout l'espace restant.

````
.element:nth-child(2)
{
    flex: 1;
}
````

![Le second élément s'étire pour prendre tout l'espace](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex1.png)

Le second élément s'étire pour prendre tout l'espace

Le nombre que vous indiquez à la propriété flex indique dans quelle mesure il peut grossir par rapport aux autres.

Ici, le premier élément peut grossir 2 fois plus que le second élément :
````
.element:nth-child(1)
{
    flex: 2;
}
.element:nth-child(2)
{
    flex: 1;
}
````
![Le second élément peut grossir deux fois plus que le second élément](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/flex2.png)

Le premier élément peut grossir deux fois plus que le second élément

## CSS : Ajouter une Google Font

Nous allons voir ici comment utiliser une police disponible sur la plateforme Google Font. Bien qu'il est possible d'importer nos propres polices, il est souvent plus simple de passer par une google font, car celle-ci sont optimisé et simple d'intégration.

Pour commencer, rendez-vous sur https://fonts.google.com
Choisissez parmi les polices disponibles et cliquez sur le bouton "+".
![enter image description here](https://image.ibb.co/b4TUa7/googlefont1.png)

Un panneau apparaitra en bas à droite de l'écran. Si vous le déplié vous aurez accès a cette interface :

![enter image description here](https://image.ibb.co/fp1hv7/googlefont2.jpg)

C'est ici que la magie va opérer. Commencer par cliquez sur le texte **Customize** :

![enter image description here](https://image.ibb.co/iJ70hn/googlefont4.jpg)

Cette page vous permettra de sélectionner les tailles que vous souhaitez importer.

Retourner sur l'onglet EMBED et cliquer sur @Import.

![enter image description here](https://image.ibb.co/bO4D2n/googlefont3.jpg)

Le site vous propose une ligne de code commençant par **@import**. C'est cette ligne de texte qui nous intéresse.


Copier/coller la au début de votre page **css**.

A partir de maintenant la police est disponible sur votre page. Vous pourrez l'utiliser en la sélectionnant avec la propriété ``font-family`` comme indiquer dans la partie "Specify in CSS" dans l'image.

Si vous avez choisi différentes graisses vous pourrez utiliser la propriété ``font-weight`` en indiquant comme valeur le chiffre indiquer dans la partie "Customize".

## CSS : Border

La propriété ``border`` vous permet d'ajouter une bordure à votre block.
https://www.w3schools.com/css/css_border.asp

## CSS : le hover
Le hover est une propriété qui s'applique quand l'utilisateur passe la souris au-dessus d'un lien. Elle permettra par exemple de changer la couleur du texte.
On l'écrit de cette façon :

````
a{
 color:  blue;
}
a:hover{
 color: red;
}
````

Dans cet exemple nous avons attribué à notre lien une couleur bleue par défaut. Grâce à l'ajout de la propriété hover au lien (remarquer bien la façon dont celle-ci s'écrit). Il nous est possible de dire au navigateur de changer la couleur en rouge lorsque la souris passe sur l’élément.
