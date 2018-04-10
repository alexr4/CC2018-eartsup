var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

var font;
var fontSize;
var points;
var bounds;
var originalsPoints;
var eta;
var randomSeed;

//The preload functiuon allow to load assets before the setup call
function preload() {
  //here we load the .ttf model of the font in order to compute its vector path
  //font = loadFont('./FONTS/MuktaMahee-ExtraBold.ttf');
  //here we load the file from a online repository which provide CORS authorization
  font = loadFont("https://www.arivaux.com/preprod/cc-2018/MuktaMahee-Bold.ttf");
}

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");

  fontSize = 150;

  /**
  *p5.Font object allow to convert path as an array of point using font.textToPoints(text, x, y, fontsize, [option]) where
  * text : line of text
  * x : x-position of the text
  * y : y-position of the text
  * fontsize : size of the char (option)
  * [options] : Object which can contain :
  * * sampleFactor : ratio from path-length to number of sample into the array. Defalut is 0.25. More factor will provide more points
  * * simplifyThreshold : set to 0 will have no simplification. Up to 0 and colinear points will be removed in order to simplify the mode
  */
  points = font.textToPoints('Hello World !', width * 0.5, height * 0.5, fontSize, {
    sampleFactor: 0.35,
    simplifyThreshold: 0
  });

  /**
  * p5.FOnt object allow to get the bounding box of a text using font.textBounds (text, x, y, fontsize, [option]) where
  * text : line of text
  * x : x-position of the text
  * y : y-position of the text
  * fontsize : size of the char (option)
  */
  bounds = font.textBounds('Hello World !', width * 0.5, height * 0.5, fontSize);

  //re-center the center on the scene in order to conveert for align left to align center
  for (var i = 0; i < points.length; i++) {
    var p = points[i];

    var x = p.x - bounds.w * 0.5;
    var y = p.y + bounds.h * 0.5;

    points[i].x = x;
    points[i].y = y;
  }

  originalsPoints = clone(points);
  randomSeed = random(0, 1000);
  noiseSeed(100);
  eta = random(0.05);

  background(0);
}

function draw(){
  background(0, 25);

  noStroke();
  fill(255);
  var time = millis() * 0.0025;
  for (var i = 0; i < points.length; i++) {
    var ni = i / points.length;
    var p = points[i];


    var curlLen = 1.5;
    var mx = noise(p.y*eta, p.y*eta) * 2.0 - 1.0;
    var my = noise(p.x*eta, p.x*eta) * 2.0 - 1.0;
    var mx = mx * curlLen;
    var my = my * curlLen;
    points[i].x = p.x + mx;
    points[i].y = p.y + my;


    var size = 0.5 + noise(p.x * 0.01, p.y * 0.01, time) * 2.0;

    ellipse(p.x, p.y, size, size);
  }

}



function keyPressed(){
  if(keyCode  == 32){
    console.log("reset")
    //we reset the value
    points = clone(originalsPoints);
    randomSeed = random(0, 1000);
    noiseSeed(randomSeed);
    eta = random(0.05);
    background(0);
  }
}

function clone(obj){
    try{
        var copy = JSON.parse(JSON.stringify(obj));
    } catch(ex){
        alert("Vous utilisez un vieux navigateur bien pourri, qui n'est pas pris en charge par ce site");
    }
    return copy;
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
