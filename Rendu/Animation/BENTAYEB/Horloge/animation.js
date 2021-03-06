var angle_secondes, angle_minutes, angle_heures, division;

function setup() {
  createCanvas(400, 400);
  smooth();
  frameRate(3);
  division = PI / 30;
}
function draw() {
  background(255);
  translate(width / 2, height / 2);
  // dessin du fond du cadran
  fill(255, 180, 0);
  stroke(50);
  strokeWeight(1);
  ellipseMode(CENTER);
  ellipse(0, 0, 300, 300);
  fill(210);
  strokeWeight(2);
  ellipse(0, 0, 290, 290);
  noStroke();
  fill(255);
  ellipse(0, 4, 280, 270);
  fill(51);
  textSize(20);
  textAlign(CENTER);
  text('12', 0, - 100);
  text('3', 110, 5);
  text('6', 0, 120);
  text('9', - 110, 5);
  fill(255, 180, 0);
  textSize(12);
  text('pictalink', 0, 30);
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
  }  // fin du dessin du fond du cadran

  noStroke();
  // aiguille des secondes
  push();
  fill(150, 80, 0);
  angle_secondes = second() * division;
  rotate(angle_secondes);
  rect(0, - 70, 2, 140);
  ellipse(0, - 120, 10, 10);
  pop();
  // aiguille des minutes
  push();
  fill(0);
  angle_minutes = minute() * division;
  rotate(angle_minutes + (angle_secondes / 60));
  rect(0, - 68, 2, 136);
  pop();
  // aiguille des heures
  push();
  fill(0);
  angle_heures = hour() * PI / 6;
  rotate(angle_heures + (angle_minutes / 12));
  rect(0, - 40, 10, 80);
  ellipse(0, - 80, 10, 10);
  fill(255);
  ellipse(0, - 76, 6, 6);
  pop();
  fill(50);
  stroke(150, 100, 100);
  ellipse(0, 0, 16, 16);
  fill(255);
  ellipse(0, 0, 8, 8);
}
