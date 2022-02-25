export function getLegalMovesR(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];
    
    for (let i = 1; i <= position % 8; i++) {
        if ((board[position][0].includes('white') && board[position - i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position - i][0]?.includes('black'))) break;
        isLegal[position - i] = true;
        if ((board[position][0].includes('white') && board[position - i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position - i][0]?.includes('white'))) break;

    }
    for (let i = 1; i < 8 - (position % 8); i++) {
        if ((board[position][0].includes('white') && board[position + i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position + i][0]?.includes('black'))) break;
        isLegal[position + i] = true;
        if ((board[position][0].includes('white') && board[position + i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position + i][0]?.includes('white'))) break;
    }
    for (let i = 1; i <= Math.floor(position / 8); i++) {
        if ((board[position][0].includes('white') && board[position - 8 * i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position - 8 * i][0]?.includes('black'))) break;
            isLegal[position - 8 * i] = true;
        if ((board[position][0].includes('white') && board[position - 8 * i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position - 8 * i][0]?.includes('white'))) break;
    }
    for (let i = 1; i < 8 - (Math.floor(position / 8)); i++) {
        if ((board[position][0].includes('white') && board[position + 8 * i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position + 8 * i][0]?.includes('black'))) break;
            isLegal[position + 8 * i] = true;
        if ((board[position][0].includes('white') && board[position + 8 * i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position + 8 * i][0]?.includes('white'))) break;
    }

    return isLegal;
}