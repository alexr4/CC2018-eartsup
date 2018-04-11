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
}
