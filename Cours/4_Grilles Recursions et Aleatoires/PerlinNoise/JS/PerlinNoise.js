var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var staticx = 0.0;
var dynamicx = 0.0;
var incNoise = 0.1;

//debug
var square = 100;
var incSquare = 4;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(20);
  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();
  //Noise de x où x est static renvera toujours la même valeur noise(x) à toute les frames
  var noiseStaticX = noise(staticx);

  /*noise de x où x est evolutif renverra des valeurs aléatoire proche des valeurs précédentes à chaque frame
   On notera que l'aleatoire perlin est très sensible à l'increment de par son comportement entre 0 et 1.
   Ainsi pour une evolution lente nous incrementerons la valeur soumise au noise d'un tres faible valeur
   et inversement pour un comportement rapide (chaotique) proche du bruit brownien
   */
  var noiseDynamicX = noise(dynamicx);
  dynamicx += 0.01;


  //Un aléatoire perlin est toujours compris entre 0 et 1.0 ainsi il servira d'increment à une position, une couleur ou toute autre variables
  fill(255);
  text("noiseStaticX : "+noiseStaticX, width * 1/4, height * 0.5/4 - 10);
  fill(255 * noiseStaticX);
  rect(width * 1/4, height * 1/4, square * 1, square * 1);

  fill(255);
  text("noiseDynamicX : "+nf(noiseDynamicX, 1, 7), width * 3/4, height * 0.5/4 - 10);
  fill(255 * noiseDynamicX);
  rect(width * 3/4, height * 1/4, square * 1, square * 1);

  /*Le bruit perlin est un bruit à plusieurs dimensions,
   c'est à dire que nous pouvons lui donner plus de variation ajoutant des dimensions.
   Il possède jusqu'à 3 dimensions
   */

  fill(255);
  text("noise 1D : ", width * 1/6, height * 2/4 - 10);
  //bruit à 1 dimension
  for (var i=0; i<square; i+=incSquare) {
    for (var j=0; j<square; j+=incSquare) {
      var x = i * incNoise;
      var n1D = noise(x + dynamicx);
      fill(255 * n1D);
      rect(width * 1/6 + i - square/2, height * 2/4 + j, incSquare + 1, incSquare + 1);
    }
  }

  //bruit à 2 dimensions
  fill(255);
  text("noise 2D : ", width * 3/6, height * 2/4 - 10);
  for (var i=0; i<square; i+=incSquare) {
    for (var j=0; j<square; j+=incSquare) {
      var x = i * incNoise;
      var y = j * incNoise;
      var n2D = noise(x + dynamicx, y + dynamicx);
      fill(255 * n2D);
      rect(width * 3/6 + i - square/2, height * 2/4 + j, incSquare + 1, incSquare + 1);
    }
  }


  //bruit à 2 dimensions
  fill(255);
  text("noise 3D : ", width * 5/6, height * 2/4 - 10);
  for (var i=0; i<square; i+=incSquare) {
    for (var j=0; j<square; j+=incSquare) {
      var x = i * incNoise;
      var y = j * incNoise;
      var n3D = noise(x + dynamicx, y + dynamicx, dynamicx);
      fill(255 * n3D);
      rect(width * 5/6 + i - square/2, height * 2/4 + j, incSquare + 1, incSquare + 1);
    }
  }


  //Le bruit perlin peut être utile dans la génération de mouvements naturels
  fill(255);
  var x1D = noise(dynamicx);
  var y1D = noise(dynamicx + 0.1);
  ellipse(width * 1/6 + x1D * square - square/2, height * 3/4, 20, 20);
  ellipse(width * 1/6 + x1D * square - square/2, height * 3.5/4 + y1D * square - square/2, 20, 20);

  var x2D = noise(dynamicx, dynamicx);
  var y2D = noise(dynamicx + 0.1, dynamicx + 0.1);
  ellipse(width * 3/6 + x2D * square - square/2, height * 3/4, 20, 20);
  ellipse(width * 3/6 + x2D * square - square/2, height * 3.5/4 + y2D * square - square/2, 20, 20);

  var x3D = noise(dynamicx, dynamicx, dynamicx);
  var y3D = noise(dynamicx + 0.1, dynamicx + 0.1, dynamicx + 0.1);
  ellipse(width * 5/6 + x3D * square - square/2, height * 3/4, 20, 20);
  ellipse(width * 5/6 + x3D * square - square/2, height * 3.5/4 + y3D * square - square/2, 20, 20);

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
