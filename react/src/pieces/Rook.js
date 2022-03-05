import { positionToRow, positionToColumn, positionIncludesWhite, positionIncludesBlack } from "../FormatTranslator";

export function getLegalMovesR(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);    

    // left from rook
    for (let i = 1; i <= positionToColumn(position); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position - i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position - i))) break;
        isLegal[position - i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position - i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position - i))) break;

    }
    // right from rook
    for (let i = 1; i < 8 - (positionToColumn(position)); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position + i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position + i))) break;
        isLegal[position + i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position + i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position + i))) break;
    }
    // top from rook
    for (let i = 1; i <= positionToRow(position); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position - 8 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position - 8 * i))) break;
            isLegal[position - 8 * i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position - 8 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position - 8 * i))) break;
    }
    // bottom from rook
    for (let i = 1; i < 8 - (positionToRow(position)); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position + 8 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position + 8 * i))) break;
            isLegal[position + 8 * i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position + 8 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position + 8 * i))) break;
    }
    return isLegal;         // return legal moves
}