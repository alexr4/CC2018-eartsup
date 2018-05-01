var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var sprites = [];
var pause = true;

var ryu;
var multiplekey = [false, false, false, false, false];//UP-RIGHT-LEFT-W-X

function preload(){
  var nbSprites = 30;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("../_SRC/Sprites/_EXPORTS/1_Ryu/Ryu_"+i+".png");
    sprites.push(sprite);
  }

}

function setup(){
  //initialize canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  ryu = new Sprite(sprites, 12, true);
  ryu.addAnimation("idle", 0, 3); //first animation will always be idle
  ryu.addAnimation("walk", 4, 10);
  ryu.addAnimation("jump", 11, 17);
  ryu.addAnimation("jumpForward", 12, 23);
  ryu.addAnimation("punch", 24, 26);
  ryu.addAnimation("kick", 27, 29);
}

function draw(){
  background(20);

  var x = 0;
  var y = 0;
  var s = 130;
  var strokeColor = color(255, 0, 0);

  ryu.update();

  ryu.displayBoundingBox(strokeColor, x, y);
  ryu.displaySpriteSheet(s * 2, 10, width - s * 2, s * 0.75);


  fill(255);
  noStroke();
  textAlign(LEFT, CENTER);
  text("FPS : "+ryu.fps+"\nMillis per frame : "+ryu.millisDivider+"\nPassed Millis : "+ryu.passedTime+"\nFrame passed : "+ryu.passedFrame+"\nSprite frames : "+ryu.index+"\nSprite stop : "+ryu.boolStop, s + 20, 0, s, s);

  image(ryu.getSprite(), x, y);


}

function keyPressed(){
  if(keyCode == UP_ARROW){
    //jump
    multiplekey[0] = true;
  }else if(keyCode == RIGHT_ARROW){
    //walk
    multiplekey[1] = true;
  }else if(keyCode == LEFT_ARROW){
    //walk
    multiplekey[2] = true;
  }else if(keyCode == 88){
    multiplekey[3] = true;
  }else if(keyCode == 87){
    multiplekey[4] = true;
  }


  //check anim type
  if(multiplekey[0] && !multiplekey[1] && !multiplekey[2]){
    ryu.setAnimation("jump");
  }
  if(multiplekey[0] && multiplekey[1] || multiplekey[0] && multiplekey[2]){
    ryu.setAnimation("jumpForward");
  }
  if(!multiplekey[0] && multiplekey[1] || !multiplekey[0] && multiplekey[2]){
    ryu.setAnimation("walk");
  }

  if(multiplekey[3]){
      ryu.setAnimation("kick");
  }
  if(multiplekey[4]){
      ryu.setAnimation("punch");
  }
}


function keyReleased(){
  if(keyCode == UP_ARROW){
    //jump
    multiplekey[0] = false;
  }else if(keyCode == RIGHT_ARROW){
    //walk
    multiplekey[1] = false;
  }else if(keyCode == LEFT_ARROW){
    //walk
    multiplekey[2] = false;
  }else if(keyCode == 88){
    multiplekey[3] = false;
  }else if(keyCode == 87){
    multiplekey[4] = false;
  }
  ryu.setAnimation("idle");
}


function mousePressed(){
/*  pause = !pause;
  if(!pause){
    //timePlay();
      ryu.play();
  }else{
  //  timePause();
    ryu.pause();
  }

  if(ryu.boolStop){
    ryu.replay();
  }*/
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
