var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var x;
var y;
var xSpeed;
var ySpeed;
var radius;


function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  var maxSpeed = random(2.5, 5);
  init(5);
}

function draw(){
  background(220);

  update();
  checkEdges(0, width/2);
  ellipse(x, y, radius * 2, radius * 2);
}


function init(maxSpeed){
  xSpeed = random(-1, 1) * maxSpeed;
  ySpeed = random(-1, 1) * maxSpeed;
  radius = random(20, 40);
  x = random(radius, width-radius);
  y = random(radius, height-radius);
}

function update(){
  x += xSpeed;
  y += ySpeed;
}

function checkEdges(){
  if(x < 0 + radius || x > width - radius){
   xSpeed *= -1;
 }
 if(y < 0 + radius || y > height - radius){
   ySpeed *= -1;
 }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
