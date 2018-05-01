var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var spritesSplatter = [];
var spritesBall = [];

var particles;

function preload(){
  var nbSprites = 16;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("https://www.arivaux.com/preprod/cc-2018/_EXPORTS/3_Splatter/Splat_"+i+".png");
    spritesSplatter.push(sprite);
  }

  var nbSprites = 49;
  for(var i=0; i<nbSprites; i++){
    var sprite = loadImage("https://www.arivaux.com/preprod/cc-2018/_EXPORTS/2_Ball/Ball_"+i+".png");
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


function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
