var ColoredSquare = function(ID)
{
  if(ID) this.ID = ID;
  else this.ID = 0;
  this.size = 30;
  this.x = 0;
  this.y = 0;

  this.show = function()
  {
    stroke(255);
    rectMode(CENTER);
    switch(this.ID)
    {
      case 1:
      {
        fill(255, 0, 0);
        this.x = width/2-200;
        this.y = 200;
        rect(this.x, this.y, this.size*2, this.size*2);
        break;
      }
      case 2:
      {
        fill(0, 255, 0);
        this.x = width/2;
        this.y = 100;
        rect(this.x, this.y, this.size*2, this.size*2);
        break;
      }
      case 3:
      {
        fill(0, 0, 255);
        this.x = width/2+200;
        this.y = 200;
        rect(this.x, this.y, this.size*2, this.size*2);
        break;
      }
      default: break;
    }
  }

  this.checkPlayer = function()
  {
    if(player.x-player.radius <= this.x+this.size*0.5 && player.x+player.radius >= this.x-this.size*0.5)
    {
      if(player.y-player.radius <= this.y+this.size*0.5 && player.y+player.radius >= this.y-this.size*0.5)
      {
        if(player.indexColor == this.ID)
        {
          if(player.respawn()) score++;
        }
        else
        {
          if(player.respawn())
          {
            score = 0;
            lives--;
          }
        }
      }
    }
  }
}
