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
  noStroke();
  rectMode(CENTER);

  var frontColor = color(87, 47, 47);
  var backColor0 = color(79, 47, 27);
  var backColor1 = color(92, 42, 67);

  var frontGray0 = 40;
  var backGray0 = 20;
  var frontGray1 = 100;
  var backGray1 = 240;

  //colors
  fill(backColor0);
  rect(width/4, height/4, width/2, height/2);
  fill(backColor1);
  rect(width/4 * 3, height/4, width/2, height/2);
  //gray
  fill(backGray0);
  rect(width/4, height/4 * 3, width/2, height/2);
  fill(backGray1);
  rect(width/4 * 3, height/4 * 3, width/2, height/2);
  if(mouseIsPressed){
    //colors
    fill(frontColor);
    rect(width/4, height/4, width/2, height/4);
    rect(width/4 * 3, height/4, width/2, height/4);
    //gray
    fill(frontGray0);
    rect(width/4, height/4 * 3, width/2, height/4);
    fill(frontGray1);
    rect(width/4 * 3, height/4 * 3, width/2, height/4);
  }else{
    //colors
    fill(frontColor);
    rect(width/4, height/4, width/8, width/8);
    rect(width/4 * 3, height/4, width/8, width/8);
    //gray
    fill(frontGray0);
    rect(width/4, height/4 * 3, width/8, width/8);
    fill(frontGray1);
    rect(width/4 * 3, height/4 * 3, width/8, width/8);
  }

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
