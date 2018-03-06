
import peasy.PeasyCam;
PeasyCam cam;
float rx, ry;
PCandide candide;
int faceCount;
int time;
double angle = 0.002;
void setup() {
  size(900, 800, P3D);
  smooth();
  cam = new PeasyCam(this, 1000);
  cam.lookAt(0, 0, 0);
  cam.rotateY(-1);

  rx = 0;
  ry = 0;
  candide = new PCandide( "candide3c.wfm");
  candide.applyRandom();
}

void draw() {
  background(0);

  float[] rotations = cam.getRotations();
  if (rotations[1] > 1 || rotations[1] <-1) {
    angle=angle*-1;
  }
  cam.rotateY(angle);
  candide.updateRender(300, 10000);

  float mt = 2000.0;
  float nt = (millis() % mt) / mt;
 //println(nt);
  //candide.updateRender(300, nt);

  candide.render(g);
}

void mouseDragged() {
  //ry = (mouseX - width/2)/4.0;
  //rx = -(mouseY - height/2)/4.0;
}

void keyPressed() {
  rx = 0;
  ry = 0;
  candide = new PCandide( "candide3c.wfm");
  candide.applyRandom();
}

void keyReleased() {
  //candide.reset();
}