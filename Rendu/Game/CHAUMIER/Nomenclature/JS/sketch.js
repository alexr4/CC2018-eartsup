var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw()
{
  background(127);
  var rayon = 20;
  var res = 15;
  var numberOfRows = 7;
  var numberOfCol = 2;
  rectMode(CENTER);
  for (var i = 0; i < numberOfRows; i++)
  {
    var ni =i/numberOfCol;
    var noiseRadius = noise(i * 0.1, sin(ni * TWO_PI), millis() * 0.001);
    rayon += 25 + noiseRadius * 25;
    var perimetre = 2 * PI * rayon;
    numberOfCol = floor(perimetre/res);
    for (var j = 0; j < numberOfCol; j++)
    {
      var nj = j/numberOfCol;
      var angle = nj * TWO_PI + ratio * PI;
      var x = width/2 + cos(angle) * rayon;
      var y = height/2 + sin(angle) * rayon;
      var ratio = noise(i*0.15, j*0.15, millis()*0.00001);
      if (ratio <= 0.45)
      {
        stroke(000);
        fill(67, 63, 123);
        push();
        translate(x, y);
        rotate(angle);
        rect(0, 0,  20, 20);
        pop();
      }
      else
      {
        fill(255);
        stroke(134, 67, 94);
        ellipse(x, y, 20, 20);
      }

      noStroke();
      fill(233);
      ellipse(mouseX, mouseY, 25, 25); //si position de cette ellipse == position des autres ellipse alors celle ci disparaissent
    }
  }
  //noLoop();
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
