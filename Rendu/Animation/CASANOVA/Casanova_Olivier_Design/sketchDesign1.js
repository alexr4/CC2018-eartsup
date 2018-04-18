//Tutos P5.js daniel shiffman//

//var Amity_Jack;
var canvas;

function preload() {
  //Amity_Jack = loadFont('asset/Amity_Jack.ttf')
}

function setup() {
  canvas = createCanvas (windowWidth, windowHeight);
  colorMode(HSB);
  }

var noiseScale=0.008;

function draw() {
  background(187, 49, 89);
  for (var x=0; x < width; x++) {
    var noiseVal = noise((frameCount + x) * noiseScale, millis() * noiseScale);

    var hue = 330 + 30 * noiseVal;
    var sat = 100;
    var bright = 100;

    stroke(hue, sat, bright);
    line(x, mouseY+noiseVal*80, x, height);
    fill(hue, sat, bright);

//text//
noStroke();
//textFont(amityjack);
    textSize(250);
    fill(187, 49, 89);
    text('JAWS', 550, 450);

  }
}
