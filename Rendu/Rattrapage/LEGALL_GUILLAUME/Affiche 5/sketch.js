
function setup(){
	createCanvas(600,850);
}

function draw() {
	frameRate(30);

//Fond

  background(138,210,244);
	background(237,23,34,33);

//Murs


	fill(97,97,97),
	rect(0,300,490,230);
	
	fill(31,104,25),
	rect(0,530,6780,450);
	
	fill(162,162,162),
	rect(0,270,200,260);
	rect(400,270,200,260);
	rect(200,300,90,230);
	rect(310,300,90,230);
	
//Texte

	textSize(50);                   //taille du texte 
	fill(255,255,255);
	text('LE LABYRINTHE',110,135);        //positionnement du texte 1s
	textSize(120); 
	fill(000000);           
	textSize(20);
	text('Dylan O\'Brien  Thomas Brodie-Sangster  Ki Hong Lee',70,180);
	textSize(30);
	fill(000000);
	text('15 OCTOBRE 2014',180,800);            
	
}