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
var playerRes;

//UI
var BT_StartX; //button Start x
var BT_StartY; //button Start y
var BT_StartM; //button Start margin
var BT_StartW; // button Start width
var BT_StartH; //button Start height
var BT_StartText; // button Start text

//Variables de grille
var numberOfCols;
var numberOfRows;
var cellType; //Array which contain the id of the cell : 0 : empty, 1 :green cell, 2 : red cell
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
  BT_StartM = 100;
  noStroke();
  textSize(14);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  BT_StartText = 'START';
  var startTextWidth = textWidth(BT_StartText);
  BT_StartW = startTextWidth + BT_StartM * 2;
  BT_StartH = 100;
}

function draw()
{
  background(40);

  if(!gameStarted && !gameOver) //Debut du jeu
  {
    displayStartButton(targetWidth/2 - 100, targetHeight/2 - 50, 0);
  }
  if(!gameOver && gameStarted) //Si on a pas perdu et que le jeu est lancé
  {
    updateGrid();
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
  playerRes = 10;
  playerX = playerRes * 0.5;
  playerY = playerRes * 0.5;
  speed = 4;
  life = 3;
  score = 0;
  asRun = false;
  //Setup grille
  greenCount = 0;
  gridRes = 10;
  hitsRed = [];
  hitsGreen = [];
  cellType = [];
  initialisedR = false;
  initialisedG = false;

  //GRID
  defineGrid();
}
/**
* The main probleme here is that you were mixing three steps on your function :
* 1 - The creation of the grid. This is were you create the grid at the begining on the level. Avoiding creating it on the player and defining if its red or green. Also definig the creation
* 2 - The update of the grid. This is where you check if a cell as been hited or not
* 3 - The drawing of the grid : where you just display the cell if it hasn't beel hit
*/

function defineGrid()
{
  numberOfCols = targetWidth / gridRes;
  numberOfRows = targetHeight / gridRes;

  //we define a safe zone for the spawn player
  var safei = ceil(playerRes/gridRes);
  var safej = ceil(playerRes/gridRes);

  for(var i = 0; i < numberOfCols; i++)
  {
    cellType[i] = [];
    for(var j = 0; j < numberOfRows; j++)
    {
      //defin the cell type
      var ratio = noise(i * 0.1, j * 0.1);
      //if the cell is not on the safe zone we define the cell type. If it is the cell is define has empty
      if(i <= safei && j <= safej){
        cellType[i][j] = 0;
      }else{
        if(ratio < 0.3)
        {
          //red one
          cellType[i][j] = 2;
        }else if(ratio > 0.7)
        {
          //green one
          cellType[i][j] = 1;
          greenCount ++;
        }else{
          //empty one
          cellType[i][j] = 0;
        }
      }
    }
  }
}

function updateGrid(){
  for(var i = 0; i < numberOfCols; i++)
  {
    for(var j = 0; j < numberOfRows; j++)
    {
      var x = i * gridRes + gridRes / 2;
      var y = j * gridRes + gridRes / 2;
      //check the cell cellType
      var ctype = cellType[i][j];
      //if the cell is not empty we check the hit between the player and the cell
      if(ctype > 0){
        //check the distance between player and cell
        var dist = distance(playerX, playerY, x, y);
        //we test the hit
        if(dist <= gridRes * 0.5){
          //we have a hit
          if(ctype == 1){
            //it is a green
            //The update the count
            score ++;
            //we define the cell as empty
            cellType[i][j] = 0;
          }else{
            //it is a red
            // we loose a life
            life --;
            //we define the cell as empty
            cellType[i][j] = 0;
          }
        }
      }
    }
  }
}

function showGrid(){
  for(var i = 0; i < numberOfCols; i++)
  {
    for(var j = 0; j < numberOfRows; j++)
    {
      var x = i * gridRes + gridRes / 2;
      var y = j * gridRes + gridRes / 2;
      //check the cell cellType
      var ctype = cellType[i][j];
      if(ctype > 0){
        if(ctype == 1){
          fill(0, 255, 0);
        }else if(ctype == 2){
          fill(255, 0, 0);
        }
        ellipse(x, y, gridRes, gridRes);
      }
    }
  }
}


//FONCTIONS PLAYER
function displayPlayer()
{
  rectMode(CENTER);
  fill(0, 255, 220);
  rect(playerX, playerY, gridRes, gridRes);
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
  textSize(25);
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
