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
    let image = null;

    if (className === null)                                                     // avoids infinite loop by rerendering component
        if ((props.row + props.column) % 2 === 0) setClassName('lightSquare')   // if row and column are both even or both odd => square is light
        else setClassName('darkSquare')                                         // if row is even and column is odd or row is odd and column is even => square is dark
        
    switch(props.piece) {
        case 'black-bishop': { image = BlackBishop; break; }                    // sets image to black bishop
        case 'black-knight': { image = BlackKnight; break; }                    // sets image to black knight
        case 'black-pawn':   { image = BlackPawn;   break; }                    // sets image to black pawn
        case 'black-queen':  { image = BlackQueen;  break; }                    // sets image to black queen
        case 'black-rook':   { image = BlackRook;   break; }                    // sets image to black rook
        case 'black-king':   { image = BlackKing;   break; }                    // sets image to black king
        case 'white-bishop': { image = WhiteBishop; break; }                    // sets image to white bishop
        case 'white-knight': { image = WhiteKnight; break; }                    // sets image to white knight
        case 'white-pawn':   { image = WhitePawn;   break; }                    // sets image to white pawn
        case 'white-queen':  { image = WhiteQueen;  break; }                    // sets image to white queen
        case 'white-rook':   { image = WhiteRook;   break; }                    // sets image to white rook
        case 'white-king':   { image = WhiteKing;   break; }                    // sets image to white king
    }

    const renderImage = () => {
        if (image !== null) return <img className='imgPiece' alt={props.piece} src={image}></img>;  // if there is any image, image is rendered
        return;                                                                                     // if there is not any image, image is not rendered
    }

    return <div className={className}>{renderImage()}</div>;                                        // renders square
}