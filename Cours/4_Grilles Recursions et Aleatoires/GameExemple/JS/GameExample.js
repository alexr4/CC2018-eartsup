var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Global game variables
var time; //time of the game used as increment of the noise displacement of each cell
var timeSpeed; //speed of the time use to descale millis() function. It's used in order to set the difficulty of the level
var timeInc; //time random increment used in order to set a random value at each new game
var life; //number of life available
var over; //game over state (true/false)
var overText; //game over UI text
var win; //game win state;

//UI
var replayX; //button replay x
var replayY; //button replay y
var replayM; //button replay margin
var replayW; // button replay width
var replayH;//button replay height
var replayText;// button replay text

//maze variable
var ox; //center x of the maze
var oy; //cebrer y of the maze
var margin;//margin of the maze
var radius;//radius of the maze
var numberOfInnerCircle;// number of inner layers of the maze

//cell variables
var hits; //array of hit state per cell (true/false)
var ex; //array of x position per cell
var ey; //array of y position per cell
var res; //resolution of each cell
var eSize; //size of a wall

//player variables
var px;//position x of the player
var py;//position y of the player

//initialize the program
function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  //define level
  initLevel();

  replayX = 10;
  replayY = 10;
  replayM = 10;

  noStroke();
  textSize(14);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textFont('monospace');

  replayText = "(Click to replay)";
  var replayTextWidth = textWidth(replayText);
  replayW = replayTextWidth + replayM * 2;
  replayH = 30;
}

function draw(){
  background(245);

  //playing control
  if(!over){
    // if the game is not over
    noCursor(); // hide the cursor during the game
    time = timeInc + millis() * timeSpeed; //increment the time of the game
    px = mouseX; //set the position x of the player
    py = mouseY; //set the position y of the player
    updateMaze();//update the maze's cell positions
    checkLife(); //check if there is any life available
    checkTarget(px, py, ox, oy, eSize * 2.0); //check if the player has reached the target
  }else{
    cursor();
  }

  //Displays
  displayWalls(); //display maze
  displayPlayer();//display player
  displayTarget();//display target
  displayUI();//display UI
  displayReplayUI(replayX, replayY, replayM);
}
/*---------------
GAME METHODS
-----------------*/
//Initialize the game
function initLevel(){
  //init global game variables
  time = 0;//reset at at 0
  timeInc = random(1000); //define a random start for time
  timeSpeed = 0.0001; //define difficulty of the level (speed of the maze)
  life = 3; //define number of lives availbales
  over = false; //define game over state as false
  win = false;
  overText = ""; //reset oover UI Text

  //init maze variables
  ox = width/2; //define position x of the maze
  oy = height/2; //define position y of the maze
  margin = 10; //define margin of the maze
  radius = height * 0.5 - margin * 2; //define radius of the maze as height/2 - margin
  numberOfInnerCircle = 8; //define the number of inner walls

  //init celll variables
  res = 40.0; //define resolution per cell
  eSize = res * 0.25; //define the size of the walls
  hits = new Array(numberOfInnerCircle); //reset hit state per cell as a new array
  ex = new Array(numberOfInnerCircle); //reset x per cell as a new array
  ey = new Array(numberOfInnerCircle); //reset y per cell as a new array
  //init each cell. For each inner wall
  for(var i=0; i<numberOfInnerCircle; i++){
    var ni = i/numberOfInnerCircle; //normalize index of the inner wall
    var rad = radius * ni; //radius of the wall
    var perimeter = TWO_PI * rad * 2.0; //perimeter if the wall - length of it
    var numberOfCell = floor(perimeter / res); //find the number of cell at res into the inner wall

    hits[i] = new Array(numberOfCell); //for each wall reset the array of hit state per cell
    ex[i] = new Array(numberOfCell); //for each wall reset the array x hit per cell
    ey[i] = new Array(numberOfCell); //for each wall reset the array y hit per cell

    for(var j=0; j<numberOfCell; j++){
      hits[i][j] = false; //for each cell define its hit state as false
    }
  }

  //init player
  px = 0;
  py = 0;
}

//check the number of lives avalaible
function checkLife(){
  if(life <= 0){
    //if all lives as been used, set life as 0 and end the game
    life = 0;
    over = true;
    win = false;
    overText = "You Loose";
  }
}

//check if the player as reached the target
function checkTarget(x1, y1, x2, y2, size){
  //where x1, y1 is the player position; x2, y2 is the target position and size is the radius of the target
  var dist = distance(x1, y1, x2, y2);//get the distance between the two points (player and target)
  if(dist < size){
    //the distance is less than the radius so the game is over and the player has won the game
    over = true;
    win = true;
    overText = "You Win";
  }
}

//update the cell of the maze
function updateMaze(){
  for(var i=0; i<numberOfInnerCircle; i++){
    //for each inner wall, we retreive it normalize index, radius, perimeter and number of cell
    var ni = i/numberOfInnerCircle;
    var rad = radius * ni;
    var perimeter = TWO_PI * rad * 2.0;
    var numberOfCell = floor(perimeter / res);

    for(var j=0; j<numberOfCell; j++){
      //for each cell of each inner wall
      var nj = j / numberOfCell;
      var theta = (j/numberOfCell) * TWO_PI;//define the angle of each cell
      theta += noise(ni * 2.5 + time, nj * 2.5 + time, time) * TWO_PI; // update the angle of each cell in order to move it (move it)

      //find the position of the cell on the circle of the maze
      var x = cos(theta) * rad + ox;
      var y = sin(theta) * rad + oy;

      //Test the hit for each cell
      var dist = distance(px, py, x, y); //find the distance between the player and the cell
      if(dist < eSize){
        // if the distance is less than the cell radius
        if(hits[i][j] == false){
          // if the cell has never bee hit, decrement the game of 1 life and set the hit state of the cell as true into the array of hit states
          life --;
          hits[i][j] = true;
        }
      }else{
      }
      //set the position of the cell into the array
      ex[i][j] = x;
      ey[i][j] = y;
    }
  }
}

/*---------------
DISPLAY METHODS
-----------------*/
function displayPlayer(){
  fill(0, 240, 0);
  ellipse(px, py, eSize, eSize);
}

function displayWalls(){
  noStroke();
  for(var i=0; i<numberOfInnerCircle; i++){
    var ni = i/numberOfInnerCircle;
    var rad = radius * ni;
    var perimeter = TWO_PI * rad * 2.0;
    var numberOfCell = floor(perimeter / res);
    noFill();
    stroke(175, 200, 250);
    ellipse(ox, oy, rad * 2, rad * 2)
    for(var j=0; j<numberOfCell; j++){
      noStroke();
      if(hits[i][j] == true){
        fill(250, 60, 30);
      }else{
        fill(50, 70, 250);
      }
      ellipse(ex[i][j], ey[i][j], eSize, eSize);
    }
  }
}

function displayTarget(){
  stroke(175, 200, 250);
  noFill();
  ellipse(ox, oy, eSize * 4.0, eSize * 4.0);
  ellipse(ox, oy, eSize * 3.5, eSize * 3.5);

  push();
  translate(ox, oy);
  rotate(QUARTER_PI);
  rectMode(CENTER);
  noStroke();
  fill(250, 60, 30);
  rect(0, 0, eSize * 2.0, eSize * 0.25);
  rotate(HALF_PI);
  rect(0, 0, eSize * 2.0, eSize * 0.25);
  pop();
}

function displayUI(){
  //display Live UI
  var x = width/2;
  var y = height * .5 - radius;

  fill(125);
  noStroke();
  textSize(14);
  textAlign(CENTER, TOP);
  textFont('monospace');
  textStyle(ITALIC);
  text("REMAINING LIVES : "+life, x, y);

  if(over){
    rectMode(CENTER);
    fill(240);
    if(win){
      stroke(50, 70, 250);
    }else{
      stroke(250, 60, 30);
    }
    strokeWeight(10);
    rect(width/2, height/2, radius * 2, 150);
    strokeWeight(1);

    overText = overText.toUpperCase(); //convert text as an upper cased text
    if(win){
      fill(50, 70, 250);
    }else{
      fill(250, 60, 30);
    }
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text(overText, width/2, height/2);
  }
}

function displayReplayUI(x, y, m){
  if(over){
    noStroke();
    textSize(14);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    textFont('monospace');

    rectMode(CORNER);
    noStroke();
    fill(50, 70, 250);
    rect(x, y, replayW, replayH);

    fill(250);
    text(replayText, x + replayW * .5, y + replayH * 0.5);
  }
}


//Find the distance between two points using the pythagorean relationship (find the hypothenuse of the rectangle triangle define by the two points)
function distance(x1, y1, x2, y2){
  var dx = x1 - x2;
  var dy = y1 - y2;
  var dxCube = dx * dx;
  var dyCube = dy * dy;
  var dist = sqrt(dxCube + dyCube);

  return dist;
}

function mousePressed(){
  if(over){
    console.log(mouseX, mouseY, replayY)
    if(mouseX > replayX && mouseX < replayX + replayW && mouseY > replayY && mouseY < replayY + replayH){
      initLevel();
    }
  }
}

//resize the canvas for responsive design
function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
