// random value generated
var y = Math.floor(Math.random * 10 + 1);
  var guess = 1;
function submit(){
    x = document.getElementById("inputField").value;
}

var x = document.getElementById("inputField").value;
 
if (x == y){
        alert(playername+"won in"+guess+"tries");
        guess = 1;
}
else if (x > y){
guess++;
alert("smaller number")
}
else{
    guess++;
    alert("bigger number")
}
function playAgain(){
    y = Math.floor(Math.random * 10 + 1);
}


// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
