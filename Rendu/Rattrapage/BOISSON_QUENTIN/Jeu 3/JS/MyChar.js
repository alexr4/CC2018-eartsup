var MyChar = function()
{
  this.letter = "";
  this.x = 30;
  this.y = height/2;
  this.position = 0;
  this.letterType = "";
  this.checkTypeExec = false;

  this.show = function()
  {
    rectMode(CENTER);
    noFill();
    stroke(255);
    rect(this.x, this.y, 40, 40);
    push();
    textFont(font);
    textSize(35);
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();
    text(this.letter, this.x, this.y);
    pop();
  }

  this.update = function()
  {
    if(!this.checkTypeExec) { this.checkType(); this.checkTypeExec = true; }
    if(score < 10 && score > 0) this.x += score;
    else if(score == 0) this.x += 1;
    else if(score >= 10) this.x += 10;
    if(this.position == 0) this.y = height/2;
    if(this.position == -1) this.y = height/2 - 150;
    if(this.position == 1) this.y = height/2 + 150;
  }

  this.checkCouloir = function()
  {
    switch(this.position)
    {
      case 0: life--; this.x = 0; this.position = 0; break;
      case -1:
      {
        if(this.letterType == "consonne")
        {
          score++;
          this.position = 0;
          this.x = 0;
        }
        else
        {
          life--;
          this.position = 0;
          this.x = 0;
        }
        break;
      }
      case 1:
      {
        if(this.letterType == "voyelle")
        {
          score++;
          this.position = 0;
          this.x = 0;
        }
        else
        {
          life--;
          this.position = 0;
          this.x = 0;
        }
        break;
      }
      default: break;
    }
    this.checkTypeExec = false;
    this.letter = getRandomChar();
  }

  this.checkType = function()
  {
    if(this.letter == "A" || this.letter == "E" || this.letter == "I" || this.letter == "O" || this.letter == "U" || this.letter == "Y")
    {
      this.letterType = "voyelle";
      return this.letterType;
    }
    else
    {
      this.letterType = "consonne";
      return this.letterType;
    }
  }
}
