var Ball = function()
{
  this.x = width/2;
  this.y = height/2;
  this.radius = 15;
  this.velocity = createVector(0, 0);
  this.gravity = createVector(0, 0.5);
  this.force = createVector(0, 0);
  this.amplitudeX = 7;
  this.amplitudeY = -20;
  this.color = color(0, 255, 0)

  this.show = function()
  {
    stroke(this.color);
    noFill();
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  this.update = function()
  {
    this.velocity.add(this.gravity);
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  this.checkPaddle = function()
  {
    var triggerOnce = false;
    if(this.x > paddle.x-65 && this.x < paddle.x+65)
    {
      if(this.y+this.radius >= paddle.y-10 && this.y-this.radius <= paddle.y-15)
      {
        this.addForce();
        if(!triggerOnce)
        {
          score++;
          triggerOnce = true;
        }
      }
    }
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
      this.color = color(255, 0, 0);
      gameOver = true;
    }
    if(this.x-this.radius <= 0 || this.x+this.radius >= width)
    {
      this.velocity.x *= -1;
    }
    if(this.y-this.radius <= 0)
    {
      this.velocity.mult(-1);
    }
  }
}
