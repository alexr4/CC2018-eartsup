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
  var w = (width- m * 2) / 10 - m * 2;
  var h = height - m * 2;

  rectMode(CORNER);

  fill(255, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(1);
  rect(m, m, w, h)

  fill(255/10 * 9, 0, 0);
  stroke(255, 255/10 * 1, 0);
  strokeWeight(2);
  rect(m + (m + w) * 1, m, w, h)

  fill(255/10 * 8, 0, 0);
  stroke(255, 255/10 * 2, 0);
  strokeWeight(3);
  rect(m + (m + w) * 2, m, w, h)

  fill(255/10 * 7, 0, 0);
  stroke(255, 255/10 * 3, 0);
  strokeWeight(4);
  rect(m + (m + w) * 3, m, w, h)

  fill(255/10 * 6, 0, 0);
  stroke(255, 255/10 * 4, 0);
  strokeWeight(5);
  rect(m + (m + w) * 4, m, w, h)

  fill(255/10 * 5, 0, 0);
  stroke(255, 255/10 * 5, 0);
  strokeWeight(6);
  rect(m + (m + w) * 5, m, w, h)

  fill(255/10 * 4, 0, 0);
  stroke(255, 255/10 * 6, 0);
  strokeWeight(7);
  rect(m + (m + w) * 6, m, w, h)

  fill(255/10 * 3, 0, 0);
  stroke(255, 255/10 * 7, 0);
  strokeWeight(8);
  rect(m + (m + w) * 7, m, w, h)

  fill(255/10 * 2, 0, 0);
  stroke(255, 255/10 * 9, 0);
  strokeWeight(9);
  rect(m + (m + w) * 8, m, w, h)

  fill(255/10 * 1, 0, 0);
  stroke(255, 255/10 * 8, 0);
  strokeWeight(10);
  rect(m + (m + w) * 9, m, w, h)

  fill(255/10 * 0, 0, 0);
  stroke(255, 255/10 * 9, 0);
  strokeWeight(11);
  rect(m + (m + w) * 10, m, w, h)

  rectMode(CENTER);

  noFill();
  stroke(100, 0, 255);
  strokeWeight(20);
  rect(width/2, height/2, width - 300, height - 300);

  noStroke();
  fill(0, 0, 255);
  rect(width/2, height/2, width - 400, height - 400);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
