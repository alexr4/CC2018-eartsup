var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var staticx = 0.0;
var dynamicx = 0.0;
var incNoise = 0.1;

//debug
var square = 10;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(20);
  textAlign(CENTER, CENTER);
  rectMode(CORNER);
  noStroke();
  //design
  var cols = 3;
  var rows = 3;
  var margin = 10;
  var resCol = ((width - margin * 2) / cols) - margin;
  var resRow = ((height - margin * 2) / rows) - margin;
  var subCols = floor(resCol / square);
  var subRows = floor(resRow / square);

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
  rectMode(CENTER);
  fill(255);
  text("noiseStaticX : "+nf(noiseStaticX, 1, 7), margin + resCol * 0.5, resRow * 0.5 - (resCol * 0.25) * 0.5 - margin, resCol, resRow);
  fill(255 * noiseStaticX);
  rect(margin + resCol * 0.5, resRow * 0.5, resCol * 0.25, resCol * 0.25);

  fill(255);
  text("noiseDynamicX : "+nf(noiseDynamicX, 1, 7),  margin * 3 + resCol * 2.5, resRow * 0.5 - (resCol * 0.25) * 0.5 - margin, resCol, resRow);
  fill(255 * noiseDynamicX);
  rect(margin * 3 + resCol * 2.5, resRow * 0.5, resCol * 0.25, resCol * 0.25);

  /*Le bruit perlin est un bruit à plusieurs dimensions,
   c'est à dire que nous pouvons lui donner plus de variation ajoutant des dimensions.
   Il possède jusqu'à 3 dimensions
   */
   rectMode(CORNER);
  fill(255);
  noStroke();
  text("noise 1D : ", margin + resCol * 0.5, resRow);
  //bruit à 1 dimension
  for (var i=0; i<subCols; i++) {
    for (var j=0; j<subRows; j++) {
      var ni = i * incNoise;
      var n1D = noise(ni + dynamicx);
      var x = margin + i * square;
      var y = j * square + resRow + margin;

      fill(255 * n1D);
      rect(x, y, square + 1, square + 1);
    }
  }

  //bruit à 2 dimensions
  fill(255);
  text("noise 2D : ", margin * 2 + resCol * 1.5, resRow);
  for (var i=0; i<subCols; i++) {
    for (var j=0; j<subRows; j++) {
      var ni = i * incNoise;
      var nj = j * incNoise;
      var n2D = noise(ni + dynamicx, nj + dynamicx);
      var x = i * square + resCol + margin * 2;
      var y = j * square + resRow + margin;
      fill(255 * n2D);
      rect(x, y, square + 1, square + 1);
    }
  }


  //bruit à 2 dimensions
  fill(255);
  text("noise 3D : ", margin * 3 +resCol * 2.5, resRow);
  for (var i=0; i<subCols; i++) {
    for (var j=0; j<subRows; j++) {
      var ni = i * incNoise;
      var nj = j * incNoise;
      var n3D = noise(ni + dynamicx, nj + dynamicx, dynamicx);
      var x = i * square + resCol * 2 + margin * 3;
      var y = j * square + resRow + margin;
      fill(255 * n3D);
      rect(x, y, square + 1, square + 1);
    }
  }


  //Le bruit perlin peut être utile dans la génération de mouvements naturels
  fill(255);
  var x1D = noise(dynamicx);
  var y1D = noise(dynamicx + 0.1);
  var x = margin + resCol * x1D;
  var y = resRow * 2.5  + (resRow * 0.5) * y1D;
  ellipse(x, resRow * 2.5, 20, 20);
  ellipse(x, y, 20, 20);

  var x2D = noise(dynamicx, dynamicx);
  var y2D = noise(dynamicx + 0.1, dynamicx + 0.1);
  x = margin * 2 + resCol + resCol * x2D;
  y = resRow * 2.5  + (resRow * 0.5) * y2D;
  ellipse(x, resRow * 2.5, 20, 20);
  ellipse(x, y, 20, 20);

  var x3D = noise(dynamicx, dynamicx, dynamicx);
  var y3D = noise(dynamicx + 0.1, dynamicx + 0.1, dynamicx + 0.1);
  x = margin * 3 + resCol * 2 + resCol * x3D;
  y = resRow * 2.5  + (resRow * 0.5) * y3D;
  ellipse(x, resRow * 2.5, 20, 20);
  ellipse(x, y, 20, 20);

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
