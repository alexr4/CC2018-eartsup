
<h1 id="préparation">27/02/2018 - Préparation</h1>
<p>Bienvenus dans ce premier cours, dans celui-ci nous vous présentons le cours ainsi que les différents outils que nous utiliserons.</p>
<h2 id="présentation-du-cours">Présentation du cours</h2>
<p>The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the <strong>New file</strong> button in the file explorer. You can also create folders by clicking the <strong>New folder</strong> button.</p>
<h2 id="présentation-outils">Présentation outils</h2>
<h3 id="github">Github</h3>
<p><a href="https://github.com/">https://github.com/</a><br>
Outil de versionning basé sur Git mais ayant une interface graphique permettant de mettre en ligne et de partager du code. On retrouve sur cette plateforme énormément de <strong>library</strong>, <strong>snippets</strong> ou simple morceau de code créer par des personnes dans le monde entier.<br>
Vous retrouverez sur cette plateforme les cours ainsi que les différents exemples et fichiers de base pour les projets. Ce sera aussi sur cette plateforme qu’il vous faudra mettre vos <strong>rendus</strong>.</p>
<h4 id="repositories">Repositories</h4>
<p>Un repository est le dossier principal d’un projet. Il contient tous les sous-dossiers et fichiers. Dans notre cas, le repository est le dossier principal du cours dans lequel seront tous les fichiers relatif au cours.</p>
<h4 id="fork">Fork</h4>
<p>Un fork permet de cloner un projet sur son compte github et donc de pouvoir le modifier indépendamment du projet principal. Dans le cas du cours il ne faudra pas faire de fork sur le repository du cours.</p>
<h4 id="commit">Commit</h4>
<p>Un commit est un snapshot (une capture à l’instant T) des modifications faites dans le repository (ajout de fichier, modification, suppression, déplacement…). Lorsque vous modifier des fichiers dans le dossier vous devez faire un commit en indiquant les modifications effectuées grâce à un titre et à des détails (Ex: Création du projet X, modification du code Y). Le commit permet de savoir au serveur ce qui a été modifié et donc permet aux autres utilisateurs/développeurs les modifications effectuées.</p>
<h4 id="push">Push</h4>
<p>Un Push se fait à la suite d’un commit, il permet d’envoyer les modifications de fichiers au serveur, ce n’est qu’à partir de ce moment la que les changements seront vraiment pries en compte et que les autres utilisateurs pourront les voir.<br>
Si vous passez par l’interface web et le bouton “Upload files”, le commis et le push se font au même moment lors de l’appui sur le bouton “Commit change”.<br>
Si vous passez par le logiciel github desktop il faudra faire attention à commit les changements et ensuite les Push.</p>
<h4 id="branch">Branch</h4>
<p>Les branches est un principe qu’on retrouve dans Git. Lors de la création d’un Repository, une branche dite “master” est créer, c’est la branch principal. Il est possible lors de la modification d’un code de vouloir changer les fichiers pour un temps sans que ceux-ci impact la branche principale et donc le code utiliser et/ou modifier par les autres utilisateurs. On créera donc des branches secondaires pour nos modifications qui seront une fois celle-ci validées fusionnées avec la branche principale.<br>
Dans le cadre de ce cours, nous ne travaillerons que dans la branche principale.</p>
<h4 id="versionning">Versionning</h4>
<p>Le versionning est la base de Github, quand vous ajouter ou modifier des fichiers dans le repository Github va garder en mémoire toutes les versions des documents, ce qui vous permettra de revenir en arrière si nécessaire ou de comparer les modifications.</p>
<h2 id="création-du-compte-github--upload">Création du compte Github + Upload</h2>
<h3 id="créer-le-compte-github">Créer le compte Github</h3>
<p>Dans Github créez votre compte, la création d’un compte github est gratuit.<br>
Lorsque ce compte est créé, il faudra que l’on vous ajoute en tant que contributeur sur le repository, cela vous permettra de faire des modifications et ajouter des fichiers.</p>
<p>// Ajout élèves</p>
<p>Repository du cours : <a href="https://github.com/alexr4/CC2018-eartsup">https://github.com/alexr4/CC2018-eartsup</a></p>
<h3 id="organisation-du-repository">Organisation du repository</h3>
<h3 id="comment-ajouter--modifier-vos-fichiers">Comment ajouter / modifier vos fichiers</h3>
<p>Pour ajouter vos fichiers dans le repository il faudra vous rendre dans le dossier comportant votre nom et cliquer sur le bouton Upload file, dans la nouvelle fenêtre déposée  vos fichiers. Indiqué dans le premier champ l’intitulé de l’envoi (type : “Ajout des fichiers du projet X …”). Dans le deuxième champ, vous pouvez donner plus d’informations sur les fichiers que vous envoyez.<br>
Cliquez ensuite sur Commit changes.</p>
<p>Pour mettre à jour des dossiers et fichiers déjà mis en ligne, vous devez effectuer exactement la même action que pour l’ajout en indiquant un intitulé et en décrivant les changements dans le deuxième champ (ex : changement couleurs, augmentation taille …).<br>
Cliquez ensuite sur Commit changes.<br>
Github mettra automatiquement à jours les fichiers qui existai déjà dans le repository et ajoutera les nouveaux.<br>
Github étant basé sur le versionning, vous pourrez toujours retrouver les anciennes versions des fichiers.</p>
<h2 id="atom">Atom</h2>
<p>Pour ce cours nous utiliserons l’éditeur de code Atom. Cet éditeur à l’avantage d’êtres gratuits et open sources, d’être édité par github et permet donc le commit et le push des modifications directement sur Github (même si nous n’utiliserons pas cette fonction).<br>
<a href="https://atom.io/">https://atom.io/</a></p>
<h3 id="ouverture-dun-projet">Ouverture d’un projet</h3>
<p>Pour Atom un projet est un dossier ou se trouve votre projet. Pour ouvrir un projet il vous suffira de faire : File &gt; Add Project Folder et de sélectionner le dossier de votre projet. Tous les fichiers et sous-dossiers de votre projet apparaîtront dans le panneau Projet à gauche.</p>
<h2 id="le-serveur-local">Le serveur local</h2>
<p>Pour pouvoir utiliser toutes les fonctionnalités nécessaires, nous avons besoin de mettre en place un serveur web local. Avoir un serveur sur sont ordinateur permet de simuler un hébergement en ligne tout en gardant les fichiers sur sont ordinateurs, elle permette par exemple d’utiliser d’importer des fichiers externes pendant que notre programme tourne, ce qui serait impossible sans cela.</p>
<p>Pour des programmes n’ayant pas besoin d’élément externe il est possible de simplement ouvrir le fichier HTML dans le navigateur, mais cette technique ayant ces limites il vaut mieux commencer par utiliser un webserver le plus tôt <a href="http://possible.Il">possible.Il</a> existe plusieurs solutions pour lancer un webserver local, la plus complète étant l’installation de logiciel type WAMP ou MAMP, ces logiciels sont des suites d’outils permettant le développement de site internet complet (avec base de donnée, PHP etc etc). Il est aussi possible d’utiliser des plug-ins chrome.</p>
<p>Dans notre cas nous allons utiliser un module Atom ce qui sera plus simple à installer et à utiliser. Ce module offre moins de fonctionnalité que les premières solutions évoquées, mais est largement suffisant pour notre utilisation.</p>
<h3 id="installation">Installation</h3>
<p>Nous allons dans cette partie utiliser le module atom : Atom-live-server <a href="https://atom.io/packages/atom-live-serverPour">https://atom.io/packages/atom-live-serverPour</a> l’installer ouvrez Atom et faite : File &gt; Settings .</p>
<p>Dans la nouvelle fenêtre, cliquez sur Install dans le panneau de gauche. Dans la barre de recherche écrivez le nom : atom-live-server et clique sur Install.VOILA</p>
<h3 id="utilisation">Utilisation</h3>
<p>Pour utiliser le module ouvrez un projet comme vu précédemment, une fois celui-ci ouvert dans Atom rendez-vous dans Packages &gt; atom-live-server et cliquer sur Start server. Une fenêtre devrait s’ouvrir dans votre navigateur affichant vos fichiers et sous dossier présent dans le projet. Cliquez sur le fichier index.html du projet que vous souhaitez afficher.</p>

