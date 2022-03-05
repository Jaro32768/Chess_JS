function positionIncludes(board, position, includes) { return board[position][0]?.includes(includes); }
export function positionToRow(position) { return Math.floor(position / 8); }
export function positionToColumn(position) { return position % 8; }
export function rowAndColumnToPosition(row, column) { return 8 * row + column; }
function positionIncludesWhite(board, position) { return positionIncludes(board, position, 'white'); }
function positionIncludesBlack(board, position) { return positionIncludes(board, position, 'black'); }
function positionIncludesEnPassant(board, position) { return positionIncludes(board, position, 'en-passant-square'); }
export function positionIncludesWhiteOrEnPassant(board, position, position2) { return positionIncludesWhite(board, position) || (positionIncludesEnPassant(board, position) && positionToRow(position2) === 4) }
export function positionIncludesBlackOrEnPassant(board, position, position2) { return positionIncludesBlack(board, position) || (positionIncludesEnPassant(board, position) && positionToRow(position2) === 3) }
export function positionIncludesRook(board, position) { return positionIncludes(board, position, 'rook'); }
function positionIncludesWhiteAnd(board, position1, position2) { return positionIncludesWhite(board, position1) && positionIncludesWhite(board, position2) }
function positionIncludesBlackAnd(board, position1, position2) { return positionIncludesBlack(board, position1) && positionIncludesBlack(board, position2) }
export function positionIncludesBothAnd(board, position1, position2){ return  positionIncludesBlackAnd(board, position1, position2) || positionIncludesWhiteAnd(board, position1, position2) }
function positionIncludesBothAndWhiteFirst(board, position1, position2) { return  positionIncludesWhite(board, position1) && positionIncludesBlack(board, position2) }                                                                                         
function positionIncludesBothAndBlackFirst(board, position1, position2) { return  positionIncludesBlack(board, position1) && positionIncludesWhite(board, position2) }
export function positionIncludesBothAndBothFirst(board, position1, position2) { return positionIncludesBothAndWhiteFirst(board, position1, position2) || positionIncludesBothAndBlackFirst(board, position1, position2) }
function positionIncludesWhiteAndNot(board, position1, position2) { return positionIncludesWhite(board, position1) && !positionIncludesWhite(board, position2) }
function positionIncludesBlackAndNot(board, position1, position2) { return positionIncludesBlack(board, position1) && !positionIncludesBlack(board, position2) }
export function positionIncludesBothAndNot(board, position1, position2) { return  positionIncludesBlackAndNot(board, position1, position2) || positionIncludesWhiteAndNot(board, position1, position2) }