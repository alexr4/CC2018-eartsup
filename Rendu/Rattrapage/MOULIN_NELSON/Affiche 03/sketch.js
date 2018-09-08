
var Impact;
var x =1;
var y;
var speedX = 1;
var speedY;

function update(){
  x += speedX;
  y += speedY;
}

function preload() {
  Impact = loadFont('Assets/Impact.ttf');
}

function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//FOND
  background(4,178,209);
	background(148,207,201,33);

//TEXTE

	textFont(Impact);
	textSize(16);
	fill(237,28,36);
	text('Steven Spielberg - Roy Scheider - Robert Shaw - Richard Dreyfuss',39,73);
	textSize(215);
	fill(33,33,33);
	text('JAWS',10,303);



  noStroke();




fill(200,300,700);
  triangle(mouseX+600,650,mouseX+500,400,mouseX+400,550);
	fill(237,28,36);
	rect(1000,500,-7001,1000);
  fill(33,33,33);
  rect(1000,800,-7001,100)

}
