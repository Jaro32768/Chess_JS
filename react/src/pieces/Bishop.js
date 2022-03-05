import { positionToRow, positionToColumn, positionIncludesWhite, positionIncludesBlack } from "../FormatTranslator";

export function getLegalMovesB(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);
    
    // bottom right from bishop
    for (let i = 1; i < Math.min(8 - (positionToColumn(position)), 8 - positionToRow(position)); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position + 9 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position + 9 * i))) break;
        isLegal[position + 9 * i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position + 9 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position + 9 * i))) break;
    }
    // top right from bishop
    for (let i = 1; i < Math.min(8 - (positionToColumn(position)), 1 + positionToRow(position)); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position - 7 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position - 7 * i))) break;
            isLegal[position - 7 * i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position - 7 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position - 7 * i))) break;
    }  
    // top left from bishop
    for (let i = 1; i < Math.min(1 + (positionToColumn(position)), 1 + positionToRow(position)); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position - 9 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position - 9 * i))) break;
            isLegal[position - 9 * i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position - 9 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position - 9 * i))) break;
    }
    // bottom left from bishop 
    for (let i = 1; i < Math.min(1 + (positionToColumn(position)), 8 - positionToRow(position)); i++) {
        if ((positionIncludesWhite(board, position) && positionIncludesWhite(board, position + 7 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesBlack(board, position + 7 * i))) break;
            isLegal[position + 7 * i] = true;
        if ((positionIncludesWhite(board, position) && positionIncludesBlack(board, position + 7 * i)) ||
            (positionIncludesBlack(board, position) && positionIncludesWhite(board, position + 7 * i))) break;
    }
    return isLegal          // return legal moves
}