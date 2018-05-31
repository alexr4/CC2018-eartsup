var Button = function(_width, _height)
{
  this.position = createVector(width/2, height/2);
  this.width = _width;
  this.height = _height;
  this.mouseIsHover = false;
  this.colorFill = color(0, 255);

  this.show = function()
  {
    stroke(255);
    fill(this.colorFill);
    rectMode(CENTER);
    this.position.x = width/2;
    this.position.y = height/2;
    rect(this.position.x, this.position.y, this.width, this.height);

    noStroke();
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("START", width/2, height/2);
  }

  this.onClick = function()
  {
    if(this.mouseIsHover)
    {
      gameStarted = true;
    }
  }

  this.mouseHover = function()
  {
    if(mouseX > this.position.x-(this.width/2) && mouseX < this.position.x+(this.width/2) && mouseY > this.position.y-(this.height/2) && mouseY < this.position.y+(this.height/2))
    {
      this.mouseIsHover = true;
      this.colorFill = color(255, 100);
    }
    else
    {
      this.mouseIsHover = false;
      this.colorFill = color(0, 255);
    }
  }
}
