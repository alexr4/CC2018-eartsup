var x, y, img, imgratio;

function preload(){
  img=loadImage("logoatl.png")
  imgratio = img.width/img.height
}

function setup() {
  createCanvas(600, 850);
  x = width / 2;
  y = height;
}

function draw() {

  background(16,142,232,90);

imageMode(CENTER);
image(img, width/2.02, height/2+150, width, width/imgratio);

  fill(245,203,0);
  textFont("oswald", );
  textSize(60);
  text("ATLANTIDE", width/2-160, 200);

  textSize(30);
  text("Disney", width/2-40, 135);




  noStroke();
  fill(255,255,224);
  ellipse(x, y, 12, 12);


  x = x + random(-1, 1);

  y = y - 1;


  if (y < 0) {
    y = height;
  }


  noStroke();
  fill(255,255,224);
  ellipse(x-100, y-60, 5, 5);


  x = x + random(-1, 1);

  y = y - 1;


  if (y < 0) {
    y = height;
  }


  noStroke();
  fill(255,255,224);
  ellipse(x+100, y+60, 10, 10);


  x = x + random(-1, 1);

  y = y - 1;


  if (y < 0) {
    y = height;
  }

  noStroke();
  fill(255,255,224);
  ellipse(x+20, y-60, 8, 8);


  x = x + random(-1, 1);

  y = y - 1;


  if (y < 0) {
    y = height;
  }

  noStroke();
  fill(255,255,224);
  ellipse(x+50, y-120, 8, 8);


  x = x + random(-1, 1);

  y = y - 1;


  if (y < 0) {
    y = height;
  }


  noStroke();
  fill(255,255,224);
  ellipse(x+30, y-140, 10, 10);


  x = x + random(-1, 1);

  y = y - 1;


  if (y < 0) {
    y = height;
  }

}
