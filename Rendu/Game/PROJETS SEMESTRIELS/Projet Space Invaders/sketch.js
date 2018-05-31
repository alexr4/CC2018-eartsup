var contentDiv = document.getElementById('screen'); //Selectionne la div qui contiendra le canvas
var x;
var shots = [];
var enemies = [];
var timer = 0;
var direction = 1;
var lives = 3;
var playerBox;
var score;
var gameover;
var scoreX;
var scoreY;
var enemySprite;
var playerSprite;
var imgBG;

var playx, playy, playw, playh;
var gameStart = false;
var img;

function preload()
{
  imgBG = loadImage('img/background4.3..png');
  playerSprite = loadImage('img/player.png');
  enemySprite = loadImage('img/enemy.png');
  img = loadImage('./img/fond menu.png');
}

function setup()
{
  playerBox = new AABB(50, 50);
  gameover = false;
  score = 0;
  scoreX = 0;
  scoreY = 0;

  var canvas = createCanvas(contentDiv.offsetWidth, contentDiv.offsetHeight); // Crée le createCanvas
  canvas.parent("screen"); // Attribut le canvas à la div.
  var numberOfRows = 5;
  x = width/2;
  for (var i = 0; i < numberOfRows; i++)
  {
    var margins = 100;
    var xoffset = margins;
    var spacing = 10;
    var enemyWidth = 50;

    while(xoffset + enemyWidth < width - margins)
    {
      enemies.push(new Enemy(createVector(xoffset, i * 60 + 10)));
      xoffset += enemyWidth + spacing;
    }
  }

  playx = width/2.5;
  playy = height/1.5;
  playw = 100;
  playh = 50;
}

function draw()
{
  background(10);
  image(img, 0, 0,width,height);


  if(gameStart == false)
  {
    rect(playx, playy, playw, playh);
    text("START", playx + 30, playy + 30);
  }
  else
  {
    var y = height/1.1;
    background(0);
    image(imgBG, 0, 0, width, height);
    fill(0);
    noStroke();
    textSize(14);
    textAlign(LEFT, TOP);
    textFont('monospace');
    textStyle(BOLD);
    text("SCORE : "+score, scoreX, scoreY);
    var y = height/1.15;
    playerBox.x = x;
    playerBox.y = y;

    moveEnemies();

    if (keyIsDown(LEFT_ARROW))
    {
      if(x >= 10)
      {
        x -= 5;
      }
    }

    if (keyIsDown(RIGHT_ARROW))
    {
      if(x <= width - 10)
      {
        x += 5;
      }
    }

    if(timer == 0 && keyIsDown(UP_ARROW))
    {
      timer = 30;
      shots.push(new Shot(createVector(x, y)));
    }

    image(playerSprite, x, y, 50, 50);

    for (var i = 0; i < enemies.length; i++)
    {
      var enemy = enemies[i];
      enemy.update();
      enemy.draw();
    }

    for (var i = 0; i < shots.length; i++)
    {
      var shot = shots[i];
      shot.update();
      shot.draw();
    }

    timer--;
    if(timer <= 0)
      timer = 0;

      if(lives <= 0)
      {
        gameover = true;
      }

      if(gameover)
      {
        fill(0);
        noStroke();
        textSize(50);
        textAlign(CENTER, CENTER);
        textFont('monospace');
        textStyle(BOLD);
        text("GAME OVER", width/2, height/2);
        textSize(20);
        text("SCORE : " + score, width/2 + 50, height/2 + 50);
        enemies = [];
        y = -200;
      }
    }
}

var Shot = function(_pos)
{
  this.pos = _pos;
  this.boxShot = new AABB(10, 10);

  this.update = function()
  {
    this.pos.y -= 10;
    this.boxShot.x = this.pos.x;
    this.boxShot.y = this.pos.y;
    if(this.pos.y <= 0)
    {
      index = shots.indexOf(this);
      shots.splice(index, 1);
    }
  }

  this.draw = function()
  {
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}

var Enemy = function(_pos)
{
  this.pos = _pos;
  this.health = 3;
  this.boxEnemy = new AABB(50, 50);

  this.update = function()
  {
    this.boxEnemy.x = this.pos.x;
    this.boxEnemy.y = this.pos.y;
    this.checkCollision();

    if(this.health <= 0)
    {
      var index = enemies.indexOf(this);
      enemies.splice(index, 1);
      score += 10;
    }
  }

  this.draw = function()
  {
    image(enemySprite, this.pos.x, this.pos.y, this.boxEnemy.width, this.boxEnemy.height);
  }

  this.checkCollision = function()
  {
    for (var i = 0; i < shots.length; i++)
    {
      var shot = shots[i];

      if(checkCollisionBox(shot.boxShot, this.boxEnemy))
      {
        console.log(this.health)
        this.health -= 1;
        var index = shots.indexOf(shot);
        shots.splice(index, 1);
      }
    }

    if(checkCollisionBox(playerBox, this.boxEnemy))
    {
      lives = 0;
    }
  }
}

function minX()
{
  if(enemies.length == 0)
  {
    return 0;
  }
  var m = enemies[0];

  for (var i = 0; i < enemies.length; i++)
  {
    var enemy = enemies[i];
    if(enemy.pos.x < m.pos.x)
    {
      m = enemy;
    }
  }
  return m.pos.x;
}

function maxX()
{
  if(enemies.length == 0)
  {
    return 0;
  }
  var m = enemies[0];

  for (var i = 0; i < enemies.length; i++)
  {
    var enemy = enemies[i];
    if(enemy.pos.x > m.pos.x)
    {
      m = enemy;
    }
  }
  return m.pos.x + m.boxEnemy.width;
}

var AABB = function(_width, _height)
{
  this.x = 0;
  this.y = 0;
  this.width = _width;
  this.height = _height;
}

function checkCollisionBox(box1, box2)
{

  if(box2.x >= box1.x + box1.width || box2.x + box2.width <= box1.x || box2.y >= box1.y + box1.height || box2.y + box2.height < box1.y)
  {
    return false;

  }
  else
  {
    return true;
  }
}

function moveEnemies()
{
  var border;
  if(direction == -1)
  {
    border = minX();
  }

  if(direction == 1)
  {
    border = maxX();
  }

  if (border <= 10 || border >= width - 10)
  {
    direction = -direction;
    for (enemy of enemies)
    {
      enemy.pos.y += 10;
    }
  }

  for (enemy of enemies)
  {
    enemy.pos.x += direction * 1;
  }
}

function mousePressed(){
  if(gameStart == false && mouseX > playx && mouseX < playx + playw && mouseY > playy && mouseY < playy + playh){
    gameStart = true;
  }
}

//Resize le canvas quand la taille de la page change.
function windowResized()
{
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = contentDiv.offsetHeight;
  resizeCanvas(targetWidth, targetHeight);
}
