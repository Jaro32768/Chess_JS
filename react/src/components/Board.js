import React, { useState } from 'react';
import Square from './Square.js';                                                                                               // imports Square component
import { getLegalMovesP } from '../pieces/Pawn.js';                                                                             // imports method that searches for legal moves for pawn
import { getLegalMovesR } from '../pieces/Rook.js';                                                                             // imports method that searches for legal moves for rook
import { getLegalMovesN } from '../pieces/Knight.js';                                                                           // imports method that searches for legal moves for knight
import { getLegalMovesB } from '../pieces/Bishop.js';                                                                           // imports method that searches for legal moves for bishop
import { getLegalMovesQ } from '../pieces/Queen.js';                                                                            // imports method that searches for legal moves for queen
import { getLegalMovesK } from '../pieces/King.js';                                                                             // imports method that searches for legal moves for king
import { rowAndColumnToPosition, pieceLetterToWord, pieceWordToLetter, positionToRow, positionToColumn} from '../Functions.js'  // imports converting methods

let highlightedSquare = null,                           // remembers which square should be highlighted
    whiteKingMoved = false, blackKingMoved = false,     // remembers if kings moved
    whiteARookMoved = false, blackARookMoved = false,   // remembers if a rooks moved
    whiteHRookMoved = false, blackHRookMoved = false,   // remembers if h rooks moved
    isWhitesMove = true,                                // remembers whose move it is
    startIndex, endIndex,                               // remembers start and end index for rendering squares
    halfmoveClock = 0,                                  // counting for 50 move == draw rule
    fullmoveCounter = 1;                                // remembers how many moves were played

const pieces = new Array(64).fill().map(() => []);      // creates array that stores which pieces are on a board and if any square should be highlighed
pieces.forEach(array => { array.push(null, false); });  // fills array with init data

export default function Board(props) {
    const [selectedRow, setSelectedRow] = useState(null);           // stores row of previously clicked square
    const [selectedColumn, setSelectedColumn] = useState(null);     // stores column of previously clicked square
    startIndex = props.isWhitesPOV ? 0 : 7;                         // sets start index based on which POV it should show
    endIndex = props.isWhitesPOV ? 8 : -1;                          // sets end index based on which POV it should show

    // inports FEN //
    const importFEN = (fen) => {
        fen = fen.substr(0, fen.indexOf(' '))                           // only for first segment
                               .replaceAll('8', '        ')             // replaces all '8's with 8 spaces
                               .replaceAll('7', '       ')              // replaces all '7's with 7 spaces
                               .replaceAll('6', '      ')               // replaces all '6's with 6 spaces
                               .replaceAll('5', '     ')                // replaces all '5's with 5 spaces
                               .replaceAll('4', '    ')                 // replaces all '4's with 4 spaces
                               .replaceAll('3', '   ')                  // replaces all '3's with 3 spaces
                               .replaceAll('2', '  ')                   // replaces all '2's with 2 spaces
                               .replaceAll('1', ' ')                    // replaces all '1's with 1 space
                               .replaceAll('/', '')                     // removes all '/'
            + fen.substr(fen.indexOf(' '), fen.length);                 // gives remaining segments back to FEN
        for (let i = 0; i < 64; i++) {                                  // for each square
            pieces[i][0] = pieceLetterToWord(fen[i]);                   // convert format from fen to pieces
        }
        isWhitesMove = fen.substr(65, 1) === 'w';                       // sets isWhitesMove from FEN
        if (!fen.substr(67, 1).includes('K')) whiteARookMoved = true;   // sets legality of white's short castle from FEN
        if (!fen.substr(67, 2).includes('Q')) whiteHRookMoved = true;   // sets legality of white's long castle from FEN
        if (!fen.substr(67, 3).includes('k')) blackARookMoved = true;   // sets legality of black's short castle from FEN
        if (!fen.substr(67, 4).includes('q')) blackHRookMoved = true;   // sets legality of black's long castle from FEN
        if (!fen.substr(68, 6).includes('-')) pieces[rowAndColumnToPosition(8 - fen.substr(fen.substr(68, 6).indexOf(' ') + 70, 1), fen.substr(fen.substr(68, 6).indexOf(' ') + 69, 1).charCodeAt(0) - 97)][0] = 'en-passant-square'; // sets en passant square from FEN
        halfmoveClock = parseInt(fen.substr(0, fen.lastIndexOf(' ')).substr(fen.substr(0, fen.lastIndexOf(' ')).lastIndexOf(' ') + 1, fen.substr(0, fen.lastIndexOf(' ')).length));                                                   // sets halfmoveClock from FEN
        fullmoveCounter = parseInt(fen.substr(fen.lastIndexOf(' '), fen.length));   // sets fullmoveCounter from FEN
    }

    // exports FEN //
    const exportFEN = () => {
        let fen = '';                                   // variable that stores FEN
        for (let i = 0; i < 64; i++) {                  // for each square
            if (pieces[i][0] === 'en-passant-square') fen += pieceWordToLetter(null) + fen.substr(i + 1);
            else fen += pieceWordToLetter(pieces[i][0]) + fen.substr(i + 1);        // convert format from pieces to fen
        }
        for (let i = 0; i < 63; i = i + 9) {
            fen = fen.substring(0, i + 8) + '/' + fen.substring(i + 8, fen.length); // adds slash after every 8 characters
        }
        fen = fen.replaceAll('        ', '8')           // replaces 8 spaces with '8'
                 .replaceAll('       ', '7')            // replaces 7 spaces with '7'
                 .replaceAll('      ', '6')             // replaces 6 spaces with '6'
                 .replaceAll('     ', '5')              // replaces 5 spaces with '5'
                 .replaceAll('    ', '4')               // replaces 4 spaces with '4'
                 .replaceAll('   ', '3')                // replaces 3 spaces with '3'
                 .replaceAll('  ', '2')                 // replaces 2 spaces with '2'
                 .replaceAll(' ', '1')                  // replaces 1 space with '1'
        fen += (isWhitesMove ? ' w' : ' b');            // if it is whites move, adds 'w' to FEN, if not, adds 'b' to FEN
        {
            let possibleCastles = '';                                       // stores possible castles
            if (!whiteKingMoved) {                                          // if white's king did not move
                if (!whiteARookMoved) possibleCastles += 'K';               // if white's a-rook did not move, adds this castle to variable
                if (!whiteHRookMoved) possibleCastles += 'Q';               // if white's h-rook did not move, adds this castle to variable
            }
            if (!blackKingMoved) {                                          // if blacks's king did not move
                if (!blackARookMoved) possibleCastles += 'k';               // if blacks's a-rook did not move, adds this castle to variable
                if (!blackHRookMoved) possibleCastles += 'q';               // if blacks's h-rook did not move, adds this castle to variable
            }
            fen += ' ' + (possibleCastles !== '' ? possibleCastles : '-');  // adds castles to FEN, if there are not any possible, adds '-'
        }
        enPassantSection: {
            for (let i = 0; i < 64; i++) {                                                                  // for each square
                if (pieces[i][0] === 'en-passant-square') {                                                 // if it is en passant square
                    fen += ' ' + String.fromCharCode(positionToColumn(i) + 97) + (8 - positionToRow(i));    // convert square number to square notation
                    break enPassantSection;                                                                 // exists section
                }
            }
            fen += ' -';            // if went through whole board and there is not any en passant square, adds '-' to FEN
        }
        fen += ' ' + halfmoveClock + ' ' + fullmoveCounter;     // adds halfmove clock and fullmove counter to FEN
        return fen;                                             // returns FEN
    }

    // sets legal moves //
    const setLegalMoves = (selectedSquare) => {
        let legalMoves = getLegalMoves(selectedSquare);
        for (let i = 0; i < 64; i++) {      // for each square on board
            if (legalMoves[i])              // if it is legal move
                pieces[i][1] = true;        // sets move to legal     
        }
    }

    // resets legal moves //
    const resetLegalMoves = () => {
        for (let i = 0; i < 64; i++) {      // for each square on board
            pieces[i][1] = false;           // sets move to illegal
        }
    }

    // returns legal moves based on piece
    const getLegalMoves = (selectedSquare) => {
        switch(pieces[selectedSquare][0]) {
            case 'white-pawn': case 'black-pawn': return getLegalMovesP(selectedSquare, pieces);                                        // returns legal moves for pawn
            case 'white-rook': case 'black-rook': return getLegalMovesR(selectedSquare, pieces);                                        // returns legal moves for rook
            case 'white-knight': case 'black-knight': return getLegalMovesN(selectedSquare, pieces);                                    // returns legal moves for knight
            case 'white-bishop': case 'black-bishop': return getLegalMovesB(selectedSquare, pieces);                                    // returns legal moves for bishop
            case 'white-queen': case 'black-queen': return getLegalMovesQ(selectedSquare, pieces);                                      // returns legal moves for queen
            case 'white-king': return getLegalMovesK(selectedSquare, pieces, whiteKingMoved, whiteARookMoved, whiteHRookMoved);         // returns legal moves for white king
            case 'black-king': return getLegalMovesK(selectedSquare, pieces, blackKingMoved, blackARookMoved, blackHRookMoved);         // returns legal moves for black king
        }
    }
    
    // makes move //
    const handleClick = (senderRow, senderColumn) => {
        if ((selectedRow === null && selectedColumn === null && pieces[rowAndColumnToPosition(senderRow, senderColumn)][0] === null) ||                            // if there is not any selected square now and before
            (selectedRow === null && selectedColumn === null && pieces[rowAndColumnToPosition(senderRow, senderColumn)][0] === 'en-passant-square') ||             // or if there is nothing selected before and now en passant square is selected
            (selectedRow === null && selectedColumn === null && pieces[rowAndColumnToPosition(senderRow, senderColumn)][0]?.includes('black') && isWhitesMove) ||  // or if it is white's move and black's piece is about to be selected
            (selectedRow === null && selectedColumn === null && pieces[rowAndColumnToPosition(senderRow, senderColumn)][0]?.includes('white') && !isWhitesMove))   // of it it is black's move and white's piece is about to be selected
         return;                                                                                                                                                   // it does nothing
        else if (pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0] === null ||         // if clicked square is empty
            selectedRow === null) {                                                                 // or if this is first clicked square
            highlightedSquare = rowAndColumnToPosition(senderRow, senderColumn)                     // highlights selected square
            setSelectedRow(senderRow);                                                              // remembers row of clicked square
            setSelectedColumn(senderColumn);                                                        // remembers column of clicked square
            resetLegalMoves();                                                                      // resets legal moves
            setLegalMoves(rowAndColumnToPosition(senderRow, senderColumn));                         // displays all legal moves
        } else if ((selectedRow === senderRow && selectedColumn === senderColumn) ||                // if clicked square is same as previously clicked square - deselect            
                !pieces[rowAndColumnToPosition(senderRow, senderColumn)][1]) {                      // if it is illegal move
            resetLegalMoves();                                                                      // resets legal moves
            setSelectedRow(null);                                                                   // clears previously selected row
            setSelectedColumn(null);                                                                // clears previously selected column
            highlightedSquare = null;                                                               // sets highlighted square to none
        } else {                                                                                    // if move is valid
            halfmoveClock++;                                                                                                                // increments halfmoveClock
            resetLegalMoves();                                                                                                              // resets legal moves     
            if(!isWhitesMove) fullmoveCounter++;                                                                                            // increments fullmoveCounter after blacks move
            isWhitesMove = !isWhitesMove;                                                                                                   // flips turn white <---> black
            if(pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0].includes('pawn') ||                                           // if pawn moves
               pieces[rowAndColumnToPosition(senderRow, senderColumn)][0] !== null) halfmoveClock = 0;                                      // or if anything is captures, it resets halfmoveClock
            if (pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0] === 'white-rook') {                                          // if white rook moved
                if (rowAndColumnToPosition(selectedRow, selectedColumn) === 56) whiteARookMoved = true;                                     // if white a rook moved, it is rememberd in variable
                else if (rowAndColumnToPosition(selectedRow, selectedColumn) === 63) whiteHRookMoved = true;                                // if white h rook moved, it is rememberd in variable
            } else if (pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0] === 'black-rook') {                                   // if black rook moved
                if (rowAndColumnToPosition(selectedRow, selectedColumn) === 0) blackARookMoved = true;                                      // if black a rook moved, it is rememberd in variable
                else if (rowAndColumnToPosition(selectedRow, selectedColumn) === 7) blackHRookMoved = true;                                 // if black h rook moved, it is rememberd in variable
            } else if (pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0] === 'white-king') {                                   // if white king moved
                whiteKingMoved = true;                                                                                                      // it is rememberd in variable                          
                castle(senderRow, senderColumn, selectedRow, selectedColumn);                                                               // checks if the move is castle and if it is, it castles
            } else if (pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0] === 'black-king') {                                   // if black king moved
                blackKingMoved = true;                                                                                                      // it is rememberd in variable                          
                castle(senderRow, senderColumn, selectedRow, selectedColumn);                                                               // checks if the move is castle and if it is, it castles
            } else if (pieces[rowAndColumnToPosition(senderRow , senderColumn)][0] === 'en-passant-square')                                 // if en passant is being attempted
                if (selectedRow === 3) pieces[rowAndColumnToPosition(senderRow , senderColumn) + 8][0] = null;                              // if white is trying to en passant en passanted pawn is removed
                else pieces[rowAndColumnToPosition(senderRow , senderColumn) - 8][0] = null;                                                // if black is trying to en passant en passanted pawn is removed
            pieces[rowAndColumnToPosition(senderRow , senderColumn)][0] = pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0];   // copies piece from previously clicked square to clicked square
            pieces[rowAndColumnToPosition(selectedRow, selectedColumn)][0] = null;                                                          // removes piece from previously clicked square
            pieces.forEach(piece => { if (piece[0] === 'en-passant-square') piece[0] = null; });                                            // removes all en passant squares
            if (selectedColumn === senderColumn && (selectedRow === senderRow + 2 &&                                                        // if something is moved by 2 squares forward  
                pieces[rowAndColumnToPosition(senderRow , senderColumn)][0] === 'white-pawn'))                                              // and it is white pawn                        
                    pieces[rowAndColumnToPosition(senderRow , senderColumn) + 8][0] = 'en-passant-square';                                  // square behind pawn becomes en passant square
            else if (selectedColumn === senderColumn && (selectedRow === senderRow - 2 &&                                                   // if something is moved by 2 squares forward  
                pieces[rowAndColumnToPosition(senderRow , senderColumn)][0] === 'black-pawn'))                                              // and it is white pawn                        
                    pieces[rowAndColumnToPosition(senderRow , senderColumn) - 8][0] = 'en-passant-square';                                  // square behind pawn becomes en passant square
            setSelectedRow(null);                                                                                                           // clears previously selected row
            setSelectedColumn(null);                                                                                                        // clears previously selected column
            highlightedSquare = null;                                                                                                       // sets highlighted square to none
            if (pieces[rowAndColumnToPosition(senderRow , senderColumn)][0] === 'white-pawn' && senderRow === 0)                            // if white pawn reaches last rank
                props.showPromotionPopUp(true, rowAndColumnToPosition(senderRow , senderColumn));                                           // show promotion popup for white
            else if (pieces[rowAndColumnToPosition(senderRow , senderColumn)][0] === 'black-pawn' && senderRow === 7)                       // if black pawn reaches last rank
                props.showPromotionPopUp(false, rowAndColumnToPosition(senderRow , senderColumn));                                          // show promotion popup for black
        }
    }


    // checks, if player is trying to castle and if he is it castles //
    const castle = (senderRow, senderColumn, selectedRow, selectedColumn) => {        
        if (senderRow === selectedRow && senderColumn === selectedColumn - 2) {                                                                       // if trying to castle queenside
            pieces[rowAndColumnToPosition(selectedRow, selectedColumn) - 1][0] = pieces[rowAndColumnToPosition(selectedRow, selectedColumn) - 4][0];  // copy rook to the right side of the king
            pieces[rowAndColumnToPosition(selectedRow, selectedColumn) - 4][0] = null;                                                                // original rook is removed
        } else if (senderRow === selectedRow && senderColumn === selectedColumn + 2){                                                                 // if trying to castle kingside
            pieces[rowAndColumnToPosition(selectedRow, selectedColumn) + 1][0] = pieces[rowAndColumnToPosition(selectedRow, selectedColumn) + 3][0];  // copy rook to the left side of the king
            pieces[rowAndColumnToPosition(selectedRow, selectedColumn) + 3][0] = null;                                                                // original rook is removed
        }
    }


    if (props.promotedTo !== null) {                    // if receives piece pawn is promoted to
        pieces[props.sender][0] = props.promotedTo;     // places this piece on the board
        props.received();                               // sends back message that it was successfull
    }
    if (JSON.stringify(pieces) === JSON.stringify(new Array(64).fill([ null, false ]))) importFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');  // on init imports starting position

    // renders 1 square //
    const renderSquare = (piecesIndex) => {
        return <Square piece={pieces[piecesIndex][0]}                                               // what piece is on this square
                       index={piecesIndex}                                                          // index of this square
                       key={piecesIndex}                                                            // key - has to be there, because of loop
                       handleClick={handleClick}                                                    // passes handleClick() to Square so it may be used
                       isSelected={(highlightedSquare === piecesIndex) ? true : false}              // should square be highlighted
                       isPossibleToMoveThere={pieces[piecesIndex][1]}                               // should square be marked as legal move
                       color={true}                                                                 // should be colored
                       />;                                                                          // returns square
    }

    // renders 1 row //
    const renderRow = (startingIndex) => {
        const squares = [];                                             // contains all squares in a row
        for (let i = startingIndex; i < startingIndex + 8; i++) {       // 8 squares in a row - for each of them
            squares.push(renderSquare(i));                              // renders square and adds it to array
        }
        return <div className='boardRow' key={startingIndex}>{squares}</div>;   // returns row
    }

    // renders entire board //
    const render = () => {
        const rows = [];                                                                                            // contains all rows
        for (let i = startIndex; props.isWhitesPOV ? i < endIndex : i > endIndex; props.isWhitesPOV ? i++ : i--) {  // 8 rows - for each of them
            rows.push(renderRow(i*8));                                                                              // renders row and adds it to array
        }
        return <>{rows}</>;             // returns entire board
    }
    return <>{render()}</>              // renders entire board
}