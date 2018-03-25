var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  blendMode(NORMAL);
  background(240);
  noStroke();
  rectMode(CENTER);

  var numberOfElement = 2;
  var resCol = width/numberOfElement;
  for(var i=0; i<numberOfElement; i++){
    var x = (i/numberOfElement) * width + resCol * 0.5;
    var y = height/2;

    if(i%numberOfElement == 0){
      fill(40);
      rect(x, y, resCol, height);
      blendMode(ADD);
    }else{
      blendMode(DIFFERENCE);
    }

    for(var j=0; j<3; j++){
      var theta = (j/3) * TWO_PI;
      var radius = (resCol * 0.5);
      var ex = cos(theta) * radius * 0.35;
      var ey = sin(theta) * radius * 0.35;
      if(j == 0){
        fill(255, 0, 0);
      }else if(j == 1){
        fill(0, 255, 0);
      }else if(j == 2){
        fill(0, 0, 255);
      }
      ellipse(ex + x, ey + y, radius, radius);
    }
  }

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
