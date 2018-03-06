# Introduction à Javascript
## Javascript

Javascript (JS) est un langage de programmation dédié aux technologies du web. Il est utilisé sur de nombreux site mais également dans des environnements exterieurs tels que les chrome app, les application mobile, Unity3D, node.js... 

Ce langage orienté objet basé sur le concept de prototype a été inventé en 1995 par la [Netscape Communication Corporation](https://fr.wikipedia.org/wiki/Netscape_Communications) comme une extension du langage script [ECMAScript](https://fr.wikipedia.org/wiki/ECMAScript). Il est aujourd'hui interprété par l'ensemble des navigateur web quel que soit le device (mobile, tablette, bureau) même si chaque version de ces navigateur peuvent en implémenté qu'une certaines partie. Ainsi les ancien navigateur supporteront à minima ECMAScript 3 (ES3) là où les navigateur plus récent pourront supporter ES6 (standard sortie en 2015) ou ES7 (version sortie en 2016).

Javascript permet d'implémenter des mécanismes et interaction complexe dans un environnement web tel que des dessin procéduraux, de l'affichage 2D/3D, de l'affichage vidéo ou des interaction à l'aide micro ou webcam. Il s'agit de la troisième couche qui s'ajoute au HTML et CSS pour former la technologie HTML5.

## Appeler un programme javascript dans une page HTML
Il est possible d'ajouter un programme JS dans une page HTML de deux manière différent. EN interne ou en fichier externe.

### Le script inclu dans la page
Pour ajouter un script JS au cœur d'une page HTML il est necessaire de l'encapsuler l'interieur d'un balise ```<script></script>``` 
Cette balise permet alors de définir que la suite du programme écrit sera en javascript afin que ce dernier soit interprété par la page html.
Par convention nous ajouterons ces balise à la fin de notre page HTML avant la fermerture de la balise ```</body>```

```
<script>
	//mon premier code en JS
</script>
```

### Le fichier javascript .js externe
Il est également possible d'ajouter son programme javascript en liant un fichier externe **.js** à la page HTLM.
Pour se faire nous crérons une fichier javascript de type _**nomDuFichier.js**_ puis nous utiliserons la balise ```<script>``` pour associer ce fichier à notre page HTML de la manière suivante

```
<script src="nomDuFichier.js"></script>
``` 

Cette méthode est davantage utilisée car cette dernière permet — comme pour les fichiers **.css** externe — de réaliser son programme de manière indépendante et de l'appeler sur de nombreuses pages.

### Où ajouter son script (inter/externe)
Comme vu plus où, les scripts internes sont traditionnellement ajoutés en fin de page html avant la fermeture de la balise ```</body>```. Cela à pour but de ne pas bloquer le chargement de la page HTML par une execution de script trop longue. Ainsi en ajoutant le script en fin de page, ce dernier sera chargé en dernier permettant ainsi à la page de charger et afficher tous son contenu avant d'executer le moindre programme.

Les fichiers JS chargés en externes peuvent être quand à eux placés à deux endroits différents en fonction de leur utilisation. Si le script appelé est necessaire à la construction/structure de la page alors ces derniers seront appelés dans la balise ```<head>```. Ce sera le cas de librairie telles que [JQuery](https://jquery.com/) qui pourra être necessaire à la construction des pages.
À l'inverse si le script appelé n'est pas necessaire à la construction de la page alors ce dernier pourra être appelé en fin de page avant la fermeture de la balise ```</body>```
Nous pourrons donc avoir les structures suivantes :

```
...
<script src="nomDuFichier.js"></script>
</head>
```

```
...
<script src="nomDuFichier.js"></script>
</body>
```

## Structures javascript (var, let, const, fonction...)

Nous retrouvons en javascript les principaux paradigmes présent dans quasiment tous les langages de programmation. Parmis ces derniers nous avons :

* Les **variables** (entière, décimal, booléenne, tableau...) pour “stocker” les données. Les variables sont des «mots-clefs» auxquels nous associons des valeurs afin de les stocker dans la mémoire du programme
* Les **fonctions et méthodes** pour effectuer des actions. Les fonctions sont des verbes, il s’agit d’action que nouse demandons à notre programme de réaliser, cela peut être un calcul, un dessin, une attribution de variables…
* Les **opérateurs** permettant d'effectuer divers calculs
* Les **structures conditionnelles** permettant de réaliser des comparaison et poser des questions
* Les **structures itératives** permettant d’effectuer une série d’action simultanée

### Les variables

Une variable est un « mot clé » associé à une valeur. Cela permet de stocker en mémoire des valeurs sous un nom.

Par exemple si je place deux points de coordonnées 10, 10 et 20, 20 il me sera difficile en code de changer les coordonnées de mon deuxième point car je ne sais pas comment les appeler. Or, si je dis que mon premier point est placé en coordonnée x1, y1 et le seconde x2, y2 et que je défini par la suite x1 = 10 , y1= 10 et x2 = 20, y2 = 20 il m’est alors facile de changer la valeur de x1 en 30.

Il existe plusieurs types de variables tel que :
* Les nombres entiers (0, 1, 2, 3...)
* Les nombres décimaux (0.0, 0.1, 0.2, 0.3...)
* Les valeur booléean (boolean) vrai/fausse (true/false). La variable de type boolean ou binaire est une variable ne pouvant renvoyer que deux valeurs : Vrai/Faux. Elle permet de faire des comparaisons par exemple « Cette robe est-elle rouge? » est un question demandant un réponse booleenne. « Oui elle est rouge » « non elle ne l’est pas »
* Les chaînes de caractères ("Hello World")
* Les caractères ("H")
* Les tableaux (["John", "Constantine", "Dude"]). Les tableaux sont des objets permetant d'energistrer sous un même nom plusieurs variables. Nous pourrons retrouver chacune de ses variables via leur index. Ici la valeur à l'index 0 sera "John" alors que la valeur à l'index 1 sera "Constantine"
* Les objets

Le javascript n'étant pas un langage typé nous déclarons chaque variable de la même manière soit :

```
var x = 1; //valeur entière
var y = 0.1; //valeur décimale
var state = true; //valeur booléenne
var prenom = "John"; //chaîne de caractères
var caractere = "A"; //caractère
var tableau = ["John", "Constantine", "Dude"]; //tableau de 3 chaînes de caractères
```

Ici le mot ```var``` permet de déclarer un élément comme une varibale.

#### Le cas des ```let```
L'instruction ```let``` permet de déclarer une variable dont la portée est celle du bloc courant là où le mot-clé ```var```, quant à lui, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).

L'exemple suivante montre l'intérêt de l'utilisation des ```let``` en temps de variable temporaire dans un programme.

```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // c'est la même variable !
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```

En utilisant les ```var``` dans la fonction ci-dessus on remarque que la cette dernière est globale. Ainsi, alors que nous avons déclaré **deux** variables, l'une dans le bloc de la fonction et l'autre dans le bloc de la condition ces dernières ne font qu'une. En sortie de condition la variable x est donc égale à 2. Les deux variables osnt donc les même.

```
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // c'est une variable différente
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

Dans l'exemple ci-dessus les deux variables sont bien dépendantes de leur bloc d'instruction et donc différentes.

### les fonctions et méthodes

Une fonction désigne en programmation un « sous-programme » permettant d’effectuer des opérations répétitives. Au lieu d’écrire le code complet autant de fois que nécessaire, on crée une fonction que l’on appellera pour l’exécuter, ce qui peut aussi alléger le code, le rendre plus lisible. La définition de fonction est la suivante :

_On appelle fonction une partie de code recevant une ou plusieurs informations à partir desquelles elle retourne une ou plusieurs informations. Les informations fournies à la fonction sont appelées arguments ou paramètres de la fonction. Les informations renvoyées par la fonction sont appelées résultat._

Nous pouvons comparer la fonction à une «action à faire» par notre programme nous permettant ainsi de répéter cette action. Une fonction s’écrit de la manière suivante.

```
function nomDeLaFonction(param){
     //action à effectuer;
}
```

Nous distinguerons deux type de fonction :

Fonction retournant un résultat, il s'agit de **méthodes**. Ces méthodes «répondent» au programme en renvoyant un résultat.

```
function addition(x1, x2){
     return x1 + x2; 
}
```

L’exemple ci-dessus montre l’écriture d’une fonction renvoyant le résultat de x1+x2 permettant ainsi d’effectuer une action avec résultat Nous l’utiliserons de la manière suivante :

```
var resultat = addition(1, 2);
```

Ici résultat sera alors égale à 3

La procédure, où la fonction exécutant un action. Il s’agit d’une fonction ne renvoyant aucun résultat mais effectuant un action comme dessiner un objet sur la scène.

```
function dessinerUnePoint(x, y){
     //Dessine un point aux coordonnées x, y
}
```

### Les opérateurs
Ils permettent d’effectuer divers calculs ou comparaisons. Nous sommes ici dans des notions de bases des mathématiques.

Nous avons différents types d’opérateurs :

Les opérateurs **arithmétiques**
* ```+, –, *, /``` qui permettent d’addition, soustraire, multiplier ou diviser des valeurs.
* ```%``` le modulo qui permet de connaître la valeur d’un reste d’une division (valeur résiduelle) par exemple 17%3 = 2 car 2 est le reste de la division de 17/3

Les opérateurs **d’assignation**
* ```=``` permet d’attribuer une valeur à un variable
* ```+=, -=, *=, /=```permettent d’incrémenter, soustraire, multiplier ou diviser des valeurs par exemple x = x+1 est la même chose que x +=1;

Les opérateur **d’accumulation**
* ```+=, -=, *= /=, %=``` Les opérateurs d’accumulation sont des opérateurs qui ajoutent une valeur à la variable.
Par exemple, ma variable var1 vaut 10. Je veux lui ajouter 5. Je peux écrire var1 = var1 + 5 ou var1 += 5. Cette expression est très souvent utilisée dans les boucles.

Les opérateurs **relationnels**
* ```>, <, <=, =>, == , !=``` permettent de comparer deux valeurs afin de savoir si celles-ci sont supérieur, inférieur, supérieur ou égale, inférieur ou égale, égale ou différentes. Ces opérateur ne renvoi que des valeurs booléennes, c’est à dire vrai ou faux. Par exemple 1 == 2 renverra la valeur « false » car 1 n’est pas égale à 2

Les opérateurs **logiques**
* ```&& ||```permettent d’effectuer des opérations booléenne de type ET et OU.

### Les structures conditionnelles
Les structures conditionnelles permettent de comparer des valeur de d’attribuer des conditions.
Par exemple j’aimerai pouvoir marcher que si mes lacets sont fait sinon je tombe pourrait s’écrire :

```
var lacetsFait = true; //ici mes lacets sont fait, si lacetFait = false alors il ne sont pas fait
var tombe; //ici la variable booléenne n'est pas encore définie car je ne sais pas encore si je vais tomber ou pas

if(lacetFait == true)
{
    tombe = false;
}
else{
    tombe = true;
}
```

Il existe différent type de structures conditionnelles tel que :

* Si. Structure conditionnelle simple permettant de vérifier une condition telle que Si x est égale à 3 alors j’effectue une action

```
if(x == 3){
  //action
}
```

* Si, sinon. Structure conditionnelle permettant de vérifier une condition ou non telle que Si x est égale à 3 alors j’effectue une action Sinon j’effectue une autre action

```
if(x == 3){
  //action 1
}else{
  //action 2
}
```

Si, sinon si. Structure conditionnelle permettant de vérifier plusieurs condition ou non telle que Si x est égale à 3 alors j’effectue une action Sinon si x est égale à 6 j’effectue une autre action, Sinon, j’effectue une tiers action

```
if(x == 3){
//action 1
}else if(x == 6){
//action 2
}else{
//action 3
}
```

* Switch/case. Structure conditionnelle permettant d’effectuer des actions selons des cas prédéfinis
Dans le cas où x est égales à une valeur entière.
Si x est égales à 3, j’effectue l’action 1,
Si x est égales à 6, j’effectue l’action 2,
Si x est égales à 9, j’effectue l’action 3,

```
swicth(x){
   case 3 : //action 1
   break;
   case 6 : //action 2
   break;
   case 3 : //action 3
   break;
}
```

### Les structures itératives
En mathématique, un itération est l’action de répéter un processus. La structure itérative permet d’effectuer une suite d’opération. Très utilisé pour effectuer plusieurs actions simultanées.

Par exemple, si je désire dessiner des lignes verticales de 100 pixels de haut et ce tous les 10 pixels de large je pourrais très bien écrire :

```
line(0, 0, 0, 100);
line(10, 0, 10, 100);
line(20, 0, 20, 100);
line(30, 0, 30, 100);
line(40, 0, 40, 100);
```

Et ce pour autant de largeur que je veux pour mon dessins. C’est assez simple pour un dessin de 100 pixel de large mais que ce passe-t-il pour 1920 pixels de large.
Je ne vais pas écrire 1920/10, soit 192 fois la même ligne? C’est là où la structure itérative entre en action. Elle va me permette de dire que pour une variable i égale 0 (mon départ); i toujours inférieur à 1920 (la limite de mon dessin) et i s’incrémentant de 10 pixels (cad pour i=0 puis 10, puis 20…) alors je dessine mes lignes. Ce qui donne :

```
for(let i = 0; i<1920; i+=10)
{
  line(i, 0, i, 100);
}
```

Ici nous pouvons traduire l’itération par la phrase suivante :

```
Pour un nombre entier i; i étant toujours inférieur à 1920; et i s’incrémentant de 10
for(int i = 0; i<1920; i+=10){}
```

La structure itérative s’écrit donc de la manière suivante : 
```
for(type variable = valeurDeDépart; variable limité à; variable  s’incrémetant de){}
```

Une seconde forme de structure itérative existe et fonctionne sur un paradigme légèrement différent utilisant la notion de «Pendant que». Cette structure permet d’effectuer une itération tant qu’une certaines condition n’a pas été atteinte. Elle s’écrit de la manière suivante :

```
while(condition){
//action
}
```

Dans l’exemple suivant nous effectuerons une action tant que i est inférieur à 10; à chaque fin d’action nous incrémentons i de 1 afin de passer à l’itération suivante.

```
int i=0;
while(i < 10){
//action
i++;
}
```



## Guess the Number
Afin de se familiariser avec la programmation javascript nous allons réaliser un jeu très simple : _**Guess the number**_
Dans ce jeu, l'ordinateur propose à l'utilisateur de deviner un nombre généré aléatoirement entre 1 et 100. Les règles sont les suivantes :

* À chaque tour l'utilisateur propose à l'ordinateur un nombre.
* * Si l'utilisateur à trouvé le bon nombre, alors le jeu est gagné
* * Si l'utilisateur n'a pas trouvé le bon nombre, l'ordinateur lui indiquera si son estimation est trop grande ou trop basse
* Après chaque estimation l'ordinateur indique au joueur l'ensemble des nombres déjà proposés
* L'utilisateur a droit à 10 tours pour deviner le nombre
* À la fin du jeu l'utilisateur pourra relancer une partie

Ce jeu simple peut être retrouvé sur de nombreuse plateformes d'enseignement comme [MDN](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/A_first_splash).
Ici nous nous concentrerons uniquement sur la partie javascript du jeu, ce dernier se déroulera sans interface mais uniquement via la console du navigateur.

La première à faire avant de programmer le jeu est de le décomposer en tâche/fonctions simple et programmable. Ainsi pour ce jeu nous aurons besoins : 

* Générer un nombre aléatoire compris entre 1 et 100
* Enregistrer le nombre de tours déjà joués en commençant par 1
* Fournir au joueur la possibilité de proposer un nombre
* Enregistrer l'ensemble des propositions du joueur
* Vérifier si le nombre saisi par le joueur est juste ou non
* * S'il est correct
* * * Afficher un message de felicitation
* * * Arreter le jeu et proposer au joueur de rejouer
* * S'il est faux et qu'il reste des tours de jeu
* * * Informer le joueur que la proposition est erronée et si cette dernière et trop grande ou trop basse
* * * Permettre au joueur de proposer un nouveau nombre
* * * Incrémenter le nombre de tours joués de 1
* * S'il est faux et qu'il ne reste plus de tours de jeu
* * * Informer le joueur qu'il a perdu et que la partie est fini
* * * Arreter le jeu et proposer au joueur de rejouer
* Une fois que le jeu à redémarrer, s'assurez que l'ensemble du jeu et valeurs sont reinitialisées

Pour commencer ntre programme nous allons créer un fichier _**guessThNumber.js**_ dans lequel nous allons l'écrire. Nous lierons nous programme à notre page HTML via la balise ```<script type="text/javascript" src="guessTheNumber.js"></script>```

### Création des variables
La première étape de notre programme et la création des variables du jeu. Pour ce dernier nous aurons besoins des **4** variables suivantes :

* Le nombre à deviner : il s'agit d'une valeur entière
* Le nombre de tours joués : il s'agit d'une valeur entière
* L'ensemble des nombvres suggérés par l'utilisateur : il s'agit d'un tableau de valeurs entières
* Une valeur définissant si notre jeu à débuté ou non : il s'agit d'une valeur boolean (vrai/faux)

```
var numberToGuess;
var numberOfRounds = 1;
var numbersFromUser = [];
var start = false;
```

### Initialiser le jeu
Avant de commencer à jouer, nous devons permettre à l'utilisateur de lancer le jeu. Cette action permettra de réaliser les actions suivante :

* Générer un nombre **_aléatoire_** compris entre 1 et 100
* Mettre en place le nombre de tours joués à **_1_**
* Mettre en place le tableau **_vide_** des nombres suggérés par l'utilisateur
* Definir le jeu comme **_commencé_** en mettant la valeur boolean ```start``` en vrai

```
/**
 * This function initialize our game. It will set/reset all our variables
 */
function startGame(){
	//We define a random number between 0 and 100
	numberToGuess = Math.round(Math.random() * 100.0);
	//We set the number of rounds to 1
	numberOfRounds = 1;
	//we initialize the array of numbers suggested by the player
	numbersFromUser = [];
	//we set the boolean of the game has true
	start = true;
}

```

Ici nous nottons l'utilsation de la méthode ```Math.random()``` cette dernière permet de **_retourner_** un nombre **_décimal_** (pseudo) aléatoire compris entre 0 et 1. Ainsi en le multipliant par 100 nous obtenons alors un nombre **_décimal_** compris entre 0 et 100.

Afin de faciliter le gameplay du jeu nous allons devoir convertir cette valeur **_décimal_** en valeur **_entière_**.
Pour ce faire nous utilisons la méthode ```Math.round(x)``` retournant la valeur **_entière arrondie à l'entier le plus proche_** de la valeur ```x```. 

Nous notterons également l'utilisation du suffixe ```Math.``` il s'agit ici d'un **objet** [Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math) permettant d'accédfer à de nombreuse méthodes mathématique. 

### Deviner la valeur
Pour deviner la valeur nous décomposerons cette action en deux fonctions. Une première permettant de gérer l'état de jeu et une seconde permettant de vérifier la valeur proposé par l'utilsateur. Nous appelerons ces fonctions ```guess(value)``` et ```checkValue(value)```

La première fonction ```guess(value)``` permettra à l'utilisateur de soumettre un nombre. Cette fonction permet
* Verifier si le jeu est lancé
* * Si oui : 
* * * Vérifier si le nombre maximum de tours n'est pas atteint
* * * * Si non
* * * * * Vérifier si la valeur proposée est égale au nombre à deviner
* * * * * Incrémenter le nombre de tours joués de 1
* * * * Si oui 
* * * * * Indiquer au joueur que le nombre maximum de tours est atteint et que le jeu est fini
* * Si non :
* * * Inviter le joueur à lancer le jeu

```
function guess(value){
	//if the game if start we guess the number, else we invite the game to launch the game
	if(start){
		//check if user has not play its max number of round
		if(numberOfRounds <= 10){
			//we check the user's number
			checkValue(value);
			//we increment the round
			numberOfRounds ++;
		}else{
			//The player has not found the number in 10 round, the game is over
			console.log("You have past the 10 rounds.\nGame Over");
		}
	}else{
		//The game is over, we invite the player to replay
		console.log("The game hasn't start yet or is over, use start() to play");
	}	
}
```

Nous nottons ici une nouvelle forme de fonction prenant une valeur **_value_** entre paranthèses. Cette valeur est appelé paramètre et permet à l'utilisateur de soumettre une valeur directement au sein de la fonction.

La seconde fonction ```checkValue(value)``` permettra de comparer la valeur suggérés par l'utilisateur avec le nombre à trouver. Cette fonction permet
* Vérifier si le nombre suggéré est égale au nombre à trouver
* * Si oui 
* * * Le joueur a gagné, le jeu s'arrête en passant la variable ```start``` en false (faux)
* * Si non
* * * Vérifier si le nombre suggéré est plus grand que le nombre à trouver
* * * * Si oui 
* * * * * Indiquer au joueur que le nombre suggéré est plus grand que celui à trouver
* * * * Si non
* * * * * Indiquer au joueur que le nombre suggéré est plus petit que celui à trouver
* * * Ajouter le nombre suggéré au tableau de nombres précédement suggérés

```
/**
 * This function check if the user's guess is equals, greater or less than the random number
 */
function checkValue(value){
	if(value === numberToGuess){
		//We congratulate the user
		console.log("Congratulation, you have guess the number, It was : "+numberToGuess);
		//the stop the game
		start = false;
	}else{
		if(value > numberToGuess){
			//we indicate to the user its number to greater than the number to guess
			console.log("Sorry your number is greater than the number to guess");
		}else{
			//we indicate to the user its number to lesser than the number to guess
			console.log("Sorry your number is lesser than the number to guess");
		}
		//We add the number to the array of guesses
		numbersFromUser.push(value);
		//we say to the user which numbers he has already suggested
		console.log("You have already suggested the following numbers : ");
		for(var i=0; i<numbersFromUser.length; i++){
			var previous = numbersFromUser[i];
			console.log("\t"+previous);
		}
	}
}
```

### Finalisation
Une fois le programme écrit il ne reste alors plus qu'à tester ce dernier par le biais de la console. Pour rappel vous pouvez retrouver son utilisation via le [wiki](https://github.com/alexr4/CC2018-eartsup/wiki/Debugger-son-programme) du cours. Il suffit alors au joueur d'entrer la méthode ```startGame()``` pour lancer le jeu puis la méthode ```guess(x)``` pour tenter de deviner la valeur.

Vous pouvez également finaliser votre jeux par une intégration d'interface HTML et CSS

## Qu'est-ce qu'une librairie Javascript
Lorsque que l'on cherche à écrire une programme il peut arriver que nous ayons à faire face à dde la mise en place d'un architecture de programme compliqué (moteur physique, moteurs 3D...). Afin de gagner du temps mais également pour s'assurer que cette architecture sera juste nous pouvons nous reposer sur les librairies.

Une librairie javascript est un ensemble de variables, fonctions, méthodes et objets permettant d'étendre rapidement notre programme. Elle sont developpé par divers developpeurs et/oun société. Parmis les plus connues on peut compter : 

* p5js
* Threejs
* Pixijs
* Paperjs
* JQuery
* Materialize
* HSLUV
* ...

## CDNJS (Content Delivery Network)
Pour faire appel à ces librairie il est possible de le télécharger et les charger directement au cœure de la page HTML.
Il est également possible de faire référence à un lien CDN. Un CDN, ou Content Delivery Network, est un réseau de diffusion de contenus. Cela permet aux developpeur de proposer un lien, à jour, de leur librairie associés à leur prublication depuis leurs site ou repository GitHub.

L'un des plus plus connus pour les librairies JS est [CDNJS](https://cdnjs.com/). Ce site permet de retrouver les liens vers une large panel de librairies à jours. Nous utiliserons ce site pour cibler des librairies lors des différents cours.