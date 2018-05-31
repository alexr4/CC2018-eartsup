var Asteroid = function(pos, r)
{
  //Si on passe des parametres à la fonction
  if(pos)
  {
    this.position = pos.copy();
  }
  else
  {
    this.position = createVector(width + 100, random(0, height)); //Arrivent de la droite et random en vertical
  }
  if(r)
  {
    this.radius = r * 0.5;
  }
  else
  {
    this.radius = random(25, 50);
  }
  this.pointsCount = floor(random(5, 15));
  this.offset = []; //Décalage des points des asteroids
  this.velocity = createVector(random(-3, -0.5), random(-0.5, 0.5));

  for(var i = 0; i < this.pointsCount; i++) //Changer la forme des asteroids
  {
    this.offset[i] = random(-this.radius * 0.5, this.radius * 0.5);
  }

  this.update = function()
  {
    this.position.add(this.velocity);
  }

  this.show = function() //Afficher l'asteroid
  {
    push();
    translate(this.position.x, this.position.y);
    noFill();
    stroke(255);
    beginShape();
    for(var i = 0; i < this.pointsCount; i++)
    {
      var angle = map(i, 0, this.pointsCount, 0, TWO_PI); //Changer la range de la variable (valeur, start1, stop1, start2, stop2)
      var x = (this.radius + this.offset[i]) * cos(angle); //x = r * cos(angle)
      var y = (this.radius + this.offset[i]) * sin(angle); //y = r * sin(angle)
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  this.breakUp = function() //Casser l'asteroid en 2
  {
    var newA = [];
    newA[0] = new Asteroid(this.position, this.radius);
    newA[1] = new Asteroid(this.position, this.radius);
    return newA;
  }

  this.offScreen = function()
  {
    if(this.position.x < 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
