//Partie Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Partie Jeu
var ball;
var score;
var highScore;

function setup()
{
  //Canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  //Jeu
  ball = new Ball();
  score = 0;
  highScore = 0;
}

function draw()
{
  background(10);
  showUI();

  ball.show();
  ball.update();
  ball.checkEdges();

  checkHighScore();
}

function showUI()
{
  //Score
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(200);
  fill(70);
  noStroke();
  text(score, width/2, height/2);

  //HighScore
  textAlign(LEFT, CENTER);
  textSize(30);
  fill(100);
  noStroke();
  text("Highscore : " + highScore, 10, 20);
}

function checkHighScore()
{
  if(score > highScore) highScore = score;
}

function mousePressed()
{
  if(mouseX <= ball.x+ball.radius && mouseX >= ball.x-ball.radius)
  {
    if(mouseY <= ball.y+ball.radius && mouseY >= ball.y-ball.radius)
    {
      ball.addForce();
      score++;
    }
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
