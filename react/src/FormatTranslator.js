export function positionToRow(position) {
    return Math.floor(position / 8);
}

export function positionToColumn(position) {
    return position % 8;
}

export function rowAndColumnToPosition(row, column) {
    return 8 * row + column;
}

export function positionIncludesWhite(board, position) {
    return board[position][0]?.includes('white');
}

export function positionIncludesBlack(board, position) {
    return board[position][0]?.includes('black');
}