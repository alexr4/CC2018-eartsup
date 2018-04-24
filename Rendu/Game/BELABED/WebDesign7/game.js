var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;
var gameOver;
var score;
var level;
var inc;
var font;
var fontSize;
var points;
var bounds;
var originalsPoints;
var eta;
var textToGuess;

function preload() {
  font = loadFont(".\WebDesign7\Roboto-Light.ttf");
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
  stroke(255, 0, 0);
  noFill();
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);

  noStroke();
  if(!gameOver){
    fill(255);
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      ellipse(p.x, p.y, 2.0, 2.0);
    }
  }else{
    fill(255);
    text("click to replay", 20, 20);
  }
}
function levelUp(){
  randomSeed = random(0, 1000);
  noiseSeed(randomSeed);
  eta = random(0.05);
  textToGuess = getRandomChar();
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
      var curlLen = 1.5;
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

  var randKey = floor(random(65, 90));
  var char = String.fromCharCode(randKey);
  char = char.toUpperCase();
  return char;
}
function keyPressed(){
  var key = keyCode;
  if(key >= 96 && key <= 105){
    key -= 48;
  }else{
  }
  var char = String.fromCharCode(key);
  char = char.toUpperCase();
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
