import React, {useState} from 'react';
import './styles.css';
import BlackBishop from './images/black-bishop.svg.png'
import BlackKnight from './images/black-knight.svg.png'
import BlackPawn from './images/black-pawn.svg.png'
import BlackQueen from './images/black-queen.svg.png'
import BlackRook from './images/black-rook.svg.png'
import BlackKing from './images/black-king.svg.png'
import WhiteBishop from './images/white-bishop.svg.png'
import WhiteKnight from './images/white-knight.svg.png'
import WhitePawn from './images/white-pawn.svg.png'
import WhiteQueen from './images/white-queen.svg.png'
import WhiteRook from './images/white-rook.svg.png'
import WhiteKing from './images/white-king.svg.png'

export default function Square(props) {
    const [className, setClassName] = useState(null);

    if (className === null)
        if ((props.row + props.column) % 2 === 0) setClassName('lightSquare')
        else setClassName('darkSquare')
        
    switch(props.piece) {
        case 'black-bishop': return <div className={className}><img className='imgPiece' alt='BlackBishop' src={BlackBishop}></img></div>;
        case 'black-knight': return <div className={className}><img className='imgPiece' alt='BlackKnight' src={BlackKnight}></img></div>;
        case 'black-pawn': return <div className={className}><img className='imgPiece' alt='BlackPawn' src={BlackPawn}></img></div>;
        case 'black-queen': return <div className={className}><img className='imgPiece' alt='BlackQueen' src={BlackQueen}></img></div>;
        case 'black-rook': return <div className={className}><img className='imgPiece' alt='BlackRook' src={BlackRook}></img></div>;
        case 'black-king': return <div className={className}><img className='imgPiece' alt='BlackKing' src={BlackKing}></img></div>;
        case 'white-bishop': return <div className={className}><img className='imgPiece' alt='WhiteBishop' src={WhiteBishop}></img></div>;
        case 'white-knight': return <div className={className}><img className='imgPiece' alt='WhiteKnight' src={WhiteKnight}></img></div>;
        case 'white-pawn': return <div className={className}><img className='imgPiece' alt='WhitePawn' src={WhitePawn}></img></div>;
        case 'white-queen': return <div className={className}><img className='imgPiece' alt='WhiteQueen' src={WhiteQueen}></img></div>;
        case 'white-rook': return <div className={className}><img className='imgPiece' alt='WhiteRook' src={WhiteRook}></img></div>;
        case 'white-king': return <div className={className}><img className='imgPiece' alt='WhiteKing' src={WhiteKing}></img></div>;
        default: return <div className={className}></div>;
    }    
}