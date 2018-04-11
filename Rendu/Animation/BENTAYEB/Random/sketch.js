const COLOR_CHANGE_INTERVAL = 400;
const DRYING_INTERVAL = 3000;

let Square = function(tag){
  this.dom = tag;
  this.flagged = false;
}
let squares = [];
// convert from html collection into array
const _squares = Array.prototype.slice.call(document.getElementsByClassName("box"));
_squares.forEach(function(square,idx){
  squares.push(new Square(square));
});

setInterval(colorChange, 400);

var timeout = new Array(16);

function colorChange() {
    var colors = ["red", "blue", "yellow", "green", "orange", "purple"];
    var specificColor = colors[Math.floor(Math.random()*colors.length)];
    var randomId = Math.ceil(Math.random() * 16);
    if(new Date().getTime() - (timeout[randomId-1] || 0) >= 3000) {
      timeout[randomId-1] = new Date().getTime();
      var square = document.getElementById("square"+randomId);
      square.style.backgroundColor = specificColor;
      square.addClass = "colored";
    }
}

function colorChange(item) {
    var colors = ["red", "blue", "yellow", "green", "orange", "purple"];
    var specificColor = colors[Math.floor(Math.random()*colors.length)];
    item.dom.style.backgroundColor = specificColor;
    item.flagged = true;
    setTimeout(function(){
      item.flagged = false;
    }, DRYING_INTERVAL);
}
