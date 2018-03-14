var numberToGuess ;
var numberOFrounfs = 1;
var start = false;

function starGame (){
  numberToGuess = Math.round(Math.random() * 100.0);
  numberOfRounds = 1;
  start = true;
}
function guess(values){
  if(start == true){
    if(numberOfRounds <= 10){
      checkValue(value);
      numberOfRounds ++;
    }else{
      console.log("you have past the 10 rounds.\nGame Over");
  }else{
    console.log("the game hasn't start yet or is over");
  }
}
function checkvalue(value){
  if(value === numberOfGuess){

  console.log("Congratulation, It was : "+numberToGuess);
  start = false;
}else{
  if(value > numberToGuess)
  console.log("sorry your numver is greater");
}else{
  console.log("sorry your number is lesser");
}

}
