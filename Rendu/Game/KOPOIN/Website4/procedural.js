var rayon, number;
var angle;
var radiusList = [];
var redifined = false;
var colo;
function redifineRad(){
	console.log("hey");
	radiusList = [];
	for (var i = 0; i < number; i++) {
		var radius = random(100, 500);
		radiusList.push(radius);
	}
	colo = color(random(0,255), random(0,255), random(0,255));
}
function setup(){
	createCanvas(windowWidth, windowHeight);
	rayon = 100;
	wait = 0;
	number = 4;
	redifineRad();
	colo = color(160, 0, 0);
}
function draw(){
	var sec = round(millis() * 0.001);
	var maxTime = 4;
	var modTime = sec % maxTime;
	console.log(modTime);
	if(modTime == 0){
		if(redifined == false){
			redifineRad();
			redifined = true;
		}
	}else{
		redifined = false;
	}
	background(127);
	fill(colo);
	beginShape();
	for (var i = 0; i < number; i++) {
		var ni = i/number;
		angle = ni * (TWO_PI);
		var x = cos(angle) * radiusList[i] +  width/2;
		var y = sin(angle) * radiusList[i] + height/2;
		vertex(x, y);
	}
	endShape(CLOSE);
}
function mousePressed(){
	redifineRad();
}
function keyPressed(){
	if(keyCode == 82){
		if(number > 3){
			number--;
		}
		redifineRad();

	}if(keyCode == 84){
		number++;
		redifineRad();
	}
	if(keyCode == 41){
		redifineRad();
	}
}