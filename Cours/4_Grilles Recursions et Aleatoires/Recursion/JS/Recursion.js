var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  var x = width/2;
  var y = height/2;
  var margin = 20;
  var radius = width * 0.5 - margin;

  background(240);
  splitCircle(width/2, height/2, radius * 2.0, radius * 2.0)
}

function draw(){
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}

function splitCircle(x, y, radius){
  noFill();
  stroke(180);
  ellipse(x, y, radius * 2.0, radius * 2.0);
  if(radius > 10){
    var newRadius = radius * 0.5;
    var topX = x;
    var topY = y - newRadius;
    var rightX = x + newRadius;
    var rightY = y;
    var bottomX = x;
    var bottomY = y + newRadius;
    var leftX = x - newRadius;
    var leftY = y;

    splitCircle(topX, topY, newRadius);
    splitCircle(rightX, rightY, newRadius);
    splitCircle(bottomX, bottomY, newRadius);
    splitCircle(leftX, leftY, newRadius);
  }
}
