import { positionToRow, positionToColumn, positionIncludesWhite, positionIncludesBlack } from "../FormatTranslator";

export function getLegalMovesB(position, board) {
    // this array is showing if it is allowed to go there //
    let isLegal = new Array(64).fill(false);
    
    // bottom right from bishop
    for (let i = 1; i < Math.min(8 - (positionToColumn(position)), 8 - positionToRow(position)); i++) {
        if ((board[position][0].includes('white') && board[position + i + 8 * i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position + i + 8 * i][0]?.includes('black'))) break;
        isLegal[position + i + 8 * i] = true;
        if ((board[position][0].includes('white') && board[position + i + 8 * i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position + i + 8 * i][0]?.includes('white'))) break;
    }
    // top right from bishop
    for (let i = 1; i < Math.min(8 - (positionToColumn(position)), 1 + positionToRow(position)); i++) {
        if ((board[position][0].includes('white') && board[position + i - 8 * i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position + i - 8 * i][0]?.includes('black'))) break;
            isLegal[position + i - 8 * i] = true;
        if ((board[position][0].includes('white') && board[position + i - 8 * i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position + i - 8 * i][0]?.includes('white'))) break;
    }  
    // top left from bishop
    for (let i = 1; i < Math.min(1 + (positionToColumn(position)), 1 + positionToRow(position)); i++) {
        if ((board[position][0].includes('white') && board[position - i - 8 * i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position - i - 8 * i][0]?.includes('black'))) break;
            isLegal[position - i - 8 * i] = true;
        if ((board[position][0].includes('white') && board[position - i - 8 * i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position - i - 8 * i][0]?.includes('white'))) break;
    }
    // bottom left from bishop 
    for (let i = 1; i < Math.min(1 + (positionToColumn(position)), 8 - positionToRow(position)); i++) {
        if ((board[position][0].includes('white') && board[position - i + 8 * i][0]?.includes('white')) ||
            (board[position][0].includes('black') && board[position - i + 8 * i][0]?.includes('black'))) break;
            isLegal[position - i + 8 * i] = true;
        if ((board[position][0].includes('white') && board[position - i + 8 * i][0]?.includes('black')) ||
            (board[position][0].includes('black') && board[position - i + 8 * i][0]?.includes('white'))) break;
    }
    return isLegal          // return legal moves
}