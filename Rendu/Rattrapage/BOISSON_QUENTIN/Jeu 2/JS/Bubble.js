var Bubble = function()
{
  this.x = 0;
  this.y = 0;
  this.radius = 20;
  this.color = color(255, 100);
  this.colorIndex = 0; //0 = blanc, 1 = rouge, 2 = vert, 3 = bleu
  this.amplitude = 5;

  this.show = function()
  {
    stroke(255);
    switch(this.colorIndex)
    {
      case 0: this.color = color(255, 100); break;
      case 1: this.color = color(255, 0, 0, 200); break;
      case 2: this.color = color(0, 255, 0, 200); break;
      case 3: this.color = color(0, 0, 255, 200); break;
      default: break;
    }
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  this.update = function()
  {
    this.x += round(random(-this.amplitude, this.amplitude));
    this.y += round(random(-this.amplitude, this.amplitude));
    if(this.x-this.radius < 0) this.x += this.amplitude;
    if(this.x+this.radius > width) this.x -= this.amplitude;
    if(this.y-this.radius < 0) this.y += this.amplitude;
    if(this.y+this.radius > height) this.y -= this.amplitude;
  }

  this.changeColorIndex = function()
  {
    this.colorIndex = round(random(1, 3));
  }
}
