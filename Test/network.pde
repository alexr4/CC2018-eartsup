int numpoint = 10;
Particules points[];
PFont font;
int margeGlobal = 50;

void setup(){
  size(500,500,P3D);
  font = loadFont("SourceCodePro-Medium-48.vlw");
  points = new Particules[numpoint];
    for(int i = 0;i<numpoint;i++){
    points[i] = new Particules(random(margeGlobal,width-margeGlobal),random(margeGlobal,height-margeGlobal),random(2,20),i);
  }
  for(int i = 0;i<numpoint;i++){
    points[i].setNearestsNeightbors(points,2);
  }
}

void draw(){
  background(0);
  textFont(font,20);
  text("Transfer to Network",20,30);
  for( int i = 0;i<numpoint;i++){
    points[i].move();
    points[i].display();
    points[i].DrawLine();
  }
  
}

void mousePressed(){
    for( int i = 0;i<numpoint;i++){
      points[i].setPosition(random(50,width-50),random(50,height-50));
      points[i].removeNeightbors();
    }
    for( int i = 0;i<numpoint;i++){
      points[i].setNearestsNeightbors(points,2);
    }
}