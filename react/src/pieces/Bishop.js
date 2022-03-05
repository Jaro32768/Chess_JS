import { positionToRow, positionToColumn, positionIncludesBothAnd, positionIncludesBothAndBothFirst } from "../Functions.js";

export function getLegalMovesB(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);
    
    // bottom right from bishop
    for (let i = 1; i < Math.min(8 - (positionToColumn(position)), 8 - positionToRow(position)); i++) {
        if (positionIncludesBothAnd(board, position, position + 9 * i) ||  positionIncludesBothAndBothFirst(board, position, position + 9 * (i - 1))) break;
                isLegal[position + 9 * i] = true; }
    // top right from bishop
    for (let i = 1; i < Math.min(8 - (positionToColumn(position)), 1 + positionToRow(position)); i++) {
        if (positionIncludesBothAnd(board, position, position - 7 * i) || positionIncludesBothAndBothFirst(board, position, position - 7 * (i - 1))) break;
                isLegal[position - 7 * i] = true; }  
    // top left from bishop
    for (let i = 1; i < Math.min(1 + (positionToColumn(position)), 1 + positionToRow(position)); i++) {
        if (positionIncludesBothAnd(board, position, position - 9 * i) || positionIncludesBothAndBothFirst(board, position, position - 9 * (i - 1))) break;
                isLegal[position - 9 * i] = true; }
    // bottom left from bishop 
    for (let i = 1; i < Math.min(1 + (positionToColumn(position)), 8 - positionToRow(position)); i++) {
        if (positionIncludesBothAnd(board, position, position + 7 * i) || positionIncludesBothAndBothFirst(board, position, position + 7 * (i - 1))) break;
                isLegal[position + 7 * i] = true; }
    return isLegal          // return legal moves
}