var radiusList = [];
var nbPoint = 120;
var redefined = false;

function redefineRadius(){
  radiusList = []
  for(var i=0; i<nbPoint; i++){
  var radius = random(99, 200);
  radiusList.push(radius);
}
}

function setup(){
  createCanvas(windowWidth,windowHeight);
redefineRadius()
}

function draw(){
 background(127);

 var time = millis();
 var second = time * 0.001;
 var intSecond = round(second);
 var maxTime = 4;
 var modTime = intSecond % maxTime;
 if(modTime == 0){
   if(redefined == false){
     redefineRadius();
     redefined = true;
   }
 }else {
   redefined=false;
 }



 beginShape();
 var ox = width/2;
 var oy = height/2;
 var nbPoint = 12;
 var radius = 200;
 for(var i=0; i<nbPoint; i++){
   var normi = i / nbPoint;
   var theta = normi * TWO_PI;
   var radius = radiusList[i]
   var x = cos(theta) * radius + ox;
   var y = sin(theta) * radius + oy;
   vertex(x, y);

 }
 endShape();

function mousePressed(){
  redefineRadius();
}

function keyPressed(){
  if(keyCode == 82){
    redefineRadius();
  }
}




}
