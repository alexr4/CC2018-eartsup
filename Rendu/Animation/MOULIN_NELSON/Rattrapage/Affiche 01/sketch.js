
var Impact;
var ypos = -50;
var yInc = 0;

function preload() {
  Impact = loadFont('Assets/Impact.ttf');
}

function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//FOND
  background(255,237,34);
	background(255,237,34,33);

//TEXTE

	textFont(Impact);
	textSize(21);
	fill(237,28,36);
	text('THE 4TH FILM BY QUENTIN TARENTINO',39,73);
	textSize(215);
	fill(33,33,33);
	text('KILL',31,253);
	text('BILL',31,438);
	textSize(54);
	fill(237,28,36);
	text('VOLUME 1',40,495);

//SANG

	var rdmY = noise(yInc)*1;
	yInc += 0.1;

	ypos = ypos+rdmY;
	if(ypos > height+100){
		ypos = -50;
	}

	noStroke();
	fill(237,28,36);
	ellipse(470,ypos,50-rdmY*2,50+rdmY*2);

//BANDE NOIRE

	fill(33,33,33);
	rect(468,0,71,850);

}
