//Partie Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Objets
var snake;

//Partie Game
var xPoint = 0;
var yPoint = 0;
score = 0;

function setup()
{
  //Canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  //Game
  snake = new Snake();
  snake.initSnake();
  frameRate(15);
  updatePointCoordinates();
}

function draw()
{
  background(30);
  showUI();
  //Snake
  snake.show();
  snake.update();
  snake.checkStatus();
  snake.checkForPoint();
}

function showUI()
{
  textAlign(LEFT, CENTER);
  textSize(20);
  fill(200);
  noStroke();
  text("Score : " + score, 10, 20);
}

function updatePointCoordinates()
{
  xPoint = floor(random(10, (width - 100) / 10)) * 10;
  yPoint = floor(random(10, (height - 100) / 10)) * 10;
}

function showGameOver()
{
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 0, 0);
  noStroke();
  text("GAME OVER", width/2, height/2);
}

function keyPressed()
{
  switch (keyCode)
  {
    case 38: if(snake.direction != "down") snake.direction = "up"; break;
    case 40: if(snake.direction != "up") snake.direction = "down"; break;
    case 37: if(snake.direction != "right") snake.direction = "left"; break;
    case 39: if(snake.direction != "left") snake.direction = "right"; break;
    default: break;
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
