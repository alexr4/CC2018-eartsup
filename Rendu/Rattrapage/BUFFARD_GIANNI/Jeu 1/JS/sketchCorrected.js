//Variables Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//games Variables
var over = false;

//player

//obstacle
var obstacleList;
var difficulty;
var gridRes;
var scaler;
var speed = 0.0001;

//target
var targetSize;
var targetX, targetY;

//player
var playerSize;
var playerX, playerY;
var touchCount = 0;
var maxLife = 5;
var life;
var win;

function setup()
{
  //-------------------Partie Canvas---------------------
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
  //-----------------------------------------------------
  initObstacleList(20, 0.5, 5);
  initTarget(50, random(width), random(height));
  initPlayer(10);

  //hide the mouse
  noCursor();
}

function draw()
{
  background(20);
  if(!over){
    //the game is not over
    displayDebugGrid();

    //define the time of the game
    let gameTime = millis() * speed;

    //udapte player position
    updatePlayer();
    //check if the player has touched any obstacles
    checkIfPlayerHasTouchedAnObstacle();
    //check life
    checkLife();
    //check if the player has reached the target
    checkIfPlayerHasReachedTheTarget();
    //update obstacle list
    updateAndDisplayObstacle(gameTime);
    //display playerX
    displayPlayer();
    //display target
    displayTarget();
    //display UI
    fill(200);
    textAlign(LEFT, TOP)
    textSize(20);
    text("life: "+life, 20, 20);
  }else{
    //the games if over
    let sentence = "GAME OVER"
    if(win){
      sentence += "\nYOU WIN";
    }else{
      sentence += "\nYOU LOOSE";
    }

    textAlign(CENTER, CENTER);
    fill(200);
    textSize(40);
    text(sentence, width/2, height/2);

    textSize(12);
    text("click to replay", width/2, height - 40);
  }
}
//----------------------------
// UPDATES & DISPLAY METHODS
//----------------------------
//update & display obstacle
function updateAndDisplayObstacle(time){
  for(let i=0; i<obstacleList.length; i++){
    let obstacle = obstacleList[i];

    //define the obstacle display variable based on a noise random
    // the bigger the scaler is the more hole we will have into the grid
    let noiseShow = noise(obstacle.x/width * scaler + time, obstacle.y/height * scaler + time, time);
    if(noiseShow > difficulty){
      obstacle.show = true;
    }else{
      obstacle.show = false;
    }

    if(obstacle.show){
      obstacle.display();
    }
  }
}

function displayTarget(){
  push();
  noFill();
  stroke(240);
  ellipse(targetX, targetY, targetSize, targetSize);
  ellipse(targetX, targetY, targetSize * 0.85, targetSize * 0.85);
  pop();
}

function updatePlayer(){
  playerX = mouseX;
  playerY = mouseY;
}

function checkIfPlayerHasTouchedAnObstacle(){
  for(let i=0; i<obstacleList.length; i++){
    let obstacle = obstacleList[i];
    if(obstacle.show){
      let distance = getDistance(playerX, playerY, obstacle.x, obstacle.y);
      if(distance < playerSize * 0.5 + obstacle.res * 0.5){
        if(!obstacle.isTouched){
          touchCount ++;
          obstacle.isTouched = true;
        }
      }else{
        obstacle.isTouched = false;
      }
    }
  }
}

function checkIfPlayerHasReachedTheTarget(){
  let distance = getDistance(playerX, playerY, targetX, targetY);
  if(distance < playerSize * 0.5 + targetSize * 0.5){
    over = true;
    win = true;
  }
}

function checkLife(){
  life = maxLife - touchCount;
  if(life <= 0){
    over = true;
    win = false;
  }
}

function displayPlayer(){
  push();
  noStroke();
  fill(0, 20, 240);
  ellipse(playerX, playerY, playerSize, playerSize);
  pop();
}

//----------------------------
// INIT METHODS
//----------------------------
//Init the obstacle
function initObstacleList(gridRes_, difficulty_, scaler_){
  obstacleList = [];
  //create a grid of N element at specific resolution
  gridRes = gridRes_;
  difficulty = difficulty_; //difficulty is define between 0 (hard) and 1 (easy) where 0 define all obstacles as showned
  scaler = scaler_;
  for(let i=0; i<width; i+=gridRes){
    for(let j=0; j<height; j+= gridRes){
      //define x and y at the center of the cell
      let x = i + gridRes * 0.5;
      let y = j + gridRes * 0.5;

      //define the obstacle display variable based on a noise random
      // the bigger the scaler is the more hole we will have into the grid
      let noiseShow = noise(i/width * scaler, j/height * scaler);
      let show = false;
      if(noiseShow > difficulty){
        show = true;
      }

      obstacleList.push(new Obstacle(x, y, gridRes, show));
    }
  }
}

function initTarget(targetSize_, targetX_, targetY_){
  targetSize = targetSize_;
  targetX = targetX_;
  targetY = targetY_;
}

function initPlayer(playerSize_){
  playerSize = playerSize_;
  playerX = gridRes * 0.5;
  playerY = gridRes * 0.5;
}

//------------------------------
// DEBUG & UTILS
//--------------------------
function displayDebugGrid(){
  push();
  noFill();
  stroke(40);
  for(let x=0; x<width; x+=gridRes){
    for(let y=0; y<height; y+= gridRes){
      rect(x, y, gridRes, gridRes)
    }
  }
  pop();
}

function getDistance(x1, y1, x2, y2){
  let dx = x1 - x2; //longueur c en x
  let dy = y1 - y2; //longueur c en y
  let dxCube = dx * dx;
  let dyCube = dy * dy;
  return sqrt(dxCube + dyCube);
}

function mouseClicked()
{
  console.log("OUPS")
  if(over){
    initObstacleList(20, 0.5, 5);
    initTarget(50, random(width), random(height));
    initPlayer(10);
    touchCount = 0;
    life = maxLife;
    over = false
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
