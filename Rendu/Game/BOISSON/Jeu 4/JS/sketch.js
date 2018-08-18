
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;


var paddle;
var ball;
var score;
var gameOver;

function setup()
{

  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");


  paddle = new Paddle();
  ball = new Ball();
  score = 0;
  gameOver = false;
}

function draw()
{
  background(10);
  showUI();


  paddle.show();


  ball.show();
  ball.checkEdges();

  if(!gameOver)
  {

    paddle.move();
    paddle.checkEdges();


    ball.update();
    ball.checkPaddle();
  }
}

function showUI()
{

  rectMode(CENTER);
  fill(255, 100);
  noStroke();
  rect(width/2, 20, 150, 40);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(50, 200, 255);
  noStroke();
  text("Score : "+score, width/2, 20);


  if(gameOver)
  {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255, 0, 0);
    noStroke();
    text("GAME OVER", width/2, height/2-50);
    textSize(20);
    fill(255, 200);
    text("Press [SPACE] to Retry", width/2, height/2);
  }
}

function keyPressed()
{
  if(gameOver)
  {
    if(keyCode == 32)
    {
      score = 0;
      gameOver = false;
      ball.x = width/2;
      ball.y = height/2;
      ball.color = color(0, 255, 0)
      paddle.x = width/2;
    }
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
