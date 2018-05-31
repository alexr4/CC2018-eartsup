var Ship = function() //Notre objet vaisseau
{
  this.position = createVector(width/2, height/2);
  this.rotation = 0;
  this.radius = 10; //Taille du vaisseau
  this.forward = 0; //Avant du vaisseau (ATTENTION : ANGLE EN RADIANS)
  this.velocity = createVector(0, 0);
  this.isBoosting = false;
  this.hited = false;
  this.timerLife = 2;

  this.update = function()
  {
    if(this.isBoosting)
    {
      this.boost();
    }
    this.position.add(this.velocity); //Ajouter la vélocité à la position
    this.velocity.mult(0.98); //Ajouter un peu de friction

    this.immortel();
  }

  this.immortel = function()
  {
    if(this.hited)
    {
      if(frameCount % 60 == 0 && this.timerLife > 0)
      {
        this.timerLife--;
      }
      if(this.timerLife <= 0)
      {
        this.hited = false;
        this.timerLife = 2;
      }
    }
  }

  this.boosting = function(bool)
  {
    this.isBoosting = bool;
  }

  this.boost = function()
  {
    var force = p5.Vector.fromAngle(this.forward); //Ajouter la force vers l'avant du vaisseau
    force.mult(0.3); //Réduire la force de poussée
    this.velocity.add(force);
  }

  this.show = function() //Afficher le vaisseau
  {
    push();
    translate(this.position.x, this.position.y);
    rotate(this.forward - PI/2);
    strokeWeight(2);
    if(!this.hited)
    {
      stroke(0, 255, 0);
      fill(0);
    }
    else
    {
      stroke(255, 0, 0);
      fill(255, 0, 0, 100);
    }
    beginShape();
    vertex(0, this.radius*2);
    vertex(this.radius, -this.radius);
    vertex(0, 0);
    vertex(-this.radius, -this.radius);
    endShape(CLOSE);
    pop();
  }

  this.setRotation = function(angle)
  {
    this.rotation = angle;
  }

  this.checkEdges = function()
  {
    if(this.position.x < this.radius)
    {
      this.position.x = this.radius;
      this.velocity.mult(0);
    }
    else if(this.position.x > width - this.radius)
    {
      this.position.x = width - this.radius;
      this.velocity.mult(0);
    }
    if(this.position.y < this.radius)
    {
      this.position.y = this.radius;
      this.velocity.mult(0);
    }
    else if(this.position.y > height - this.radius)
    {
      this.position.y = height - this.radius;
      this.velocity.mult(0);
    }
  }

  this.hits = function(asteroid)
  {
    var d = dist(this.position.x, this.position.y, asteroid.position.x, asteroid.position.y);
    if(d < this.radius + asteroid.radius)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  this.turn = function()
  {
    this.forward += this.rotation;
  }
}
