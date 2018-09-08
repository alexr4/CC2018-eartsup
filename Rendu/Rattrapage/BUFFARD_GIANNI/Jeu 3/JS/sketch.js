//Variables Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Game Variables
var ronds = [];
var nbEssais;
var win = false;
var exec = false; //Bool pour incrementer le score une fois

//Variables Lettres
var font;
var myLetter;
var points;
var bounds;
var tailleTexte = 250;

function preload()
{
  font = loadFont("./Fonts/Club.otf");
}

function setup()
{
  //Partie Canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  //Partie Game
  reset();
  nbEssais = 0;
  win = false;
}

function draw()
{
  background(20);
  if(!win)
  {
    for(var i = 0; i < ronds.length; i++)
    {
      ronds[i].update();
      ronds[i].show();
    }

    for(var i = 0; i < points.length; i++)
    {
      var p = points[i];
      var x = p.x;
      var y = p.y;
      strokeWeight(4);
      stroke(255);
      point(x, y);
    }

    showPointCount();
    checkVictory();
  }
  else
  {
    showEndGame();
  }
}

function showEndGame()
{
  if(!exec){nbEssais++; exec = true;}
  //Texte victoire
  noStroke();
  textAlign(CENTER);
  textSize(40);
  fill(255);
  noStroke();
  text("VICTORY !", width/2, 70);

  //Texte nombre de lettres trouvées
  textSize(25);
  fill(150);
  text("Completed Letters : " + nbEssais, width/2, height/2 - 100);

  //Bouton Next
  stroke(255).
  strokeWeight(1);
  fill(0);
  rectMode(CENTER);
  rect(width/2, height/2, 150,50);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text("Next", width/2, height/2);
}

function showPointCount()
{
  noStroke();
  textAlign(RIGHT);
  textSize(20);
  fill(255);
  noStroke();
  text("Point Count : " + points.length, width - 30, height - 40);
}

function reset()
{
  exec = false;
  win = false;
  ronds = [];

  //Lettre
  tailleTexte = 250;
  myLetter = getRandomChar();
  init(myLetter);

  //Ronds
  var tempY = 30;
  var tempX = 30;
  for(var i = 0; i < points.length; i++)
  {
    ronds.push(new Circle(tempX, tempY));
    tempY += 50;
    if(tempY >= height - 50) {tempX += 50; tempY = 30;}
  }
}

function init(txt)
{
  textAlign(LEFT, BASELINE);
  points = font.textToPoints(txt, width/2, height/2,
    tailleTexte, {
    sampleFactor : 0.03,
    simplifyThresold : 0
  });

  bounds = font.textBounds(txt, width/2, height/2, tailleTexte);
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

function getRandomChar()
{
  var ranKey = round(random(65, 90)); //Keycode entre a et z
  var char = String.fromCharCode(ranKey); //Convertir keycode en char
  char = char.toUpperCase(); //Mettre en majuscule
  return char;
}

function checkRondsOver(state)
{
  return state == true;
}

function checkVictory()
{
  var states = [];
  for(var i = 0; i < ronds.length; i++)
  {
    states.push(ronds[i].isOverPoint);
  }
  win = states.every(checkRondsOver);
}

function mousePressed()
{
  //Attraper un rond
  for(var i = 0; i < ronds.length; i++)
  {
    if(mouseX <= ronds[i].x + ronds[i].radius && mouseX >= ronds[i].x - ronds[i].radius)
    {
      if(mouseY <= ronds[i].y + ronds[i].radius && mouseY >= ronds[i].y - ronds[i].radius)
      {
        ronds[i].inMouse = !ronds[i].inMouse;
      }
    }
  }

  //Clique sur le bouton Next
  if(win)
  {
    //X 495 645 | Y 295 345
    if(mouseX >= 495 && mouseX <= 645)
    {
      if(mouseY >= 295 && mouseY <= 345)
      {
        reset();
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
