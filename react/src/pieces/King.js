export function getLegalMovesK(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];

    if ((position % 8 > 0 && Math.floor(position / 8) > 0) &&
        ((board[position][0].includes('white') && !board[position - 9][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position - 9][0]?.includes('black'))))
        isLegal[position - 9] = true;
    if ((Math.floor(position / 8) > 0) &&
        ((board[position][0].includes('white') && !board[position - 8][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position - 8][0]?.includes('black')))) 
        isLegal[position - 8] = true;
    if ((position % 8 < 7 && Math.floor(position / 8) > 0) &&
        ((board[position][0].includes('white') && !board[position - 7][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position - 7][0]?.includes('black'))) && position / 8 > 0) 
        isLegal[position - 7] = true;
    if ((position % 8 < 7) &&
        ((board[position][0].includes('white') && !board[position + 1][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position + 1][0]?.includes('black')))) 
        isLegal[position + 1] = true;
    if ((position % 8 < 7 && Math.floor(position / 8) < 7) &&
        ((board[position][0].includes('white') && !board[position + 9][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position + 9][0]?.includes('black'))) && position / 8 < 7) 
        isLegal[position + 9] = true;
    if ((Math.floor(position / 8) < 7) &&
        ((board[position][0].includes('white') && !board[position + 8][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position + 8][0]?.includes('black')))) 
        isLegal[position + 8] = true;
    if ((position % 8 > 0 && Math.floor(position / 8) < 7) &&
        ((board[position][0].includes('white') && !board[position + 7][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position + 7][0]?.includes('black'))) && position / 8 < 7) 
        isLegal[position + 7] = true;
    if ((position % 8 > 0) &&
        ((board[position][0].includes('white') && !board[position - 1][0]?.includes('white')) ||
        (board[position][0].includes('black') && !board[position - 1][0]?.includes('black')))) 
        isLegal[position - 1] = true;

    return isLegal;
}

function longCastle() {

}

function shortCastle() {

}