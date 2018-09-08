//Variables Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;
var targetWidth;
var targetHeight;

//Game Variables
var player;
var obstacles = [];
var score = 0;
var highScore = 0;

function setup()
{
  //Partie Canvas
  targetWidth = contentDiv.offsetWidth;
  targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  //Partie Game
  score = 0;
  highScore = 0;
  player = new Player();
  obstacles.push(new Obstacle());
}

function draw()
{
  background(20);

  //Partie Obstacles
  if(frameCount % 100 == 0) //Toutes les 100 frames
  {
    obstacles.push(new Obstacle());
  }
  for(var i = obstacles.length-1; i >= 0; i--) //Parcourir l'array à l'envers pour éviter des bugs quand on supprime
  {
    obstacles[i].show();
    obstacles[i].update();
    obstacles[i].increaseScore(player);
    if(obstacles[i].hit(player))
    {
      setHighScore();
      score = 0;
      obstacles = [];
      player.velocity = 0;
      player.y = height/2;
      break; //Sortir de la boucle
    }
    if(obstacles[i].x < -50)
    {
      obstacles.splice(i, 1); //Supprimer obstacle
    }

    showTextes();
  }

  function showTextes()
  {
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(25);
    fill(255);
    noStroke();
    text("Score : " + score, 20, 40);
    text("Highscore : " + highScore, 20, 80);
  }

  //Partie Player
  player.update();
  player.checkEdges();
  player.show();
}

function setHighScore()
{
  if(score > highScore)
  {
    highScore = score;
  }
}

function keyPressed()
{
  if(key == " ") //Appui sur SPACE
  {
    player.addForce();
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
