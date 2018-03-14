var radiusList = []; //Stocke les rayons
var nbPoint = 20; //Nombre de points sur le cercle
var redefined = false; //Booléen qui check si les rayons ont changé
var epaisseurTrait = 1;

function redefineRadius()
{
  radiusList = [];
  for(var i = 0; i < nbPoint; i++) //Pour ajouter tous les rayons au tableau
  {
    var radius = random(100, 200); //Créer un rayon random
    radiusList.push(radius); //ajouter le rayon au tableau
  }
}

function changeColor()
{
  var r = round(random(0, 255));
  var g = round(random(0, 255));
  var b = round(random(0, 255));
  fill(r, g, b);
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  redefineRadius();
}

function draw()
{
  var blue = round((mouseX/width) * 255);
  var red = round((mouseY/height) * 255);
  background(red, 100, blue);
  var time = millis(); //Temps en millisecondes depuis le début du programme
  var second = time * 0.001; //Convertir en secondes
  var intSecond = round(second); //Garder la partie entière
  var maxTime = 2; //Temps maximum pour raffraichir
  var modTime = intSecond % maxTime; //modulo des secondes

  if(modTime == 0) //Si c'est toutes les 2 secondes
  {
    if(redefined == false) //Pour changer le rayon une seule fois
    {
      redefineRadius();
      redefined = true;
    }
  }
  else
  {
    redefined = false;
  }

  if(mouseIsPressed)
  {
    if(mouseButton == LEFT)
    {
      if(epaisseurTrait >= 0)
      {
        epaisseurTrait--;
        strokeWeight(epaisseurTrait);
      }
    }
    if(mouseButton == RIGHT)
    {
      epaisseurTrait++;
      strokeWeight(epaisseurTrait);
    }
  }

  beginShape(); //Début de la forme
  var ox = width/2; //milieu de l'écran
  var oy = height/2; //milieu de l'écran
  for(var i = 0; i < nbPoint; i++)
  {
    var normI = i / nbPoint; //Normaliser i (entre 0 et 1)
    var theta = normI * TWO_PI; //Calculer l'angle
    var radius = radiusList[i]; //Récupérer le rayon à l'index i
    var x = cos(theta) * radius + ox; //calculer le x du point
    var y = sin(theta) * radius + oy; //calculer le y du point
    vertex(x, y); //afficher le point
  }
  endShape(CLOSE); //Fin de la forme
}

/*function mousePressed() //Quand on appuie sur le bouton de la souris
{
  redefineRadius();
}*/

function keyPressed()
{
  if(keyCode == 38) //Appuie sur flèche haut
  {
    nbPoint++;
    redefineRadius();
  }
  if(keyCode == 40) //Appuie sur flèche bas
  {
    nbPoint--;
    redefineRadius();
  }
  if(keyCode == 39 || keyCode == 37) //Appuie sur flèche droite ou gauche
  {
    changeColor();
  }
  if(keyCode == 87) //Appui sur W (reset de la forme)
  {
    fill(255, 255, 255);
    stroke(0);
    epaisseurTrait = 1;
    strokeWeight(epaisseurTrait);
    nbPoint = 20;
    redefineRadius();
  }
  if(keyCode == 69 || keyCode == 65) //Appui sur E ou A
  {
    var sR = round(random(0, 255));
    var sG = round(random(0, 255));
    var sB = round(random(0, 255));
    stroke(sR, sG, sB);
  }
}
