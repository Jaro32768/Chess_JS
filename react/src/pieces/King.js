import { positionToRow, positionToColumn, positionIncludesWhite, positionIncludesBlack, positionIncludesRook } from "../FormatTranslator";

export function getLegalMovesK(position, board, kingMoved, aRookMoved, hRookMoved) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);

    if ((positionToColumn(position) > 0 && positionToRow(position) > 0) &&       // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position - 9)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position - 9))))                                   // you can not capture own piece
        isLegal[position - 9] = true;       // x : - 1 , y - 1 : 
    if ((positionToRow(position) > 0) &&                           // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position - 8)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position - 8))))                                   // you can not capture own piece
        isLegal[position - 8] = true;       // x : 0 , y : - 1
    if ((positionToColumn(position) < 7 && positionToRow(position) > 0) &&       // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position - 7)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position - 7))) && positionToRow(position) > 0)    // you can not capture own piece
        isLegal[position - 7] = true;       // x : - 1 , y : + 1
    if ((positionToColumn(position) < 7) &&                                       // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position + 1)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position + 1))))                                   // you can not capture own piece
        isLegal[position + 1] = true;       // x : + 1 , y : 0
    if ((positionToColumn(position) < 7 && positionToRow(position) < 7) &&       // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position + 9)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position + 9))) && positionToRow(position) < 7)    // you can not capture own piece
        isLegal[position + 9] = true;       // x : + 1 , y : + 1
    if ((positionToRow(position) < 7) &&                           // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position + 8)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position + 8))))                                   // you can not capture own piece
        isLegal[position + 8] = true;       // x : 0 , y : + 1
    if ((positionToColumn(position) > 0 && positionToRow(position) < 7) &&       // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position + 7)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position + 7))) && positionToRow(position) < 7)    // you can not capture own piece
        isLegal[position + 7] = true;       // x : - 1 , y : + 1
    if ((positionToColumn(position) > 0) &&                                       // you have to stay inside board
        ((positionIncludesWhite(board, position) && !positionIncludesWhite(board, position - 1)) ||                                 // you can not capture own piece
        (positionIncludesBlack(board, position) && !positionIncludesBlack(board, position - 1))))                                   // you can not capture own piece
        isLegal[position - 1] = true;       // x : - 1 , y : 0
    if (kingMoved || (aRookMoved && hRookMoved))            // if both rooks or kings moved
        return isLegal;                                     // returns legal moves
    if (!(kingMoved || aRookMoved) && board[position - 1][0] === null && board[position - 2][0] === null && board[position - 3][0] === null && positionIncludesRook(board, position - 4))
        isLegal[position - 2] = true;                       // if it is possible to castle queenside
    if (!(kingMoved || hRookMoved) && board[position + 1][0] === null && board[position + 2][0] === null && positionIncludesRook(board, position + 3))
        isLegal[position + 2] = true;                       // if it is possible to castle kingside
    return isLegal;                                         // returns legal moves
}