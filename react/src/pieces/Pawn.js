import { positionToRow, positionToColumn, positionIncludesWhiteOrEnPassant, positionIncludesBlackOrEnPassant } from "../Functions.js";

export function getLegalMovesP(position, board, enPsassantSquare) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);

    if (board[position][0] === 'white-pawn') {
        if (board[position - 8][0] === null) isLegal[position - 8] = true;          // if possible to push, add it to legal moves
        if (positionToRow(position) === 6 && board[position - 16][0] === null && board[position - 8][0] === null) isLegal[position - 16] = true;       // if possible to push 2 squares, add it to legal moves
        // if en passant is possible, add it to legal moves //
        if (positionToColumn(position) !== 7 && board[position - 7][0] !== null && (positionIncludesBlackOrEnPassant(board, position - 7, position))) isLegal[position - 7] = true;
        if (positionToColumn(position) !== 0 && board[position - 9][0] !== null && (positionIncludesBlackOrEnPassant(board, position - 9, position))) isLegal[position - 9] = true;
    } else {                                                                          // if possible to push, add it to legal moves
        if (board[position + 8][0] === null) isLegal[position + 8] = true;
        if (positionToRow(position) === 1 && board[position + 16][0] === null && board[position + 8][0] === null) isLegal[position + 16] = true;       // if possible to push 2 squares, add it to legal moves
        // if en passant is possible, add it to legal moves //
        if (positionToColumn(position) !== 0 && board[position + 7][0] !== null && (positionIncludesWhiteOrEnPassant(board, position + 7, position))) isLegal[position + 7] = true;
        if (positionToColumn(position) !== 7 && board[position + 9][0] !== null && (positionIncludesWhiteOrEnPassant(board, position + 9, position))) isLegal[position + 9] = true;
    }

    return isLegal;             // return legal moves
}