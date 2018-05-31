var Laser = function(shipPos, angle)
{
  this.position = createVector(shipPos.x, shipPos.y);
  this.velocity = p5.Vector.fromAngle(angle);
  this.velocity.mult(15);

  this.update = function()
  {
    this.position.add(this.velocity);
  }

  this.show = function() //Afficher le laser
  {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.position.x, this.position.y);
    pop();
  }

  this.offScreen = function() //Si le laser sort de l'ecran
  {
    if(this.position.x < 0 || this.position.x > width)
    {
      return true;
    }

    if(this.position.y < 0 || this.position.y > height)
    {
      return true;
    }
    return false;
  }

  this.hits = function(asteroid) //Check collisions
  {
    var d = dist(this.position.x, this.position.y, asteroid.position.x, asteroid.position.y); //Distance entre 2 objets
    if(d < asteroid.radius)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
