var squares = [];
for(var i=0;i<=16;i++)
  squares[i] = i;
var colors = ["red", "blue", "yellow", "green", "orange", "purple"];
setInterval(colorChange, 400);


function colorChange() {
var specificColor = colors[Math.floor(Math.random()*colors.length)];
var randomId = Math.ceil(Math.random() * (squares.length-1));
var sq = squares[randomId];
var square = document.getElementById("square"+sq);
square.style.backgroundColor = specificColor;
square.addClass = "colored";
squares.splice(randomId,1);
setTimeout(function(){squares.push(sq);}, 3000);
}

setInterval(colorChange, 400);

if (square.className = "colored") {
    square.setTimeout(setColor(), 3000);
}

function colorChange() {
    var colors = ["red", "blue", "yellow", "green", "orange", "purple"];
    var specificColor = colors[Math.floor(Math.random()*colors.length)];
    var randomId = Math.ceil(Math.random() * 17);
    var square = document.getElementById("square"+randomId);
    square.style.backgroundColor = specificColor;
    square.addClass = "colored";
