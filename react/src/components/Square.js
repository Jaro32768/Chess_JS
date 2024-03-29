import React, {useState} from 'react';
import BlackBishop from '../images/black-bishop.svg.png';                        // imports image - black bishop
import BlackKnight from '../images/black-knight.svg.png';                        // imports image - black knight
import BlackPawn from '../images/black-pawn.svg.png';                            // imports image - black pawn
import BlackQueen from '../images/black-queen.svg.png';                          // imports image - black queen
import BlackRook from '../images/black-rook.svg.png';                            // imports image - black rook
import BlackKing from '../images/black-king.svg.png';                            // imports image - black king
import WhiteBishop from '../images/white-bishop.svg.png';                        // imports image - white bishop
import WhiteKnight from '../images/white-knight.svg.png';                        // imports image - white knight
import WhitePawn from '../images/white-pawn.svg.png';                            // imports image - white pawn
import WhiteQueen from '../images/white-queen.svg.png';                          // imports image - white queen
import WhiteRook from '../images/white-rook.svg.png';                            // imports image - white rook
import WhiteKing from '../images/white-king.svg.png';                            // imports image - white bishop
import Transparent from '../images/transparent.png';                             // imports transparent image
import { positionToRow, positionToColumn } from '../Functions.js';               // imports converting functions

export default function Square(props) {
    const [className, setClassName] = useState(null);                           // remembers, which class in styles.css should be used
    let image = null;

    if (className === null && props.color)                                      // avoids infinite loop by rerendering component
        if ((positionToRow(props.index) + positionToColumn(props.index)) % 2 === 0) setClassName('lightSquare')   // if row and column are both even or both odd => square is light
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
        default:             { image = Transparent; break; }                    // sets image to empty square
    }

    const handleClick = () => {
        if (props.color === false) props.handlePopUpClick(props.piece);         // if clicked on popup, sends which piece was clicked
        else props.handleClick(positionToRow(props.index), positionToColumn(props.index));                        // passes square's coordinates to Board
    }

    const renderImage = () => {
        return <img className={props.color ? (!props.isSelected ? (props.isPossibleToMoveThere ? 'imgPiece possibleMove' : 'imgPiece') : 'imgPiece selectedSquare') : 'promotionPopUpImg'}      // gives needed classnames to image
                    alt={props.piece} src={image}></img>;                       // renders image
    }

    return <div onClick={handleClick} className={className}>{renderImage()}</div>;                                        // renders square
}