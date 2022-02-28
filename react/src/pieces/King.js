export function getLegalMovesK(position, board, kingMoved, aRookMoved, hRookMoved) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];

    if ((position % 8 > 0 && Math.floor(position / 8) > 0) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 9][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 9][0]?.includes('black'))))                      // you can not capture own piece
        isLegal[position - 9] = true;       // x : - 1 , y - 1 : 
    if ((Math.floor(position / 8) > 0) &&                           // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 8][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 8][0]?.includes('black'))))                      // you can not capture own piece
        isLegal[position - 8] = true;       // x : 0 , y : - 1
    if ((position % 8 < 7 && Math.floor(position / 8) > 0) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 7][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 7][0]?.includes('black'))) && position / 8 > 0)  // you can not capture own piece
        isLegal[position - 7] = true;       // x : - 1 , y : + 1
    if ((position % 8 < 7) &&                                       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 1][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 1][0]?.includes('black'))))                      // you can not capture own piece
        isLegal[position + 1] = true;       // x : + 1 , y : 0
    if ((position % 8 < 7 && Math.floor(position / 8) < 7) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 9][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 9][0]?.includes('black'))) && position / 8 < 7)  // you can not capture own piece
        isLegal[position + 9] = true;       // x : + 1 , y : + 1
    if ((Math.floor(position / 8) < 7) &&                           // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 8][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 8][0]?.includes('black'))))                      // you can not capture own piece
        isLegal[position + 8] = true;       // x : 0 , y : + 1
    if ((position % 8 > 0 && Math.floor(position / 8) < 7) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 7][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 7][0]?.includes('black'))) && position / 8 < 7)  // you can not capture own piece
        isLegal[position + 7] = true;       // x : - 1 , y : + 1
    if ((position % 8 > 0) &&                                       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 1][0]?.includes('white')) ||                    // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 1][0]?.includes('black'))))                      // you can not capture own piece
        isLegal[position - 1] = true;       // x : - 1 , y : 0
    if (kingMoved || (aRookMoved && hRookMoved))            // if both rooks or kings moved
        return isLegal;                                     // returns legal moves
    if (!(kingMoved || aRookMoved) && board[position - 1][0] === null && board[position - 2][0] === null && board[position - 3][0] === null && board[position - 4][0]?.includes('rook'))
        isLegal[position - 2] = true;                       // if it is possible to castle queenside
    if (!(kingMoved || hRookMoved) && board[position + 1][0] === null && board[position + 2][0] === null && board[position + 3][0]?.includes('rook'))
        isLegal[position + 2] = true;                       // if it is possible to castle kingside
    return isLegal;                                         // returns legal moves
}