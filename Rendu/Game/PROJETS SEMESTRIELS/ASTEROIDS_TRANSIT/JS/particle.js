var Particle = function()
{
  this.position = createVector(random(width), random(height));

  this.show = function()
  {
    push();
    strokeWeight(2);
    stroke(255, 80);
    point(this.position.x, this.position.y);
    pop();
  }

  this.bouge = function()
  {
    this.position.add(-1);
  }

  this.offScreen = function()
  {
    for(var i = 0; i < particles.length; i++)
    {
      if(particles[i].position.x < 0)
      {
        particles[i].position.x = width;
      }
    }
  }
}
