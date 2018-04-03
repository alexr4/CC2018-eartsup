var secondes, minutes, heures, division, PI;

function setup()
{
  createCanvas(1000, 1000);
  background(120, 70, 100);
  frameRate(3);
  division = PI / 30 ;
}

function draw() {
   translate(width/2, height/2);
  fill(100, 120, 255);
  stroke(10, 10, 10);
  strokeWeight(4);
  ellipse (0, 0, 400, 400);
  textSize(15);
  textAlign(CENTER);
  text('12', 0, -140);
  text('3', 150, 5);
  text('6', 0, 160);
  text('9', -150, 5);
  fill(0);
  rectMode(CENTER);
  for (var i = 0; i < 60; i++) {
    stroke(50);
    strokeWeight(1);
    line(0, 170, 0, 190);
    rotate(PI / 30);
  }
  for (var i = 0; i < 12; i++) {
    rect(0, 180, 8, 20);
    rotate(PI / 6);
  }

  noStroke();

 // secondes
 push();
  fill(220, 80, 180);
  secondes = second() * division;
  rotate(secondes);
  rect(0, - 70, 2, 140);
 pop();

 // minutes
 push();
  fill(255);
  minutes = minute() * division;
  rotate(minutes + (secondes/60) );
  rect(0, - 68, 2, 136);
 pop();

 // heures
 push();
  fill(0);
  heures = hour() * PI / 6;
  rotate(heures + (minutes / 12))
  rect(0, - 40, 10, 80);
  fill(255);
pop();

  fill(50);
  stroke(100, 100, 100);
  ellipse(0, 0, 16, 16);
  fill(255);
  ellipse(0, 0, 8, 8);

}
