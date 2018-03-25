//Get the div which will contents the canvas in order to place it.
var contentDiv = document.getElementById('row1');
//Define the resolution of the canavs as 16:9
var resolution = 1920.0 / 1080.0;

//We create the shapes variables
var shapeMode; //type of the shape : 0 = rectangle, 1 = ellipse, 2 = customShape
var boundingBox; //Size of the grid
var numberOfCols; //number of columns into the grid
var resCol; //width of the one column
var margin; //margin per column
var innerWidth; //inner width (resocl - margin * 2)
var emptyRatio; //ratio of empty column

//Array of variable of each column
var numberOfRowsPerColumn = [];
var randOffsetPerColumn = [];
var randSpeedPerColumn = [];
var resRowsPerColumn = [];
var emptyPerColumn = [];
var innerheightPerColumn = [];
var randGrayPerRow = [[]];
var randOffsetPerRow = [[]];
var randSpeedPerRow = [[]];

//Array of Vertex coordinates
var Ax = [[]];
var Ay = [[]];
var Bx = [[]];
var By = [[]];
var Cx = [[]];
var Cy = [[]];
var Dx = [[]];
var Dy = [[]];

var theta;//angle of the shapes

function setup(){
  //Get the width of the div which will contents the canvas
  var targetWidth = contentDiv.offsetWidth;
  //Compute the height of the canvas according to the resolution
  var targetHeight = targetWidth / resolution;
  //Create the canvas
  var canvas = createCanvas(targetWidth, targetHeight);
  //Place the canvas into its parent the div
  canvas.parent("canvas-content");

  //we init the shapes variables
  initShape();
}

function draw(){
  //set the backgroud
  background(240);

  noStroke();
  fill(240, 100);

  //define the anchor points of the rect as its center
  rectMode(CENTER);

  //Save the matrix location/rotation
  push();
  //Move the matrix to the center of the canvas
  translate(width/2, height/2);
  //Rotate the matrix
  rotate(theta);

  //draw the grid
  for(var i=0; i<numberOfCols; i++){
    //define x per column
    var x = -boundingBox/2 + i * resCol + resCol / 2 ;
    var numberOfRows = numberOfRowsPerColumn[i];
    var resRows = resRowsPerColumn[i];
    var innerheight = innerheightPerColumn[i];
    var randOffset = randOffsetPerColumn[i];
    var randSpeed = randSpeedPerColumn[i];

    //if the empty ratio per column is > to the emptyRatio, then draw the shape
    if(emptyPerColumn[i] > emptyRatio){
      for(var j=0; j<numberOfRows; j++){
        //define y per rows
        var y = j * resRows + resRows / 2;
        //offset y in order to create a non-order rows
        y += randOffsetPerRow[i, j];
        //add millis() to y in order to move it. Add the speed per rows in order to have differents speed per column
        y += millis() * 0.25 * (randSpeed + randSpeedPerRow[i, j]);
        //Clamp y between the limits of the bounding box
        y = y % boundingBox - boundingBox * 0.5;

        //get the gray value of sahpe
        var gray = randGrayPerRow[i, j];
        fill(gray, 50);

        //draw shapes
        if(shapeMode == 0){
          //shape1
          rect(x, y, innerWidth, innerheight);
        }else if(shapeMode == 1){
          //shape 2
            ellipse(x, y, innerWidth, innerWidth);
          }else if(shapeMode == 2){
            var Ax_ = x - Ax[i, j];
            var Ay_ = y - Ay[i, j];
            var Bx_ = x + Bx[i, j];
            var By_ = y - By[i, j];
            var Cx_ = x + Cx[i, j];
            var Cy_ = y + Cy[i, j];
            var Dx_ = x - Dx[i, j];
            var Dy_ = y + Dy[i, j];

            beginShape();
            vertex(Ax_, Ay_);
            vertex(Bx_, By_);
            vertex(Cx_, Cy_);
            vertex(Dx_, Dy_);
            endShape();
          }else{
          }
        }
    }
  }
  pop();
}

//function which init the shapes varibales
function initShape(){
  shapeMode = round(random(2)); //define a random shape mode between 0 and 2
  boundingBox = width * random(0.5, 1.5); //define the size of the square boundingBox. Here the get the larger side of the canvas in order to fill it with the grid
  numberOfCols = round(random(10, 20)); //define the number of columns into the grid
  resCol = boundingBox / numberOfCols; //define the resolution of a column
  margin = resCol / random(5, 20); //define the size of the margin
  innerWidth = resCol - margin * 2; //define the inner width of the shapes
  emptyRatio = random(0.75);
  theta = random(TWO_PI); //defin the angle of the rotation of the matrix

  //define variable per columns and rows
  //Empty the arrays
  numberOfRowsPerColumn = [];
  randOffsetPerColumn = [];
  randSpeedPerColumn = [];
  resRowsPerColumn = [];
  emptyPerColumn = [];
  innerheightPerColumn = [];
  randGrayPerRow = [[]];
  randOffsetPerRow = [[]];
  randSpeedPerRow = [[]];
  Ax = [[]];
  Ay = [[]];
  Bx = [[]];
  By = [[]];
  Cx = [[]];
  Cy = [[]];
  Dx = [[]];
  Dy = [[]];

  //for each column
  for(var i=0; i<numberOfCols; i++){
    numberOfRowsPerColumn[i] = round(random(2, 20)); //define a random number of rows of column
    resRowsPerColumn[i] = boundingBox /   numberOfRowsPerColumn[i]; //define the resolution per column
    innerheightPerColumn[i] = resRowsPerColumn[i] - margin * 2; //define inner height per column
    randOffsetPerColumn[i] = random(innerheightPerColumn[i], innerheightPerColumn[i] * 4); //define random offset per column
    randSpeedPerColumn[i] = random(1); // define random speed per column
    emptyPerColumn[i] = random(1); //define the empty ratio per column

    //for each rows
    for(var j=0; j<numberOfRowsPerColumn[i]; j++){
      randOffsetPerRow[i, j] = randOffsetPerColumn[i]; //define empty offset per row
      randGrayPerRow[i, j] = random(10, 100); // define random gray color per row
      randSpeedPerRow[i, j] = random(1);
      //define vertex position if shape mode is equal to 2
      if(shapeMode == 2){
        var min = random(0.35, 0.45); //define a random minimum offset size for each point
        var max = random(0.45, 0.5); //define a random maximum offset size for each point
        //define point position such as :
        /*
        A----B
        |    |
        D----C
        */
        Ax[i, j] = random(innerWidth * min, innerWidth * max);
        Ay[i, j] = random(innerheightPerColumn[i] * min, innerheightPerColumn[i] * max);
        Bx[i, j] = random(innerWidth * min, innerWidth * max);
        By[i, j] = random(innerheightPerColumn[i] * min, innerheightPerColumn[i] * max);
        Cx[i, j] = random(innerWidth * min, innerWidth * max);
        Cy[i, j] = random(innerheightPerColumn[i] * min, innerheightPerColumn[i] * max);
        Dx[i, j] = random(innerWidth * min, innerWidth * max);
        Dy[i, j] = random(innerheightPerColumn[i] * min, innerheightPerColumn[i] * max);
      }else{
      }
    }
  }
}

function mousePressed(){
  //re-initialize shape
  initShape();
}

function keyPressed(){
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
