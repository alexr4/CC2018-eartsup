var html = document.documentElement;
var contentDiv = document.getElementById('row1');
var resolution = 800.0 / 1200.0;

function setup(){
  var targetHeight = html.clientHeight * 0.75;
  var targetWidth = targetHeight * resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(127);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
