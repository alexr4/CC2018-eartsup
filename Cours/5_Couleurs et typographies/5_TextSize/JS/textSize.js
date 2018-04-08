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

  var letter = "P5js";
  var font = "Mukta Mahee";

  var size = 20 + abs(mouseX / width) * 1000;

  console.log(size);

  fill(20);
  noStroke();

  textFont(font); //set font for text
  textSize(size); //set textSize
  textAlign(CENTER, CENTER); //Align text. First parameter is the alignment on the x axis, the second is the alignment on the y axis
  textStyle(BOLD); //The the style of the text; Parameter is NORMAL, BOLD and ITALIC
  textLeading(30); //Set the line space

  var scalar = 0.75;
  var txtWidth = textWidth(letter);
  var txtHeight = textAscent() * scalar + textDescent() * scalar;
  var margin = 100;

  rectMode(CENTER);
  strokeWeight(10);
  stroke(20);
  noFill();
  rect(width * 0.5, height * 0.5, txtWidth + margin, txtHeight + margin);

  fill(20);
  noStroke();
  text(letter, width * 0.5, height * 0.5); //write text on the canvas
}


function keyPressed(){

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
