var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var spritesSplatter = [];
var spritesBall = [];

var particles;

function preload(){
  var nbSprites = 16;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("../_SRC/Sprites/_EXPORTS/3_Splatter/Splat_"+i+".png");
    spritesSplatter.push(sprite);
  }

  var nbSprites = 49;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("../_SRC/Sprites/_EXPORTS/2_Ball/Ball_"+i+".png");
    spritesBall.push(sprite);
  }

}

function setup(){
  //initialize canvas
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");


  particles = [];
  var nbParticles = 25;
  for(var i=0; i<nbParticles; i++){
    var radius = random(25, 50);
    var x = random(radius, width-radius);
    var y = random(radius, height * 0.5);
    //first we check if the position is available
    particles.push(new Particle(x, y, radius, spritesSplatter, spritesBall));
  }
}

function draw(){
  background('#FFCC00');

  var windNoise = noise(frameCount * 0.01) * 2.0 - 1.0;
  var wind = createVector(windNoise * 1.5, 0.0);
  var gravity = createVector(0.0, 0.15);

  var coef = 0.75;
  var normal = 1;
  var frictionMag = coef * normal;


  for(var i=0; i<particles.length; i++){
    var p = particles[i];
    var gravPerParticles = gravity.copy().mult(p.mass);
    var friction = p.velocity.copy();
    var windPerParticle = wind.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);

    p.applyForce(windPerParticle);
    p.applyForce(friction);
    p.applyForce(gravPerParticles);

    p.update();
    p.checkEdges();
    p.display();
  }

}


function mousePressed(){
   ball.replay();
}


var Particle = function(x_, y_, radius_, spriteArray_, ballArray_){
  this.loc = createVector(x_, y_);
  this.velocity = createVector(0.0, 0.0);
  this.acceleration = createVector(0.0, 0.0);
  this.radius = radius_;
  this.mass = this.radius;
  this.maxVel = 25;

  //sprite
  this.splat = new Sprite(spriteArray_, 25, false);
  this.splatLocation = createVector(x_, y_);
  this.splat.stop();

  this.ball = new Sprite(ballArray_, 25, false);
  this.ball.stop();
  this.played = false;


  this.applyForce = function(force){
		force.div(this.mass);
		this.acceleration.add(force);
	}

  this.update = function(){
     this.splat.update();
     this.ball.update();

     this.velocity.add(this.acceleration);
     this.velocity.limit(this.maxVel);
     this.loc.add(this.velocity);
     this.acceleration.mult(0);
   }

   this.checkEdges = function(){
     if(this.loc.x < this.radius || this.loc.x > width - this.radius){
       if(this.loc.x < this.radius){
         this.loc.x = this.radius;
       }else{
         this.loc.x = width - this.radius;
       }
       this.velocity.x *= -1;

     }
     if(this.loc.y < this.radius || this.loc.y > height - this.radius){
       if(this.loc.y < this.radius){
         this.loc.y = this.radius;
       }else{
         this.loc.y = height - this.radius;
         this.splatLocation.y = height - this.radius * 0.5;
         this.splatLocation.x = this.loc.x;
         if(this.velocity.mag() > 1.5){
           this.splat.play();
         }
       }
       this.velocity.y *= -1;

       if(!this.played){
         this.ball.play();
         this.played = true;
       }
     }
   }

  this.display = function(){
    var diameter = this.radius * 2;
    imageMode(CENTER);
    image(this.splat.getSprite(), this.splatLocation.x, this.splatLocation.y, diameter * 2, diameter * 2);
    image(this.ball.getSprite(), this.loc.x, this.loc.y, diameter, diameter);
  }
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

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
