import React from 'react';
import Square from './Square';
import './styles.css'

const pieces = [
    'black-rook',
    'black-knight',
    'black-bishop',
    'black-queen',
    'black-king',
    'black-bishop',
    'black-knight',
    'black-rook',

    'black-pawn',
    'black-pawn',
    'black-pawn',
    'black-pawn',
    'black-pawn',
    'black-pawn',
    'black-pawn',
    'black-pawn',

    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,

    'white-pawn',
    'white-pawn',
    'white-pawn',
    'white-pawn',
    'white-pawn',
    'white-pawn',
    'white-pawn',
    'white-pawn',

    'white-rook',
    'white-knight',
    'white-bishop',
    'white-queen',
    'white-king',
    'white-bishop',
    'white-knight',
    'white-rook'
]

export default function Board() {
    return (
        <>
            <div className='boardRow'>
                <Square piece={pieces[0]} row={0} column={0}/>
                <Square piece={pieces[1]} row={0} column={1}/>
                <Square piece={pieces[2]} row={0} column={2}/>
                <Square piece={pieces[3]} row={0} column={3}/>
                <Square piece={pieces[4]} row={0} column={4}/>
                <Square piece={pieces[5]} row={0} column={5}/>
                <Square piece={pieces[6]} row={0} column={6}/>
                <Square piece={pieces[7]} row={0} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[8]} row={1} column={0}/>
                <Square piece={pieces[9]} row={1} column={1}/>
                <Square piece={pieces[10]} row={1} column={2}/>
                <Square piece={pieces[11]} row={1} column={3}/>
                <Square piece={pieces[12]} row={1} column={4}/>
                <Square piece={pieces[13]} row={1} column={5}/>
                <Square piece={pieces[14]} row={1} column={6}/>
                <Square piece={pieces[15]} row={1} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[16]} row={2} column={0}/>
                <Square piece={pieces[17]} row={2} column={1}/>
                <Square piece={pieces[18]} row={2} column={2}/>
                <Square piece={pieces[19]} row={2} column={3}/>
                <Square piece={pieces[20]} row={2} column={4}/>
                <Square piece={pieces[21]} row={2} column={5}/>
                <Square piece={pieces[22]} row={2} column={6}/>
                <Square piece={pieces[23]} row={2} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[24]} row={3} column={0}/>
                <Square piece={pieces[25]} row={3} column={1}/>
                <Square piece={pieces[26]} row={3} column={2}/>
                <Square piece={pieces[27]} row={3} column={3}/>
                <Square piece={pieces[28]} row={3} column={4}/>
                <Square piece={pieces[29]} row={3} column={5}/>
                <Square piece={pieces[30]} row={3} column={6}/>
                <Square piece={pieces[31]} row={3} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[32]} row={4} column={0}/>
                <Square piece={pieces[33]} row={4} column={1}/>
                <Square piece={pieces[34]} row={4} column={2}/>
                <Square piece={pieces[35]} row={4} column={3}/>
                <Square piece={pieces[36]} row={4} column={4}/>
                <Square piece={pieces[37]} row={4} column={5}/>
                <Square piece={pieces[38]} row={4} column={6}/>
                <Square piece={pieces[39]} row={4} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[40]} row={5} column={0}/>
                <Square piece={pieces[41]} row={5} column={1}/>
                <Square piece={pieces[42]} row={5} column={2}/>
                <Square piece={pieces[43]} row={5} column={3}/>
                <Square piece={pieces[44]} row={5} column={4}/>
                <Square piece={pieces[45]} row={5} column={5}/>
                <Square piece={pieces[46]} row={5} column={6}/>
                <Square piece={pieces[47]} row={5} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[48]} row={6} column={0}/>
                <Square piece={pieces[49]} row={6} column={1}/>
                <Square piece={pieces[50]} row={6} column={2}/>
                <Square piece={pieces[51]} row={6} column={3}/>
                <Square piece={pieces[52]} row={6} column={4}/>
                <Square piece={pieces[53]} row={6} column={5}/>
                <Square piece={pieces[54]} row={6} column={6}/>
                <Square piece={pieces[55]} row={6} column={7}/>
            </div>
            <div className='boardRow'>
                <Square piece={pieces[56]} row={7} column={0}/>
                <Square piece={pieces[57]} row={7} column={1}/>
                <Square piece={pieces[58]} row={7} column={2}/>
                <Square piece={pieces[59]} row={7} column={3}/>
                <Square piece={pieces[60]} row={7} column={4}/>
                <Square piece={pieces[61]} row={7} column={5}/>
                <Square piece={pieces[62]} row={7} column={6}/>
                <Square piece={pieces[63]} row={7} column={7}/>
            </div>
            
        </>
    );
}
