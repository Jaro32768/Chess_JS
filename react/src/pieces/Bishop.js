export function getLegalMovesB(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];
    
    for (let i = 1; i < Math.min(8 - (position % 8), 8 - (position / 8)); i++) {
        if ((board[position][0] === 'white-bishop' && board[position + i + 8 * i][0]?.includes('white')) ||
            (board[position][0] === 'black-bishop' && board[position + i + 8 * i][0]?.includes('black'))) break;
        isLegal[position + i + 8 * i] = true;
        if ((board[position][0] === 'white-bishop' && board[position + i + 8 * i][0]?.includes('black')) ||
            (board[position][0] === 'black-bishop' && board[position + i + 8 * i][0]?.includes('white'))) break;
    }
    for (let i = 1; i < Math.min(8 - (position % 8), 1 + (position / 8)); i++) {
        if ((board[position][0] === 'white-bishop' && board[position + i - 8 * i][0]?.includes('white')) ||
            (board[position][0] === 'black-bishop' && board[position + i - 8 * i][0]?.includes('black'))) break;
            isLegal[position + i - 8 * i] = true;
        if ((board[position][0] === 'white-bishop' && board[position + i - 8 * i][0]?.includes('black')) ||
            (board[position][0] === 'black-bishop' && board[position + i - 8 * i][0]?.includes('white'))) break;
    }    
    for (let i = 1; i < Math.min(1 + (position % 8), 1 + (position / 8)); i++) {
        if ((board[position][0] === 'white-bishop' && board[position - i - 8 * i][0]?.includes('white')) ||
            (board[position][0] === 'black-bishop' && board[position - i - 8 * i][0]?.includes('black'))) break;
            isLegal[position - i - 8 * i] = true;
        if ((board[position][0] === 'white-bishop' && board[position - i - 8 * i][0]?.includes('black')) ||
            (board[position][0] === 'black-bishop' && board[position - i - 8 * i][0]?.includes('white'))) break;
    }
    for (let i = 1; i < Math.min(1 + (position % 8), 8 - (position / 8)); i++) {
        if ((board[position][0] === 'white-bishop' && board[position - i + 8 * i][0]?.includes('white')) ||
            (board[position][0] === 'black-bishop' && board[position - i + 8 * i][0]?.includes('black'))) break;
            isLegal[position - i + 8 * i] = true;
        if ((board[position][0] === 'white-bishop' && board[position - i + 8 * i][0]?.includes('black')) ||
            (board[position][0] === 'black-bishop' && board[position - i + 8 * i][0]?.includes('white'))) break;
    }

    return isLegal
}

export function increasingDiagonal(position) {

}

export function decreasingDiagonal(position) {
    
}