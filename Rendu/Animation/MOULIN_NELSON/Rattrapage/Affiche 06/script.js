var x, y, img, imgratio;

function preload(){
  img=loadImage("homer.png")
  imgratio = img.width/img.height
}

function setup() {
  createCanvas(600, 850);
  x = width / 2;
  y = height;
}

function draw() {

  background(245,203,0,1.9);

imageMode(CENTER);
image(img, mouseX, mouseY, 400, 400/imgratio);



  fill(16,142,232,90);
  textFont("oswald", );
  textSize(60);
  text("SIMPSON", width/2-140, 200);

  textSize(15);
  text(" Matt Groening present:", width/2-100, 135);

}
