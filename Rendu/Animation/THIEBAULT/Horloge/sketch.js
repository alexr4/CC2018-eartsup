function setup(){
	createCanvas(340,340);
}

function draw() {



  background(148,169,194)

  push()
  translate(width/2,height/2)

    fill(255)
    ellipse(0,0,300,300)



  pop()



  angleMode(RADIANS)

    stroke(60)

    var nbPoints = 60;
    var origineX = width/2;
    var origineY = height/2;

    beginShape(POINTS)

    for(var i=0; i<nbPoints; i++){
      var angle = i * (TWO_PI / nbPoints);
      var rayon = 145;
      var rayon2 = 140;

      var x = cos(angle) * rayon + origineX;
      var y = sin(angle) * rayon + origineY;
      var x2 = cos(angle) * rayon2 + origineX;
      var y2 = sin(angle) * rayon2 + origineY;

      strokeWeight(3)
      line(x, y,x2,y2);
    }
    endShape(CLOSE);


    stroke(20)

    var nbPoints = 12;
    var origineX = width/2;
    var origineY = height/2;

    beginShape(POINTS)
    for(var i=0; i<nbPoints; i++){
    	var angle = i * (TWO_PI / nbPoints);
    	var rayon = 130;
      var rayon2 = 148;

    	var x = cos(angle) * rayon + origineX;
    	var y = sin(angle) * rayon + origineY;
      var x2 = cos(angle) * rayon2 + origineX;
      var y2 = sin(angle) * rayon2 + origineY;

      strokeWeight(6)
    	line(x,y,x2,y2);
    }
    endShape(CLOSE);


    angleMode(DEGREES)

  push()
  translate(width/2,height/2)

    noFill()
    stroke(0,0,0)
    strokeWeight(4)
      ellipse(0,0,300,300)
  pop()


var s = second()
var m = minute()
var h = hour()



push()
translate(3,3)
			push()
		  translate(width/2,height/2)
		    rotate(h * 30 + (m/10)*5 + s/100)
		    stroke(150)
		    strokeWeight(8)
		      line(0,0,0,-80)


		  pop()

		  push()
		  translate(width/2,height/2)
		  rotate(m * 6 + s/10)
		    stroke(150)
		    strokeWeight(4)
		      line(0,0,0,-120)

		  pop()

		  push()
		  translate(width/2,height/2)
		  rotate(s * 6)
		    stroke(150)
		    strokeWeight(1)
		      line(0,0,0,-120)

  		pop()
pop()


  push()
  translate(width/2,height/2)
    rotate(h * 30 + (m/10)*5 + s/100)
    stroke(0)
    strokeWeight(8)
      line(0,0,0,-80)


  pop()

  push()
  translate(width/2,height/2)
  rotate(m * 6 + s/10)
    stroke(50)
    strokeWeight(4)
      line(0,0,0,-120)

  pop()

  push()
  translate(width/2,height/2)
  rotate(s * 6)
    stroke(255,0,0)
    strokeWeight(1)
      line(0,0,0,-120)

	pop()


  push()
  translate(width/2,height/2)
    fill(0)
    noStroke()
      ellipse(0,0,10,10)
  pop()
}
