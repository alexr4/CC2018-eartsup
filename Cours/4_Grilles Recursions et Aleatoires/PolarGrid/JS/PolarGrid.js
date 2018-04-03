var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(240);
  rectMode(CENTER);
  noStroke();
  fill(180);

  var res = 20.0;
  var margin = 10;
  var radius = height * 0.5 - margin * 2;
  var numberOfInnerCircle = 25;

  var ox = width/2;
  var oy = height/2;

  for(var i=0; i<numberOfInnerCircle; i++){
    var ni = i/numberOfInnerCircle;
    var rad = radius * ni;
    var perimeter = TWO_PI * rad * 2.0;
    var numberOfElement = floor(perimeter / res);
    for(var j=0; j<numberOfElement; j++){
      var theta = (j/numberOfElement) * TWO_PI;
      theta += ni * HALF_PI * 0.5;
      var x = cos(theta) * rad + ox;
      var y = sin(theta) * rad + oy;
      ellipse(x, y, res * 0.35, res * 0.35);
    }
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
