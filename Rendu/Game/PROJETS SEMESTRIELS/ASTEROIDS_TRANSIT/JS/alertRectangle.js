var AlerteRectangle = function()
{
  this.position = createVector(width/2, height/2);
  this.width = 400;
  this.height = 300;
  this.alpha = 50;

  this.show = function()
  {
    fill(255, 0, 0, this.alpha);
    noStroke();
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.width, this.height);

    fill(255, this.alpha);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(60);
    text("ALERT", width/2, height/2);
  }

  this.animate = function()
  {
    if(this.alpha < 70)
    {
      this.alpha++;
    }
    else
    {
      this.alpha = 10;
    }
  }
}
