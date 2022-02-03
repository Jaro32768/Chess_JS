import React from 'react';
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
    return (
        <>                  {/* empty element, because return may return only one element */}
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[0]} row={0} column={0}/>          {/* renders a8 square */}
                <Square piece={pieces[1]} row={0} column={1}/>          {/* renders b8 square */}
                <Square piece={pieces[2]} row={0} column={2}/>          {/* renders c8 square */}
                <Square piece={pieces[3]} row={0} column={3}/>          {/* renders d8 square */}
                <Square piece={pieces[4]} row={0} column={4}/>          {/* renders e8 square */}
                <Square piece={pieces[5]} row={0} column={5}/>          {/* renders f8 square */}
                <Square piece={pieces[6]} row={0} column={6}/>          {/* renders g8 square */}
                <Square piece={pieces[7]} row={0} column={7}/>          {/* renders h8 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[8]} row={1} column={0}/>          {/* renders a7 square */}
                <Square piece={pieces[9]} row={1} column={1}/>          {/* renders b7 square */}
                <Square piece={pieces[10]} row={1} column={2}/>         {/* renders c7 square */}
                <Square piece={pieces[11]} row={1} column={3}/>         {/* renders d7 square */}
                <Square piece={pieces[12]} row={1} column={4}/>         {/* renders e7 square */}
                <Square piece={pieces[13]} row={1} column={5}/>         {/* renders f7 square */}
                <Square piece={pieces[14]} row={1} column={6}/>         {/* renders g7 square */}
                <Square piece={pieces[15]} row={1} column={7}/>         {/* renders h7 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[16]} row={2} column={0}/>         {/* renders a6 square */}
                <Square piece={pieces[17]} row={2} column={1}/>         {/* renders b6 square */}
                <Square piece={pieces[18]} row={2} column={2}/>         {/* renders c6 square */}
                <Square piece={pieces[19]} row={2} column={3}/>         {/* renders d6 square */}
                <Square piece={pieces[20]} row={2} column={4}/>         {/* renders e6 square */}
                <Square piece={pieces[21]} row={2} column={5}/>         {/* renders f6 square */}
                <Square piece={pieces[22]} row={2} column={6}/>         {/* renders g6 square */}
                <Square piece={pieces[23]} row={2} column={7}/>         {/* renders h6 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[24]} row={3} column={0}/>         {/* renders a5 square */}
                <Square piece={pieces[25]} row={3} column={1}/>         {/* renders b5 square */}
                <Square piece={pieces[26]} row={3} column={2}/>         {/* renders c5 square */}
                <Square piece={pieces[27]} row={3} column={3}/>         {/* renders d5 square */}
                <Square piece={pieces[28]} row={3} column={4}/>         {/* renders e5 square */}
                <Square piece={pieces[29]} row={3} column={5}/>         {/* renders f5 square */}
                <Square piece={pieces[30]} row={3} column={6}/>         {/* renders g5 square */}
                <Square piece={pieces[31]} row={3} column={7}/>         {/* renders h5 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[32]} row={4} column={0}/>         {/* renders a4 square */}
                <Square piece={pieces[33]} row={4} column={1}/>         {/* renders b4 square */}
                <Square piece={pieces[34]} row={4} column={2}/>         {/* renders c4 square */}
                <Square piece={pieces[35]} row={4} column={3}/>         {/* renders d4 square */}
                <Square piece={pieces[36]} row={4} column={4}/>         {/* renders e4 square */}
                <Square piece={pieces[37]} row={4} column={5}/>         {/* renders f4 square */}
                <Square piece={pieces[38]} row={4} column={6}/>         {/* renders g4 square */}
                <Square piece={pieces[39]} row={4} column={7}/>         {/* renders h4 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[40]} row={5} column={0}/>         {/* renders a3 square */}
                <Square piece={pieces[41]} row={5} column={1}/>         {/* renders b3 square */}
                <Square piece={pieces[42]} row={5} column={2}/>         {/* renders c3 square */}
                <Square piece={pieces[43]} row={5} column={3}/>         {/* renders d3 square */}
                <Square piece={pieces[44]} row={5} column={4}/>         {/* renders e3 square */}
                <Square piece={pieces[45]} row={5} column={5}/>         {/* renders f3 square */}
                <Square piece={pieces[46]} row={5} column={6}/>         {/* renders g3 square */}
                <Square piece={pieces[47]} row={5} column={7}/>         {/* renders h3 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[48]} row={6} column={0}/>         {/* renders a2 square */}
                <Square piece={pieces[49]} row={6} column={1}/>         {/* renders b2 square */}
                <Square piece={pieces[50]} row={6} column={2}/>         {/* renders c2 square */}
                <Square piece={pieces[51]} row={6} column={3}/>         {/* renders d2 square */}
                <Square piece={pieces[52]} row={6} column={4}/>         {/* renders e2 square */}
                <Square piece={pieces[53]} row={6} column={5}/>         {/* renders f2 square */}
                <Square piece={pieces[54]} row={6} column={6}/>         {/* renders g2 square */}
                <Square piece={pieces[55]} row={6} column={7}/>         {/* renders h2 square */}
            </div>
            <div className='boardRow'>                                  {/* places squares in a row */}
                <Square piece={pieces[56]} row={7} column={0}/>         {/* renders a1 square */}
                <Square piece={pieces[57]} row={7} column={1}/>         {/* renders b1 square */}
                <Square piece={pieces[58]} row={7} column={2}/>         {/* renders c1 square */}
                <Square piece={pieces[59]} row={7} column={3}/>         {/* renders d1 square */}
                <Square piece={pieces[60]} row={7} column={4}/>         {/* renders e1 square */}
                <Square piece={pieces[61]} row={7} column={5}/>         {/* renders f1 square */}
                <Square piece={pieces[62]} row={7} column={6}/>         {/* renders g1 square */}
                <Square piece={pieces[63]} row={7} column={7}/>         {/* renders h1 square */}
            </div>
            
        </>
    );
}
