var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(120);
  var x = 0;
  var y = 0;
  var largeur = 25;
  var hauteur = 25;
  for (var i=0; i<22; i++) {
    for (var j=0; j<39; j++) {
      var newrx = random(1,22);
      var newry = random(1,25);
      var newX = x + j * largeur;
      var newY = y + i * hauteur;
      if (i != newrx && j != newry){
        rect(newX, newY, largeur, hauteur);
      }else{
        ellipse(newX, newY, largeur, hauteur);
      }
    }
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
