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
    let test = prompt("test", props.getFEN());
  }

  return (
    <div className='navbarItem' onClick={handleClick}>
      {props.type}
    </div>
  )
}
