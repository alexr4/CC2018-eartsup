var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(20, 100);

  var col = 2;
  var resCol = width/2;
  var resSquare = 10;
  var resEllipse = 40;
  var cols = resCol / resSquare;
  var rows = height / resSquare;

  //col 1
  noStroke();
  for(var i=0; i<cols; i++){
    for(var j=0; j<rows; j++){
      var x = i * resSquare;
      var y = j * resSquare;
      var randGray = random(255);
      fill(randGray);
      rect(x, y, resSquare, resSquare);
    }
  }

  //col2
  var x = (resCol + resEllipse) + random(resCol - resEllipse);
  var y = random(resEllipse, height  - resEllipse);
  fill(255);
  ellipse(x, y, resEllipse, resEllipse);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
