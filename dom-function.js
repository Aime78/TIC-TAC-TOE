
/**
 * In this file reside all the functions of the events.
 */

 import { playerTurn, resetAllGameBoardValues } from './game-control.js'
/**
 * function of closing the start game popup menu
 */

 export const startGameMenu = function (e) {

    const startPopup = document.querySelector('.player-popup-menu-section');

    const playersInput = document.querySelectorAll('input');
    

        const playerOneName = playersInput[0].value;
        const playerTwoName = playersInput[1].value;
        
        if (!playerOneName || !playerTwoName) return;
        
        startPopup.style.display = 'none';
        e.preventDefault();
}

/**
 * function of displaying the gameboard
 */

export const displayGameboard = function () {

    const gameBoard = document.querySelectorAll('.game-board-section > div');

    gameBoard.forEach(element => element.style.display = 'block');
    
}

// Players Object with name and choice
export const Players = {
    playerOneName: '',
    playerOneChoice: 'O',
    playerTwoName: '',
    playerTwoChoice: 'X',
    hasPlayed: false,

}

/**
 * function of displaying the players names from the input
 */

export const displayPlayers = function () {

    const playersInput = document.querySelectorAll('input');
    Players.playerOneName = playersInput[0].value; // To be deleted if it works
    Players.playerTwoName = playersInput[1].value; // To be deleted if it works

    const playersDisplay = document.querySelectorAll('aside');
    playersDisplay[0].innerHTML = `${Players.playerOneName} ${Players.playerOneChoice}`;
    playersDisplay[1].innerHTML = `${Players.playerTwoName} ${Players.playerTwoChoice}`;


    playersDisplay.forEach((element) => element.style.display = 'block');
   
}

export const updateGameBoardDisplay =  function(e) {
    document.querySelectorAll('.game-board-section > div').forEach(element => element.addEventListener('click', () => {
        if(element.textContent) return;

        element.textContent = `${playerTurn()}`;

    }));
}

/**
 * function that display the gameover menu
 */

export const gameOverDisplay = function(gameWinner) {

    const gameOver = document.querySelector('.gameover-popup-menu-section');
    const title = document.querySelector('.gameover-popup-menu-section > h1');
    const winner = document.querySelector('.gameover-popup-menu-section > p');
    
    gameOver.style.display = 'block';
    if (gameWinner === 'Tie') {
        title.textContent = `Tie`;
        winner.textContent = `No winner of the game`;
    } else {
        title.textContent = `Congratulation`;
        winner.textContent = `The winner is ${gameWinner}`;
    }
    

}


/**
 * function of closing the restart game popup menu
 */

export const restartGameMenu = function() {

    const restartBtn = document.querySelector('.restart-btn');
    const restartPopup = document.querySelector('.gameover-popup-menu-section');

    restartBtn.addEventListener('click', () => {
        resetAllGameBoardValues();
        clearAllGameboardValues();
        restartPopup.style.display = 'none'
    });
}

/**
 * function of clearing all the values of the gameboard
 */

const clearAllGameboardValues = function() {
    const allValues = Array.from(document.querySelectorAll('.game-board-section > div'));
    allValues.forEach(element => element.textContent = '');
}

