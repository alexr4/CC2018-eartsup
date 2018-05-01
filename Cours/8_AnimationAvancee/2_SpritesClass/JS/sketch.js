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

var Sprite = function(spritesArray, fps, loop){
  this.sprites = spritesArray;
  this.spriteCutIn = [];
  this.spriteCutOut = [];
  this.spriteName = [];
  this.spriteLoop = [];
  this.animationIndex = 0;
  this.index = 0;
  this.start = 0;
  this.end = this.sprites.length;
  //time
  this.boolStop = false;
  this.boolPause = false;
  this.loop = loop;
  this.fps = fps;
  this.millisDivider = 1000 / this.fps;
  this.passedFrame = 0;
  this.lastPassedFrame = 0;

  this.time = 0;
  this.lastTime = 0;
  this.deltaTime = 0;

  //add sprite cut
  this.addAnimation = function(name_, in_, out_, bool_){
    if(bool_ == undefined){
      bool_ = true;
    }
    this.spriteName.push(name_);
    this.spriteCutIn.push(in_);
    this.spriteCutOut.push(out_);
    this.spriteLoop.push(bool_);
    this.updateInOut();
  }

  this.updateInOut = function(){
    if(this.spriteName.length == 1){
      this.end = this.spriteCutOut[0];
      this.start = this.spriteCutIn[0];
      this.loop = this.spriteLoop[0];
    }
  }

  this.setAnimation = function(name){
    this.stop();
    this.animationIndex = this.spriteName.indexOf(name);
    this.end = this.spriteCutOut[this.animationIndex];
    this.start = this.spriteCutIn[this.animationIndex];
    this.loop = this.spriteLoop[this.animationIndex];
    this.play();
  }

  this.resetAnimation = function(){
    this.animationIndex = 0;
    this.end = this.spriteCutOut[0];
    this.start = this.spriteCutIn[0];
    this.loop = this.spriteLoop[0];
  }

  //Time management
  this.updateTime = function(){
    var actualTime = floor(getTime());
    if(!this.boolPause){
      this.deltaTime = actualTime - this.lastTime;
    }
    this.lastTime = actualTime;
    if(!this.boolPause){
      this.time += this.deltaTime;
    }
  }

  //Sprite update
  this.update = function(){
    this.updateTime();
    this.updateSpriteIndex();
    this.updateStop();
  }

  this.updateSpriteIndex = function(){
    if(!this.boolStop){
      this.passedFrame = floor(this.time / this.millisDivider) - this.lastPassedFrame;
      if(!this.loop){
        this.index = constrain(this.passedFrame + this.start, this.start, this.end - 1);
      }else{
        this.index = this.start + floor(this.passedFrame % (this.end - this.start + 1));
      }
    }
  }

  this.updateStop = function(){
    if(!this.loop && this.index == this.end - 1){
      this.boolStop = true;
      this.lastPassedFrame = this.passedFrame;
      this.index = this.start;
      if(this.spriteName.length > 0){
        this.resetAnimation();
        this.play();
      }
    }
  }

  this.getSpriteIndex = function(){
    return this.index;
  }

  this.getSprite = function(){
    return this.sprites[this.index];
  }

  //action
  this.play = function(){
    this.boolStop = false;
    this.boolPause = false;
    this.lastPassedFrame =  floor(this.time / this.millisDivider);
  }

  this.pause = function(){
    this.boolPause = true;
  }

  this.stop = function(){
    this.boolStop = true;
    this.index = 0;
  }

  this.replay = function(){
    this.stop();
    this.play();
  }

  //debug
  this.displayBoundingBox = function(color, x, y){
    push();
    rectMode(CORNER);
    stroke(color);
    noFill();
    rect(x, y, this.sprites[this.index].width, this.sprites[this.index].height);
    pop();
  }

  this.displaySpriteSheet = function(x_, y_, w_, s_){
    push();
    var res = floor(w_ / s_);
    imageMode(CORNER)
    for(var i=0; i<sprites.length; i++){
      var nx = i % res;
      var ny = (i - nx) / res;
      image(sprites[i], x_ + nx * s_, y_ + ny * s_, s_, s_);
    }

    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text("Sprite Sheet : ", x_, y_);
    pop();
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
