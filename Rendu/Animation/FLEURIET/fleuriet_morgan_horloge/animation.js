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
  // dessin fond cadran
  fill(255, 180, 0);
  stroke(50);
  strokeWeight(1);
  ellipseMode(CENTER);
  ellipse(0, 0, 304, 304);
  fill(61, 55, 57,);
  strokeWeight(2);
  ellipse(0, 0, 290, 290);
  noStroke();
  fill(89, 81, 83);
  ellipse(0, 4, 280, 270);
  fill(191, 46, 33);
  textSize(20);
  textAlign(CENTER);
  text('12', 0, - 100);
  text('3', 110, 5);
  text('6', 0, 120);
  text('9', - 110, 5);
  fill(191, 46, 33);
  textSize(20);
  text('Horloge', 0, 60);
  text('Fleuriet Morgan', 0, 80);
  fill(191, 46, 33);
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
  }  // fin dessin fond cadran

  noStroke();
  // aiguille secondes
  push();
  fill(191, 46, 33);
  angle_secondes = second() * division;
  rotate(angle_secondes);
  rect(0, - 70, 2, 140);
  ellipse(0, - 120, 10, 10);
  pop();
  // aiguille  minutes
  push();
  fill(0);
  angle_minutes = minute() * division;
  rotate(angle_minutes + (angle_secondes / 60));
  rect(0, - 68, 2, 136);
  pop();
  // aiguille heures
  push();
  fill(0);
  angle_heures = hour() * PI / 6;
  rotate(angle_heures + (angle_minutes / 12));
  rect(0, - 40, 10, 80);
  ellipse(0, - 80, 10, 10);
  fill(191, 46, 33);
  ellipse(0, - 76, 6, 6);
  pop();
  fill(191, 46, 33);
  stroke(150, 100, 100);
  ellipse(0, 0, 16, 16);
  fill(255, 180, 0);
  ellipse(0, 0, 8, 8);
}
