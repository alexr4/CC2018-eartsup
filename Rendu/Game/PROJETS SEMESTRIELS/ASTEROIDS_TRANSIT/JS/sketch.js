//Variable de jeu
var life;
var cineFinished;
var gameStarted;
var gameOver;
var score;
var highScore;
var timerAsteroid;
var font;
//Variables objets
var intro;
var sprites =[];
var startButton;
var ship;
var ui;
var asteroids = [];
var lasers = [];
var particles = [];
var myAlert;

function preload()
{
  font = loadFont("./Fonts/ARCADE_I.ttf");
  cineFinished = false;
  for(var i=0; i<250; i++){
    if(i <= 9)
    {
      var img = loadImage("./images/IntroAnim0000"+i+".png");
    }
    if(i > 9 && i < 100)
    {
      var img = loadImage("./images/IntroAnim000"+i+".png");
    }
    if(i >= 100)
    {
      var img = loadImage("./images/IntroAnim00"+i+".png");
    }

    sprites.push(img);
  }
}

function setup()
{
  var canvas = createCanvas(640, 480);
  canvas.parent("GameWindow");
  ui = new DrawUI();
  gameStarted = false;
  startButton = new Button(250, 100);
  myAlert = new AlerteRectangle();
  intro = new Sprite(sprites, 25, false);
  restart();
}

function restart()
{
  life = 3;
  score = 0;
  gameOver = false;
  timerAsteroid = 2;
  particles = [];
  lasers = [];
  asteroids = [];
  ship = new Ship();
  //Etoiles en fond
  for(var i = 0; i < 100; i++)
  {
    particles.push(new Particle());
  }
}

function draw()
{

  background(10);
  if(!cineFinished)
  {
    intro.update();
    imageMode(CENTER);
    image(intro.getSprite(), width/2, height/2);
    if(intro.getSpriteIndex() == 249)
    {
      cineFinished = true;
    }
  }
  if(cineFinished)
  {
    //MENU
    if(!gameStarted)
    {
      ui.showTitle();
      startButton.mouseHover();
      startButton.show();
    }
  }

  //JEU
  if(!gameOver && gameStarted)
  {
    //Background
    for(var i = 0; i < particles.length; i++)
    {
      particles[i].show();
      particles[i].bouge();
      particles[i].offScreen();
    }

    //Message d'alerte
    if(life == 1)
    {
      myAlert.animate();
      myAlert.show();
    }

    //Fonctions asteroids
    spawnAsteroids();
    for(var i = 0; i < asteroids.length; i++)
    {
      if(ship.hits(asteroids[i]) && !ship.hited)
      {
        console.log("hits");
        life--;
        ship.hited = true; //Active le timer de vie
      }
      asteroids[i].show();
      asteroids[i].update();
      if(asteroids[i].offScreen())
      {
        asteroids.splice(i, 1); //supprimer asteroid
      }
    }

    //Fonctions lasers
    for(var i = lasers.length - 1; i >= 0; i--)
    {
      lasers[i].show();
      lasers[i].update();
      if(lasers[i].offScreen())
      {
        lasers.splice(i, 1); //supprimer laser
      }
      else
      {
        for(var j = asteroids.length - 1; j >= 0; j--)
        {
          if(lasers[i].hits(asteroids[j]))
          {
            if(asteroids[j].radius > 20)
            {
              var newAsteroids = asteroids[j].breakUp();
              asteroids = asteroids.concat(newAsteroids); //Mettre les 2 arrays ensemble
            }
            else
            {
              score++;
            }
            asteroids.splice(j, 1);
            lasers.splice(i, 1);
            break; //sortir de la loop
          }
        }
      }
    }

    //Fonctions du vaisseau
    ship.show();
    ship.turn();
    ship.update();
    ship.checkEdges();

    checkGameOver();
  }

  if(cineFinished)
  {
    //Fonctions UI
    ui.showLife();
    ui.showScore();
    if(gameOver)
    {
      ui.showGameOver();
      ui.showHighScore();
    }
  }
}

function mouseClicked()
{
  startButton.onClick();
}

function spawnAsteroids()
{
  if(frameCount % 60 == 0 && timerAsteroid > 0)
  {
    timerAsteroid--;
  }
  if(timerAsteroid <= 0)
  {
    for(var i = 0; i < round(random(1, 5)); i++)
    {
      asteroids.push(new Asteroid());
    }
    timerAsteroid = 2;
  }
}

function checkGameOver()
{
  if(life <= 0)
  {
    gameOver = true;
  }
  if(highScore == undefined)
  {
    highScore = 0;
  }
  if(score > highScore)
  {
    highScore = score;
  }
}

function keyPressed()
{
  if(keyCode == RIGHT_ARROW)
  {
    ship.setRotation(0.1);
  }
  else if(keyCode == LEFT_ARROW)
  {
    ship.setRotation(-0.1);
  }
  else if(keyCode == UP_ARROW)
  {
    ship.boosting(true);
  }
  else if(keyCode == 32) //Space
  {
    lasers.push(new Laser(ship.position, ship.forward)); //Tirer un laser
  }

  if(gameOver)
  {
    if(keyCode == 82) //Space
    {
      restart();
    }
  }
}

function keyReleased()
{
  if(keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW)
  {
    ship.setRotation(0);
  }
  else if(keyCode == UP_ARROW)
  {
    ship.boosting(false);
  }
}

function windowResized()
{
  resizeCanvas(640, 480);
}
