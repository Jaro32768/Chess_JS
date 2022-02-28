import {getLegalMovesB} from './Bishop.js';     // imports Bishop movement
import {getLegalMovesR} from './Rook.js';       // imports Rook movement

export function getLegalMovesQ(position, board) {    
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false];

    let isLegalB = getLegalMovesB(position, board), isLegalR = getLegalMovesR(position, board);     // checks which moves are legal for rook and bishop and stores them in variables
    for (let i = 0; i < 64; i++) if (isLegalB[i] || isLegalR[i]) isLegal[i] = true;                 // loops through entire array and if move is legal for either rook or bishop, it is added to legal move
    return isLegal;                                                                                 // returns legal moves
}