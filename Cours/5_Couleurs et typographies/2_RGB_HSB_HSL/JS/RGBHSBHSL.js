var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  colorMode(RGB);
  strokeWeight(1);
  background(220);

  var resCol = width/3;
  var margin = 70;
  var innerWidth = resCol - margin * 2;
  var maxTime = 4000;
  var modTime = millis() % maxTime;
  var normTime = modTime / maxTime;

  //RGB
  colorMode(RGB);
  var nbPerChannel = 10;
  var resRGB = innerWidth / nbPerChannel;
  var marginText = 20;

  noStroke();
  fill(0);
  textAlign(LEFT);
  text("0, 0", margin - marginText, height/2 - innerWidth/2 - marginText);
  text("255",  resCol - margin, height/2 - innerWidth/2 - marginText);
  text("255", margin - marginText, height/2 + innerWidth/2 + marginText);
  textAlign(CENTER);
  text("RED",  resCol/2, height/2 - innerWidth/2 - marginText);
  text("BLUE = "+round(normTime * 255),  resCol/2, height/2 + innerWidth/2 + marginText);
  text("GREEN", margin - marginText * 2, height/2);

  for(var i=0; i<nbPerChannel; i++){
    for(var j=0; j<nbPerChannel; j++){
      var x = margin + i * resRGB;
      var y = height/2 - innerWidth/2 + j * resRGB;
      var normi = i/nbPerChannel;
      var normj = j/nbPerChannel;
      var red = normi * 255;
      var green = normj * 255;
      var blue = normTime * 255;

      fill(red, green, blue);
      rect(x, y, resRGB + 1, resRGB + 1);
    }
  }

  //HSB
  colorMode(HSB);
  var nbPerAngle = 20;
  var resHue = 360/nbPerAngle;
  var nbPerRadius = 12;

  noStroke();
  fill(0, 0, 0);
  textAlign(CENTER);
  text("Angle = Teinte\nRayon = Saturation\nValeur = "+round(normTime * 100), resCol * 1.5, height/2 + innerWidth * 0.5 + marginText);

  noFill();
  strokeCap(SQUARE);
  strokeWeight(nbPerRadius);
  for(var i=0; i<nbPerAngle; i++){
    var normi = i/nbPerAngle;
    var normNexti = (i + 1)/nbPerAngle;
    var startAngle = normi * TWO_PI;
    var stopAngle = normNexti * TWO_PI;
    var x = resCol * 1.5;
    var y = height/2;
    var hue = normi * 360;
    for(var j=0; j<nbPerRadius; j++){
      var normj = j/nbPerRadius;
      stroke(hue, normj * 100, normTime * 100);
      arc(x, y, innerWidth * normj, innerWidth * normj, startAngle, stopAngle + radians(1));
    }
  }

  //HSL
  colorMode(HSL);

  noStroke();
  fill(0, 0, 0);
  textAlign(CENTER);
  text("Angle = Teinte\nRayon = Saturation\nLuminosité = "+round(normTime * 100), resCol * 2.5, height/2 + innerWidth * 0.5 + marginText);

  noFill();
  for(var i=0; i<nbPerAngle; i++){
    var normi = i/nbPerAngle;
    var normNexti = (i + 1)/nbPerAngle;
    var startAngle = normi * TWO_PI;
    var stopAngle = normNexti * TWO_PI;
    var x = resCol * 2.5;
    var y = height/2;
    var hue = normi * 360;
    for(var j=0; j<nbPerRadius; j++){
      var normj = j/nbPerRadius;
      stroke(hue, normj * 100, normTime * 100);
      arc(x, y, innerWidth * normj, innerWidth * normj, startAngle, stopAngle + radians(1));
    }
  }

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
