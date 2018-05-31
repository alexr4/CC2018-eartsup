var DrawUI = function()
{
  this.showTitle = function()
  {
    push();
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(60);
    textFont(font);
    text("ASTEROIDS", width/2, 120);
    pop();

    push();
    fill(255);
    noStroke();
    textAlign(RIGHT);
    textSize(15);
    textFont(font);
    text("By Team Transit", width-10, height-20);
    pop();
  }

  this.showScore = function()
  {
    fill(150, 255, 150);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text("Score : " + score, width/2 - 100, 40);
  }

  this.showLife = function()
  {
    fill(255, 50, 100);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text("Life : " + life, width/2 + 100, 40);
  }

  this.showGameOver = function()
  {
    fill(255, 0, 0);
    noStroke();
    textAlign(CENTER);
    textSize(40);
    text("GAME OVER", width/2, height/2 - 50);

    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text("Press <R> to retry", width/2, height/2);
  }

  this.showHighScore = function()
  {
    fill(50, 200, 255);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text("High Score : " + highScore, width/2, height/2 + 30);
  }
}
