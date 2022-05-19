import { useState } from 'react';
import Board from './components/Board.js';                    // imports Board component
import PromotionPopUp from './components/PromotionPopUp.js';  // imports PromotionPopUp component
import Navbar from './components/Navbar/Navbar.js';
import Logo from './components/Logo.js';

function App() {
  const [promotedTo, setPromotedTo] = useState(null);   // stores which piece pawn is being promoted to
  const [isWhite, setIsWhite] = useState(null);         // stores color of promoted piece
  const [sender, setSender] = useState(null);           // stores sender of promotion request
  const [isWhitesPOV, setIsWhitesPOV] = useState(true); // stores player whose POV board should be rendered from 
  const [fen, setFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

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
    <div className='App'>
      <Logo />
      <Navbar fen={fen} setFen={setFen} />
      <div className='board'>
        <Board isWhitesPOV={isWhitesPOV}
          promotedTo={promotedTo}
          sender={sender}
          showPromotionPopUp={showPromotionPopUp}
          received={received}
          fen={fen}
          setFen={setFen} />        {/* passes variables and methods to board */}
      </div>                  {/* renders board */}
      {sender === null ? <></> : <PromotionPopUp isWhite={isWhite} handlePopUpClick={handlePopUpClick} />}
      {/* if there is any sender renders promotion popup, else empty element is returned - nothing is rendered */}
    </div>
  );
}

export default App;