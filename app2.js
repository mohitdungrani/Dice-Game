var scores,roundScore,activePlayer,gameActive,preScore = 0;

init();

function init()
{
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gameActive = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';

    
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameActive)
    {
        var dice = Math.floor((Math.random()*6 + 1));
        if(dice == 6 && preScore == 6)
        {
            changePlayer();
        }
        else{
            preScore = dice;
            roundScore += dice;
            document.getElementById('current-'+ activePlayer).textContent = roundScore;
            var diceDOM = document.querySelector('.dice'); 
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';   
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameActive)
    {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 20)
        {
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner !';
            gameActive = false;
        }
        else{
           changePlayer();
        }

    }

});

document.querySelector('.btn-new').addEventListener('click',function(){
    init();

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('acitve');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';

});

function changePlayer(){
    
    preScore = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-'+ activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}