var Ball = function()
{
  this.x = width/2;
  this.y = height/2;
  this.radius = 20;
  this.velocity = createVector(0, 0);
  this.gravity = createVector(0, 0.5);
  this.force = createVector(0, 0);
  this.amplitudeX = 2;
  this.amplitudeY = -15;

  this.show = function()
  {
    strokeWeight(1);
    stroke(255);
    fill(0);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
    rectMode(CENTER);
    strokeWeight(0.7);
    rect(this.x, this.y, this.radius+6, this.radius+6);
  }

  this.update = function()
  {
    this.velocity.add(this.gravity);
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  this.addForce = function()
  {
    this.force.mult(0);
    this.velocity.mult(0);
    this.force.add(createVector(random(-1, 1)*this.amplitudeX, this.amplitudeY));
    this.velocity.add(this.force);
  }

  this.checkEdges = function()
  {
    if(this.y + this.radius >= height)
    {
      this.y = height - this.radius;
      this.velocity.mult(0);
      score = 0;
    }
    if(this.x-this.radius <= 0 || this.x+this.radius >= width)
    {
      this.velocity.x *= -1;
    }
    if(this.y-this.radius <= 0)
    {
      this.velocity.mult(0);
      this.y = this.radius;
    }
  }
}
