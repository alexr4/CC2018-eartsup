//Variables Canvas
var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//Sliders
var rSlider, gSlider, bSlider;

//Game Variables
var rGen, gGen, bGen;
var rPlayer, gPlayer, bPlayer;
var win;
var colorGuessed;

function setup()
{
  //Partie Canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.parent("canvas-content");
  rSlider.position(20, 50);
  rSlider.style('width', '300px');
  gSlider = createSlider(0, 255, 0);
  gSlider.parent("canvas-content");
  gSlider.position(20, 100);
  gSlider.style('width', '300px');
  bSlider = createSlider(0, 255, 0);
  bSlider.parent("canvas-content");
  bSlider.position(20, 150);
  bSlider.style('width', '300px');

  win = false;
  colorGuessed = 0;
  generateColor();
}

function draw()
{
  background(20);
  //console.log(mouseX + " - " + mouseY);
  //Valeurs Sliders
  rPlayer = rSlider.value();
  gPlayer = gSlider.value();
  bPlayer = bSlider.value();

  showTexts();
  showCircle();
  if(rPlayer == rGen && gPlayer == gGen && bPlayer == bGen) win = true; else win = false;
  if(win) showButton();
}

function generateColor()
{
  rGen = Math.round(random(255));
  gGen = Math.round(random(255));
  bGen = Math.round(random(255));
}

function showButton()
{
  stroke(255).
  strokeWeight(1);
  fill(0);
  rectMode(CENTER);
  rect(width - 200, 100, 150,50);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("Next", width-200, 100);
}

function showCircle()
{
  strokeWeight(0.8);
  stroke(255);
  fill(rGen, gGen, bGen);
  arc(width/2, height/2 + 70, 200, 200, PI/2, PI + PI/2, CHORD); //x, y, w, h, start, stop, mode

  fill(rPlayer, gPlayer, bPlayer);
  arc(width/2, height/2 + 70, 200, 200, PI + PI/2, PI/2, CHORD);
}

function showTexts()
{
  //Textes sliders
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(25);
  fill(255, 0, 0);
  text("Red", rSlider.x * 2 + rSlider.width, 60);
  fill(0, 255, 0);
  text("Green", gSlider.x * 2 + gSlider.width, 110);
  fill(0, 0, 255);
  text("Blue", bSlider.x * 2 + bSlider.width, 160);

  //Texte color Code
  textAlign(CENTER);
  textSize(30);
  fill(255);
  if(rPlayer < 10) rPlayer = "0" + rPlayer;
  if(gPlayer < 10) gPlayer = "0" + gPlayer;
  if(bPlayer < 10) bPlayer = "0" + bPlayer;
  var texteCouleur = "#" + rPlayer.toString(16) + gPlayer.toString(16) + bPlayer.toString(16); //Formater les nombres en hexa
  text(texteCouleur.toUpperCase(), width/2, height - 50);

  //Textes plus et moins
  textSize(25);
  textAlign(CENTER);
  if(rPlayer < rGen){fill(0, 180, 60); text("(+)",  rSlider.x * 2 + rSlider.width + 70, 60);}
  if(rPlayer > rGen){fill(180, 0, 60); text("(-)", rSlider.x * 2 + rSlider.width + 70, 60);}
  if(rPlayer == rGen){fill(0, 60, 180); text("(=)", rSlider.x * 2 + rSlider.width + 70, 60);}

  if(gPlayer < gGen){fill(0, 180, 60); text("(+)",  gSlider.x * 2 + gSlider.width + 100, 110);}
  if(gPlayer > gGen){fill(180, 0, 60); text("(-)", gSlider.x * 2 + gSlider.width + 100, 110);}
  if(gPlayer == gGen){fill(0, 60, 180); text("(=)", gSlider.x * 2 + gSlider.width + 100, 110);}

  if(bPlayer < bGen){fill(0, 180, 60); text("(+)",  bSlider.x * 2 + bSlider.width + 80, 160);}
  if(bPlayer > bGen){fill(180, 0, 60); text("(-)", bSlider.x * 2 + bSlider.width + 80, 160);}
  if(bPlayer == bGen){fill(0, 60, 180); text("(=)", bSlider.x * 2 + bSlider.width + 80, 160);}

  //Texte colors guessed
  textAlign(RIGHT);
  textSize(25);
  fill(255);
  noStroke();
  text("Colors Guessed : " + colorGuessed.toString(), width - 30, height - 40);
}

function mouseClicked()
{
  if(win)
  {
    if(mouseX >= 715 && mouseX <= 865)
    {
      if(mouseY >= 75 && mouseY <= 125)
      {
        generateColor();
        colorGuessed++;
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
