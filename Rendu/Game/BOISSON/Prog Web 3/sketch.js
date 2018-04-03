var radiusList = [];
var nbPoint = 20;
var redefined = false;
var epaisseurTrait = 1;

function redefineRadius()
{
  radiusList = [];
  for(var i = 0; i < nbPoint; i++)
  {
    var radius = random(100, 130);
    radiusList.push(radius);
  }
}


function setup()
{
  createCanvas(windowWidth, windowHeight);
  redefineRadius();
}

function draw()
{

  background(175, 20, 50);
  var time = millis();
  var second = time * 0.001;
  var intSecond = round(second);
  var maxTime = 2;
  var modTime = intSecond % maxTime;

  if(modTime == 0)
  {
    if(redefined == false)
    {
      redefineRadius();
      redefined = true;
    }
  }
  else
  {
    redefined = false;
  }

  if(mouseIsPressed)
  {
    if(mouseButton == LEFT)
    {
      if(epaisseurTrait >= 0)
      {
        nbPoint++;
        redefineRadius();
      }
    }
    if(mouseButton == RIGHT)
    {
      nbPoint--;
      redefineRadius();
    }
  }

  beginShape();
  var ox = width/2;
  var oy = height/2;
  for(var i = 0; i < nbPoint; i++)
  {
    var normI = i / nbPoint;
    var theta = normI * TWO_PI;
    var radius = radiusList[i];
    var x = cos(theta) * radius + ox;
    var y = sin(theta) * radius + oy;
    vertex(x, y);
  }
  endShape(CLOSE);
}
