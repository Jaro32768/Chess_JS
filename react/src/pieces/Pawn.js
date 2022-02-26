export function getLegalMovesP(position, board, enPsassantSquare) {
    // this array is showing if it is allowed to go there //
    let isLegal = [false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false,
                   false, false, false, false, false, false, false, false];

    if (board[position][0] === 'white-pawn') {
        if (board[position - 8][0] === null) isLegal[position - 8] = true;
        if (Math.floor(position / 8) === 6 && board[position - 16][0] === null && board[position - 8][0] === null) isLegal[position - 16] = true;
        if (position % 8 !== 7 && board[position - 7][0] !== null && (board[position - 7][0]?.includes('black') || (board[position - 7][0] === 'en-passant-square' && Math.floor(position / 8) === 3))) isLegal[position - 7] = true;
        if (position % 8 !== 0 && board[position - 9][0] !== null && (board[position - 9][0]?.includes('black') || (board[position - 9][0] === 'en-passant-square' && Math.floor(position / 8) === 3))) isLegal[position - 9] = true;
    }
    else {
        if (board[position + 8][0] === null) isLegal[position + 8] = true;
        if (Math.floor(position / 8) === 1 && board[position + 16][0] === null && board[position + 8][0] === null) isLegal[position + 16] = true;
        if (position % 8 !== 0 && board[position + 7][0] !== null && (board[position + 7][0]?.includes('white') || (board[position + 7][0] === 'en-passant-square' && Math.floor(position / 8) === 4))) isLegal[position + 7] = true;
        if (position % 8 !== 7 && board[position + 9][0] !== null && (board[position + 9][0]?.includes('white') || (board[position + 9][0] === 'en-passant-square' && Math.floor(position / 8) === 4))) isLegal[position + 9] = true;
    }

    return isLegal;
}