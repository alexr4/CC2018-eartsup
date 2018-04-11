
function modifyStatut(element, message) {
	element.innerHTML = message;
}

function isValid(valeur) {
	return valeur.innerHTML == 0;
}

function setSymbole(bouton, joueur) {
	bouton.innerHTML = joueur;
}

function searchWinner(pions, gamers, currentTurn) {
	if (pions[0].innerHTML == gamers[currentTurn] &&
		pions[1].innerHTML == gamers[currentTurn] &&
		pions[2].innerHTML == gamers[currentTurn])
	return true;

	if (pions[3].innerHTML == gamers[currentTurn] &&
		pions[4].innerHTML == gamers[currentTurn] &&
		pions[5].innerHTML == gamers[currentTurn])
	return true;

	if (pions[6].innerHTML == gamers[currentTurn] &&
		pions[7].innerHTML == gamers[currentTurn] &&
		pions[8].innerHTML == gamers[currentTurn])
	return true;

	if (pions[0].innerHTML == gamers[currentTurn] &&
		pions[3].innerHTML == gamers[currentTurn] &&
		pions[6].innerHTML == gamers[currentTurn])
	return true;

	if (pions[1].innerHTML == gamers[currentTurn] &&
		pions[4].innerHTML == gamers[currentTurn] &&
		pions[7].innerHTML == gamers[currentTurn])
	return true;

	if (pions[2].innerHTML == gamers[currentTurn] &&
		pions[5].innerHTML == gamers[currentTurn] &&
		pions[8].innerHTML == gamers[currentTurn])
	return true;

	if (pions[0].innerHTML == gamers[currentTurn] &&
		pions[4].innerHTML == gamers[currentTurn] &&
		pions[8].innerHTML == gamers[currentTurn])
	return true;

	if (pions[2].innerHTML == gamers[currentTurn] &&
		pions[4].innerHTML == gamers[currentTurn] &&
		pions[6].innerHTML == gamers[currentTurn])
	return true;
}

function matchNul(pions, gamers, currentTurn) {
	for (var i = 0, len = pions.length; i < len; i++) {
		if (pions[i].innerHTML == 0)
		return false
	}
	return true
}

function main() {
	var currentTurn = Math.floor((Math.random())),
		isGameOver = false,
		afficheur = document.querySelector("#gameStatus"),
        pions = document.querySelectorAll("#game button");
        modifyStatut(afficheur, "Le jeu peut démarrer.<br/>Joueur " + gamers[currentTurn] + " ("+ gamersnom[currentTurn] +"), &#224; vous de jouer...");

	for (var i = 0, len = pions.length; i < len; i++) {
		pions[i].addEventListener("click", function() {
			if (isGameOver)
				return;

			if (isValid(this)) {
				setSymbole(this, gamers[currentTurn]);
				if (searchWinner(pions, gamers, currentTurn)) {
					modifyStatut(afficheur, "Le joueur " + gamers[currentTurn] + " ("+ gamersnom[currentTurn] +") a gagné ! :D<br /><a href=\"index.html\">Rejouer ?</a>");
					isGameOver = true;
				} else if (matchNul(pions, gamers, currentTurn)) {
					modifyStatut(afficheur, "Match Nul ! :O<br /><a href=\"index.html\">Rejouer ?</a>");
					isGameOver = true;
				} else {
					currentTurn++;
					currentTurn = currentTurn % 2;
					modifyStatut(afficheur, "Joueur " + gamers[currentTurn] + " ("+ gamersnom[currentTurn] +"), c'est &#224; votre tour !");
				}
			} else {
			modifyStatut(afficheur, "Quelqu'un a déjà joué ici !");
			}
		});
	}
}

function SelectVerif() {
	if (this.innerHTML.split(">")[1] != gamersnom[currentSelection - 1]) {
		gamersnom[currentSelection] = this.innerHTML.split(">")[1];
		gamers[currentSelection] = this.innerHTML.split(">")[0] + ">";
		alert("Joueur " + (currentSelection + 1) + ", vous avez choisi " + gamersnom[currentSelection]);
		currentSelection++;
		modifyStatut(document.querySelector("#gameStatus"), "Joueur 2, choisissez votre poney préféré ! :)");

		if (currentSelection > 1) {
			demarrer = true;
			document.querySelector("#game").style.display = "";
			document.querySelector("#selecteur").style.display = "none";
			main();
        }
	}
}

function selecteur() {
	var afficheur = document.querySelector("#gameStatus"),
		poneys = document.querySelectorAll("#selecteur button"),
		images = ['<img src="img/ts.gif">', '<img src="img/rd.gif">', '<img src="img/aj.gif">', '<img src="img/pp.gif">', '<img src="img/r.gif">', '<img src="img/f.gif">'],
		noms = ['Twilight Sparkle', 'Rainbow Dash', 'Applejack', 'Pinkie Pie', 'Rarity', 'Fluttershy'];

	document.querySelector("#game").style.display = "none";
	modifyStatut(afficheur, "Joueur " + (currentSelection + 1) + ", choisissez votre poney préféré ! :)");

	for (var i = 0, len = poneys.length; i < len; i++) {
		poneys[i].innerHTML = images[i] + noms[i];
		poneys[i].addEventListener("click", SelectVerif);
	}
}

var currentSelection = 0,
	gamers = ['', ''],
	gamersnom = ['', ''];

selecteur();
