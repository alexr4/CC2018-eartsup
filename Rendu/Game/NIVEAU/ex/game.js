var font;
var points;
var bounds;
var char;
var gameover;
var score;
var rba;
var rbb;
var rbc;
var rli;
var rlimin;
var rlimax;
function preload(){
  font = loadFont("./font/MuktaMahee-Medium.ttf");
}

function restart(){
  char = getRandomChar();
  init(char)
  deformLetter(score);
  gameover = false;
  score = 0;
  rlimin = 100;
  rlimax = 200;
}

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  char = getRandomChar();
  init(char)
  deformLetter(score);
  gameover = false;
  score = 0;
  rba = random(55, 155);
  rbb = random(55, 155);
  rbc = random(55, 155);
  rlimin = 100;
  rlimax = 200;
  rli = random(rlimin, rlimax);

}

function draw(){
  noStroke();
  text("score :"+score, width/2, 40);

  background(rba, rbb, rbc);
  fill(rba + rli, rbb + rli, rbc + rli);
  if (gameover == false){
    for(var i=0; i<points.length; i++){
      var p = points[i];
      var x = p.x;
      var y = p.y;
      noStroke();
      textAlign(CENTER);
      textSize(20);
      ellipse(x, y, 4, 4)
    }
  }else{
    background(0);
    fill(255);
    stroke(255);
    text('Game over. Click to restart.', width/2, height/2);
  }
}

function init(txt){
  textAlign(LEFT, BASELINE);
  points = font.textToPoints(txt, width/2, height/2, 150, {
    sampleFactor : .35,
    simplifyThreshold : 0
  })
  bounds = font.textBounds(txt, width/2, height/2, 150);

  var offsetX = bounds.x - width/2;
  var offsetY = bounds.y - height/2;
  for(var i = 0; i < points.length; i++){
    var p = points[i];
    var x = p.x - offsetX - bounds.w/2;
    var y = p.y - offsetY - bounds.h/2;
    points[i].x = x;
    points[i].y = y;
  }
}

function getRandomChar(){
  var randKey = round(random(65, 90));
  char = String.fromCharCode(randKey);
  char = char.toUpperCase();
  return char;
}

function keyPressed(){
  var key = keyCode;
  if(key >= 96 && key <=102){
    key -= 48;
  }
  var letterPressed = String.fromCharCode(key);
  letterPressed = letterPressed.toUpperCase();
  if(letterPressed == char){
    score++
    char = getRandomChar();
    init(char);
    deformLetter(score);
    if(rlimin >= 10)
    {
      rlimin -= 10;
      rlimax -= 10;
      rli = random(rlimin, rlimax);
      console.log(rlimin + " - " + rlimax);
    }
    if(rlimax >= 50)
    {
      rlimax -= 10;
    }
  }else{
    gameover = true;
  }
}

function deformLetter(score){
  for (var j = 0; j < score; j++){
    for (i=0; i<points.length; i++){
      var p = points[i];
      var eta = 0.1;
      var curlLen = 1.5;
      var x = noise(p.y * eta, p.y * eta) * 2.0 - 1.0;
      var y = noise(p.x * eta, p.x * eta) * 2.0 - 1.0;
      points[i].x = p.x + x * curlLen;
      points[i].y = p.y + y * curlLen;

    }
  }

}

function mousePressed(){
  if (gameover == true){
    restart();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
