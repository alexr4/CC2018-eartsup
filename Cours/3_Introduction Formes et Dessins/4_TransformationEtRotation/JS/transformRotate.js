var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(20);
  var m = 10;
  var w = (width) / 4;
  var h = w/2;
  var time = millis();

  rectMode(CENTER);

  push();
  translate(w * 1 - w/2, height/2);
  rotate(time * 0.01);
  rect(0, 0, h, h);
  pop();

  push();
  translate(w * 2 - w/2, height/2);
  rotate(time * 0.005);
  rect(0, 0, h, h);
  pop();

  push();
  translate(w * 3 - w/2, height/2);
  rotate(time * 0.001);
  rect(0, 0, h, h);
  pop();

  push();
  translate(w * 4 - w/2, height/2);
  rotate(time * 0.0005);
  rect(0, 0, h, h);
  pop();
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
