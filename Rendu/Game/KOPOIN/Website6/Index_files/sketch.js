var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;
var noisX = 0.0;
function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
	background(127);
	fill(255);
	noStroke();
	for (var i = 0; i < 50; i++) {
		noisX += 0.01;
		var nX = noise(noisX) * ((width/2) + 100);
		var nY = width/2 - nX;
		ellipse(nX, i * 20, 30, 30);
		ellipse(nY, i * 20, 30, 30);
	}
}


function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
