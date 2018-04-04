 var division;
 var angle_secondes, angle_minutes, angle_heures;

function setup() {
  createCanvas(400, 400);
  smooth();
  background(255);
  division = PI/30 ;
}
function draw() {
  translate(width/2, height/2);
  fill(255);
  stroke(50);
  strokeWeight(1);
  ellipseMode(CENTER);
  ellipse( 0, 0, 300, 300);

  fill(0);
    rectMode(CENTER);
    for (var i = 0; i < 60; i++) {
      stroke(100);
      strokeWeight(1);
      line(0, 150, 0, 130);
      rotate(PI / 30);
    }
    noStroke();






  // aiguille des secondes
  push()
  angle_secondes = second() * division;
rotate(angle_secondes);
  fill(170, 80, 10);
  rect(0, - 70, 2, 140);
pop()


  // aiguille des minutes
  push()
  angle_minutes = minute() * division;
   rotate(angle_minutes + (angle_secondes / 60));
  fill(0);
  rect(0, - 68, 2, 136);
pop()


  // aiguille des heures
  push()
  angle_heures = hour() * PI / 6;
    rotate(angle_heures + (angle_minutes / 12));
  fill(0);
  rect(0, - 40, 10, 80);
  fill(222, 10, 60);
pop()


    
}
