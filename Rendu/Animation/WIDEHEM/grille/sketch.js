var squares = [];
for (var i = 0; i <= 16; i++)
  squares[i] = i;

var colors = ["red", "blue", "yellow", "green", "orange", "purple"];

setInterval(colorChange, 250);

function colorChange() {
    var specificColor = colors[Math.floor(Math.random()*colors.length)];
    var randomId = Math.floor(Math.random() * 17);
    var sq = squares[randomId];
    var square = document.getElementById("square"+sq);
    square.style.backgroundColor = specificColor;
    squares.splice(randomId, 1);
    setTimeout(function(){squares.push(sq);}, 3000)

}
