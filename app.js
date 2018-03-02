var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//dice

dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent= dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#current-0').textContent;
console.log(x);
