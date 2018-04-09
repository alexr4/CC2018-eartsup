var radiusList = [];
var nbPoint = 120;
var redefined = false;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  redefineRadius();
}

function redefineRadius()
{
  radiusList = [];
  for (var i = 0; i < nbPoint; i++)
  {
    var radius = random(5, 30);
    radiusList.push(radius);
  }
}

function draw()
{
  //background(127, 127, 217);

  beginShape();
  var ox = random(1, 1300);
  var oy = random(1, 1300);
  for (var i = 0; i < nbPoint; i++)
  {
    var normi = i/nbPoint;
    var theta = normi * TWO_PI;
    var radius = radiusList[i];
    var x = cos(theta) * radius + ox;
    var y = sin(theta) * radius + oy;
    vertex(x, y);
  }
  endShape(CLOSE);

  var placeX = random(1, 1500);
  var placeY = random(1, 1500);
  fill(0, 123, 0);
  stroke(0, 16, 129);
  rect(placeX, placeY, 50, 50);

  var radiusE = random(10, 50);
  fill(45, 76, 12);
  noStroke();
  ellipse(mouseX, mouseY, radiusE, radiusE);
}
