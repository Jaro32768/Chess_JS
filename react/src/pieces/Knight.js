export function getLegalMovesN(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];

    if ((position % 8 > 1 && position / 8 > 1) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 10][0]?.includes('white')) ||       // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 10][0]?.includes('black'))))         // you can not capture own piece
        isLegal[position - 10] = true;    // x : - 2 , y : + 1 
    if ((position % 8 > 0 && position / 8 > 2) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 17][0]?.includes('white')) ||       // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 17][0]?.includes('black'))))         // you can not capture own piece
        isLegal[position - 17] = true;    // x : - 1 , y : + 2
    if ((position % 8 < 7 && position / 8 > 2) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 15][0]?.includes('white')) ||       // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 15][0]?.includes('black'))))         // you can not capture own piece
        isLegal[position - 15] = true;    // x : + 1 , y : + 2
    if ((position % 8 < 6 && position / 8 > 1) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position - 6][0]?.includes('white')) ||        // you can not capture own piece
        (board[position][0].includes('black') && !board[position - 6][0]?.includes('black'))))          // you can not capture own piece
        isLegal[position - 6] = true      // x : + 2 , y : + 1
    if ((position % 8 > 1 && position / 8 < 7) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 6][0]?.includes('white')) ||        // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 6][0]?.includes('black'))))          // you can not capture own piece
        isLegal[position + 6] = true      // x : - 2 , y : - 1
    if ((position % 8 > 0 && position / 8 < 6) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 15][0]?.includes('white')) ||       // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 15][0]?.includes('black'))))         // you can not capture own piece
        isLegal[position + 15] = true;    // x : - 1 , y : - 2
    if ((position % 8 < 7 && position / 8 < 6) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 17][0]?.includes('white')) ||       // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 17][0]?.includes('black'))))         // you can not capture own piece
        isLegal[position + 17] = true;    // x : + 1 , y : - 2
    if ((position % 8 < 6 && position / 8 < 7) &&       // you have to stay inside board
        ((board[position][0].includes('white') && !board[position + 10][0]?.includes('white')) ||       // you can not capture own piece
        (board[position][0].includes('black') && !board[position + 10][0]?.includes('black'))))         // you can not capture own piece
        isLegal[position + 10] = true;    // x : + 2 , y : - 1
    return isLegal;             // returns legal moves
}