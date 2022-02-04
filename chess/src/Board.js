import React, {useState} from 'react';
import Square from './Square.js';       // imports Square component
import './styles.css'                   // imports stylesheet

const pieces = [            // content of each position on board
    // 8TH RANK //
    'black-rook',           // notation: a8     row: 0     column: 0
    'black-knight',         // notation: b8     row: 0     column: 1
    'black-bishop',         // notation: c8     row: 0     column: 2
    'black-queen',          // notation: d8     row: 0     column: 3
    'black-king',           // notation: e8     row: 0     column: 4
    'black-bishop',         // notation: f8     row: 0     column: 5
    'black-knight',         // notation: g8     row: 0     column: 6
    'black-rook',           // notation: h8     row: 0     column: 7

    // 7TH RANK //
    'black-pawn',           // notation: a7     row: 1     column: 0
    'black-pawn',           // notation: b7     row: 1     column: 1
    'black-pawn',           // notation: c7     row: 1     column: 2
    'black-pawn',           // notation: d7     row: 1     column: 3
    'black-pawn',           // notation: e7     row: 1     column: 4
    'black-pawn',           // notation: f7     row: 1     column: 5
    'black-pawn',           // notation: g7     row: 1     column: 6
    'black-pawn',           // notation: h7     row: 1     column: 7

    // 6TH RANK //
    null,                   // notation: a6     row: 2     column: 0
    null,                   // notation: b6     row: 2     column: 1
    null,                   // notation: c6     row: 2     column: 2
    null,                   // notation: d6     row: 2     column: 3
    null,                   // notation: e6     row: 2     column: 4
    null,                   // notation: f6     row: 2     column: 5
    null,                   // notation: g6     row: 2     column: 6
    null,                   // notation: h6     row: 2     column: 7

    // 5TH RANK //
    null,                   // notation: a5     row: 3     column: 0
    null,                   // notation: b5     row: 3     column: 1
    null,                   // notation: c5     row: 3     column: 2
    null,                   // notation: d5     row: 3     column: 3
    null,                   // notation: e5     row: 3     column: 4
    null,                   // notation: f5     row: 3     column: 5
    null,                   // notation: g5     row: 3     column: 6
    null,                   // notation: h5     row: 3     column: 7

    // 4TH RANK //
    null,                   // notation: a4     row: 4     column: 0
    null,                   // notation: b4     row: 4     column: 1
    null,                   // notation: c4     row: 4     column: 2
    null,                   // notation: d4     row: 4     column: 3
    null,                   // notation: e4     row: 4     column: 4
    null,                   // notation: f4     row: 4     column: 5
    null,                   // notation: g4     row: 4     column: 6
    null,                   // notation: h4     row: 4     column: 7

    // 3RD RANK //
    null,                   // notation: a3     row: 5     column: 0
    null,                   // notation: b3     row: 5     column: 1
    null,                   // notation: c3     row: 5     column: 2
    null,                   // notation: d3     row: 5     column: 3
    null,                   // notation: e3     row: 5     column: 4
    null,                   // notation: f3     row: 5     column: 5
    null,                   // notation: g3     row: 5     column: 6
    null,                   // notation: h3     row: 5     column: 7

    // 2ND RANK //
    'white-pawn',           // notation: a2     row: 6     column: 0
    'white-pawn',           // notation: b2     row: 6     column: 1
    'white-pawn',           // notation: c2     row: 6     column: 2
    'white-pawn',           // notation: d2     row: 6     column: 3
    'white-pawn',           // notation: e2     row: 6     column: 4
    'white-pawn',           // notation: f2     row: 6     column: 5
    'white-pawn',           // notation: g2     row: 6     column: 6
    'white-pawn',           // notation: h2     row: 6     column: 7

    // 1ST RANK //
    'white-rook',           // notation: a1     row: 7     column: 0
    'white-knight',         // notation: b1     row: 7     column: 1
    'white-bishop',         // notation: c1     row: 7     column: 2
    'white-queen',          // notation: d1     row: 7     column: 3
    'white-king',           // notation: e1     row: 7     column: 4
    'white-bishop',         // notation: f1     row: 7     column: 5
    'white-knight',         // notation: g1     row: 7     column: 6
    'white-rook'            // notation: h1     row: 7     column: 7
]

export default function Board() {
    const [selectedRow, setSelectedRow] = useState(null);           // stores row of previously clicked square
    const [selectedColumn, setSelectedColumn] = useState(null);     // stores column of previously clicked square
    
    // makes move //
    const handleClick = (senderRow, senderColumn) => {
        if (pieces[8 * selectedRow + selectedColumn] === null ||                    // if clicked square is empty
            (selectedRow === senderRow && selectedColumn === senderColumn) ||       // or if clicked square is same as previously clicked square
            selectedRow === null) {                                                 // or if this is first clicked square

            setSelectedRow(senderRow);                                              // remembers row of clicked square
            setSelectedColumn(senderColumn);                                        // remembers column of clicked square
        }
        else {
            pieces[8 * senderRow + senderColumn] = pieces[8 * selectedRow + selectedColumn];        // copies piece from previously clicked square to clicked square
            pieces[8 * selectedRow + selectedColumn] = null;                                        // removes piece from previously clicked square
            setSelectedRow(null);                                                                   // clears previously selected row
            setSelectedColumn(null);                                                                // clears previously selected column
        }
    }

    // renders 1 square //
    const renderSquare = (piecesIndex) => {
        return <Square piece={pieces[piecesIndex]} row={Math.floor(piecesIndex / 8)} column={piecesIndex % 8} key={piecesIndex} handleClick={handleClick}/>;  // returns square
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
