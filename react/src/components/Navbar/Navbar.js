import React from 'react';
import Item from './Item';
import Logo from '../Logo';

export default function Navbar(props) {
  const items = [
    'FEN',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
    'lorem ipsum',
  ];

  const handleMenuClick = () => {
    document.getElementsByClassName('container')[0].classList.toggle('change');
    document.getElementsByClassName('navbar-items')[0].classList.toggle('hidden');
  }
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <Logo></Logo>
        <div className='text-container'>
          <h1>ChessIT</h1>
          <p>šach len pre šikovníkov</p>
        </div>
      </div>
      <div className='navbar-items hidden'>
        {Array.from({ length: items.length }, (_, index) => <><Item key={index} type={items[index]} fen={props.fen} setFen={props.setFen} /><div className='spacer'></div></>)}
      </div>
      <div className='container' onClick={handleMenuClick}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    </div>
  )
}
