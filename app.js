var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//dice

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function (){
    // random number
   var dice = Math.floor(Math.random() * 6) + 1;
    //display the result using variable
    //make the dice visible
   
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    // change the src of image
    
    diceDOM.src = 'dice-' + dice + '.png';
    
});


//document.querySelector('#current-' + activePlayer).textContent= dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#current-0').textContent;
//console.log(x);