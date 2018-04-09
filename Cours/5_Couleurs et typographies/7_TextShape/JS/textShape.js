var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var font;
function preload() {
  font = loadFont('./fonts/MuktaMahee-ExtraBold.ttf');
}

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  points = font.textToPoints('Hello World !', width * 0.5, height * 0.5, 100, {
    sampleFactor: .35,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('Hello World !', width * 0.5, height * 0.5, 100);
}

function draw(){
  background(20);
  var scale = 60;
  noFill();
  stroke(255);
  rectMode(CENTER);
  rect(bounds.x, bounds.y + bounds.h, bounds.w + scale, bounds.h + scale);

  noFill();
  stroke(255)
  var time = millis() * 0.00025;
  for (var i = 0; i < points.length; i++) {
    var ni = i / points.length;
    var nextModi = (i+1) % points.length;
    var p = points[i];
    var np = points[nextModi];

    var px = p.x - bounds.w * .5;
    var py = p.y + bounds.h * .5;

    var npx = np.x - bounds.w * .5;
    var npy = np.y + bounds.h * .5;

    var theta = atan2(npy - py, npx - px);

    var modi = (i + millis() * 0.01) % points.length;
    var inc = (modi/points.length);
    var loop = 20.0;
    var len = 3.5;
    var anim = 2.5 + abs(sin(inc * TWO_PI * loop)) * len;

    var animTheta = noise(px * 0.01 + time, py * 0.01 +time, time) * TWO_PI;

    push();
    translate(px, py);
    rotate(theta + HALF_PI + animTheta);
    line(0, 0, anim, 0);
    pop();
  }
}


function keyPressed(){

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
