var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var margin;
var particles;
var targetX;
var targetY;
var temps;
var startTime;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  margin = 60;
  particles = [];
  particles.push(new Particle(width/2, height/2- margin, 40));
  particles.push(new Particle(width/2, height/2+ margin, 40));

  targetX = random(margin, width - margin);
  targetY = height/2;
  startTime = 0;
  temps = 0;

  colorMode(HSB)
}



function draw(){
  background(0, 0, 95);
  temps = (millis() * 0.001) - startTime;

  noStroke();
  fill(0, 75, 100);
  ellipse(targetX, targetY - margin, margin * 0.5, margin * 0.5);
  ellipse(targetX, targetY + margin, margin * 0.5, margin * 0.5);

  particles[0].goTo(targetX, targetY - margin, 0.1, 4, temps);
  particles[1].goTo(targetX, targetY + margin, 1.5, 4, temps);

  for(var i=0; i<particles.length; i++){
    var p = particles[i];
    p.update();
    p.display();
  }
}


var Particle = function(x_, y_, radius_){
  //déclaration des variables
  this.speedX = random(-2, 2);
  this.speedY = 0.0;//random(-2, 2);
  this.radius = radius_;
  this.x = x_;
  this.y = y_;

  //déclaration de la fonction update
  this.goTo = function(targetX_, targetY_, easing_, timing_, temps_){
    var timing = (temps_ % timing_) / timing_;

    var dx = targetX_ - this.x;
    var dy = targetY_ - this.y;
    this.speedX = (dx * easing_) * timing;
    this.speedY = (dy * easing_) * timing;
  }

  this.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }


  this.display = function(){
    noFill();
    stroke(200, 75, 100);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    line(this.x - this.radius * 0.75, this.y, this.x +  - this.radius * 1.25, this.y);
    line(this.x + this.radius * 0.75, this.y, this.x +  + this.radius * 1.25, this.y);
    line(this.x, this.y - this.radius * 0.75, this.x, this.y - this.radius * 1.25);
    line(this.x, this.y + this.radius * 0.75, this.x, this.y + this.radius * 1.25);
  }

  this.checkEdges = function(){
    if(this.x <= this.radius || this.x >= width - this.radius){
      if(this.x <= this.radius){
        this.x = this.radius;
      }else{
        this.x = width - this.radius;
      }
      this.speedX *= -1;
    }
    if(this.y <= this.radius || this.y >= height - this.radius){
      if(this.y <= this.radius){
        this.y = this.radius;
      }else{
        this.y = height - this.radius;
      }
      this.speedY *= -1;
    }
  }

  this.checkCollision = function(ArrayParticles, index){
    for(var i=0; i<ArrayParticles.length; i++){
      if(i != index){
        var dx = this.x - ArrayParticles[i].x;
        var dy = this.y - ArrayParticles[i].y;
        var dxCube = dx * dx;
        var dyCube = dy * dy;
        var dist = sqrt(dxCube + dyCube);
        if(dist <= this.radius + ArrayParticles[i].radius){
          var maxOverlap = this.radius + ArrayParticles[i].radius;
          var overlap = (maxOverlap) - dist;
          this.x += overlap * (dx / maxOverlap);
          this.y += overlap * (dx / maxOverlap);
          this.speedX *=-1;
          this.speedY *=-1;
        }
      }
    }
  }
}

function mousePressed(){
  console.log("--------------")
  startTime = millis() * 0.001;
  targetX = random(margin, width - margin);
  targetY = random(margin, height - margin);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
