
function setup(){
  createCanvas(600, 500);
}

function draw(){
blendMode(NORMAL);
background(240);
noStroke();
rectMode(CENTER);

var font;
function preload(){
  font = loadFont("./MuktaMahee-Bold.ttf");
}
var pointsList = font.textToPoints('SOS fantome'0, 0, 0, 75,) {
    sampleFactor: 0.25,;
    simplifyThreshold: 0;
  }
  for(var i=0; i<pointsList.length; i++){
  var point = pointsList[i];
  ellipse(p.x, p.y, 4, 4);
}
}
}
  }
