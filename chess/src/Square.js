import React, {useState} from 'react';
import './styles.css';                                                          // imports stylesheet
import BlackBishop from './images/black-bishop.svg.png'                         // imports image - black bishop
import BlackKnight from './images/black-knight.svg.png'                         // imports image - black knight
import BlackPawn from './images/black-pawn.svg.png'                             // imports image - black pawn
import BlackQueen from './images/black-queen.svg.png'                           // imports image - black queen
import BlackRook from './images/black-rook.svg.png'                             // imports image - black rook
import BlackKing from './images/black-king.svg.png'                             // imports image - black king
import WhiteBishop from './images/white-bishop.svg.png'                         // imports image - white bishop
import WhiteKnight from './images/white-knight.svg.png'                         // imports image - white knight
import WhitePawn from './images/white-pawn.svg.png'                             // imports image - white pawn
import WhiteQueen from './images/white-queen.svg.png'                           // imports image - white queen
import WhiteRook from './images/white-rook.svg.png'                             // imports image - white rook
import WhiteKing from './images/white-king.svg.png'                             // imports image - white bishop

export default function Square(props) {
    const [className, setClassName] = useState(null);                           // remembers, which class in styles.css should be used

    if (className === null)                                                     // avoids infinite loop by rerendering component
        if ((props.row + props.column) % 2 === 0) setClassName('lightSquare')   // if row and column are both even or both odd => square is light
        else setClassName('darkSquare')                                         // if row is even and column is odd or row is odd and column is even => square is dark
        
    switch(props.piece) {
        case 'black-bishop': return <div className={className}><img className='imgPiece' alt='BlackBishop' src={BlackBishop}></img></div>;  // renders square with black bishop
        case 'black-knight': return <div className={className}><img className='imgPiece' alt='BlackKnight' src={BlackKnight}></img></div>;  // renders square with black knight
        case 'black-pawn': return <div className={className}><img className='imgPiece' alt='BlackPawn' src={BlackPawn}></img></div>;        // renders square with black pawn
        case 'black-queen': return <div className={className}><img className='imgPiece' alt='BlackQueen' src={BlackQueen}></img></div>;     // renders square with black queen
        case 'black-rook': return <div className={className}><img className='imgPiece' alt='BlackRook' src={BlackRook}></img></div>;        // renders square with black rook
        case 'black-king': return <div className={className}><img className='imgPiece' alt='BlackKing' src={BlackKing}></img></div>;        // renders square with black king
        case 'white-bishop': return <div className={className}><img className='imgPiece' alt='WhiteBishop' src={WhiteBishop}></img></div>;  // renders square with white bishop
        case 'white-knight': return <div className={className}><img className='imgPiece' alt='WhiteKnight' src={WhiteKnight}></img></div>;  // renders square with white knight
        case 'white-pawn': return <div className={className}><img className='imgPiece' alt='WhitePawn' src={WhitePawn}></img></div>;        // renders square with white pawn
        case 'white-queen': return <div className={className}><img className='imgPiece' alt='WhiteQueen' src={WhiteQueen}></img></div>;     // renders square with white queen
        case 'white-rook': return <div className={className}><img className='imgPiece' alt='WhiteRook' src={WhiteRook}></img></div>;        // renders square with white rook
        case 'white-king': return <div className={className}><img className='imgPiece' alt='WhiteKing' src={WhiteKing}></img></div>;        // renders square with white bishop
        default: return <div className={className}></div>;                                                                                  // renders square without any piece
    }    
}