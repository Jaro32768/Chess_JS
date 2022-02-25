import {getLegalMovesB} from './Bishop.js'
import {getLegalMovesR} from './Rook.js'

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

    let isLegalB = getLegalMovesB(position, board), isLegalR = getLegalMovesR(position, board);
    for (let i = 0; i < 64; i++) if (isLegalB[i] || isLegalR[i]) isLegal[i] = true;  
    return isLegal;
}