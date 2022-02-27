import React, {useState} from 'react';
import Square from './Square.js';                   // imports Square component
import '../styles/styles.css'                       // imports stylesheet
import {getLegalMovesP} from '../pieces/Pawn.js';   // imports method that searches for legal moves for pawn
import {getLegalMovesR} from '../pieces/Rook.js';   // imports method that searches for legal moves for rook
import {getLegalMovesN} from '../pieces/Knight.js'; // imports method that searches for legal moves for knight
import {getLegalMovesB} from '../pieces/Bishop.js'; // imports method that searches for legal moves for bishop
import {getLegalMovesQ} from '../pieces/Queen.js';  // imports method that searches for legal moves for queen
import {getLegalMovesK} from '../pieces/King.js';   // imports method that searches for legal moves for king

let highlightedSquare = null,           // remembers which square should be highlighted
    whiteKingMoved = false, blackKingMoved = false,
    whiteARookMoved = false, blackARookMoved = false,
    whiteHRookMoved = false, blackHRookMoved = false;

const pieces = [                        // content of each position on board - [ pieceOnSquare , isPossibleToMoveThere ]
    // 8TH RANK //
    [ 'black-rook', false ],            // notation: a8     row: 0     column: 0
    [ 'black-knight', false ],          // notation: b8     row: 0     column: 1
    [ 'black-bishop', false ],          // notation: c8     row: 0     column: 2
    [ 'black-queen', false ],           // notation: d8     row: 0     column: 3
    [ 'black-king', false ],            // notation: e8     row: 0     column: 4
    [ 'black-bishop', false ],          // notation: f8     row: 0     column: 5
    [ 'black-knight', false ],          // notation: g8     row: 0     column: 6
    [ 'black-rook', false ],            // notation: h8     row: 0     column: 7

    // 7TH RANK //
    [ 'black-pawn', false ],            // notation: a7     row: 1     column: 0
    [ 'black-pawn', false ],            // notation: b7     row: 1     column: 1
    [ 'black-pawn', false ],            // notation: c7     row: 1     column: 2
    [ 'black-pawn', false ],            // notation: d7     row: 1     column: 3
    [ 'black-pawn', false ],            // notation: e7     row: 1     column: 4
    [ 'black-pawn', false ],            // notation: f7     row: 1     column: 5
    [ 'black-pawn', false ],            // notation: g7     row: 1     column: 6
    [ 'black-pawn', false ],            // notation: h7     row: 1     column: 7

    // 6TH RANK //
    [ null, false ],                    // notation: a6     row: 2     column: 0
    [ null, false ],                    // notation: b6     row: 2     column: 1
    [ null, false ],                    // notation: c6     row: 2     column: 2
    [ null, false ],                    // notation: d6     row: 2     column: 3
    [ null, false ],                    // notation: e6     row: 2     column: 4
    [ null, false ],                    // notation: f6     row: 2     column: 5
    [ null, false ],                    // notation: g6     row: 2     column: 6
    [ null, false ],                    // notation: h6     row: 2     column: 7

    // 5TH RANK //
    [ null, false ],                    // notation: a5     row: 3     column: 0
    [ null, false ],                    // notation: b5     row: 3     column: 1
    [ null, false ],                    // notation: c5     row: 3     column: 2
    [ null, false ],                    // notation: d5     row: 3     column: 3
    [ null, false ],                    // notation: e5     row: 3     column: 4
    [ null, false ],                    // notation: f5     row: 3     column: 5
    [ null, false ],                    // notation: g5     row: 3     column: 6
    [ null, false ],                    // notation: h5     row: 3     column: 7

    // 4TH RANK //
    [ null, false ],                    // notation: a4     row: 4     column: 0
    [ null, false ],                    // notation: b4     row: 4     column: 1
    [ null, false ],                    // notation: c4     row: 4     column: 2
    [ null, false ],                    // notation: d4     row: 4     column: 3
    [ null, false ],                    // notation: e4     row: 4     column: 4
    [ null, false ],                    // notation: f4     row: 4     column: 5
    [ null, false ],                    // notation: g4     row: 4     column: 6
    [ null, false ],                    // notation: h4     row: 4     column: 7

    // 3RD RANK //
    [ null, false ],                    // notation: a3     row: 5     column: 0
    [ null, false ],                    // notation: b3     row: 5     column: 1
    [ null, false ],                    // notation: c3     row: 5     column: 2
    [ null, false ],                    // notation: d3     row: 5     column: 3
    [ null, false ],                    // notation: e3     row: 5     column: 4
    [ null, false ],                    // notation: f3     row: 5     column: 5
    [ null, false ],                    // notation: g3     row: 5     column: 6
    [ null, false ],                    // notation: h3     row: 5     column: 7

    // 2ND RANK //
    [ 'white-pawn', false ],            // notation: a2     row: 6     column: 0
    [ 'white-pawn', false ],            // notation: b2     row: 6     column: 1
    [ 'white-pawn', false ],            // notation: c2     row: 6     column: 2
    [ 'white-pawn', false ],            // notation: d2     row: 6     column: 3
    [ 'white-pawn', false ],            // notation: e2     row: 6     column: 4
    [ 'white-pawn', false ],            // notation: f2     row: 6     column: 5
    [ 'white-pawn', false ],            // notation: g2     row: 6     column: 6
    [ 'white-pawn', false ],            // notation: h2     row: 6     column: 7

    // 1ST RANK //
    [ 'white-rook', false ],            // notation: a1     row: 7     column: 0
    [ 'white-knight', false ],          // notation: b1     row: 7     column: 1
    [ 'white-bishop', false ],          // notation: c1     row: 7     column: 2
    [ 'white-queen', false ],           // notation: d1     row: 7     column: 3
    [ 'white-king', false ],            // notation: e1     row: 7     column: 4
    [ 'white-bishop', false ],          // notation: f1     row: 7     column: 5
    [ 'white-knight', false ],          // notation: g1     row: 7     column: 6
    [ 'white-rook', false ]             // notation: h1     row: 7     column: 7
]

export default function Board(props) {
    const [selectedRow, setSelectedRow] = useState(null);           // stores row of previously clicked square
    const [selectedColumn, setSelectedColumn] = useState(null);     // stores column of previously clicked square


    // sets legal moves //
    const setLegalMoves = (selectedSquare) => {
        let legalMoves = getLegalMoves(selectedSquare);
        for (let i = 0; i < 64; i++) {      // for each square on board
            if (legalMoves[i]) {                    // JUST PLACEHOLDER FOR NOW, SHOULD BE CHANGED TO CALL OF getLegalMoves() WHICH WILL BE COMPARED WITH INDEX
                pieces[i][1] = true;        // sets move to legal
            }
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
            case 'white-pawn': case 'black-pawn': return getLegalMovesP(selectedSquare, pieces);        // returns legal moves for pawn
            case 'white-rook': case 'black-rook': return getLegalMovesR(selectedSquare, pieces);        // returns legal moves for rook
            case 'white-knight': case 'black-knight': return getLegalMovesN(selectedSquare, pieces);    // returns legal moves for knight
            case 'white-bishop': case 'black-bishop': return getLegalMovesB(selectedSquare, pieces);    // returns legal moves for bishop
            case 'white-queen': case 'black-queen': return getLegalMovesQ(selectedSquare, pieces);      // returns legal moves for queen
            case 'white-king': return getLegalMovesK(selectedSquare, pieces, whiteKingMoved, whiteARookMoved, whiteHRookMoved);        // returns legal moves for white king
            case 'black-king': return getLegalMovesK(selectedSquare, pieces, blackKingMoved, blackARookMoved, blackHRookMoved);        // returns legal moves for black king
        }
    }
    
    // makes move //
    const handleClick = (senderRow, senderColumn) => {
        if ((selectedRow === null && selectedColumn === null && pieces[8 * senderRow + senderColumn][0] === null) ||
            (selectedRow === null && selectedColumn === null && pieces[8 * senderRow + senderColumn][0] === 'en-passant-square'))
         return;    // if there is not any selected square now and before, it does nothing
        else if (pieces[8 * selectedRow + selectedColumn][0] === null ||                            // if clicked square is empty
            selectedRow === null) {                                                                 // or if this is first clicked square
            highlightedSquare = 8 * senderRow + senderColumn                                        // highlights selected square
            setSelectedRow(senderRow);                                                              // remembers row of clicked square
            setSelectedColumn(senderColumn);                                                        // remembers column of clicked square
            resetLegalMoves();                                                                      // resets legal moves
            setLegalMoves(8 * senderRow + senderColumn);                                            // displays all legal moves
        }
        else if ((selectedRow === senderRow && selectedColumn === senderColumn) ||                    // if clicked square is same as previously clicked square - deselect            
                !pieces[8 * senderRow + senderColumn][1]) {                                         // if it is illegal move
            resetLegalMoves();                                                                      // resets legal moves
            setSelectedRow(null);                                                                   // clears previously selected row
            setSelectedColumn(null);                                                                // clears previously selected column
            highlightedSquare = null;                                                               // sets highlighted square to none
        }
        else {
            resetLegalMoves();                                                                      // resets legal moves     

            if (pieces[8 * selectedRow + selectedColumn][0] === 'white-rook') {
                if (8 * selectedRow + selectedColumn === 56) whiteARookMoved = true;
                else if (8 * selectedRow + selectedColumn === 63) whiteHRookMoved = true;
            }
            else if (pieces[8 * selectedRow + selectedColumn][0] === 'black-rook') {
                if (8 * selectedRow + selectedColumn === 0) blackARookMoved = true;
                else if (8 * selectedRow + selectedColumn === 7) blackHRookMoved = true;
            }
            else if (pieces[8 * selectedRow + selectedColumn][0] === 'white-king') {
                whiteKingMoved = true;
                castle(senderRow, senderColumn, selectedRow, selectedColumn);
            }
            else if (pieces[8 * selectedRow + selectedColumn][0] === 'black-king') {
                blackKingMoved = true;
                castle(senderRow, senderColumn, selectedRow, selectedColumn);
            }
            else if (pieces[8 * senderRow + senderColumn][0] === 'en-passant-square')
                if (selectedRow === 3) pieces[8 * senderRow + senderColumn + 8][0] = null;
                else pieces[8 * senderRow + senderColumn - 8][0] = null;
            pieces[8 * senderRow + senderColumn][0] = pieces[8 * selectedRow + selectedColumn][0];  // copies piece from previously clicked square to clicked square
            pieces[8 * selectedRow + selectedColumn][0] = null;                                     // removes piece from previously clicked square
            pieces.forEach(piece => { if (piece[0] === 'en-passant-square') piece[0] = null; });
            if (selectedColumn === senderColumn && (selectedRow === senderRow + 2 && pieces[8 * senderRow + senderColumn][0] === 'white-pawn'))
                pieces[8 * senderRow + senderColumn + 8][0] = 'en-passant-square';
            else if (selectedColumn === senderColumn && (selectedRow === senderRow - 2 && pieces[8 * senderRow + senderColumn][0] === 'black-pawn'))
                pieces[8 * senderRow + senderColumn - 8][0] = 'en-passant-square';
            setSelectedRow(null);                                                                   // clears previously selected row
            setSelectedColumn(null);                                                                // clears previously selected column
            highlightedSquare = null;                                                               // sets highlighted square to none
            if (pieces[8 * senderRow + senderColumn][0] === 'white-pawn' && senderRow === 0)           
                props.showPromotionPopUp(true, 8 * senderRow + senderColumn);
            else if (pieces[8 * senderRow + senderColumn][0] === 'black-pawn' && senderRow === 7)
                props.showPromotionPopUp(false, 8 * senderRow + senderColumn);
        }
    }

    const castle = (senderRow, senderColumn, selectedRow, selectedColumn) => {        
        if (senderRow === selectedRow && senderColumn === selectedColumn - 2) {
            pieces[8 * selectedRow + selectedColumn - 1][0] = pieces[8 * selectedRow + selectedColumn - 4][0];
            pieces[8 * selectedRow + selectedColumn - 4][0] = null; 
        }
        else if (senderRow === selectedRow && senderColumn === selectedColumn + 2){
            pieces[8 * selectedRow + selectedColumn + 1][0] = pieces[8 * selectedRow + selectedColumn + 3][0];
            pieces[8 * selectedRow + selectedColumn + 3][0] = null; 
        }
    }


    if (props.promotedTo !== null) {
        pieces[props.sender][0] = props.promotedTo;
        props.received();
    }

    // renders 1 square //
    const renderSquare = (piecesIndex) => {
        return <Square piece={pieces[piecesIndex][0]}                                               // what piece is on this square
                       row={Math.floor(piecesIndex / 8)}                                            // what is row of this square
                       column={piecesIndex % 8}                                                     // what is column of this square
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
        const rows = [];                                                // contains all rows
        for (let i = 0; i < 8; i++) {                                   // 8 rows - for each of them
            rows.push(renderRow(i*8));                                  // renders row and adds it it array
        }
        return <>{rows}</>;             // returns entire board
    }

    return <>{render()}</>              // renders entire board
}
