import { positionToRow, positionToColumn, positionIncludesBothAndNot } from "../Functions.js";

export function getLegalMovesN(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);

    if (positionToColumn(position) > 1 && positionToRow(position) > 0 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position - 10))         // you can not capture own piece
        isLegal[position - 10] = true;    // x : - 2 , y : + 1 
    if (positionToColumn(position) > 0 && positionToRow(position) > 1 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position - 17))         // you can not capture own piece
        isLegal[position - 17] = true;    // x : - 1 , y : + 2
    if (positionToColumn(position) < 7 && positionToRow(position) > 1 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position - 15))         // you can not capture own piece
        isLegal[position - 15] = true;    // x : + 1 , y : + 2
    if (positionToColumn(position) < 6 && positionToRow(position) > 0 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position - 6))          // you can not capture own piece
        isLegal[position - 6] = true;      // x : + 2 , y : + 1
    if (positionToColumn(position) > 1 && positionToRow(position) < 7 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position + 6))          // you can not capture own piece
        isLegal[position + 6] = true;      // x : - 2 , y : - 1
    if (positionToColumn(position) > 0 && positionToRow(position) < 6 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position + 15))         // you can not capture own piece
        isLegal[position + 15] = true;    // x : - 1 , y : - 2
    if (positionToColumn(position) < 7 && positionToRow(position) < 6 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position + 17))         // you can not capture own piece
        isLegal[position + 17] = true;    // x : + 1 , y : - 2
    if (positionToColumn(position) < 6 && positionToRow(position) < 7 &&    // you have to stay inside board
        positionIncludesBothAndNot(board, position, position + 10))         // you can not capture own piece
        isLegal[position + 10] = true;    // x : + 2 , y : - 1
    return isLegal;             // returns legal moves
}