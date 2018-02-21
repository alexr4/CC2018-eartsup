class Particules{
  
  PVector location;
  PVector velocity;
  float diametre;
  int index;
  IntList neightbors ;
  int marge = 50;
  
  Particules(float _x, float _y, float _diam,int _index){
    location = new PVector(_x,_y,0);
    diametre = _diam;
    neightbors = new IntList();
    index = _index;
    velocity = new PVector(random(-0.3,0.3),random(-0.3,0.3));
  }
  
  void move(){
    location.add(velocity);
    if ((location.x > width-marge) || (location.x < marge)) {
      velocity.x = velocity.x * -1;
    }
    if ((location.y > height-marge) || (location.y < marge)) {
      velocity.y = velocity.y * -1;
    }
  }
  
  void display(){
    noFill();
    stroke(0,255,0);
    //translate(location.x,location.y,location.z);
    //sphere(diametre);
    ellipse(location.x,location.y, diametre,diametre);
    fill(0,255,0);
    textFont(font,8);
    String textinner = str(location.x+location.y);
    text(textinner,location.x,location.y-10);
  }
  
  void DrawLine(){
    stroke(0,255,0);
    for(int i = 0; i<neightbors.size();i++){
      line(points[neightbors.get(i)].location.x,points[neightbors.get(i)].location.y,location.x,location.y);
    }
  }
  
  void setNearestsNeightbors(Particules[] other,int number){
    
     for(int y = 0;y <= number;y++){
      int indexNearest = 0;
      float smallestDist = width*5;
      
      IntList otherRest = new IntList();
      for(int o = 0;o<other.length;o++){
        if(!other[o].neightbors.hasValue(index)&& !neightbors.hasValue(other[o].index) && index != other[o].index){
          otherRest.append(o);
        }
      }
      
      if(otherRest.size() != 0){    
        for(int i=0;i<otherRest.size();i++){
          float dist = dist(location.x,location.y,other[otherRest.get(i)].location.x,other[otherRest.get(i)].location.y); 
          if(dist<smallestDist){
            indexNearest = otherRest.get(i);
            smallestDist = dist;
          }
        }
        neightbors.append(indexNearest);
      }
    }
  }
  void setPosition(float _x,float _y){
    location = new PVector(_x,_y);
  }
  void removeNeightbors(){
    neightbors.clear();
  }
}