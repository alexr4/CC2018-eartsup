var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var particles;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  particles = [];
  var nbParticles = 100;
  for(var i=0; i<nbParticles; i++){
    var radius = random(10, 15);
    var x = random(radius, width-radius);
    var y = random(radius, height * 0.5);
    //first we check if the position is available
    particles.push(new Particle(x, y, radius));
  }
}

function draw(){
  background(220);

  var wind = createVector(noise(frameCount) * 2.0 - 1.0, 0.0);
  var gravity = createVector(0.0, 0.1);

  for(var i=0; i<particles.length; i++){
    var p = particles[i];
    var gravPerParticles = gravity.copy().mult(p.mass);
    p.applyForce(wind.copy());
    p.applyForce(gravPerParticles);

    p.update();
    p.checkEdges();
    p.display();
  }
}


var Particle = function(x_, y_, radius_){
  this.loc = createVector(x_, y_);
  this.velocity = createVector(0.0, 0.0);
  this.acceleration = createVector(0.0, 0.0);
  this.radius = radius_;
  this.mass = random(5.0, 15.0);
  this.maxVel = 5.0;

  this.applyForce = function(force){
		force.div(this.mass);
		this.acceleration.add(force);
	}

  this.update = function(){
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
       }
       this.velocity.y *= -1;
     }
   }

  this.display = function(){
    ellipse(this.loc.x, this.loc.y, this.radius * 2, this.radius * 2);
    var len = this.radius;
    var normVel = this.velocity.copy().normalize(this.velocity);
    line(this.loc.x, this.loc.y, this.loc.x + normVel.x * len, this.loc.y + normVel.y * len);

  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
