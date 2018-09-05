
function setup() {
  createCanvas(600, 850);
  x = width / 2;
  y = height;
}

function draw() {

  background(0,0,0,20);


  fill(0,0,0,);
  textFont("oswald", );
  textSize(100);
  text("FIGHTCLUB", width/2-280, 400);

  textSize(15);
  text(" EDWARD NORTON", width/2-100, 535);
  text(" BRAD PITT", width/2-150, 25);

  noStroke();
	fill(237,28,36);
	rect(0,mouseY,600,50);
  noStroke();
	fill(38,147,161);
	rect(0,mouseY+100,600,50);
}
