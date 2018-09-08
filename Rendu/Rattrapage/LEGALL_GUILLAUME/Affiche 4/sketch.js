
function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//Fond

  background(18,105,100);
	background(237,23,34,33);

//Pistolet
	
	fill(224,189,90);
	
	rect(160,480,71,20);
	rect(110,520,471,45);
	rect(140,500,471,90);

	fill(33,33,33),
	
	rect(150,590,471,80);
	rect(580,670,40,60);
	rect(470,670,40,120);
	rect(470,760,344,40);
	
//Texte

	textSize(100);                   //taille du texte 
	fill(255,255,255);
	text('JAMES',125,135);        //positionnement du texte 1
	text('BOND',125,230);
	textSize(120);
	text('007',300,470); 
	fill(224,189,90);           
	textSize(30);
	text('L\'Homme au Pistolet d\'or',125,280);
	textSize(30);
	//text('',125,315); 
	fill(224,189,90);
	text('20 Décembre 1974',200,800);            
	
}