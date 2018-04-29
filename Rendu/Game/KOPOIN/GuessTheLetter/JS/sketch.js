var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//game variable
var gameOver;
var score;
var level;
var inc;

//text variable
var font, font2;
var fontSize;
var points;
var bounds;
var originalsPoints;
var eta;
var textToGuess;

function preload() {
  font2 = loadFont("QG.ttf");
  font = loadFont("London.ttf");
}
function drawCircle(){
  for (var i = 0; i < 100; i++) {
    var nj = i/100;
    var angle = nj * TWO_PI;
    var x = width/2 + cos(angle) * 220;
    var y = height/2 + sin(angle) * 220;
    var ratio = random(1);
    fill(255);
    noStroke();
    ellipse(x, y, 2, 2);
  }
  fill(0);
  stroke(255);
  ellipse(width/2, height/2, 410, 410);
}
function drawTitle(){
  fill(255);
  textAlign(CENTER);
  textFont('London', 16);
  text('Guess The Letter', width/2, 20);
}
function displayScore(){
  fill(255);
  textAlign(CENTER);
  textFont('QG', 32);
  var scoreText = parseInt(score);
  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(width/2, 70, 250, 50);
  fill(255);
  text('Score : ' + scoreText, width/2, 80);
  textFont('QG', 20);
  text('Julien Kopoin', width/2, height - 15);
}
function drawLines(){
  stroke(255, 0, 0);
  line(30, 15, width/2 - 100, 15);
  line(width/2 + 100, 15, width - 30, 15);

  line(30, height - 15, width/2 - 100, height - 15);
  line(width/2 + 100, height - 15, width - 30, height - 15);
  //************************************************************
  fill(255);
  noStroke();
  var xx = -160;
  var yy = 95;
  for(var k = 0; k < 3; k++){
    xx = -160;
    for(var i = 0; i < 30; i++){
      console.log(xx, yy);
      ellipse(xx, yy, 2, 2);
      xx += 50;
    }
    yy += 180;
  }
//**************************************
  xx = -37;
  yy = 185;
  for(var k = 0; k < 3; k++){
    xx = -37;
    for(var i = 0; i < 30; i++){
      console.log(xx, yy);
      ellipse(xx, yy, 2, 2);
      xx += 50;
    }
    yy += 180;
  }

  //************************************************************
  var xH = - 150;
  var yH = 50;
  var xB = 0;
  var yB = height - 50;
  stroke(128);
  for(var i = 0; i<30; i++){
    line(xH, yH, xB, yB);
    xH += 50;
    xB += 50;
  }
  //*******************
  xH = - 175;
  yH = 50;
  xB = -325;
  yB = height - 50;
  for(var i = 0; i<30; i++){
    line(xH, yH, xB, yB);
    xH += 50;
    xB += 50;
  }
}

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  margin = 40;

  gameOver = false;
  score = 0;
  level = 0;
  textToGuess = getRandomChar();
  defineText(textToGuess);
  deformText(level);
}

function draw(){
  background(0);

  drawLines();
  drawCircle();

  noFill();
  noStroke();
  if(!gameOver){
    fill(255, 0, 0);
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      ellipse(p.x, p.y, 2.0, 2.0);
    }
  }else{
    fill(255);
    textAlign(CENTER);
    textFont('QG',40);
    text("click to replay", width/2, height/2);
  }
  drawTitle();
  displayScore();

}

function levelUp(){
  //we reset the value
  randomSeed = random(0, 1000);
  noiseSeed(randomSeed);
  eta = random(0.05);
  //background(0);
  textToGuess = getRandomChar();
  //we update the level
  level ++;
  defineText(textToGuess);
  deformText(level);
}

function deformText(level){
  eta = 0.05;
  for(var l = 0; l<level; l++){
    for (var i = 0; i < points.length; i++) {
      var ni = i / points.length;
      var p = points[i];
      var curlLen = 3; //1.5
      var mx = noise(p.y*eta, p.y*eta) * 2.0 - 1.0;
      var my = noise(p.x*eta, p.x*eta) * 2.0 - 1.0;
      var mx = mx * curlLen;
      var my = my * curlLen;
      points[i].x = p.x + mx;
      points[i].y = p.y + my;
    }
  }
}

function defineText(char){
  textToGuess = char;
  fontSize = 400;
  //we realign text
  textAlign(LEFT, BASELINE)


  points = font.textToPoints(textToGuess, width * 0.5, height * 0.5, fontSize, {
    sampleFactor: 0.35,
    simplifyThreshold: 0
  });

  bounds = font.textBounds(textToGuess, width * 0.5, height * 0.5, fontSize);

  var offsetX = bounds.x - width * 0.5;
  var offsetY = bounds.y - height * 0.5;

  for (var i = 0; i < points.length; i++) {
    var p = points[i];

    var x = p.x - offsetX - bounds.w * 0.5;
    var y = p.y - offsetY - bounds.h * 0.5;

    points[i].x = x;
    points[i].y = y;
  }
}

function getRandomChar(){
  //we define a new random char
  var randKey = floor(random(65, 90));
  var char = String.fromCharCode(randKey);
  char = char.toUpperCase();
  return char;
}

function keyPressed(){
  var key = keyCode;
  //we remap the key code in order to prevent to consider le numpad as a char and not a number
  if(key >= 96 && key <= 105){
    key -= 48;
  }else{
  }
  var char = String.fromCharCode(key);
  char = char.toUpperCase();
  //Compare the char withn the char to textToGuess
  if(textToGuess == char){
    score ++;
    levelUp();
  }else{
    gameOver = true;
  }
}

function mousePressed(){
  if(gameOver){
      gameOver = false;
      score = 0;
      level = 0;
      levelUp();
  }
}


function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
