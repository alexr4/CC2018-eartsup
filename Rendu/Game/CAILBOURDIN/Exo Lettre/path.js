//Letter variables
var font;
var points;
var bounds;
var tailleTexte;
//Game variables
var char;
var gameOver;
var score;
var timer;
var life;
//Letter color
var r, g, b;

function preload() //Avant Setup
{
  font = loadFont("./fonts/OptimalSolutions.ttf"); //Charger la font
}

function restart()
{
  score = 0;
  tailleTexte = 250;
  char = getRandomChar();
  init(char);
  deformLetter(score);
  gameOver = false;
  timer = 100;
  life = 3;
  changeLetterColor();
}

function setup()
{
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent = "content";
  restart();
}

function draw()
{
  background(30);
  //showCrossMiddleScreen();
  printUI();

  if(!gameOver)
  {
    fill(r, g, b);
    noStroke();
    runTimer();
    for(var i = 0; i < points.length; i++)
    {
      var p = points[i];
      var x = p.x;
      var y = p.y;
      ellipse(x, y, 4, 4);
    }
  }
  showGameOver();
}

function showGameOver()
{
  if(life <= 0)
  {
    gameOver = true;
    fill(255, 0, 0);
    noStroke();
    textAlign(CENTER);
    textSize(60);
    text("GAME OVER", width/2, height/2);
    fill(255);
    textSize(20);
    text("Press <R> to restart", width/2, height/2 + 65);
  }
}

function runTimer()
{
  if(frameCount % 60 == 0 && timer > 0) //Toute les secondes
  {
    timer--;
  }
  if(timer <= 0)
  {
    life = 0;
    gameOver = true;
  }
}

function changeLetterColor()
{
  r = random(10, 255);
  g = random(10, 255);
  b = random(10, 255);
}

function printUI()
{
  fill(150, 255, 150);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("Score : " + score, width/2, 40);

  fill(100, 150, 255);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("Timer : " + timer, width/2 - 200, 40);

  fill(255, 50, 100);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("Life : " + life, width/2 + 200, 40);
}

function init(txt)
{
  textAlign(LEFT, BASELINE);
  points = font.textToPoints(txt, width/2, height/2,
    tailleTexte, {
    sampleFactor : 0.15,
    simplifyThresold : 0
  }); //texte, x, y, taille texte, {sample factor, simplify thresold}

  bounds = font.textBounds(txt, width/2, height/2,
  tailleTexte);
  var offsetX = bounds.x - width/2;
  var offsetY = bounds.y;

  for(var i = 0; i < points.length; i++)
  {
    var p = points[i];
    var x = p.x + offsetX - bounds.w/2;
    var y = p.y + offsetY - bounds.h/2;
    points[i].x = x;
    points[i].y = y;
  }
}

function deformLetter(score)
{
  for(var j = 0; j < score; j++)
  {
    for(var i = 0; i < points.length; i++)
    {
      var p = points[i];
      var eta = 1.0;
      var curlLen = 1.5;
      var x = noise(p.y * eta, p.y * eta) * 2.0 - 1.0;
      var y = noise(p.x * eta, p.x * eta) * 2.0 - 1.0;
      points[i].x = p.x + x * curlLen;
      points[i].y = p.y + y * curlLen;
    }
  }
}

function getRandomChar()
{
  var ranKey = round(random(65, 90)); //Keycode entre a et z
  var char = String.fromCharCode(ranKey); //Convertir keycode en char
  char = char.toUpperCase(); //Mettre en majuscule
  return char;
}

function showCrossMiddleScreen()
{
  strokeWeight(2);
  stroke(255, 0, 0);
  line(0, height/2, width, height/2); //Horizontal
  line(width/2, 0, width/2, height); //Vertical
}

function keyPressed()
{
  if(life > 0)
  {
    var key = keyCode;
    //Bypass le numpad
    if(key >= 96 && key <= 105)
    {
      key -= 48;
    }
    var letterPressed = String.fromCharCode(key);
    letterPressed = letterPressed.toUpperCase();
    if(letterPressed == char)
    {
      console.log("WIN + NEXT LEVEL");
      score++;
      char = getRandomChar();
      init(char);
      deformLetter(score);
      changeLetterColor();
      tailleTexte = round(random(100, 250));
    }
    else
    {
      life--;
    }
  }
  if(life <= 0 && gameOver)
  {
    if(keyCode == 82)
    {
      restart();
    }
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
