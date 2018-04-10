var contentDiv = document.getElementById('GameWindow'); //Récupérer la div d'emplacement du jeu dans l'html
var targetWidth;
var targetHeight;
//Game Variables
var life; //nombre de vies
var score;
var gameStarted; //Si le jeu a démarré
var gameOver; //etat du GameOver (true / false)
var win; //game win state
var gameOverText; //texte de fin de partie
var scoreText;
var greenCount;
var asRun;
//position du joueur
var playerX;
var playerY;
var speed;
//UI
var BT_StartX; //button Start x
var BT_StartY; //button Start y
var BT_StartM; //button Start margin
var BT_StartW; // button Start width
var BT_StartH; //button Start height
var BT_StartText; // button Start text
//Variables de grille
var hitsRed; //tableaux de true ou false pour les hits states
var hitsGreen;
var xRed; //tableaux des positions des points
var yRed;
var xGreen;
var yGreen;
var gridRes; //Taille d'un point

function setup()
{
  //Canvas
  targetWidth = contentDiv.offsetWidth;
  targetHeight = contentDiv.offsetHeight;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("GameWindow"); //Mettre le canvas en enfant de l'emplacement défini
  initLevel();
  //Bouton Start
  BT_StartX = 10;
  BT_StartY = 10;
  BT_StartM = 10;
  noStroke();
  textSize(14);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  BT_StartText = 'START';
  var startTextWidth = textWidth(BT_StartText);
  BT_StartW = startTextWidth + BT_StartM * 2;
  BT_StartH = 30;
}

function draw()
{
  background(40);
  if(!gameStarted && !gameOver) //Debut du jeu
  {
    displayStartButton(targetWidth/2, targetHeight/2, 0);
  }
  if(!gameOver && gameStarted) //Si on a pas perdu et que le jeu est lancé
  {
    showGrid();
    displayPlayer();
    movePlayer();
    checkLife();
    checkVictory();
  }
  displayUI();
  console.log(greenCount + " - " + score);
}

function initLevel()
{
  //Game Variables
  gameOver = false;
  gameStarted = false;
  playerX = 0;
  playerY = 0;
  speed = 4;
  life = 3;
  score = 0;
  asRun = false;
  //Setup grille
  greenCount = 0;
  gridRes = 10;
  hitsRed = [];
  hitsGreen = [];
  xRed = [];
  yRed = [];
  xGreen = [];
  yGreen = [];
  initialisedR = false;
  initialisedG = false;
  //GRID
  var numberOfCols = targetWidth / gridRes;
  var numberOfRows = targetHeight / gridRes;
  for(var i = 0; i < numberOfCols; i++)
  {
    hitsRed[i] = [];
    hitsGreen[i] = [];
    for(var j = 0; j < numberOfRows; j++)
    {
      hitsRed[i][j] = false;
      hitsGreen[i][j] = false;
    }
  }
}

function showGrid()
{
  var numberOfCols = targetWidth / gridRes;
  var numberOfRows = targetHeight / gridRes;
  rectMode(CENTER);
  for(var i = 0; i < numberOfCols; i++)
  {
    for(var j = 0; j < numberOfRows; j++)
    {
      var x = i * gridRes + gridRes / 2;
      var y = j * gridRes + gridRes / 2;
      noFill();
      noStroke();
      var ratio = noise(i * 0.1, j * 0.1);
      if(ratio < 0.3)
      {
        if(x > 20 || y > 20) //Ne pas générer sur le joueur
        {
          fill(255, 0, 0);
          noStroke();
          ellipse(x, y, gridRes, gridRes);
          var dist = distance(playerX, playerY, x, y);
          if(dist < gridRes)
          {
            if(hitsRed[i][j] == false)
            {
              fill(200, 0, 150);
              hitsRed[i][j] = true;
              life--;
            }
          }
        }
      }
      if(ratio > 0.7)
      {
        if(x > 20 || y > 20)
        {
          fill(0, 255, 0);
          noStroke();
          ellipse(x, y, gridRes, gridRes);
          var dist2 = distance(playerX, playerY, x, y);
          if(dist2 < gridRes)
          {
            if(hitsGreen[i][j] == false)
            {
              noFill();
              hitsGreen[i][j] = true;
              score++;
            }
          }
          if(!asRun)
          {
            greenCount++;
          }
        }
      }
      if(hitsRed[i][j] == true)
      {
        hitsRed[i][j] = -1;
      }
      if(hitsGreen[i][j] == true)
      {
        hitsGreen[i][j] = -1;
      }
    }
  }
  asRun = true;
}

//FONCTIONS PLAYER
function displayPlayer()
{
  rectMode(CORNER);
  fill(0, 255, 220);
  rect(playerX, playerY, 10, 10);
}

function movePlayer() //Controle au clavier
{
  if(keyIsDown(LEFT_ARROW))
  {
    if(playerX < 0)
    {
      playerX = targetWidth - 10;
    }
    playerX -= speed;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    if(playerX > targetWidth - 10)
    {
      playerX = 0;
    }
    playerX += speed;
  }
  if(keyIsDown(UP_ARROW))
  {
    if(playerY < 0)
    {
      playerY = targetHeight - 10;
    }
    playerY -= speed;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    if(playerY > targetHeight - 10)
    {
      playerY = 0;
    }
    playerY += speed;
  }
}

//FONCTIONS AFFICHAGE UI
function displayStartButton(x, y, m)
{
  noStroke();
  textSize(14);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  rectMode(CORNER);
  noStroke();
  fill(0, 200, 100, 150);
  rect(x, y, BT_StartW, BT_StartH);
  fill(255);
  text(BT_StartText, x + BT_StartW * 0.5, y + BT_StartH * 0.5);
}

function displayUI()
{
  if(gameStarted)
  {
    //Texte de vie
    var x = targetWidth - 50;
    var y = 5;
    fill(255);
    noStroke();
    textSize(18);
    textAlign(CENTER, TOP);
    textFont('monospace');
    text("VIES : " + life, x, y);
    //Texte de score
    var x2 = targetWidth - 50;
    var y2 = 30;
    fill(255);
    noStroke();
    textSize(18);
    textAlign(CENTER, TOP);
    textFont('monospace');
    text("SCORE : " + score, x2, y2);
  }
  //Texte de Game Over
  if(gameOver)
  {
    rectMode(CENTER);
    fill(240);
    if(win)
    {
      stroke(50, 70, 250);
    }
    else
    {
      stroke(250, 60, 30);
    }
    strokeWeight(10);
    rect(targetWidth/2, targetHeight/2, 600, 150);
    strokeWeight(1);
    gameOverText = gameOverText.toUpperCase();
    if(win)
    {
      fill(50, 70, 250);
    }
    else
    {
      fill(250, 60, 30);
    }
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text(gameOverText, targetWidth/2, targetHeight/2);
  }
}

//FONCTIONS GAMEPLAY ET AUTRE
function mousePressed()
{
  if(!gameOver && !gameStarted)
  {
    if(mouseX > targetWidth/2 && mouseX < targetWidth/2 + BT_StartW && mouseY > targetHeight/2 && mouseY < targetHeight/2 + BT_StartH) //SI souris sur le bouton
    {
      gameStarted = true;
    }
  }
}

function checkLife()
{
  if(life <= 0)
  {
    life = 0;
    gameOver = true;
    win = false;
    gameOverText = "Tu as perdu !";
  }
}

function checkVictory()
{
  if(!gameOver)
  {
    if(score == greenCount)
    {
      win = true;
      gameOver = true;
      gameOverText = "Victoire";
    }
  }
}

function distance(x1, y1, x2, y2){
  var dx = x1 - x2;
  var dy = y1 - y2;
  var dxCube = dx * dx;
  var dyCube = dy * dy;
  var dist = sqrt(dxCube + dyCube);
  return dist;
}

function windowResized() //Pour un design responsive
{
  targetWidth = contentDiv.offsetWidth;
  targetHeight = contentDiv.offsetHeight;
  resizeCanvas(targetWidth, targetHeight);
}
