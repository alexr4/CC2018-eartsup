var Player = function()
{
  this.x = width/2 - 200;
  this.y = height/2;
  this.gravity = 0.5;
  this.velocity = 0;
  this.jumpForce = -10;

  this.show = function()
  {
    fill(0);
    strokeWeight(1);
    stroke(255);
    ellipse(this.x, this.y, 30, 30);
    ellipse(this.x, this.y, 15, 15);
    strokeWeight(2);
    stroke(0, 255, 0);
    point(this.x, this.y);
  }

  this.update = function()
  {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }

  this.addForce = function()
  {
    this.velocity = 0;
    this.velocity += this.jumpForce;
  }

  this.checkEdges = function()
  {
    if(this.y > height - 15)
    {
      this.y = height - 15;
      this.velocity = 0;
    }
    if(this.y < 15)
    {
      this.y = 15;
      this.velocity = 0;
    }
  }
}
