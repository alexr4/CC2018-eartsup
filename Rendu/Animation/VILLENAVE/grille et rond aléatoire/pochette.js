var x = 0;
var y;
var largeur = 10;

var xInc = 0.0;
var yInc = 100;
function setup(){
  createCanvas(400, 400)
  //drawCircle(width/2, height/2, 200)
  translate(width/2, height);
  stroke(0)
}

function draw(){


  background(255);



var x = 0;
var y = height/2;
var largeur = 50;
for (var i=0; i<5; i++) {
    var newX = x + i * largeur;
    rect(newX, y, largeur, largeur);
}
var nx = noise(xInc)*width;
var ny = noise(yInc)*height;
xInc += 0.01
yInc += 0.01
ellipse(nx, ny, 30, 30)

var column = width/40;
var nrow = height/40;

var nx = noise(xInc)*255;
var ny = noise(yInc)*255;}


  /*function drawCircle(x, y, radius){
    noFill()
    ellipse(x, y, radius, radius);
    if(radius > 2){
      radius *= 0.75;
      drawCircle(x, y, radius)*/
