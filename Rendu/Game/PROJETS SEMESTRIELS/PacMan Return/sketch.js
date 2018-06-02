
	// All of our JavaScript code goes here...

	// 1 => <div class='wall'></div>
	// 2 => <div class='coin'></div>
	// 3 => <div class='ground'></div>
	// 4 => <div class='ghost'></div>
	// 5 => <div class='pacman'></div>
	// map = [ 1, 2, 3 ]
	// map = [ [1,2,3], [1,2,3], [1,2,3] ];

	pacman =
	{
		x: 9,
		y: 9
	}
	ghost1 =
	{
		x: 2,
		y: 2
	}
	ghost2 =
	{
		x: 17,
		y: 2
	}
	ghost3 =
	{
		x: 2,
		y: 12
	}
	ghost4 =
	{
		x: 17,
		y: 12
	}

	map =
	[
		[3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
		[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1],
		[1,3,4,3,3,3,3,1,1,3,3,1,1,3,3,3,3,7,3,1],
		[1,3,3,3,3,3,3,1,3,3,3,3,1,3,3,3,3,3,3,1],
		[1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1],
		[3,3,3,1,1,3,3,3,1,1,1,1,3,3,3,1,1,3,3,3],
		[1,1,1,1,3,3,3,3,1,3,3,1,3,3,3,3,1,1,1,1],
		[1,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,1],
		[1,1,1,1,3,3,1,3,3,3,3,3,3,1,3,3,1,1,1,1],
		[3,3,3,1,3,3,1,1,3,5,3,3,1,1,3,3,1,3,3,3],
		[1,1,1,1,3,3,1,3,3,3,3,3,3,1,3,3,1,1,1,1],
		[1,3,3,3,3,3,1,3,3,1,1,3,3,1,3,3,3,3,3,1],
		[1,3,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,9,3,1],
		[1,1,3,3,1,1,1,1,3,3,3,3,1,1,1,1,3,3,1,1],
		[3,1,1,1,1,3,3,1,1,1,1,1,1,3,3,1,1,1,1,3],

	]

	var el = document.getElementById('world');

  var walk = 1;
  var score = 0;

  function lose()
  {
    map =
    [
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],

    ]
  }

	function drawWorld()

	{
		el.innerHTML = '';
		for(var y = 0; y < map.length ; y++)
		{
			for(var x = 0; x < map[y].length ; x++)
			{
				if (map[y][x] == 1)
				{
					el.innerHTML += "<div class='wall'></div>";
				}
				else if (map[y][x] == 2)
				{
					el.innerHTML += "<div class='coin'></div>";
				}
				else if (map[y][x] == 3)
				{
					el.innerHTML += "<div class='ground'></div>";
				}
				else if (map[y][x] == 4)
				{
					el.innerHTML += "<div class='ghost1'></div>";
				}
				else if (map[y][x] == 5)
				{
					el.innerHTML += "<div class='pacman'></div>";
				}
        else if (map[y][x] == 0)
        {
          el.innerHTML += "<div class='void'></div>";
        }
				else if (map[y][x] == 6)
        {
          el.innerHTML += "<div class='tp'></div>";
        }
				else if (map[y][x] == 7)
        {
          el.innerHTML += "<div class='ghost2'></div>";
        }
				else if (map[y][x] == 8)
        {
          el.innerHTML += "<div class='ghost3'></div>";
        }
				else if (map[y][x] == 9)
        {
          el.innerHTML += "<div class='ghost4'></div>";
        }
			}
			el.innerHTML += "<br>";
			document.querySelector('.results').innerHTML = 'Score : ' + score;
		}
	}

	drawWorld();

	document.onkeydown = function(event)
	{
    if ((pacman.x == ghost1.x && pacman.y == ghost1.y) || (pacman.x == ghost2.x && pacman.y == ghost2.y) || (pacman.x == ghost3.x && pacman.y == ghost3.y) || (pacman.x == ghost4.x && pacman.y == ghost4.y))
    {
    lose();
    }
		if (event.keyCode == 37)
		{ // PACMAN MOVE LEFT
			if ((map[pacman.y][pacman.x-1] != 1) && (map[pacman.y][pacman.x-1] != 6))
			{
				if (map[pacman.y][pacman.x-1] == 2)
				{
					map[pacman.y][pacman.x] = 3;
					pacman.x -= 1;
					map[pacman.y][pacman.x] = 5;
					ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
					drawWorld();
					score += 1;
				} else {
				  map[pacman.y][pacman.x] = 3;
				  pacman.x -= 1;
				  map[pacman.y][pacman.x] = 5;
			 	  ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
				  drawWorld();
			  }
			}
			if ( map[pacman.y][pacman.x-1] == 6)
			{
				map[pacman.y][pacman.x] = 3;
				pacman.x += 15;
				map[pacman.y][pacman.x] = 5;
				ghostMove();
				ghost2Move();
				ghost3Move();
				ghost4Move();
				drawWorld();
			}
		}
		else if (event.keyCode == 38)
		{ // PACMAN MOVE UP
			if ((map[pacman.y-1][pacman.x] != 1) && (map[pacman.y-1][pacman.x] != 4))
			{
				if (map[pacman.y-1][pacman.x] == 2)
				 {
					map[pacman.y][pacman.x] = 3;
					pacman.y -= 1;
					map[pacman.y][pacman.x] = 5;
					ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
					drawWorld();
					score += 1;
					console.log(score);
				}else{
				  map[pacman.y][pacman.x] = 3;
				  pacman.y -= 1;
				  map[pacman.y][pacman.x] = 5;
				  ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
				  drawWorld();
				}
			}
		}
		else if (event.keyCode == 39)
		{ // PACMAN MOVE RIGHT
			if ((map[pacman.y][pacman.x+1] != 1) && (map[pacman.y][pacman.x+1] != 4) && (map[pacman.y][pacman.x+1] != 6))
			{
				if (map[pacman.y][pacman.x+1] == 2)
				{
					map[pacman.y][pacman.x] = 3;
				  pacman.x += 1;
				  map[pacman.y][pacman.x] = 5;
				  ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
				  drawWorld();
					score +=1;
					console.log(score);
				}else{
				  map[pacman.y][pacman.x] = 3;
				  pacman.x += 1;
				  map[pacman.y][pacman.x] = 5;
				  ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
				  drawWorld();
				}
			}
			if ( map[pacman.y][pacman.x+1] == 6)
			{
				map[pacman.y][pacman.x] = 3;
				pacman.x -= 15;
				map[pacman.y][pacman.x] = 5;
				ghostMove();
				ghost2Move();
				ghost3Move();
				ghost4Move();
				drawWorld();
			}
		}
		else if (event.keyCode == 40)
		{ // PACMAN MOVE DOWN
			if ((map[pacman.y+1][pacman.x] != 1) && (map[pacman.y+1][pacman.x] != 4))
			{
				if (map[pacman.y+1][pacman.x] == 2)
				{
					map[pacman.y][pacman.x] = 3;
					pacman.y += 1;
					map[pacman.y][pacman.x] = 5;
					ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
					drawWorld();
					score += 1;
					console.log(score);
				}else{
			   	map[pacman.y][pacman.x] = 3;
				  pacman.y += 1;
				  map[pacman.y][pacman.x] = 5;
				  ghostMove();
					ghost2Move();
					ghost3Move();
					ghost4Move();
				  drawWorld();
			  }
			}
		}
	}

	function ghostMove()
	{
		if((map[ghost1.y][ghost1.x+1] != 1) && (map[ghost1.y][ghost1.x+1] != 6) && ([pacman.x]) > ([ghost1.x]))
		{
			map[ghost1.y][ghost1.x] = 2;
			ghost1.x += 1;
			map[ghost1.y][ghost1.x] = 4;
			//drawWorld();
			//RIGHT
		}
		else if((map[ghost1.y+1][ghost1.x] != 1) && (map[ghost1.y+1][ghost1.x] != 6) && ([pacman.y]) > ([ghost1.y]))
		{
			map[ghost1.y][ghost1.x] = 2;
			ghost1.y += 1;
			map[ghost1.y][ghost1.x] = 4;
			//drawWorld();
			//BOTTOM
		}
		else if((map[ghost1.y][ghost1.x-1] != 1) && (map[ghost1.y][ghost1.x-1] != 6) && ([pacman.x]) < ([ghost1.x]) )
		{
			map[ghost1.y][ghost1.x] = 2;
			ghost1.x -= 1;
			map[ghost1.y][ghost1.x] = 4;
			//drawWorld();
			//LEFT
		}
		else if((map[ghost1.y-1][ghost1.x] != 1) && (map[ghost1.y-1][ghost1.x] != 6) && ([pacman.y]) < ([ghost1.y]))
		{
			map[ghost1.y][ghost1.x] = 2;
			ghost1.y -= 1;
			map[ghost1.y][ghost1.x] = 4;
			//TOP
		}
	}

	function ghost2Move()
	{
		if((map[ghost2.y][ghost2.x+1] != 1) && (map[ghost2.y][ghost2.x+1] != 6) && ([pacman.x]) > ([ghost2.x]))
		{
			map[ghost2.y][ghost2.x] = 2;
			ghost2.x += 1;
			map[ghost2.y][ghost2.x] = 7;
			//drawWorld();
			//RIGHT
		}
		else if((map[ghost2.y+1][ghost2.x] != 1) && (map[ghost2.y+1][ghost2.x] != 6) && ([pacman.y]) > ([ghost2.y]))
		{
			map[ghost2.y][ghost2.x] = 2;
			ghost2.y += 1;
			map[ghost2.y][ghost2.x] = 7;
			//drawWorld();
			//BOTTOM
		}
		else if((map[ghost2.y][ghost2.x-1] != 1) && (map[ghost2.y][ghost2.x-1] != 6) && ([pacman.x]) < ([ghost2.x]) )
		{
			map[ghost2.y][ghost2.x] = 2;
			ghost2.x -= 1;
			map[ghost2.y][ghost2.x] = 7;
			//drawWorld();
			//LEFT
		}
		else if((map[ghost2.y-1][ghost2.x] != 1) && (map[ghost2.y-1][ghost2.x] != 6) && ([pacman.y]) < ([ghost2.y]))
		{
			map[ghost2.y][ghost2.x] = 2;
			ghost2.y -= 1;
			map[ghost2.y][ghost2.x] = 7;
			//TOP
		}
	}
	function ghost3Move()
	{
		if((map[ghost3.y][ghost3.x+1] != 1) && (map[ghost3.y][ghost3.x+1] != 6) && ([pacman.x]) > ([ghost3.x]))
		{
			map[ghost3.y][ghost3.x] = 2;
			ghost3.x += 1;
			map[ghost3.y][ghost3.x] = 8;
			//drawWorld();
			//RIGHT
		}
		else if((map[ghost3.y+1][ghost3.x] != 1) && (map[ghost3.y+1][ghost3.x] != 6) && ([pacman.y]) > ([ghost3.y]))
		{
			map[ghost3.y][ghost3.x] = 2;
			ghost3.y += 1;
			map[ghost3.y][ghost3.x] = 8;
			//drawWorld();
			//BOTTOM
		}
		else if((map[ghost3.y+1][ghost3.x] != 1) && (map[ghost2.y] < 5) && (map[ghost3.y+1][ghost3.x] != 6) && ([pacman.y]) > ([ghost3.y]))
		{
			map[ghost3.y][ghost3.x] = 2;
			ghost3.y += 1;
			map[ghost3.y][ghost3.x] = 8;
			//drawWorld();
			//BOTTOM
		}
		else if((map[ghost3.y-1][ghost3.x] != 1) && (map[ghost3.y-1][ghost3.x] != 6) && ([pacman.y]) < ([ghost3.y]))
		{
			map[ghost3.y][ghost3.x] = 2;
			ghost3.y -= 1;
			map[ghost3.y][ghost3.x] = 8;
			//TOP
		}
		else if((map[ghost3.y][ghost3.x-1] != 1) && (map[ghost3.y][ghost3.x-1] != 6) && ([pacman.x]) < ([ghost3.x]) )
		{
			map[ghost3.y][ghost3.x] = 2;
			ghost3.x -= 1;
			map[ghost3.y][ghost3.x] = 8;
			//drawWorld();
			//LEFT
		}
	}
	function ghost4Move()
	{
		if((map[ghost4.y][ghost4.x-1] != 1) && (map[ghost4.y][ghost4.x-1] != 6) && ([pacman.x]) < ([ghost4.x]) )
		{
			map[ghost4.y][ghost4.x] = 2;
			ghost4.x -= 1;
			map[ghost4.y][ghost4.x] = 9;
			//drawWorld();
			//LEFT
		}
		else if((map[ghost4.y-1][ghost4.x] != 1) && (map[ghost1.y] != 1) && (map[ghost4.y-1][ghost4.x] != 6) && ([pacman.y]) < ([ghost4.y]))
		{
			map[ghost4.y][ghost4.x] = 2;
			ghost4.y -= 1;
			map[ghost4.y][ghost4.x] = 9;
			//TOP
		}
		else if((map[ghost4.y][ghost4.x+1] != 1) && (map[ghost4.y][ghost4.x+1] != 6) && ([pacman.x]) > ([ghost4.x]))
		{
			map[ghost4.y][ghost4.x] = 2;
			ghost4.x += 1;
			map[ghost4.y][ghost4.x] = 9;
			//drawWorld();
			//RIGHT
		}
		else if((map[ghost4.y+1][ghost4.x] != 1) && (map[ghost4.y+1][ghost4.x] != 6) && ([pacman.y]) > ([ghost4.y]))
		{
			map[ghost4.y][ghost4.x] = 2;
			ghost4.y += 1;
			map[ghost4.y][ghost4.x] = 9;
			//drawWorld();
			//BOTTOM
		}
	}



	// End of JavaScript
