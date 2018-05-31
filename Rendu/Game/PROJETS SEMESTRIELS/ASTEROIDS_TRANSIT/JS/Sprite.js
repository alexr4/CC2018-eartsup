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
        this.index = this.start + floor(this.passedFrame % (this.end - 1 - this.start));
      }
    }
  }

  this.updateStop = function(){
    if(!this.loop && this.index == this.end - 1){
      this.boolStop = true;
      this.lastPassedFrame = this.passedFrame;
      this.index = this.end - 1;
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
    for(var i=0; i<this.sprites.length; i++){
      var nx = i % res;
      var ny = (i - nx) / res;
      image(this.sprites[i], x_ + nx * s_, y_ + ny * s_, s_, s_);
    }

    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    text("Sprite Sheet : ", x_, y_);
    pop();
  }
}
