function setup() {
	createCanvas(1600, 1000);
}

var randomInc = 1;
var rInc = 0.0;
var gInc = 0.5;
var bInc = 1.0;

function draw() {

  background(150,150,150,10);

		var randomFr = noise(randomInc)*30;
		randomInc += 0.05;
		console.log(randomFr);

frameRate(randomFr);
		var x = random(-100,width-300);
		var y = random(-100,height);
		var largeur = random(50,500);
		var randomI = random(1,5);
		var randomLargeur = random(0,3)
		var randomJ = random(0,10);

	for (var i=0; i<randomI; i++) {

		for (var j=0; j<randomJ; j++) {

			var newX = x + j * (largeur + largeur*randomLargeur);
			var newY = y + i * (largeur + largeur*randomLargeur);

				var r = noise(rInc) * 255;
			  rInc += 0.01;
				var g = noise(gInc) * 255;
			  gInc += 0.01;
				var b = noise(bInc) * 255;
				bInc += 0.01;

		  fill(r,g,b);
			strokeWeight(largeur/100)
			rect(newX, newY, largeur, largeur);


		}
	}

}
