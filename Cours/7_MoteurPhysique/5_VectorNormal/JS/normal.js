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

  //axe othonormé
  stroke(127);
  line(0, -height * 0.5, 0, height * 0.5);
  line(-width * 0.5, 0, width * 0.5, 0.0);

  var A = createVector(50, 100);
  var nA = A.copy().normalize(A);

  stroke(255, 0, 0);
  strokeWeight(1)
  fill(255, 0, 0);
  line(0, 0, A.x, A.y);
  noStroke();
  text("A : "+A.x+", "+A.y, A.x + margin, A.y + margin);

  strokeWeight(10)
  stroke(0, 180, 0);
  fill(0, 180, 0);
  line(0, 0, nA.x, nA.y);
  noStroke();
  text("nA : "+nA.x+", "+nA.y, nA.x + margin * 2, nA.y + margin);




  pop()
}


function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
