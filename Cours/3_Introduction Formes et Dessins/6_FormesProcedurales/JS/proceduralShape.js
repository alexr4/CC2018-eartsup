var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

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
  var minRadius = 100;
  var maxRadius = 200;
  var nbPoints = 200;

  /**
  By default, random() produces different results each time the program is run. Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.
  */
  randomSeed(1);

  beginShape();
  for(var i=0; i<nbPoints; i++){
    var angle = i * (TWO_PI / nbPoints);
    var radius = random(minRadius, maxRadius);
    var x = cos(angle) * radius + originX;
    var y = sin(angle) * radius + originY;
    vertex(x, y);
  }
  endShape(CLOSE);

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
