var Cell = function()
{
  this.x = 0;
  this.y = 0;
  this.size = 30;
  this.active = false;

  this.show = function()
  {
    rectMode(CORNER);
    stroke(0);
    if(this.active) fill(255, 180); else noFill();
    rect(this.x, this.y, this.size, this.size);
  }
}
