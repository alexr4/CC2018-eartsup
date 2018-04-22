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
  var C = createVector(A.x, 0);
  var c = sqrt(A.x * A.x + A.y * A.y);
  var mag = A.mag();

  stroke(255, 0, 0);
  fill(255, 0, 0);
  line(0, 0, A.x, A.y);
  noStroke();
  text("A : "+A.x+", "+A.y, A.x + margin, A.y + margin);

  stroke(0, 180, 0);
  fill(0, 180, 0);
  drawDotted(A, C, 20, 2);
  noStroke();
  text("C : "+C.x+", "+C.y, C.x + margin, C.y - margin * 4);

  stroke(0, 0, 255);
  fill(0, 0, 255);
  drawDotted(createVector(0, 0), C, 10, 2);
  noStroke();
  text("B : "+0+", "+0, 0 - margin * 4, 0 - margin * 4);

  fill(255, 0, 255);
  var txt = "c = "+c+"\nmag = "+mag;
  var tw = textWidth(txt) * 0.5;
  text(txt, A.x * 0.5 - tw - margin, A.y * 0.5)


  pop()
}

function drawDotted(A, B, step, size){
  for(var i=0; i<step; i++){
    var offset = i/step;
    var AB = p5.Vector.lerp(A, B, offset);
    ellipse(AB.x, AB.y, size, size);
  }

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
