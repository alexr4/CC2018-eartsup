var Circle = function(x, y)
{
  if(x) this.x = x; else this.x = 0;
  if(y) this.y = y; else this.y = 0;
  this.radius = 5;
  this.inMouse = false;
  this.isOverPoint = false;
  this.color = color(231, 76, 60);

  this.update = function()
  {
    if(this.inMouse)
    {
      this.x = mouseX;
      this.y = mouseY;
    }

    //Check si on est sur un point
    if(!this.inMouse)
    {
      for(var i = 0; i < points.length; i++)
      {
        if(this.x <= points[i].x + this.radius && this.x >= points[i].x - this.radius)
        {
          if(this.y <= points[i].y + this.radius && this.y >= points[i].y - this.radius)
          {
            this.x = points[i].x;
            this.y = points[i].y;
            this.isOverPoint = true;
          }
        }
      }
    }
    else this.isOverPoint = false;
  }

  this.show = function()
  {
    strokeWeight(1);
    stroke(255);
    if(this.inMouse) this.color = color(41, 128, 185);
    if(this.isOverPoint) this.color = color(39, 174, 96);
    if(!this.inMouse && !this.isOverPoint) this.color = color(231, 76, 60);
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
}
