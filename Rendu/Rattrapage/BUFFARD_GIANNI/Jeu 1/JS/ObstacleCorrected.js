var Obstacle = function(x, y, res, show)
{
  this.x = x;
  this.y = y;
  this.res = res;
  this.show = show;
  this.isTouched = false;

  this.display = function()
  {
      push();
      rectMode(CENTER);
      if(!this.isTouched){
        noFill();
        strokeWeight(1.5);
        stroke(200, 0, 0);
      }else{
        noStroke();
        fill(200, 0, 0);
      }

      ellipse(this.x, this.y, this.res, this.res)
      translate(this.x, this.y);
      line(-this.res * 0.25, 0, this.res * 0.25, 0);
      line(0, -this.res * 0.25, 0, this.res * 0.25);
      pop();
  }
}
