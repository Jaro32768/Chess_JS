import { positionToRow, positionToColumn, positionIncludesBothAnd, positionIncludesBothAndBothFirst } from "../Functions.js";

export function getLegalMovesR(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);    

    // left from rook
    for (let i = 1; i <= positionToColumn(position); i++) {
        if (positionIncludesBothAnd(board, position, position - i) ||
            positionIncludesBothAndBothFirst(board, position, position - (i - 1))) break;
                isLegal[position - i] = true; }
    // right from rook
    for (let i = 1; i < 8 - (positionToColumn(position)); i++) {
        if (positionIncludesBothAnd(board, position, position + i) ||
            positionIncludesBothAndBothFirst(board, position, position + (i - 1))) break;
                isLegal[position + i] = true; }
    // top from rook
    for (let i = 1; i <= positionToRow(position); i++) {
        if (positionIncludesBothAnd(board, position, position - 8 * i) ||
            positionIncludesBothAndBothFirst(board, position, position - 8 * (i - 1))) break;
                isLegal[position - 8 * i] = true; }
    // bottom from rook
    for (let i = 1; i < 8 - (positionToRow(position)); i++) {
        if (positionIncludesBothAnd(board, position, position + 8 * i) ||
            positionIncludesBothAndBothFirst(board, position, position + 8 * (i - 1))) break;
                isLegal[position + 8 * i] = true; }
    return isLegal;         // return legal moves
}