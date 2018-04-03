beginShape(CLOSE);
vertex(497, 420);
vertex(420, 497);
vertex(420, 500);
vertex(500, 420);

endShape();

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(11, 11, 11);
}

function draw()
{
  beginShape(CLOSE);
  vertex(-100, 740);
  vertex(100, 600);
  vertex(350, 650);
  vertex(600, 800);
  endShape();

  beginShape(CLOSE);
  vertex(450, 750);
  vertex(800, 670);
  vertex(1050, 650);
  vertex(1200, 770);
  endShape();

  beginShape(CLOSE);
  vertex(1125, 750);
  vertex(1350, 640);
  vertex(1500, 650);
  vertex(1720, 770);
  endShape();


  //ellipse(mouseX, mouseY, 10, 10);
}

function mousePressed()
{
  var i = random(5, 16);

  ellipse(mouseX, mouseY, i, i);
}
