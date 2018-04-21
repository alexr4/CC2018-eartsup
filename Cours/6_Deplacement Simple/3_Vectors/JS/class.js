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
  background(220);

  for(var i=0; i<particles.length; i++){
    var p = particles[i];
    p.checkEdges();
    p.checkCollision(particles, i);
    p.update();
    p.display();
  }
}


var Particle = function(x_, y_, radius_){
  //déclaration des variables
  this.speedX = random(-1, 1);
  this.speedY = random(-1, 1);
  this.radius = radius_;
  this.position = createVector(x_, y_);

  //déclaration de la fonction update
  this.update = function(){
    this.position.x += this.speedX;
    this.position.y += this.speedY;
  }

  this.display = function(){
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  this.checkEdges = function(){
    if(this.position.x <= this.radius || this.position.x >= width - this.radius){
      if(this.position.x < this.radius){
        this.position.x = this.radius;
      }else{
        this.position.x = width - this.radius;
      }
      this.speedX *= -1;
    }
    if(this.position.y <= this.radius || this.position.y >= height - this.radius){
      if(this.position.y < this.radius){
        this.position.y = this.radius;
      }else{
        this.position.y = height - this.radius;
      }
      this.speedY *= -1;
    }
  }

  this.checkCollision = function(ArrayParticles, index){
    for(var i=0; i<ArrayParticles.length; i++){
      if(i != index){
        var dx = this.position.x - ArrayParticles[i].position.x;
        var dy = this.position.y - ArrayParticles[i].position.y;
        var dxCube = dx * dx;
        var dyCube = dy * dy;
        var dist = sqrt(dxCube + dyCube);
        if(dist <= this.radius + ArrayParticles[i].radius){
          var maxOverlap = this.radius + ArrayParticles[i].radius;
          var overlap = (maxOverlap) - dist;
          this.position.x += overlap * (dx / maxOverlap);
          this.position.y += overlap * (dx / maxOverlap);
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
