
/**
 * In this file reside all the functions of the events.
 */

import { Players } from "./dom-function.js";

/**
 * function that allows the players to play each turn
 */


export const playerTurn = () => {

    let playerChoice;
    if (!Players.hasPlayed) {
        playerChoice = (`${Players.playerOneChoice}`); 
        
        Players.hasPlayed = true;
    }
    else {
        playerChoice = (`${Players.playerTwoChoice}`);

        Players.hasPlayed = false;
    }

    return playerChoice;
}


/**
 * function that stores the player's value
 */

const gameBoardValues = [];
gameBoardValues.length = 9;
export const storePlayerValue = function(e) {
    let nodeList = document.querySelectorAll('.game-board-section > div');
    let array = Array.from(nodeList);
    let index = array.indexOf(e.target);

    playerTurn(); // A little cheat to call the function twice and get the desired value
    let mark = playerTurn();
    mark === 'X' ? gameBoardValues[index] = 'O' : gameBoardValues[index] = 'X';  
}

/**
 * function that stores the player's value
 */

export const checkWinner = function() {

    const playerOneCase1 = (gameBoardValues[0] === 'O') && (gameBoardValues[1] === 'O') && (gameBoardValues[2] === 'O');
    const playerOneCase2 = (gameBoardValues[3] === 'O') && (gameBoardValues[4] === 'O') && (gameBoardValues[5] === 'O');
    const playerOneCase3 = (gameBoardValues[6] === 'O') && (gameBoardValues[7] === 'O') && (gameBoardValues[8] === 'O');
    const playerOneCase4 = (gameBoardValues[0] === 'O') && (gameBoardValues[3] === 'O') && (gameBoardValues[6] === 'O');
    const playerOneCase5 = (gameBoardValues[1] === 'O') && (gameBoardValues[4] === 'O') && (gameBoardValues[7] === 'O');
    const playerOneCase6 = (gameBoardValues[2] === 'O') && (gameBoardValues[5] === 'O') && (gameBoardValues[8] === 'O');
    const playerOneCase7 = (gameBoardValues[0] === 'O') && (gameBoardValues[4] === 'O') && (gameBoardValues[8] === 'O');
    const playerOneCase8 = (gameBoardValues[2] === 'O') && (gameBoardValues[4] === 'O') && (gameBoardValues[6] === 'O');


    const playerTwoCase1 = (gameBoardValues[0] === 'X') && (gameBoardValues[1] === 'X') && (gameBoardValues[2] === 'X');
    const playerTwoCase2 = (gameBoardValues[3] === 'X') && (gameBoardValues[4] === 'X') && (gameBoardValues[5] === 'X');
    const playerTwoCase3 = (gameBoardValues[6] === 'X') && (gameBoardValues[7] === 'X') && (gameBoardValues[8] === 'X');
    const playerTwoCase4 = (gameBoardValues[0] === 'X') && (gameBoardValues[3] === 'X') && (gameBoardValues[6] === 'X');
    const playerTwoCase5 = (gameBoardValues[1] === 'X') && (gameBoardValues[4] === 'X') && (gameBoardValues[7] === 'X');
    const playerTwoCase6 = (gameBoardValues[2] === 'X') && (gameBoardValues[5] === 'X') && (gameBoardValues[8] === 'X');
    const playerTwoCase7 = (gameBoardValues[0] === 'X') && (gameBoardValues[4] === 'X') && (gameBoardValues[8] === 'X');
    const playerTwoCase8 = (gameBoardValues[2] === 'X') && (gameBoardValues[4] === 'X') && (gameBoardValues[6] === 'X');

    if (playerOneCase1 || playerOneCase2 || playerOneCase3 || playerOneCase4 || playerOneCase5 || playerOneCase6 || playerOneCase7 || playerOneCase8) {
        return `${Players.playerOneName}`;
    } 
    else if (playerTwoCase1 || playerTwoCase2 || playerTwoCase3 || playerTwoCase4 || playerTwoCase5  || playerTwoCase6 || playerTwoCase7 || playerTwoCase8 ) {
        return `${Players.playerTwoName}`;
    }

    let isEmpty = false;
    
    for(let i = 0; i < gameBoardValues.length; i++) {
        if (gameBoardValues[i] === undefined) {
            
            isEmpty = true;
        }
        
    }
    
    if (!isEmpty) return ('Tie');

}

/**
 * function that reset all the values
 */

export const resetAllGameBoardValues = function() {
    gameBoardValues.length = 0;
    gameBoardValues.length = 9;
}