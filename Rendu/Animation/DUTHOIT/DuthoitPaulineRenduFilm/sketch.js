var x, y, img, imgratio;

function preload(){
  img=loadImage("gravestone.png")
  imgratio = img.width/img.height
}

function setup() {
  createCanvas(540, 740);
  x = width / 2;
  y = height;
}

function draw() {

  background(0);

imageMode(CENTER);
image(img, width/2, height/2+200, width, width/imgratio);

  fill(180,0,0);
  textFont("oswald", );
  textSize(60);
  text("Grave", width/2-240, 200);
  text("Fireflies", width/2-20, 240);

  textSize(30);
  text("of", width/2-70, 185);
  text("the", width/2-70, 215);



  // Draw a circle1
  noStroke();
  fill(255,255,224);
  ellipse(x, y, 12, 12);

  // Jigglehorizontal
  x = x + random(-1, 1);
  // Moveup constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

  // Draw a circle2
  noStroke();
  fill(255,255,224);
  ellipse(x-100, y-60, 5, 5);

  // Jigglehorizontal
  x = x + random(-1, 1);
  // Moveup constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

  // Draw a circle2
  noStroke();
  fill(255,255,224);
  ellipse(x+100, y+60, 10, 10);

  // Jigglehorizontal
  x = x + random(-1, 1);
  // Moveup constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  // Draw a circle3
  noStroke();
  fill(255,255,224);
  ellipse(x+20, y-60, 8, 8);

  // Jigglehorizontal
  x = x + random(-1, 1);
  // Moveup constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  // Draw a circle4
  noStroke();
  fill(255,255,224);
  ellipse(x+50, y-120, 8, 8);

  // Jigglehorizontal
  x = x + random(-1, 1);
  // Moveup constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

  // Draw a circle4
  noStroke();
  fill(255,255,224);
  ellipse(x+30, y-140, 10, 10);

  // Jigglehorizontal
  x = x + random(-1, 1);
  // Moveup constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  //noLoop();
}
