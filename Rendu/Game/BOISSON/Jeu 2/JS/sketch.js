
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;


var bubbles = [];
var win = false;

function setup()
{

  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");


  reset();
}

function draw()
{
  background(10);
  for(var i = 0; i < bubbles.length; i++)
  {
    bubbles[i].show();
    bubbles[i].update();
  }
  checkVictory();
  if(win)
  {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(0, 200, 255);
    noStroke();
    text("Victory ! Press [SPACE] to retry", width/2, height/2);
  }
}

function reset()
{
  win = false;
  bubbles = [];
  var bubbleCount = round(random(10, 20));
  for(var i = 0; i < bubbleCount; i++)
  {
    bubbles.push(new Bubble());
    bubbles[i].x = random(width);
    bubbles[i].y = random(height);
    bubbles[i].radius = round(random(15, 25));
  }
}

function allBubblesGreen(index)
{
  return index == 2;
}

function checkVictory()
{
  var indexes = [];
  for(var i = 0; i < bubbles.length; i++)
  {
    indexes.push(bubbles[i].colorIndex);
  }
  win = indexes.every(allBubblesGreen);
}

function mousePressed()
{
  if(!win)
  {
    for(var i = 0; i < bubbles.length; i++)
    {
      if(mouseX > bubbles[i].x-bubbles[i].radius && mouseX < bubbles[i].x+bubbles[i].radius)
      {
        if(mouseY > bubbles[i].y-bubbles[i].radius && mouseY < bubbles[i].y+bubbles[i].radius)
        {
          bubbles[i].changeColorIndex();
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
      reset();
    }
  }
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
