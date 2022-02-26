import React from 'react'
import Square from './Square.js'

export default function PromotionPopUp(props) {
    const pieces = [['white-knight', 'white-bishop', 'white-rook', 'white-queen'], ['black-knight', 'black-bishop', 'black-rook', 'black-queen']];
    const squares = [];

    const handlePopUpClick = (clicked) => {
        props.handlePopUpClick(clicked);
    }

    for (let i = 0; i < 4; i++) {
        squares.push(<Square piece={props.isWhite ? pieces[0][i] : pieces[1][i]}
                             key={i}
                             handlePopUpClick={handlePopUpClick}
                             color={false}/>);
    }
    return <div className='boardRow promotionPopUp'>{squares}</div>;
}
