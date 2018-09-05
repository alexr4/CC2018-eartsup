
function setup() {
  createCanvas(600, 850);
  x = width / 2;
  y = height;
}

function draw() {

  background(0,0,0,1);


  fill(0,0,0,1);
  textFont("oswald", );
  textSize(60);
  text("SHINING", width/2-140, 200);

  textSize(15);
  text(" Stanley Kubrick:", width/2-100, 135);
  text(" Jack Nicholson - Danny Lloyd - Scatman Crothers:", width/2-150, 25);

  noStroke();
	fill(237,28,36,90);
	ellipse(mouseX,mouseY,100,100);
}
