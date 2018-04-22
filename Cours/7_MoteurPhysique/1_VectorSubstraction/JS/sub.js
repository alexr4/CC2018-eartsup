var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;



function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

}

function draw(){
  background(220);
  textSize(12);
  textAlign(LEFT, TOP);
  var margin = 4;

  push();
  translate(width * 0.5, height * 0.5);

  scale(1.0);
  //axe othonormé
  stroke(127);
  line(0, -height * 0.5, 0, height * 0.5);
  line(-width * 0.5, 0, width * 0.5, 0.0);

  var A = createVector(50, 100);
  var B = createVector(150, 25);
  var C = p5.Vector.sub(A, B);

  stroke(255, 0, 0);
  fill(255, 0, 0);
  line(0, 0, A.x, A.y);
  noStroke();
  text(A.x+", "+A.y, A.x + margin, A.y + margin);

  stroke(0, 180, 0);
  fill(0, 180, 0);
  line(0, 0, B.x, B.y);
  noStroke();
  text(B.x+", "+B.y, B.x + margin, B.y + margin);

  stroke(0, 0, 255);
  fill(0, 0, 255);
  line(0, 0, C.x, C.y);
  noStroke();
  text(C.x+", "+C.y, C.x + margin, C.y + margin);

  pop()
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
