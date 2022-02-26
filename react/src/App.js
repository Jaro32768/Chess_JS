import { useState } from 'react'
import Board from './components/Board.js'    // imports Board component
import PromotionPopUp from './components/PromotionPopUp.js';

function App() {
  const [promotedTo, setPromotedTo] = useState(null);
  const [isWhite, setIsWhite] = useState(null);
  const [sender, setSender] = useState(null);

  const handlePopUpClick = (clicked) => {
    setPromotedTo(clicked);
  }

  const showPromotionPopUp = (isWhite, senderSquare) => {
    setIsWhite(isWhite);
    setSender(senderSquare);
  }

  const received = () => {
    setPromotedTo(null);
    setIsWhite(null);
    setSender(null);
  }

  return (
    <div className='App'>
        <div className='board'><Board promotedTo={promotedTo} sender={sender} showPromotionPopUp={showPromotionPopUp} received={received}/></div>                  {/* renders board */}
        {sender === null ? <></> : <PromotionPopUp isWhite={isWhite} handlePopUpClick={handlePopUpClick}/>}
    </div>
  );
}

export default App;