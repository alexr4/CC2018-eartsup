var font;
var char;
var score;
var pv;

function preload()
{
  font = loadFont("./Gugi/Gugi-Regular.ttf")
}

function setup()
{
  var canvas = createCanvas(windowWidth, windowHeight);
  init("yee");

  char = getRandomChar();
  init(char);

  gameover = false;
  score = 0;
  pv = 3;
}

function draw()
{
  background(230, 230, 230);

  stroke(255, 0, 0);
  //line(0, height/2, width, height/2);
  //line(width/2, 0, width/2, height);

  fill(255);
  strokeWeight(4);
  stroke(55);
  rect(20, 20, 60, 60);

  fill(255);
  strokeWeight(4);
  stroke(55);
  rect(2192, 20, 60, 60);

  fill(255);
  strokeWeight(4);
  stroke(55);
  rect(2192, 985, 60, 60);

  fill(255);
  strokeWeight(4);
  stroke(55);
  rect(20, 985, 60, 60);

  line(50, 80, 50, 982);
  line(2222, 80, 2222, 982);
  line(80, 1015, 2190, 1015);

  fill(255);
  strokeWeight(10);
  stroke(55);
  textAlign(LEFT);
  textSize(60);
  textStyle(BOLD);
  text("Score : " +score, 1900, 75);

  fill(255);
  strokeWeight(10);
  stroke(55);
  textAlign(RIGHT);
  textSize(60);
  textStyle(BOLD);
  text("PV : " +pv, 300, 75);

  if (gameover == false)
  {
    stroke(0, 255, 0);
    noFill();
    //rect(bounds.x, bounds.y, bounds.w, bounds.h);

    fill(55);
    noStroke();
    for(var i=0; i<points.length; i++)
    {
      var p = points[i];
      var x = p.x;
      var y = p.y;
    //  ellipse(x, y, 12, 12);
    rect(x, y, 3, 28);
    }
  }


}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function init(txt)
{
  points = font.textToPoints(txt, width/2, height/2, 500,
  {
    sampleFactor : .1,
    simplifyThreshold : 0
  })

  bounds = font.textBounds(txt, width/2, height/2, 500);

  var offsetX = bounds.x - random(200, 1700);
  var offsetY = bounds.y - random(280, 600);

  for(var i=0; i<points.length; i++)
  {
    var p = points[i];
    var x = p.x - offsetX - bounds.w/2;
    var y = p.y - offsetY - bounds.w/2;

    points[i].x = x;
    points[i].y = y;
  }
}

function deformLetter(score)
{
  for(i=0; i<points.length; i++)
  {
    var p = points[i];
    var eta = 0.5;
    var curlLen = 1.5;
    var x = noise(p.y * eta, p.y * eta) * 2.0 - 1.0;
    var y = noise(p.x * eta, p.x * eta) * 2.0 - 1.0;
    points[i].x = p.x + x * curlLen;
    points[i].y = p.y + y * curlLen;
  }
}

function getRandomChar()
{
  var randkey = round(random(65, 90));
  char = String.fromCharCode(randkey);
  char = char.toUpperCase();
  return char;
}

function keyPressed()
{
  var key = keyCode;
  var letterPressed = String.fromCharCode(key);
  letterPressed = letterPressed.toUpperCase();

  if(letterPressed == char)
  {
    console.log("win + next level")
    score ++;
    char = getRandomChar();
    init(char);
  }else{
    pv --;
  }

  if(pv == 0)
  {
    console.log("over");
    gameover = true;
  }

  if(pv == -1)
  {
    console.log("over");
    gameover = true;
    pv = 0;
  }
}

function mousePressed()
{
  if(gameover == true)
  {
    restart();
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
