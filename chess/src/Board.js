import React, {useState} from 'react';
import Square from './Square.js';       // imports Square component
import './styles.css'                   // imports stylesheet

const pieces = [            // content of each position on board - [ piece on square, isHighlighted ]
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

export default function Board() {
    const [selectedRow, setSelectedRow] = useState(null);           // stores row of previously clicked square
    const [selectedColumn, setSelectedColumn] = useState(null);     // stores column of previously clicked square
    
    // makes move //
    const handleClick = (senderRow, senderColumn) => {
        for (let i = 0; i < 64; i++) if (pieces[i][1] === true) pieces[i][1] = false;             // clears all highlights
        if (pieces[8 * selectedRow + selectedColumn][0] === null ||                                    // if clicked square is empty
            selectedRow === null) {                                                                 // or if this is first clicked square

            pieces[8 * senderRow + senderColumn][1] = true;                                        // highlights selected square
            setSelectedRow(senderRow);                                                              // remembers row of clicked square
            setSelectedColumn(senderColumn);                                                        // remembers column of clicked square
        }
        else if (selectedRow === senderRow && selectedColumn === senderColumn) {                    // if clicked square is same as previously clicked square - deselect            
            setSelectedRow(null);                                                                   // clears previously selected row
            setSelectedColumn(null);                                                                // clears previously selected column
        }
        else {
            pieces[8 * senderRow + senderColumn][0] = pieces[8 * selectedRow + selectedColumn][0];        // copies piece from previously clicked square to clicked square
            pieces[8 * selectedRow + selectedColumn][0] = null;                                        // removes piece from previously clicked square
            setSelectedRow(null);                                                                   // clears previously selected row
            setSelectedColumn(null);                                                                // clears previously selected column
        }
    }

    // renders 1 square //
    const renderSquare = (piecesIndex) => {
        return <Square piece={pieces[piecesIndex][0]}                  // what piece is on this square
                       row={Math.floor(piecesIndex / 8)}            // what is row of this square
                       column={piecesIndex % 8}                     // what is column of this square
                       key={piecesIndex}                            // key - has to be there, because of loop
                       handleClick={handleClick}                    // passes handleClick() to Square so it may be used
                       isSelected={pieces[piecesIndex][1]}         // should square be highlighted
                       />;                                          // returns square
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
