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

  var res = 15.0;
  var margin = 10;
  var numberOfCols = floor((width - margin * 2.0) / res);
  var numberOfRows = floor((height - margin * 2.0) / res);
  var time = millis() * 0.00025;

  rectMode(CENTER);
  noFill();
  stroke(180);
  strokeWeight(1.5);
  for(var i=0; i<numberOfCols; i++){
    for(var j=0; j<numberOfRows; j++){
      var normi = i / numberOfCols;
      var normj = j / numberOfRows;
      var x = i * res + res * 0.5 + margin;
      var y = j * res + res * 0.5 + margin;
      var ratio = noise(normi * 2.5 + time, normj * 2.5 + time);
      if(ratio > 0.5){
        if(ratio > 0.55){
            ellipse(x, y, res, res)
        }

        push();
        translate(x, y);
        rotate(ratio * TWO_PI);
        line(-res * 0.25, 0, res * 0.25, 0);
        line(0, -res * 0.25, 0, res * 0.25);
        pop()
      }else{
        push();
        translate(x, y);
        rotate(ratio * TWO_PI);
        line(-res * 0.25, 0, res * 0.25, 0);
        pop()
      }
    }
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
