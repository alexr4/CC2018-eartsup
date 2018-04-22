var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var loc;
var velocity;
var acceleration;
var maxSpeed;
var radius;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  radius = 40;
  loc = createVector(width/2, height/2);
  acceleration = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  velocity = createVector(0, 0);
  maxSpeed = random(10, 15);
}

function draw(){
  background(220);

  //mouvement :
  velocity.add(acceleration);
  velocity.limit(maxSpeed)
  loc.add(velocity);
  checkEdges();

  ellipse(loc.x, loc.y, radius * 2, radius * 2);

  var len = radius;
  var normVel = velocity.copy().normalize(velocity);
  line(loc.x, loc.y, loc.x + normVel.x * len, loc.y + normVel.y * len);

}

function checkEdges(){
  //check edges
  if(loc.x > width + radius){
    loc.x = -radius;
  }else if(loc.x < -radius){
    loc.x = width;
  }
  if(loc.y > height + radius){
    loc.y = -radius;
  }else if(loc.y < -radius){
    loc.y = height;
  }
}


function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
