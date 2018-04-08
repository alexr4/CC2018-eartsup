var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;
var numberOfRows = 3;
var numberOfCols = 20;
var ratio;
var colors;
var score;
var penality;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  score = 0;
  penality = 0;
  ratio = random(1);
  colors = new Array();
  for(var i = 0; i < numberOfRows; i++)
  {
    var rowColors = new Array();
    for(var j = 0; j < numberOfCols; j++)
    {
      rowColors[j]=random(1);
    }
    colors[i] = rowColors;
  }
  canvas.parent("canvas-content");
}

function draw(){
  background(127);

  var scoreX = 0
  var scoreY = 0
  var size = 25;

  fill(225);
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  textFont('monospace');
  textStyle(ITALIC);
  text("SCORE : "+score, scoreX, scoreY);

  fill(225);
  noStroke();
  textSize(14);
  textAlign(RIGHT, TOP);
  textFont('monospace');
  textStyle(ITALIC);
  text("ERREURS : "+penality, width, scoreY);

  var rayon = 10;
  var res = 20
  rectMode(CENTER);


  for(var i=0; i<numberOfRows; i++)
  {
    rayon += 100;

    for(var j=0; j<numberOfCols; j++)
    {
      var nj = j/numberOfCols;
      var angle = nj * TWO_PI + move * PI;
      var x = width/2 + cos(angle) * rayon;
      var y = height/2 + sin(angle) * rayon;
      var move = noise(i * 0.001, j * 0.005, millis() * 0.0005);


      if(colors[i][j] <= 0.33 && colors[i][j] >= 0)
      {
        fill(255);
        noStroke();
        ellipse(x, y, size, size);

        if(checkCollisionCircle(x, y, size))
        {
          colors[i][j] = -1;
          score += 1;
        }
      }
      else if (colors[i][j] >= 0)
      {
        fill(0);
        noStroke();
        ellipse(x, y, size, size);

        if(checkCollisionCircle(x, y, 10))
        {
          penality += 1;
        }
      }
    }
  }
}

function checkCollisionCircle(ex, ey, rayon)
{
  var px = mouseX;
  var py = mouseY;

  var dx = ex - px; //longueur c en x - voir Calculer la distance entre deux points
  var dy = ey - py; //longueur c en y - voir Calculer la distance entre deux points
  var dxCube = dx * dx;
  var dyCube = dy * dy;
  var dist = sqrt(dxCube + dyCube);

  return dist <= rayon;
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
