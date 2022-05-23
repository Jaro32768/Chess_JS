import React from 'react';

export default function Item(props) {

  const handleClick = () => {
    switch (props.type) {
      case 'FEN':
        handleFENClick();
        break;
    }
  }

  const handleFENClick = () => {
    let fen = prompt("Current FEN of the board, you can change it", props.fen);
    if (!fen?.match(/\s*([rnbqkpRNBQKP1-8]+\/){7}([rnbqkpRNBQKP1-8]+)\s[bw-]\s(([a-hkqA-HKQ]{1,4})|(-))\s(([a-h][36])|(-))\s\d+\s\d+\s*/)) {
      alert("Invalid FEN");
      return;
    }
    props.setFen(fen);

  }

  return (
    <div className='navbar-item' onClick={handleClick}>
      {props.type}
    </div>
  )
}
