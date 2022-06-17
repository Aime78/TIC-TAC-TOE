

/**
 * Start game popup control
 */
import { displayGameboard, displayPlayers, gameOverDisplay, Players, restartGameMenu, startGameMenu, updateGameBoardDisplay } from './dom-function.js';
import { checkWinner, storePlayerValue } from './game-control.js';



(function() {

    // Start the game
    const startBtn = document.querySelector('.start-btn');
    const theGameBoard = document.querySelectorAll('.game-board-section > div');
    startBtn.addEventListener('click', (e) => {
        startGameMenu(e);
        displayPlayers();
    });

    // Display the gameboard
    startBtn.addEventListener('click', displayGameboard);
    startBtn.addEventListener('click', updateGameBoardDisplay);

    // Display the winner
    theGameBoard.forEach(element => element.addEventListener('click', (e) => {
        storePlayerValue(e);
        if(!checkWinner()) return;
        
        if (checkWinner() === `${Players.playerOneName}` || checkWinner() === `${Players.playerTwoName}`) {
            
            gameOverDisplay(checkWinner());

        } else if (checkWinner() === 'Tie') {
            gameOverDisplay(checkWinner());
        }
        
    }));

    // Restart the game
    restartGameMenu();
})();