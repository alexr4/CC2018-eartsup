var contentDiv = document.getElementById('screen'); //Selectionne la div qui contiendra le canvas
function setup() {
  var canvas = createCanvas(contentDiv.offsetWidth, contentDiv.offsetHeight); // Crée le createCanvas
  canvas.parent("screen"); // Attribut le canvas à la div.
}

function draw() {
}

//Resize le canvas quand la taille de la page change.
function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = contentDiv.offsetHeight;
  resizeCanvas(targetWidth, targetHeight);
}
