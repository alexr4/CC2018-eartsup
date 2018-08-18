
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;


var font;
var gameOver = false;
var myChar;
var life = 3;
var score = 0;

function preload()
{
  font = loadFont("./Font/LettersForLearners.ttf");
}

function setup()
{

  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");


  myChar = new MyChar();
  myChar.letter = getRandomChar();
}

function draw()
{
  background(10);
  showUI();
  checkGameOver();
  if(!gameOver)
  {
    showRightRects();
    myChar.show();
    myChar.update();
    if(myChar.x > width-100) myChar.checkCouloir();
  }
}

function showUI()
{
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(25);
  fill(255);
  noStroke();
  text("Score : " + score, 20, 40);
  text("Life : " + life, 20, 80);
}

function showRightRects()
{
  rectMode(CORNER);
  stroke(255);
  fill(255, 0, 0, 80);
  rect(width-100, 0, 100, height/2);
  verticalText("consonnes", width-50, 40);
  fill(0, 0, 255, 80);
  rect(width-100, height/2, 100, height/2);
  verticalText("voyelles", width-50, 380);
}

function checkGameOver()
{
  if(life < 1)
  {
    gameOver = true;
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255, 0, 0);
    noStroke();
    text("GAME OVER", width/2, height/2);
    fill(255, 100);
    textSize(30);
    text("Press [SPACE] to Retry", width/2, height/2 + 40);
  }
}

function keyPressed()
{
  if(!gameOver)
  {
    if(keyCode == 38)
    {
      myChar.position = -1;
    }
    if(keyCode == 40)
    {
      myChar.position = 1;
    }
  }
  else
  {
    if(keyCode == 32)
    {
      gameOver = false;
      score = 0;
      life = 3;
      myChar.position = 0;
      myChar.x = 0;
    }
  }
}

function getRandomChar()
{
  var ranKey = round(random(65, 90));
  var char = String.fromCharCode(ranKey);
  char = char.toUpperCase();
  return char;
}

function verticalText(input, x, y)
{
  var output = "";
  for (var i = 0; i < input.length; i += 1)
  {
    output += input.charAt(i) + "\n";
  }
  push();
  textAlign(CENTER, TOP);
  textSize(20);
  fill(200);
  noStroke();
  text(output, x, y);
  pop();
}

function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
