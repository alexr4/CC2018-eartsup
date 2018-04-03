var frameCounts;
var randomSize;
var c;
var isShape;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameCounts = 0;
  isShape = 1;
}

function draw()
{
  var minRadius = 50
  var maxRadius = 200;
  var nbPoints = 300;

  randomSize = random(50, 200);

  if (frameCounts == 20)
  {
    if (isShape == 1)
    {
      c = random (10, 255);

      fill(c);
      ellipse(pmouseX, pmouseY, randomSize, randomSize);
      noStroke();
      frameCounts = 0;
      isShape = 2;
    }

    else if(isShape == 2)
    {
      c = random (10, 255);
      beginShape();
      fill(c);
      for(var i=0; i<nbPoints; i++)
      {
        var angle = i * (TWO_PI / nbPoints);
        var radius = random(minRadius, maxRadius);
        var x = cos(angle) * radius + pmouseX;
        var y = sin(angle) * radius + pmouseY;
        vertex(x, y);
      }
      endShape(CLOSE);
      isShape = 1;
      frameCounts = 0;
    }
  }
  else
  {
    frameCounts ++;
  }
}
