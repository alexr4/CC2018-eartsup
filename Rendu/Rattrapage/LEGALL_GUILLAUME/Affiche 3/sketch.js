
function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//FOND
  background(230,230,230);
	background(237,23,34,33);

//Voiture

	fill(113,113,113);
	
	rect(305,430,200,50);
	rect(320,470,171,150);
	rect(305,550,200,50);
	rect(305,550,150,50);
	rect(305,550,100,50);
	rect(305,550,50,50);
	
	fill(50,50,50);
	
	rect(110,650,471,150);
	rect(90,600,471,150);
	rect(140,600,471,850);
	
	fill(000000);
	rect(360,750,141,50);
	rect(345,770,167,50);
	rect(310,800,240,50);
	rect(290,830,280,50);

	
	
	
//TEXTE

	textSize(80);                   //taille du texte 
	fill(255,255,255);
	text('FAST',125,135);        //positionnement du texte 1
	text('AND',125,202);            //positionnement du texte 2
	text('FURIOUS',125,270);            //positionnement du texte 3
	textSize(20);
	text('Vin Diesel  Paul Walke  Jordana Brewster',125,350);
	textSize(30);
	//text('',125,315); 
	fill(255,255,255);
	text('26 septembre 2001',200,800);            
	
}