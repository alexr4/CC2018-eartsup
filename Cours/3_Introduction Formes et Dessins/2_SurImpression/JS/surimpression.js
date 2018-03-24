var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  var randomSize = random(40, 80);

  ellipse(mouseX, mouseY, randomSize, randomSize);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
