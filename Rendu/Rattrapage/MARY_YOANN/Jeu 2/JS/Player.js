var Player = function()
{
  this.x = width/2;
  this.y = height-40;
  this.radius = 20;
  this.speed = 5;
  this.indexColor = 0;
  this.color = color(255, 0, 0);

  this.show = function()
  {
    stroke(255);
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
    fill(0, 100, 255, 200);
    triangle(this.x-this.radius*0.7, this.y+this.radius*0.7, this.x+this.radius*0.7, this.y+this.radius*0.7, this.x, this.y-this.radius);
  }

  this.move = function()
  {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
    if (keyIsDown(UP_ARROW)) this.y -= this.speed;
    if (keyIsDown(DOWN_ARROW)) this.y += this.speed;
  }

  this.checkEdges = function()
  {
    if(this.x <= this.radius) this.x = this.radius;
    if(this.x >= width-this.radius) this.x = width-this.radius;
    if(this.y <= this.radius) this.y = this.radius;
    if(this.y >= height-this.radius) this.y = height-this.radius;
  }

  this.changeColor = function()
  {
    this.indexColor = round(random(1, 3));
    if(this.indexColor == 1) this.color = color(255, 0, 0);
    if(this.indexColor == 2) this.color = color(0, 255, 0);
    if(this.indexColor == 3) this.color = color(0, 0, 255);
  }

  this.respawn = function()
  {
    this.changeColor();
    this.x = width/2;
    this.y = height-40;
    return true;
  }
}
