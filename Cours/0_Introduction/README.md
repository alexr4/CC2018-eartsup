
# 27/02/2018 - Préparation

Bienvenus dans ce premier cours, dans celui-ci nous vous présentons le cours ainsi que les différents outils que nous utiliserons.

## Présentation du cours


<iframe width="560" height="315" src="https://www.youtube.com/embed/eBV14-3LT-g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe src="https://player.vimeo.com/video/234283043?color=ffffff&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/234283043">Bonjour, interactive lab - Showreel 2017</a> from <a href="https://vimeo.com/user14681110">Bonjour</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

## Présentation outils

### Github
https://github.com/
Outil de versionning basé sur Git mais ayant une interface graphique permettant de mettre en ligne et de partager du code. On retrouve sur cette plateforme énormément de **library**, **snippets** ou simple morceau de code créer par des personnes dans le monde entier.
Vous retrouverez sur cette plateforme les cours ainsi que les différents exemples et fichiers de base pour les projets. Ce sera aussi sur cette plateforme qu'il vous faudra mettre vos **rendus**.

#### Repositories
Un repository est le dossier principal d'un projet. Il contient tous les sous-dossiers et fichiers. Dans notre cas, le repository est le dossier principal du cours dans lequel seront tous les fichiers relatif au cours.

#### Fork
Un fork permet de cloner un projet sur son compte github et donc de pouvoir le modifier indépendamment du projet principal. Dans le cas du cours il ne faudra pas faire de fork sur le repository du cours.

#### Commit
Un commit est un snapshot (une capture à l'instant T) des modifications faites dans le repository (ajout de fichier, modification, suppression, déplacement...). Lorsque vous modifier des fichiers dans le dossier vous devez faire un commit en indiquant les modifications effectuées grâce à un titre et à des détails (Ex: Création du projet X, modification du code Y). Le commit permet de savoir au serveur ce qui a été modifié et donc permet aux autres utilisateurs/développeurs les modifications effectuées.

#### Push

Un Push se fait à la suite d'un commit, il permet d'envoyer les modifications de fichiers au serveur, ce n'est qu'à partir de ce moment la que les changements seront vraiment pries en compte et que les autres utilisateurs pourront les voir.
Si vous passez par l'interface web et le bouton "Upload files", le commis et le push se font au même moment lors de l'appui sur le bouton "Commit change".
Si vous passez par le logiciel github desktop il faudra faire attention à commit les changements et ensuite les Push.

#### Branch
Les branches est un principe qu'on retrouve dans Git. Lors de la création d'un Repository, une branche dite "master" est créer, c'est la branch principal. Il est possible lors de la modification d'un code de vouloir changer les fichiers pour un temps sans que ceux-ci impact la branche principale et donc le code utiliser et/ou modifier par les autres utilisateurs. On créera donc des branches secondaires pour nos modifications qui seront une fois celle-ci validées fusionnées avec la branche principale.
Dans le cadre de ce cours, nous ne travaillerons que dans la branche principale.

#### Versionning
Le versionning est la base de Github, quand vous ajouter ou modifier des fichiers dans le repository Github va garder en mémoire toutes les versions des documents, ce qui vous permettra de revenir en arrière si nécessaire ou de comparer les modifications.


## Création du compte Github + Upload

### Créer le compte Github
Dans Github créez votre compte, la création d'un compte github est gratuit.
Lorsque ce compte est créé, il faudra que l'on vous ajoute en tant que contributeur sur le repository, cela vous permettra de faire des modifications et ajouter des fichiers.

// Ajout élèves

Repository du cours : https://github.com/alexr4/CC2018-eartsup

### Organisation du repository

### Comment ajouter / modifier vos fichiers

Pour ajouter vos fichiers dans le repository il faudra vous rendre dans le dossier comportant votre nom et cliquer sur le bouton Upload file, dans la nouvelle fenêtre déposée  vos fichiers. Indiqué dans le premier champ l'intitulé de l'envoi (type : "Ajout des fichiers du projet X ..."). Dans le deuxième champ, vous pouvez donner plus d'informations sur les fichiers que vous envoyez. 
Cliquez ensuite sur Commit changes.

Pour mettre à jour des dossiers et fichiers déjà mis en ligne, vous devez effectuer exactement la même action que pour l'ajout en indiquant un intitulé et en décrivant les changements dans le deuxième champ (ex : changement couleurs, augmentation taille ...). 
Cliquez ensuite sur Commit changes.  
Github mettra automatiquement à jours les fichiers qui existai déjà dans le repository et ajoutera les nouveaux. 
Github étant basé sur le versionning, vous pourrez toujours retrouver les anciennes versions des fichiers.

## Atom

Pour ce cours nous utiliserons l'éditeur de code Atom. Cet éditeur à l'avantage d’êtres gratuits et open sources, d’être édité par github et permet donc le commit et le push des modifications directement sur Github (même si nous n'utiliserons pas cette fonction).
https://atom.io/

### Ouverture d'un projet
Pour Atom un projet est un dossier ou se trouve votre projet. Pour ouvrir un projet il vous suffira de faire : File > Add Project Folder et de sélectionner le dossier de votre projet. Tous les fichiers et sous-dossiers de votre projet apparaîtront dans le panneau Projet à gauche.

## Le serveur local

Pour pouvoir utiliser toutes les fonctionnalités nécessaires, nous avons besoin de mettre en place un serveur web local. Avoir un serveur sur sont ordinateur permet de simuler un hébergement en ligne tout en gardant les fichiers sur sont ordinateurs, elle permette par exemple d'utiliser d'importer des fichiers externes pendant que notre programme tourne, ce qui serait impossible sans cela.

Pour des programmes n'ayant pas besoin d'élément externe il est possible de simplement ouvrir le fichier HTML dans le navigateur, mais cette technique ayant ces limites il vaut mieux commencer par utiliser un webserver le plus tôt possible.Il existe plusieurs solutions pour lancer un webserver local, la plus complète étant l'installation de logiciel type WAMP ou MAMP, ces logiciels sont des suites d'outils permettant le développement de site internet complet (avec base de donnée, PHP etc etc). Il est aussi possible d'utiliser des plug-ins chrome. 

Dans notre cas nous allons utiliser un module Atom ce qui sera plus simple à installer et à utiliser. Ce module offre moins de fonctionnalité que les premières solutions évoquées, mais est largement suffisant pour notre utilisation.

### Installation

Nous allons dans cette partie utiliser le module atom : Atom-live-server https://atom.io/packages/atom-live-serverPour l'installer ouvrez Atom et faite : File > Settings . 

Dans la nouvelle fenêtre, cliquez sur Install dans le panneau de gauche. Dans la barre de recherche écrivez le nom : atom-live-server et clique sur Install.VOILA

### Utilisation
Pour utiliser le module ouvrez un projet comme vu précédemment, une fois celui-ci ouvert dans Atom rendez-vous dans Packages > atom-live-server et cliquer sur Start server. Une fenêtre devrait s'ouvrir dans votre navigateur affichant vos fichiers et sous dossier présent dans le projet. Cliquez sur le fichier index.html du projet que vous souhaitez afficher. 
