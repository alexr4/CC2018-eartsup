var Snake = function()
{
  this.numSegments = 10;
  this.direction = "right";
  this.xStart = 10;
  this.yStart = 100;
  this.diff = 10; //Nombre de segments du debut
  this.xCor = [];
  this.yCor = [];
  this.snakeHeadX = 0;
  this.snakeHeadY = 0;

  this.initSnake = function()
  {
    for (var i = 0; i < this.numSegments; i++)
    {
      this.xCor.push(this.xStart + (i * this.diff));
      this.yCor.push(this.yStart);
    }
  }

  this.show = function()
  {
    stroke(255);
    strokeWeight(10);
    for (var i = 0; i < this.numSegments - 1; i++)
    {
      line(this.xCor[i], this.yCor[i], this.xCor[i + 1], this.yCor[i + 1]);
    }
  }

  this.update = function()
  {
    for (var i = 0; i < this.numSegments - 1; i++)
    {
      this.xCor[i] = this.xCor[i + 1];
      this.yCor[i] = this.yCor[i + 1];
    }
    switch (this.direction)
    {
      case "right":
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] + this.diff;
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
        break;
      case "up":
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] - this.diff;
        break;
      case "left":
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] - this.diff;
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
        break;
      case "down":
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] + this.diff;
        break;
    }
    this.snakeHeadX = this.xCor[this.xCor.length - 1];
    this.snakeHeadY = this.yCor[this.yCor.length - 1];
  }

  this.checkForPoint = function()
  {
    stroke(255);
    strokeWeight(10);
    point(xPoint, yPoint);
    if (this.snakeHeadX === xPoint && this.snakeHeadY === yPoint)
    {
      this.xCor.unshift(this.xCor[0]); //Ajoute au début du tableau
      this.yCor.unshift(this.yCor[0]);
      this.numSegments++;
      score++;
      updatePointCoordinates();
    }
  }

  this.checkSnakeCollision = function()
  {
    for (var i = 0; i < this.xCor.length - 1; i++)
    {
      if (this.xCor[i] === this.snakeHeadX && this.yCor[i] === this.snakeHeadY) return true;
    }
  }

  this.checkStatus = function()
  {
    if (this.snakeHeadX > width || this.snakeHeadX < 0 || this.snakeHeadY > height || this.snakeHeadY < 0 || this.checkSnakeCollision())
    {
      showGameOver();
      noLoop(); //Arreter le jeu
    }
  }
}
