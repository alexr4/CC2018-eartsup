var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var sprites = [];
var pause = true;
var fps = 25;
var millisDivider = 1000 / fps;
var passedTime;
var passedFrame;
var index = 0;

//time management
var deltaTime = 0;
var lastTime = 0;
var time = 0;

function preload(){
  var nbSprites = 16;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("https://alexr4.github.io/CC2018-eartsup/Cours/8_AnimationAvancee/_SRC/Sprites/_EXPORTS/0_Bounce/ball_"+i+".png");
    sprites.push(sprite);
  }
}

function setup(){
  //initialize canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

}

function draw(){
  frameRate(60);
  background(20);

  stroke(255, 0, 0);
  noFill();
  rect(0, 0, 150, 150);

  var res = floor(width / 150.0);
  imageMode(CORNER)
  for(var i=0; i<sprites.length; i++){
    x = i % res;
    y = (i - x) / res;
    image(sprites[i], x * 150, y * 150 + 150);
  }

  fill(255);
  noStroke();
  text("Sprite Sheet : ", 20, 175);

  updateTime();
  updateSpriteIndex();
  image(sprites[index], 0, 0);
  fill(255);
  noStroke();
  textAlign(LEFT, CENTER);
  text("FPS : "+fps+"\nMillis per frame : "+millisDivider+"\nPassed Millis : "+passedTime+"\nFrame passed : "+passedFrame+"\nSprite frames : "+index, 150 + 20, 0, 150, 150);


}

function updateTime(){
  var actualTime = millis();
  if(!pause) deltaTime = actualTime - lastTime;
  lastTime = actualTime;
  if(!pause) time += deltaTime;
}

function updateSpriteIndex(){
  if(!pause){
    //Sprite Animator
    fps = 25;
    millisDivider = 1000 / fps;
    passedTime = floor(time);
    passedFrame = floor(passedTime / millisDivider);
    index = floor(passedFrame % sprites.length);
  }
}

function mousePressed(){
  pause = !pause;
  if(!pause){
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
