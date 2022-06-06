import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from './components/Board.js';                    // imports Board component
import PromotionPopUp from './components/PromotionPopUp.js';  // imports PromotionPopUp component
import Navbar from './components/Navbar/Navbar.js';

export default function GamePage(props) {
    const [promotedTo, setPromotedTo] = useState(null);   // stores which piece pawn is being promoted to
    const [isWhite, setIsWhite] = useState(null);         // stores color of promoted piece
    const [sender, setSender] = useState(null);           // stores sender of promotion request
    const [isWhitesPOV, setIsWhitesPOV] = useState(true); // stores player whose POV board should be rendered from 

    const { fen } = useParams();
    const [FEN, setFEN] = useState(fen);

    /* sets which piece pawn is being promoted to */
    const handlePopUpClick = (clicked) => {
        setPromotedTo(clicked);   // sets which piece is pawn promoted to
    }

    /* displays popup */
    const showPromotionPopUp = (isWhite, senderSquare) => {
        setIsWhite(isWhite);      // sets color of pawn that tries to promote
        setSender(senderSquare);  // sets sender
    }

    /* nulls all variables */
    const received = () => { setPromotedTo(null); setIsWhite(null); setSender(null); }    // sets all variables to null

    return (
        <>
            <Navbar fen={FEN} setFen={FEN} />
            <div className='board-container-container'>
                <div className='board-container'>
                    <div className='board'>
                        <Board isWhitesPOV={isWhitesPOV}
                            promotedTo={promotedTo}
                            sender={sender}
                            showPromotionPopUp={showPromotionPopUp}
                            received={received}
                            fen={FEN}
                            setFen={setFEN} />        {/* passes variables and methods to board */}
                    </div>                  {/* renders board */}
                </div>
            </div>
            {sender === null ? <></> : <PromotionPopUp isWhite={isWhite} handlePopUpClick={handlePopUpClick} />}
            {/* if there is any sender renders promotion popup, else empty element is returned - nothing is rendered */}
        </>
    )
}
