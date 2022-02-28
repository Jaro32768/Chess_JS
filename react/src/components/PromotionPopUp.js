import React from 'react';
import Square from './Square.js';

export default function PromotionPopUp(props) {
    const pieces = [['white-knight', 'white-bishop', 'white-rook', 'white-queen'],      // white pieces it is possible to promote to
                    ['black-knight', 'black-bishop', 'black-rook', 'black-queen']];     // black pieces it is possible to promote to
    const squares = [];     // remembers rendered square for return

    /* if any piece from popup was selected, notify parent */
    const handlePopUpClick = (clicked) => {
        props.handlePopUpClick(clicked);        // notify parent
    }

    for (let i = 0; i < 4; i++) {               // for each piece it is possible to promote to
        squares.push(<Square piece={props.isWhite ? pieces[0][i] : pieces[1][i]}    // shows peieces based on whose move it
                             key={i}                                                // key - has to be there, because of loop
                             handlePopUpClick={handlePopUpClick}                    // passes method to child
                             color={false}/>);                                      // makes color not set
    }
    return <div className='boardRow promotionPopUp'>{squares}</div>;                // renders all squares
}
