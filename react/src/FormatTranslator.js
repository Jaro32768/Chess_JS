export function positionToRow(position) { return Math.floor(position / 8); }                                                    // returns row of position
export function positionToColumn(position) { return position % 8; }                                                             // returns column of position
export function rowAndColumnToPosition(row, column) { return 8 * row + column; }                                                // return position based on row and column
export function positionIncludesWhite(board, position) { return positionIncludes(board, position, 'white'); }                   // returns if position includes white 
export function positionIncludesBlack(board, position) { return positionIncludes(board, position, 'black'); }                   // returns if position includes black
export function positionIncludesEnPassant(board, position) { return positionIncludes(board, position, 'en-passant-square'); }   // returns if position includes en passant square
export function positionIncludesRook(board, position) { return positionIncludes(board, position, 'rook'); }                     // returns if position includes rook

function positionIncludes(board, position, includes) { return board[position][0]?.includes(includes); }                         // returns if position includes ...