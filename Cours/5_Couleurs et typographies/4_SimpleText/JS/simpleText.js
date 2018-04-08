var contentDiv = document.getElementById('row1');
var resolution = 1920.0 / 1080.0;


function setup(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  var canvas = createCanvas(targetWidth, targetHeight);
  canvas.parent("canvas-content");
}

function draw(){
  background(220);

  /**
  /n inside a line of text signifiies a line break
  /t inside a line of text signifiies a tab space
  */
  var quotes = "When people say, 'I don't get art'\n... that means art is working.";
  var author = "John Maeda";

  /**
  Call fonts from the css files attached to the html page
  */
  var fontQuote = "Mukta Mahee";
  var fontAuthor = "monospace";

  fill(20);
  noStroke();

  textFont(fontQuote); //set font for text
  textSize(24); //set textSize
  textAlign(CENTER, BOTTOM); //Align text. First parameter is the alignment on the x axis, the second is the alignment on the y axis
  textLeading(30); //Set the line space
  textStyle(ITALIC); //The the style of the text; Parameter is NORMAL, BOLD and ITALIC
  text(quotes, width * 0.5, height * 0.5 - 20); //write text on the canvas

  textFont(fontAuthor);
  textSize(12);
  textLeading(12)
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(author, width * 0.5, height * 0.5 + 20);

}


function keyPressed(){

}

function windowResized(){
  var targetWidth = contentDiv.offsetWidth;
  var targetHeight = targetWidth / resolution;
  resizeCanvas(targetWidth, targetHeight);
}
