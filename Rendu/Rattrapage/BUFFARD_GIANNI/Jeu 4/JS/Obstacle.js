var Obstacle = function()
{
  var spacing = random(100, height/2);
  var centerY = random(spacing, height - spacing);

  this.top = centerY - spacing/2;
  this.bottom = height - (centerY + spacing/2);
  this.x = width + 10;
  this.width = 40;
  this.speed = 3;
  this.highlight = false;
  this.triggerOnce = false;

  this.show = function()
  {
    fill(0);
    strokeWeight(1);
    stroke(255);
    if(this.highlight)
    {
      stroke(255, 0, 0);
    }
    rect(this.x, 0, this.width, this.top);
    rect(this.x, height-this.bottom, this.width, this.bottom);
  }

  this.update = function()
  {
    this.x -= this.speed;
  }

  this.increaseScore = function(_player)
  {
    if(_player.y > this.top || _player.y < height - this.bottom)
    {
      if(_player.x > this.x && _player.x < this.x + this.width)
      {
        if(!this.triggerOnce) {score++; this.triggerOnce = true;}
      }
    }
  }

  this.hit = function(_player)
  {
    if(_player.y + 15 < this.top || _player.y - 15 > height - this.bottom)
    {
      if(_player.x + 15 > this.x && _player.x - 15 < this.x + this.width)
      {
        this.highlight = true;
        return true;
      }
    }
    return false;
  }
}
