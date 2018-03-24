var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;


var maxRadius = 200;
var minRadius = 100;
var nbPoints = 200;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(217);

  var originX = width/2;
  var originY = height/2;

  beginShape();
  for(var i=0; i<nbPoints; i++){
    var angle = i * (TWO_PI / nbPoints);
    var radius = random(minRadius, maxRadius);
    var x = cos(angle) * radius + originX;
    var y = sin(angle) * radius + originY;
    vertex(x, y);
  }
  endShape(CLOSE);

  noLoop();
}

function mousePressed(){
  maxRadius = round(random(150, 200));
  minRadius = round(random(50, 100));
  loop();
}

function keyPressed(){
  nbPoints = round(random(10, 200));
  loop();
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
