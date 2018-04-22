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
    var y = random(radius, height-radius);
    //first we check if the position is available
    particles.push(new Particle(x, y, radius));
  }
}

function draw(){
  background(220);

  var mousePos = createVector(mouseX, mouseY);

  for(var i=0; i<particles.length; i++){
    var p = particles[i];

    var direction = p5.Vector.sub(mousePos, p.loc);
    direction.normalize();
    var s = 0.5;
    var acceleration = p5.Vector.mult(direction, s);

    p.applyForce(acceleration);

    p.checkEdges();
    p.update();
    p.display();
  }
}


var Particle = function(x_, y_, radius_){
  this.loc = createVector(x_, y_);
  this.velocity = createVector(0.0, 0.0);
  this.acceleration = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
  this.radius = radius_;
  this.mass = this.radius;
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
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
