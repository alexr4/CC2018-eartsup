
function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//Fond

  background(12,52,168);
	background(237,23,34,33);
	
//Décor

	//Baguette 

	fill(98,39,7);
	rect(60,40,20,600);
	rect(50,140,41,600);
	rect(45,340,51,300);
	rect(45,520,51,300);
	rect(40,500,61,300);
	
	fill(245,250,217);
	rect(40,510,61,30);
	rect(40,760,61,30);
	
	fill(35,35,35);
	rect(40,540,61,220);
	
	// Cicatrice
	
	fill(243,199,23); 
	
	rect(280,330,15,30);
	rect(270,360,31,30);
	
	rect(270,390,61,30);
	
	rect(300,420,31,30);
	rect(310,450,15,30);
	
	//Lunette
	
	fill(33,33,33); 
	
	rect(270,530,61,30);
	rect(255,480,15,120);
	rect(330,480,15,120);
	
	rect(330,480,120,15);
	rect(150,480,120,15);
	
	rect(330,600,120,15);
	rect(150,600,120,15);
	
	rect(150,480,15,120);
	rect(435,480,15,120);
	

	
//Texte

	textSize(80);                   //taille du texte 
	fill(255,255,255);
	text('Harry',125,135);        //positionnement du texte 1
	text('Potter',125,200);
	textSize(30)            //positionnement du texte 2
	text('À l\'école des sorciers',125,235);            //positionnement du texte 3
	textSize(20);
	text('Emma Watson  Daniel Radcliffe Rupert Grint',125,290);
	textSize(30);
	fill(255,255,255);
	text('5 Décembre 2001',200,800);            
	
}