
function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//Fond

  background(215,215,215);
	background(237,23,34,33);

//Code Bare

	fill(000000),
	rect(200,270,40,260);
	rect(120,270,70,260);
	rect(270,270,10,260);
	rect(290,270,10,260);
	rect(350,270,30,260);
	rect(390,270,50,260);
	rect(455,270,30,260);


	
//Texte

	textSize(100);                   //taille du texte 
	fill(000000);
	text('HITMAN',110,135);        //positionnement du texte 1s
	textSize(120); 
	fill(000000);           
	textSize(50);
	text('640509-040147',125,580);
	textSize(30);
	fill(000000);
	text('26 Décembre 2007',180,800);            
	
}