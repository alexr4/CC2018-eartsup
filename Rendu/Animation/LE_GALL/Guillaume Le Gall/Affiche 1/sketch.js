
function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//Fond

  background(175,27,36);
	background(237,23,34,33);

//Drapeau
	
	
	fill(98,39,7);
	
	rect(40,0,71,850);
	
	fill(33,33,33);
	
	rect(500,70,150,350);
	rect(110,25,430,350);
		

	
	
	
	
//Texte

	textSize(80);                   //taille du texte 
	fill(255,255,255);
	text('Pirates',125,135);        //positionnement du texte 1
	text('des',125,198);            //positionnement du texte 2
	text('Caraïbes',125,270);            //positionnement du texte 3
	textSize(20);
	text('Johnny Depp  Orlando Bloom  Keira Knightley',125,350);
	textSize(30);
	text('La Malédiction du Black Pearl',125,315); 
	fill(33,33,33);
	text('13 Août 2003',200,800);            
	
}