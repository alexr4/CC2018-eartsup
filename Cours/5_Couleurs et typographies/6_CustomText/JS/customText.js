var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;
var textArray = [];

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  var text = "Hello World !";
  textArray = split(text, ""); //we split the text varibal as an char array. Without giving any char into the second parameter

}

function draw(){
  background(20);

  var font = "Mukta Mahee";

  var numberCharAngle = 14;
  var radius = 30;
  var radiusInc = 1.5;
  var txtSize = 12;
  var txtInc = 4;
  var numberOfLoop = 0;

  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(200);
  for(var i=0; i<textArray.length; i++){
    var char = textArray[i];

    var animi = abs(i - millis() * .025) % textArray.length;
    var normi = animi/textArray.length;
    var modChar = (i%numberCharAngle);
    var normChar = (modChar / numberCharAngle);
    var theta = (normChar) * TWO_PI;

    var modTheta = theta % TWO_PI;
    if(modTheta == 0){
      numberOfLoop ++;
    }

    var animatedTheta = theta + millis() * 0.0001;
    var x = width * 0.5 + cos(animatedTheta) * radius;
    var y = height * 0.5 + sin(animatedTheta) * radius;


    radius += radiusInc + (radiusInc * 0.1 *  numberOfLoop);
    var size = txtSize + txtInc * numberOfLoop;

    push();
    translate(x, y);
    rotate(animatedTheta + HALF_PI);
    fill(55 + abs(sin(normi * PI * 2.0)) * 200);
    textSize(size);
    text(char, 0, 0);
    pop();
  }
}


function keyPressed(){
  if(keyCode > 32){
    textArray.push(key);
  }
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
