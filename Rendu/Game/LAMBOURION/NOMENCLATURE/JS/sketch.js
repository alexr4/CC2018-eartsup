var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;

let timer = 5

function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(127);

  textAlign(CENTER, BOTTOM);
  textSize(90);
  text(timer, 551, 625);

  var res = 67;
  var numberOfCols = 17;
  var numberOfRows = 8;
  //rectMode(RIGHT);

  if (frameCount / 60 == 0 && timer > 0)
  { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.4);
  }

  for(var i=0; i<numberOfCols; i++)
  {
    for(var j=0; j<numberOfRows; j++)
    {
      var x = i * res;
      var y = j * res;
      var ratio = random(1);
      var c = color(290);
      var c2 = color(20);

      if(ratio >= 0.9)
      {
        noStroke();
        fill(c);
        rect(x, y, res * 0.5, res * 0.5);
      }

      if(ratio <= 0.9)
      {
        noStroke();
        fill(c2);
        rect(x, y, res * 0.5, res * 0.5);
      }
    }
  }
  noLoop();
}

function mousePressed()
{
  remove(rect);
}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
