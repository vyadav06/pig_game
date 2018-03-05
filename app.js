var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function (){
    // 1. random number
   var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. display the result using variable
    //make the dice visible
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    //3. change the src of image
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 4. Update the roundscore if it's not equal to 1
    // if it's equal to 1 set it to 0
    if(dice !== 1){
        roundScore += dice;
        // or roundScore = roundScore + dice;
        //display the result on the User Interface
        document.querySelector('#current-' + activePlayer).textContent= roundScore;
    } else {
        // if it's 1 change the player
        //Use ternary operator instaed of using else if again
        activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        //setting roundScore = 0 on the User interface
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //change the active class
        //Changing active class by using toggle
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
        
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        // hiding the dice when first player loses and second player turn comes
        document.querySelector('.dice').style.display = 'none';
    }
    
});


//document.querySelector('#current-' + activePlayer).textContent= dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#current-0').textContent;
//console.log(x);