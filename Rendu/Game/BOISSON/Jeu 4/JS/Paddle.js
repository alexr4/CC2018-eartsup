var Paddle = function()
{
  this.x = width/2;
  this.y = height-50;
  this.speed = 10;

  this.show = function()
  {
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(this.x, this.y, 130, 20);
  }

  this.move = function()
  {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
  }

  this.checkEdges = function()
  {
    if(this.x-65 <= 0) this.x = 65;
    if(this.x+65 >= width) this.x = width-65;
  }
}
