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
    if(particles.length > 0){
      var posAvailable = isAvailbale(x, y, radius, particles);
      if(posAvailable == true){
        particles.push(new Particle(x, y, radius));
      }
    }else{
      particles.push(new Particle(x, y, radius));
    }
  }
  background(20);
}

function isAvailbale(x_, y_, r_, array_){
  var bool = true;
  for(var i=0; i<array_.length; i++){
    var dx = x_ - array_[i].x;
    var dy = y_ - array_[i].y;
    var dxCube = dx * dx;
    var dyCube = dy * dy;
    var dist = sqrt(dxCube + dyCube);
    if(dist <= r_ + array_[i].radius){
      bool = false;
      break;
    }
  }

  return bool;
}

function draw(){
  background(20, 50);
  var maxDist = 150;

  for(var i=0; i<particles.length; i++){
    var p = particles[i];
    p.checkEdges();
    p.checkCollision(particles, i);
    p.update();
    for(var j=0; j<particles.length; j++){
      if(i != j){
        var neighbors = particles[j];
        var dx = p.x - neighbors.x;
        var dy = p.y - neighbors.y;
        var dxCube = dx * dx;
        var dyCube = dy * dy;
        var dist = sqrt(dxCube + dyCube);
        if(dist <= maxDist){
          var opacity = (1.0 - (dist / maxDist)) * 255;
          stroke(255, opacity);
          noFill();
         line(p.x, p.y, neighbors.x, neighbors.y);
        }
      }
    }
  }
}


var Particle = function(x_, y_, radius_){
  //déclaration des variables
  this.speedX = random(-1, 1);
  this.speedY = random(-1, 1);
  this.radius = radius_;
  this.x = x_;
  this.y = y_;

  //déclaration de la fonction update
  this.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }

  this.display = function(){
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  this.checkEdges = function(){
    if(this.x <= this.radius || this.x >= width - this.radius){
      if(this.x < this.radius){
        this.x = this.radius;
      }else{
        this.x = width - this.radius;
      }
      this.speedX *= -1;
    }
    if(this.y <= this.radius || this.y >= height - this.radius){
      if(this.y < this.radius){
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

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
