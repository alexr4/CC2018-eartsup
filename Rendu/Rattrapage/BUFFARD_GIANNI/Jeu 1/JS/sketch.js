//Variables Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Objets
var obstacle;

//Game Variables
var life = 5;
var gameStarted = false;
var gameOver = false;
var win = false;

//position du joueur
var playerX;
var playerY;
var playerRes = 8;

//Variables de grille
var gridRes = 15.0;
var numberOfCols;
var numberOfRows;
var margin = 40;

function setup()
{
  //-------------------Partie Canvas---------------------
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
  //-----------------------------------------------------
  numberOfCols = (width/gridRes);
  numberOfRows = (height/gridRes);
  obstacle = new Obstacle();
}

function draw()
{
  //console.log(mouseX + " - " + mouseY);
  background(10);
  if(gameStarted)
  {
    displayUI();
    if(!gameOver)
    {
      noCursor();
      playerX = mouseX;
      playerY = mouseY;
      drawPlayer();
      drawLevel();
      displayTarget();
      checkVictory();
      checkGameOver();
    }
    else
    {
      if(win)
      {
        cursor(ARROW); //Revoir le cursor
        fill(0, 180, 180);
        noStroke();
        textAlign(CENTER);
        textSize(50);
        text("VICTORY", width/2, height/2);
        fill(255);
        rectMode(CORNER);
        rect(0, 0, 160, 40);
        textAlign(LEFT, CENTER);
        fill(0);
        textSize(20);
        text("Click to Restart", 10, 20);
      }
      else
      {
        cursor(ARROW);
        fill(180, 0, 0);
        noStroke();
        textAlign(CENTER);
        textSize(50);
        text("DEFEAT", width/2, height/2);
        fill(255);
        rectMode(CORNER);
        rect(0, 0, 160, 40);
        textAlign(LEFT, CENTER);
        fill(0);
        textSize(20);
        text("Click to Restart", 10, 20);
      }
    }
  }
  else
  {
    rectMode(CORNER);
    fill(255);
    rect(0, 0, 310, 70);
    fill(10);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(50);
    text("Click to Start", 10, 40);
  }
}

function drawPlayer()
{
  push();
  fill(0, 0, 240);
  ellipse(playerX, playerY, playerRes, playerRes);
  pop();
}

function drawLevel()
{
  for(var i = 0; i < numberOfCols; i++)
  {
    for(var j = 0; j < numberOfRows; j++)
    {
      var x = i * gridRes + gridRes / 2 + margin;
      var y = j * gridRes + gridRes / 2 + margin;
      var ratio = noise(i * 0.1, j * 0.1, millis() * 0.00025);
      if(ratio > 0.5)
      {
        obstacle.x = x;
        obstacle.y = y;
        obstacle.show();
      }
    }
  }
}

function checkVictory()
{
  if(playerX >= width/2 - 15 && playerX <= width/2 + 15)
  {
    if(playerY >= height/2 - 15 && playerY <= height/2 + 15)
    {
      win = true;
      gameOver = true;
    }
  }
}

function checkGameOver()
{
  if(life <= 0)
  {
    gameOver = true;
    win = false;
  }
}

function displayTarget()
{
  stroke(175, 200, 250);
  noFill();
  ellipse(width/2, height/2, 30, 30);
}

function displayUI()
{
  fill(255, 50, 100);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("Life : " + life, width/2, 30);
}

function mouseClicked()
{
  if(!gameStarted)
  {
    if(mouseX <= 310 && mouseX > 0)
    {
      if(mouseY > 0 && mouseY <= 70)
      {
        gameStarted = true;
      }
    }
  }
  if(gameOver || win)
  {
    if(mouseX > 0 && mouseX <= 160)
    {
      if(mouseY > 0 && mouseY <= 40)
      {
        gameOver = false;
        win = false;
        life = 5;
      }
    }
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
