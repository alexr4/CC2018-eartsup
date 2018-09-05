
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

  background(173,90,0);
	background(100,30,0,75);

  noStroke();


  var rdmY = noise(yInc)*3;
  yInc += 0.9;

  ypos = ypos+rdmY;
  if(ypos > height+900){
    ypos = -500;
  }
  fill(224,149,10);
  ellipse(300,-280,1600,999+rdmY*4);
  fill(224,117,0);
  ellipse(300,-280,1600,980+rdmY*3);
  fill(33,33,33);
  ellipse(300,-280,1500,950);
  fill(109,179,191);
  ellipse(300,ypos,50-rdmY*2,9999+rdmY*2);
  noStroke();

  fill(33,33,33);
  ellipse(250,1200,2500,1050);
  textFont(Impact);
	textSize(19);
	fill(330,330,330);
	text('Will Smith - Bill Pullman - Jeff Goldblum - Mary McDonnell - Randy Quaid',14,820);
	textSize(77);
	fill(330,330,330);
	text('INDEPENDANCE',10,790);
	text('DAY',470,790);



}
