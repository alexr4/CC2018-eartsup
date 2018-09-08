var Obstacle = function()
{
  this.x = 0;
  this.y = 0;
  this.res = 15.0;

  this.show = function()
  {
    push();
    rectMode(CENTER);
    noFill();
    strokeWeight(1.5);
    stroke(200, 0, 0);
    ellipse(this.x, this.y, this.res, this.res)
    translate(this.x, this.y);
    line(-this.res * 0.25, 0, this.res * 0.25, 0);
    line(0, -this.res * 0.25, 0, this.res * 0.25);
    pop();
  }

  this.checkEdges = function()
  {
    if(this.x < 0 || this.x > width || this.y < 0 || this.y > height)
    {
      return true;
    }
    return false;
  }
}
