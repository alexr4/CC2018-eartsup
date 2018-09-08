//Partie Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Partie Game
var player;
var redSquare, greenSquare, blueSquare;
var score = 0;
var highScore = 0;
var lives = 3;

function setup()
{
  //Canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  //Objets
  player = new Player();
  player.changeColor();
  redSquare = new ColoredSquare(1);
  greenSquare = new ColoredSquare(2);
  blueSquare = new ColoredSquare(3);
  score = 0;
  highScore = 0;
  lives = 3;
}

function draw()
{
  background(50);
  if(lives > 0)
  {
    showUI();
    //Carrés
    redSquare.show();
    redSquare.checkPlayer();
    greenSquare.show();
    greenSquare.checkPlayer();
    blueSquare.show();
    blueSquare.checkPlayer();

    //Player
    player.show();
    player.move();
    player.checkEdges();
  }
  else
  {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255, 0, 0);
    noStroke();
    text("GAME OVER", width/2, height/2);
  }
}

function showUI()
{
  //Score
  textAlign(LEFT, CENTER);
  textSize(20);
  fill(200);
  noStroke();
  text("Score : " + score, 10, 20);

  //HighScore
  if(score > highScore) highScore = score;
  text("Highscore : " + highScore, 10, 50);

  //Lives
  textAlign(RIGHT, CENTER);
  text("Lives : " + lives, width-20, 20);
}

function keyPressed()
{
  if(keyCode == 82) //Appuie sur R pour respawn
  {
    player.respawn();
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
