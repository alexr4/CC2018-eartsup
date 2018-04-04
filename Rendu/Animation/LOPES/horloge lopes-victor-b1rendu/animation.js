function setup() {
  createCanvas(400, 400);
  smooth();
  background(255);
}

function draw() {
  translate(width/2, height/2) ;
    background(255);
    fill(255);
    stroke(50);
    strokeWeight(1);
    ellipseMode(CENTER);
    ellipse(0, 0, 300, 300);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text('12', 0, -100);
    text('3', 110, 0);
    text('6', 0, 120);
    text('9', -110, 0);
    fill(0);
 rectMode(CENTER);
 for (var i = 0; i < 60; i++) {
   stroke(100);
   strokeWeight(1);
   line(0, 150, 0, 130);
   rotate(PI / 30);
 }
 for (var i = 0; i < 12; i++) {
   rect(0, 140, 8, 20);
   rotate(PI / 6);
 }
 noStroke();
  // aiguille des secondes
  fill(150, 80, 0);
  rect(0, - 70, 2, 140);
  ellipse(0, - 120, 10, 10);
  // aiguille des minutes
  fill(0);
  rect(0, - 68, 2, 136);
  // aiguille des heures
  fill(0);
  rect(0, - 40, 10, 80);
  ellipse(0, - 80, 10, 10);
  fill(255);
  ellipse(0, - 76, 6, 6);
}
