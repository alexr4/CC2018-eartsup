var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(127);

  point(10, height/2);

  line(20, height/2, 40, height/2);

  rect(50, height/2, 50, 50);

  ellipse(135, height/2, 50, 50)

  triangle(160, height/2 + 40, 200, height/2 - 40, 240, height/2 + 40);

  quad(260, height/2 - 40, 300, height/2 - 40, 300, height/2 + 40, 260, height/2 + 40);

  arc(320, height/2, 40, 40, 0, HALF_PI);

  arc(380, height/2, 40, 40, 0, HALF_PI, CHORD);

  arc(440, height/2, 40, 40, 0, HALF_PI, PIE);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
