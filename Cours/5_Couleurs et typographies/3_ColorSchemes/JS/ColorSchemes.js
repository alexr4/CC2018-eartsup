var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var index = 0;

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

  var nbCol = 4;
  var resCol = width/nbCol;
  var margin = 20;
  var innerWidth = resCol - margin * 2;
  var maxTime = 10000;
  var modTime = millis() % maxTime;
  var normTime = modTime / maxTime;

  //HSB
  colorMode(HSB);

  //color circle
  var nbPerAngle = 20;
  var nbPerRadius = 12;
  displayColorCircle(resCol * 0.5, height/2, innerWidth, innerWidth, nbPerAngle, nbPerRadius);

  switch(index){
    case 0 :
      complementary(resCol * 0.5, height/2, 20, 20, normTime, innerWidth * 0.5, normTime, resCol, height/2, resCol/2, height/2);
    break;
    case 1 :
      complementaryCombinaition(2, 0.1, resCol * 0.5, height/2, 20, 20, normTime, innerWidth * 0.5, normTime, resCol, height/2, resCol, height/2);
    break;
    case 2 :
      triade(resCol * 0.5, height/2, 20, 20, normTime, innerWidth * 0.5, normTime, resCol, height/2, resCol/2, height/2);
    break;
    case 3 :
      tetradic(resCol * 0.5, height/2, 20, 20, normTime, innerWidth * 0.5, normTime, resCol, height/2, resCol/2, height/2)
    break;
    case 4 :
      custom(6, resCol * 0.5, height/2, 20, 20, normTime, innerWidth * 0.5, normTime, resCol, height/2, resCol/3, height/2);
    break;
    case 5 :
      camaieux(6, resCol * 0.5, height/2, 20, 20, normTime, innerWidth * 0.5, normTime, 0.25, resCol, height/2, resCol/3, height/2);
    break;
  }
}

//color circle
function displayColorCircle(x, y, w, h, nbPerAngle, nbPerRadius){
  var resHue = 360/nbPerAngle;
  noFill();
  strokeCap(SQUARE);
  strokeWeight(nbPerRadius);
  for(var i=0; i<nbPerAngle; i++){
    var normi = i/nbPerAngle;
    var normNexti = (i + 1)/nbPerAngle;
    var startAngle = normi * TWO_PI;
    var stopAngle = normNexti * TWO_PI;
    var hue = normi * 360;
    for(var j=0; j<nbPerRadius; j++){
      var normj = j/nbPerRadius;
      stroke(hue, normj * 100, 90);
      arc(x, y, w * normj, h * normj, startAngle, stopAngle + radians(1));
    }
  }
}

//color scheme
function complementary(x, y, w, h, nr, mr, na, rx, ry, rw, rh){
  rectMode(CENTER);
  for(var i=0; i<2; i++){
    var normi = i/2;
    var theta = normi * TWO_PI + na * TWO_PI;
    var ex = x + cos(theta) * (nr * mr);
    var ey = y + sin(theta) * (nr * mr);
    var hue = (normi * 360 + na * 360) % 360;

    strokeWeight(2);
    stroke(0, 0, 100);
    fill(hue, nr * 100, 100);
    ellipse(ex, ey, w, h);

    noStroke();
    rect(rx + i*rw + rw, ry, rw, rh);
  }
}

function complementaryCombinaition(res, oa, x, y, w, h, nr, mr, na, rx, ry, rw, rh){
  rectMode(CENTER);
  for(var j=0; j < res; j++){
    var normj = j / res;
    for(var i=0; i<2; i++){
      var normi = i/2;
      var theta = normi * TWO_PI + na * TWO_PI + normj * TWO_PI * oa;
      var ex = x + cos(theta) * (nr * mr);
      var ey = y + sin(theta) * (nr * mr);
      var hue = (normi * 360 + na * 360 + normj * 360 * oa) % 360;
      var index = j + i * res;
      var rrw = rw / res;
      strokeWeight(2);
      stroke(0, 0, 100);
      fill(hue, nr * 100, 100, 50);
      ellipse(ex, ey, w, h);

      noStroke();
      rect(rx + index * rrw+ rrw, ry, rrw, rh);
    }
  }
}

function triade(x, y, w, h, nr, mr, na, rx, ry, rw, rh){
  rectMode(CENTER);
  for(var i=0; i<3; i++){
    var normi = i/3;
    var theta = normi * TWO_PI + na * TWO_PI;
    var ex = x + cos(theta) * (nr * mr);
    var ey = y + sin(theta) * (nr * mr);
    var hue = (normi * 360 + na * 360) % 360;

    strokeWeight(2);
    stroke(0, 0, 100);
    fill(hue, nr * 100, 100);
    ellipse(ex, ey, w, h);

    noStroke();
    rect(rx + i*rw + rw, ry, rw, rh);
  }
}

function tetradic(x, y, w, h, nr, mr, na, rx, ry, rw, rh){
  rectMode(CENTER);
  for(var i=0; i<4; i++){
    var normi = i/4;
    var theta = normi * TWO_PI + na * TWO_PI;
    var ex = x + cos(theta) * (nr * mr);
    var ey = y + sin(theta) * (nr * mr);
    var hue = (normi * 360 + na * 360) % 360;

    strokeWeight(2);
    stroke(0, 0, 100);
    fill(hue, nr * 100, 100);
    ellipse(ex, ey, w, h);

    noStroke();
    rect(rx + i*rw + rw, ry, rw, rh);
  }
}

function custom(res, x, y, w, h, nr, mr, na, rx, ry, rw, rh){
  rectMode(CENTER);
  for(var i=0; i<res; i++){
    var normi = i/res;
    var theta = normi * TWO_PI + na * TWO_PI;
    var ex = x + cos(theta) * (nr * mr);
    var ey = y + sin(theta) * (nr * mr);
    var hue = (normi * 360 + na * 360) % 360;

    strokeWeight(2);
    stroke(0, 0, 100);
    fill(hue, nr * 100, 100);
    ellipse(ex, ey, w, h);

    noStroke();
    rect(rx + i*rw + rw, ry, rw, rh);
  }
}



function camaieux(res, x, y, w, h, nr, mr, na, oa, rx, ry, rw, rh){
  rectMode(CENTER);
  for(var i=0; i<res; i++){
    var normi = i/res;
    var theta = normi * (oa * TWO_PI) + na * TWO_PI;
    var ex = x + cos(theta) * (nr * mr);
    var ey = y + sin(theta) * (nr * mr);
    var hue = (normi * (oa * 360) + na * 360) % 360;

    strokeWeight(2);
    stroke(0, 0, 100);
    fill(hue, nr * 100, 100);
    ellipse(ex, ey, w, h);

    noStroke();
    rect(rx + i*rw + rw, ry, rw, rh);
  }
}

function keyPressed(){
  console.log(keyCode);
  if(keyCode >= 96 && keyCode <= 101){
    index = keyCode - 96;
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
