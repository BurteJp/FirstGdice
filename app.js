// Players turn variable 
var activePlayer = 1;


// toglogchiin cugluulsan onoog hadgalah var
var scores = [0, 0];
// Toglogchiin eeljindee cugluulj baigaa 
var roundScore = 0;



// Hayasan shoonii heden onootoi buusang hadgalana

var dice = Math.floor(Math.random()*6)+1;

// document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = dice;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log('Shoo '  +dice );

