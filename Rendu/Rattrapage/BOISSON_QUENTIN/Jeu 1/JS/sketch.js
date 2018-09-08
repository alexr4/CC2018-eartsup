
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;


var modelIndex = 1;
var cols = 16;
var rows = 16;
var cells = [];
var win = false;


var model1 = [];
var model2 = [];
var model3 = [];

function setup()
{

  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");


  model1 = make2Darray(cols, rows);
  model2 = make2Darray(cols, rows);
  model3 = make2Darray(cols, rows);
  initModel1();
  initModel2();
  initModel3();

  cells = make2Darray(cols, rows);
  for(var i = 0; i < cols; i++)
  {
    cells[i] = new Cell();
    for(var j = 0; j < rows; j++)
    {
      cells[i][j] = new Cell();
    }
  }
}

function draw()
{
  background(70);
  showLeftGrid();
  showRightGrid();
  checkRightModel(modelIndex);
  showUI();
}

function showLeftGrid()
{
  var offsetX = 50;
  var offsetY = 80;
  var cellSize = 30;
  rectMode(CORNER);
  for(var i = 0; i < cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      var x = i * cellSize;
      var y = j * cellSize;
      switch(modelIndex)
      {
        case 1: if(model1[i][j] == true) fill(255, 180); else noFill(); break;
        case 2: if(model2[i][j] == true) fill(255, 180); else noFill(); break;
        case 3: if(model3[i][j] == true) fill(255, 180); else noFill(); break;
        default: noFill(); break;
      }
      stroke(0);
      rect(x+offsetX, y+offsetY, cellSize, cellSize);
    }
  }
}

function showRightGrid()
{
  var offsetX = width/2 + 40;
  var offsetY = 80;
  var cellSize = 30;
  for(var i = 0; i < cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      var x = i * cellSize;
      var y = j * cellSize;
      cells[i][j].x = x + offsetX;
      cells[i][j].y = y + offsetY;
      cells[i][j].show();
    }
  }
}

function showUI()
{

  stroke(255);
  line(width/2, 60, width/2, height-40);

  rectMode(CENTER);
  fill(255, 100);
  noStroke();
  rect(width/2, 20, 150, 40);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(50, 200, 255);
  noStroke();
  text("Level "+modelIndex, width/2, 20);

  if(win && modelIndex < 3)
  {
    rectMode(CORNER);
    noStroke();
    fill(0, 255, 0, 50);
    rect(0, 0, 350, 40);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    noStroke();
    text("VICTORY ! Press [SPACE] to continue", 175, 20);
  }
  if(win && modelIndex == 3)
  {
    rectMode(CENTER);
    noStroke();
    fill(0, 255, 0, 50);
    rect(width/2, height/2, 300, 100);
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    noStroke();
    text("VICTORY !", width/2, height/2);
  }
}

function make2Darray(_cols, _rows)
{
  var arr = new Array(_cols);
  for(var i = 0; i < arr.length; i++)
  {
    arr[i] = new Array(_rows);
  }
  return arr;
}

function mousePressed()
{
  for(var i = 0; i < cols; i++)
  {
    for(var j = 0; j < rows; j++)
    {
      if(mouseX > cells[i][j].x && mouseX < cells[i][j].x+cells[i][j].size)
      {
        if(mouseY > cells[i][j].y && mouseY < cells[i][j].y+cells[i][j].size)
        {
          cells[i][j].active = !cells[i][j].active;
        }
      }
    }
  }
}

function keyPressed()
{
  if(win)
  {
    if(keyCode == 32)
    {
      switch(modelIndex)
      {
        case 1: modelIndex = 2; win = false; for(var i = 0; i < cols; i++){ for(var j = 0; j < rows; j++){ cells[i][j].active = false; } } break;
        case 2: modelIndex = 3; win = false; for(var i = 0; i < cols; i++){ for(var j = 0; j < rows; j++){ cells[i][j].active = false; } } break;
        default: break;
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
