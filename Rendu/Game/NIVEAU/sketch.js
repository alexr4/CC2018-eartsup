var radiusList = [];
var nbPoint = 1200;
var redefined = false;

function redefinedRadius(){
  radiusList=[];
  for(var i=0; i<nbPoint; i++){
  var radius = random(100, 200);
  radiusList.push(radius);
  }

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  redefinedRadius();
}

function draw(){
  background(200);
  beginShape();
  vertex(random(1000),random(1000));
  vertex(random(-1000),random(-1000));
  vertex(random(-1000),random(1000));
  vertex(random(1000),random(-1000));
  vertex(random(1400),random(-1400));
  vertex(random(-1400),random(1400));
  endShape();
  fill(0, 0, 0, 170);
  translate(mouseX, mouseY);
  rotate(radians(millis()*0.1));
  strokeWeight(0);
  rectMode(CENTER);
  rect(0, 0, 50, 50);
}

function mousePressed(){
  redefinedRadius();
}

function keyPressed(){
  if(keyCode == 82){
    redefinedRadius();
  }
}
