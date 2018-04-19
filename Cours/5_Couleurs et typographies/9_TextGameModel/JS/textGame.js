var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

//game variable
var gameOver;
var score;
var level;
var inc;

//text variable
var font;
var fontSize;
var points;
var bounds;
var originalsPoints;
var eta;
var textToGuess;

//The preload functiuon allow to load assets before the setup call
function preload() {
  //here we load the .ttf model of the font in order to compute its vector path
  //font = loadFont('./FONTS/MuktaMahee-ExtraBold.ttf');
  //here we load the file from a online repository which provide CORS authorization
  font = loadFont("https://www.arivaux.com/preprod/cc-2018/MuktaMahee-Bold.ttf");
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
  //we realign text
  textAlign(LEFT, BASELINE)

  /**
  *p5.Font object allow to convert path as an array of point using font.textToPoints(text, x, y, fontsize, [option]) where
  * text : line of text
  * x : x-position of the text
  * y : y-position of the text
  * fontsize : size of the char (option)
  * [options] : Object which can contain :
  * * sampleFactor : ratio from path-length to number of sample into the array. Defalut is 0.25. More factor will provide more points
  * * simplifyThreshold : set to 0 will have no simplification. Up to 0 and colinear points will be removed in order to simplify the mode
  */
  points = font.textToPoints(textToGuess, width * 0.5, height * 0.5, fontSize, {
    sampleFactor: 0.35,
    simplifyThreshold: 0
  });

  /**
  * p5.FOnt object allow to get the bounding box of a text using font.textBounds (text, x, y, fontsize, [option]) where
  * text : line of text
  * x : x-position of the text
  * y : y-position of the text
  * fontsize : size of the char (option)
  */
  bounds = font.textBounds(textToGuess, width * 0.5, height * 0.5, fontSize);

  //re-center the type at the center on the scene in order to convert for align left to align center
  //get the offset between x,y bounding position and center of the scene
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
  //Get the char the user has typed
  //we list of keyCode here : https://gist.github.com/tylerbuchea/8011573
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
