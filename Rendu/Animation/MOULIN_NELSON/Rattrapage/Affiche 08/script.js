var x, y, img, imgratio;

function preload(){
  img=loadImage("Hands.png")
  imgratio = img.width/img.height
}

function setup() {
  createCanvas(600, 850);
  x = width / 2;
  y = height;
}

function draw() {

  background(164,20,16);

imageMode(CENTER);
image(img, 300, mouseY, 600, 850/imgratio);



  fill(0,0,0,);
  textFont("oswald", );
  textSize(60);
  text("BlackKklansman", width/2-200, 200);

  textSize(10);
  text("Spike Lee present:", width/2-100, 135);
text("John David Washington - Adam Driver", width/2-100, 55);
}
